import {
  View,
  TouchableOpacity,
  Image,
  SafeAreaView,
  Animated,
  Modal,
} from "react-native";
import { AntDesign, MaterialCommunityIcons } from "@expo/vector-icons";
import { ListItem } from "react-native-elements";
import { COLORS, SIZES } from "../../constants";
import { useState, useRef, useEffect } from "react";
import DateTimePickers from "../DateTimePickers";
import * as Animatable from "react-native-animatable";
import styles from "./styles";
import { Divider } from "react-native-elements";

{
  /* <Divider style={{ backgroundColor: "blue" }} />; */
}

const HomeInfo = ({ navigation }) => {
  const [visible, setVisible] = useState(false);

  const ModalPoup = ({ visible, children }) => {
    const [showModal, setShowModal] = useState(false);
    const scaleValue = useRef(new Animated.Value(0)).current;
    useEffect(() => {
      toggleModal();
    }, [visible]);
    const toggleModal = () => {
      if (visible) {
        setShowModal(true);
        Animated.spring(scaleValue, {
          toValue: 1,
          duration: 300,
          useNativeDriver: true,
        }).start();
      } else {
        setTimeout(() => setShowModal(false), 200);
        Animated.timing(scaleValue, {
          toValue: 0,
          duration: 300,
          useNativeDriver: true,
        }).start();
      }
    };
    return (
      <Modal transparent visible={showModal}>
        <View style={styles.modalBackGround}>
          <Animated.View
            style={[
              styles.modalContainer,
              { transform: [{ scale: scaleValue }] },
            ]}
          >
            {children}
          </Animated.View>
        </View>
      </Modal>
    );
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
      <View
        style={{
          marginBottom: SIZES.padding,
          marginTop: SIZES.padding,
        }}
      >
        <TouchableOpacity onPress={() => navigation.navigate("ATMRequest")}>
          <ListItem>
            <AntDesign name="creditcard" size={28} color={COLORS.primary} />
            <ListItem.Content>
              <ListItem.Title>Request ATM Card</ListItem.Title>
            </ListItem.Content>
            <ListItem.Chevron />
          </ListItem>
        </TouchableOpacity>
        <Divider style={{ backgroundColor: "#C3C6C7", height: 0.6 }} />
        <TouchableOpacity onPress={() => setVisible(true)}>
          <ListItem>
            <MaterialCommunityIcons
              name="card-account-details-outline"
              size={28}
              color={COLORS.primary}
            />
            <ListItem.Content>
              <ListItem.Title>Request Account Statement</ListItem.Title>
            </ListItem.Content>
            <ListItem.Chevron />
          </ListItem>
        </TouchableOpacity>
        <Divider style={{ backgroundColor: "#C3C6C7", height: 0.7 }} />
        <TouchableOpacity onPress={() => navigation.navigate("Cardless")}>
          <ListItem>
            <MaterialCommunityIcons
              name="cash-multiple"
              size={28}
              color={COLORS.primary}
            />
            <ListItem.Content>
              <ListItem.Title>Cardless Cash</ListItem.Title>
            </ListItem.Content>
            <ListItem.Chevron />
          </ListItem>
        </TouchableOpacity>
      </View>
      <Animatable.View animation="fadeInUpBig">
        <ModalPoup visible={visible}>
          <View style={{ alignItems: "center" }}>
            <View style={styles.header}>
              <TouchableOpacity
                onPress={() => {
                  setVisible(false);
                }}
              >
                <Image
                  source={require("../../assets/icons/close.png")}
                  style={{ height: 30, width: 30 }}
                />
              </TouchableOpacity>
            </View>
          </View>
          <View style={{ alignItems: "center" }}></View>
          <DateTimePickers navigation={navigation} setVisible={setVisible} />
        </ModalPoup>
      </Animatable.View>
      {/* </Portal>
      </Provider> */}
    </SafeAreaView>
  );
};

export default HomeInfo;
