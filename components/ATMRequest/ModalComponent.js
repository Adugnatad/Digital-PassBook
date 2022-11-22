import React from "react";
import {
  View,
  Modal,
  Animated,
  TouchableOpacity,
  Image,
  Text,
} from "react-native";
import styles from "./styles";

const ModalComponent = ({ navigation, visible }) => {
  const ModalPoup = ({ visible, children }) => {
    const [showModal, setShowModal] = React.useState(false);
    const scaleValue = React.useRef(new Animated.Value(0)).current;
    React.useEffect(() => {
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
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <ModalPoup visible={visible}>
        <View style={{ alignItems: "center" }}>
          <View style={styles.header}>
            <TouchableOpacity
              onPress={() => {
                // setVisible(false);
                navigation.goBack();
              }}
            >
              <Image
                source={require("../../assets/icons/close.png")}
                style={{ height: 30, width: 30 }}
              />
            </TouchableOpacity>
          </View>
        </View>
        <View style={{ alignItems: "center" }}>
          <Image
            source={require("../../assets/icons/success.png")}
            style={{ height: 150, width: 150, marginVertical: 10 }}
          />
        </View>

        <Text style={{ marginVertical: 30, fontSize: 20, textAlign: "center" }}>
          Congratulations we have sent you sms!
        </Text>
      </ModalPoup>
    </View>
  );
};

export default ModalComponent;
