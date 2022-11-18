import { MaterialIcons } from "@expo/vector-icons";
import React from "react";
import { Animated, ImageBackground, Modal, StyleSheet } from "react-native";
import {
  SafeAreaView,
  View,
  Text,
  Image,
  FlatList,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import { COLORS, SIZES, FONTS, icons, images } from "../constants";
import { Avatar, ListItem } from "react-native-elements";
import { Portal, Provider } from "react-native-paper";
import QRCode from "react-native-qrcode-svg";
import DropdownComponent from "../components/DropdownComponent";
import { LinearGradient } from "expo-linear-gradient";
import DateTimePickers from "../components/DateTimePickers";
import * as Animatable from "react-native-animatable";

const MyAccount = ({ navigation }) => {
  const featuresData = [];

  const specialPromoData = [];
  const [visible, setVisible] = React.useState(false);
  const [features, setFeatures] = React.useState(featuresData);
  // const showModal = () => setVisble(true);
  // const hideModal = () => setVisble(false);
  const [specialPromos, setSpecialPromos] = React.useState(specialPromoData);

  function renderHeader() {
    return (
      <TouchableOpacity
        style={{
          flexDirection: "row",
          alignItems: "center",
          marginTop: SIZES.padding * 5,
          marginBottom: SIZES.padding * 2,
        }}
        onPress={() => navigation.navigate("Home")}
      >
        <Image
          source={icons.back}
          resizeMode="contain"
          style={{
            width: 20,
            height: 20,
            tintColor: COLORS.primary,
          }}
        />

        <Text
          style={{
            marginLeft: SIZES.padding * 1.5,
            color: COLORS.primary,
            ...FONTS.h4,
          }}
        >
          Account Settings
        </Text>
      </TouchableOpacity>
    );
  }

  function renderBanner() {
    return (
      <View
        style={{
          height: 160,
          borderRadius: 20,
        }}
      >
        <ImageBackground
          source={images.cardBackground}
          resizeMode="cover"
          imageStyle={{
            borderRadius: 20,
          }}
          style={{
            width: "100%",
            height: "100%",
            borderRadius: 20,
            position: "relative",
            backgroundColor: COLORS.primary,
            // top: 2,
            // left: 2,
          }}
        >
          <View
            style={{
              flex: 1,
              padding: 10,
              marginVertical: 5,
              marginLeft: 10,
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
              // position: "relative",
              borderRadius: 20,
              // bottom: 0,
              // left: 0,
            }}
          >
            <Avatar
              source={{
                uri: "https://media.istockphoto.com/vectors/user-icon-flat-isolated-on-white-background-user-symbol-vector-vector-id1300845620?b=1&k=20&m=1300845620&s=170667a&w=0&h=JbOeyFgAc6-3jmptv6mzXpGcAd_8xqkQa_oUK2viFr8=",
              }}
              title="G.E"
              rounded={true}
              onPress={() => console.log("update profile")}
              size="large"
              activeOpacity={0.7}
            >
              <TouchableOpacity>
                <Avatar.Accessory icon size={28} />
              </TouchableOpacity>
            </Avatar>
            <View>
              <Text
                style={{
                  ...FONTS.h3,
                  color: COLORS.white,
                  paddingLeft: 10,
                  marginTop: 4,
                  paddingTop: 4,
                }}
              >
                Admin
              </Text>
              {/* <TouchableOpacity onPress={showModal}>
                <Text
                  style={{
                    ...FONTS.body4,
                    color: COLORS.white,
                    marginVertical: 2,
                    paddingLeft: 10,
                    textAlign: "center",
                  }}
                >
                  Scan My Account
                </Text>
              </TouchableOpacity> */}
            </View>
          </View>
        </ImageBackground>
      </View>
    );
  }

  function renderFeatures() {
    const Header = () => (
      <View style={{ marginBottom: SIZES.padding * 2 }}>
        {/* <Text style={{ ...FONTS.h3 }}>Features</Text> */}
      </View>
    );

    const renderItem = ({ item }) => (
      <TouchableOpacity
        style={{
          marginBottom: SIZES.padding * 2,
          width: 60,
          alignItems: "center",
        }}
        onPress={() => console.log(item.description)}
      >
        <View
          style={{
            height: 50,
            width: 50,
            marginBottom: 5,
            borderRadius: 20,
            backgroundColor: item.backgroundColor,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Image
            source={item.icon}
            resizeMode="contain"
            style={{
              height: 20,
              width: 20,
              tintColor: item.color,
            }}
          />
        </View>
        <Text style={{ textAlign: "center", flexWrap: "wrap", ...FONTS.body4 }}>
          {item.description}
        </Text>
      </TouchableOpacity>
    );

    return (
      <FlatList
        ListHeaderComponent={Header}
        data={features}
        numColumns={4}
        columnWrapperStyle={{ justifyContent: "space-between" }}
        keyExtractor={(item) => `${item.id}`}
        renderItem={renderItem}
        style={{ marginTop: SIZES.padding }}
      />
    );
  }

  function renderPromos() {
    const HeaderComponent = () => (
      <View>
        {renderHeader()}
        {renderBanner()}

        {renderFeatures()}
        {renderPromoHeader()}
      </View>
    );

    const renderPromoHeader = () => (
      <View
        style={{
          marginBottom: SIZES.padding,
        }}
      >
        <TouchableOpacity onPress={() => navigation.navigate("ATMRequest")}>
          <ListItem
            style={{ backgroundColor: COLORS.lightpurple }}
            bottomDivider
          >
            <MaterialIcons
              name="verified-user"
              size={28}
              style={{ color: COLORS.primary }}
            />
            <ListItem.Content>
              <ListItem.Title>Request ATM Card</ListItem.Title>
            </ListItem.Content>
            <ListItem.Chevron />
          </ListItem>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => setVisible(true)}>
          <ListItem
            style={{ backgroundColor: COLORS.lightGreen }}
            bottomDivider
          >
            <MaterialIcons
              name="account-balance"
              size={28}
              style={{ color: COLORS.primary }}
            />
            <ListItem.Content>
              <ListItem.Title>Request Account Statement</ListItem.Title>
            </ListItem.Content>
            <ListItem.Chevron />
          </ListItem>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate("CardlessVerification")}
          style={{ backgroundColor: COLORS.lightGreen }}
        >
          <ListItem bottomDivider>
            <MaterialIcons
              name="language"
              size={28}
              style={{ color: COLORS.primary }}
            />
            <ListItem.Content>
              <ListItem.Title>Cardless Cash</ListItem.Title>
            </ListItem.Content>
            <ListItem.Chevron />
          </ListItem>
        </TouchableOpacity>
        {/* <TouchableOpacity onPress={() => console.log("Support")} style={{ backgroundColor: COLORS.lightGreen }}>
          <ListItem bottomDivider>
            <MaterialIcons name="contact-support" size={28} style={{ color: COLORS.primary }} />
            <ListItem.Content>
              <ListItem.Title>Support</ListItem.Title>
            </ListItem.Content>
            <ListItem.Chevron />
          </ListItem>
        </TouchableOpacity> */}
        <TouchableOpacity
          onPress={() => console.log("About")}
          style={{ backgroundColor: COLORS.lightyellow }}
        >
          <ListItem bottomDivider>
            <MaterialIcons
              name="feedback"
              size={28}
              style={{ color: COLORS.primary }}
            />
            <ListItem.Content>
              <ListItem.Title>About</ListItem.Title>
            </ListItem.Content>
            <ListItem.Chevron />
          </ListItem>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleLogout()}>
          <ListItem style={{ backgroundColor: COLORS.lightRed }} bottomDivider>
            <MaterialIcons
              name="logout"
              size={28}
              style={{ color: COLORS.red }}
            />
            <ListItem.Content>
              <ListItem.Title>Logout</ListItem.Title>
            </ListItem.Content>
            <ListItem.Chevron />
          </ListItem>
        </TouchableOpacity>
      </View>
    );

    const renderItem = ({ item }) => (
      <TouchableOpacity
        style={{
          marginVertical: SIZES.base,
          flexDirection: "row",
          flex: 1,
          borderRadius: 20,
          alignItems: "center",
        }}
        onPress={() => console.log(item.title)}
      >
        <View
          style={{
            height: 40,
            borderRadius: 20,
            backgroundColor: COLORS.transparent,
          }}
        >
          <MaterialIcons
            name={item.type == "RECIVED" ? "call-received" : "call-made"}
            size={26}
            style={{
              width: "100%",
              height: "100%",
              borderRadius: 20,
              alignSelf: "center",
              color: item.type == "RECIVED" ? COLORS.primary : COLORS.red,
            }}
          />
        </View>

        <View
          style={{
            padding: SIZES.padding,
            backgroundColor: COLORS.lightGray,
            borderBottomLeftRadius: 20,
            borderBottomRightRadius: 20,
            flex: 1,
          }}
        >
          <Text style={{ ...FONTS.h4, flex: 1 }}>{item.title}</Text>
          <Text style={{ ...FONTS.body4 }}>{item.description}</Text>
        </View>
        <View style={{ ...FONTS.body4, padding: 10 }}>
          <Text style={{ ...FONTS.body4 }}>
            <Text
              style={{
                ...FONTS.h3,
                color: item.type == "RECIVED" ? COLORS.primary : COLORS.red,
              }}
            >
              {item.type == "RECIVED" ? "+" : "-"}
            </Text>{" "}
            {item.amount} ETB
          </Text>
          <Text style={{ ...FONTS.body5, color: COLORS.gray }}>
            {item.date}
          </Text>
        </View>
      </TouchableOpacity>
    );

    return (
      <FlatList
        ListHeaderComponent={HeaderComponent}
        contentContainerStyle={{ paddingHorizontal: SIZES.padding * 3 }}
        data={specialPromos}
        keyExtractor={(item) => `${item.id}`}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
        ListFooterComponent={<View style={{ marginBottom: 80 }}></View>}
      />
    );
  }

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
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
      <Provider>
        <Portal>
          <Animatable.View animation="fadeInUpBig">
            <ModalPoup visible={visible}>
              <View style={{ alignItems: "center" }}>
                <View style={styles.header}>
                  <TouchableOpacity
                    onPress={() => {
                      setVisible(false);
                      navigation.navigate("MyAccount");
                    }}
                  >
                    <Image
                      source={require("../assets/icons/close.png")}
                      style={{ height: 30, width: 30 }}
                    />
                  </TouchableOpacity>
                </View>
              </View>
              <View style={{ alignItems: "center" }}></View>
              <DateTimePickers navigation={navigation} />
            </ModalPoup>
          </Animatable.View>
        </Portal>
        {renderPromos()}
      </Provider>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  modalBackGround: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalContainer: {
    width: "80%",
    height: "50%",
    backgroundColor: "white",
    paddingHorizontal: 20,
    paddingVertical: 30,
    borderRadius: 20,
    elevation: 20,
  },
  header: {
    width: "100%",
    height: 40,
    alignItems: "flex-end",
    justifyContent: "center",
  },
  button: {
    alignItems: "center",
    marginTop: 50,
  },
  signIn: {
    width: "100%",
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
  textSign: {
    fontSize: 18,
    fontWeight: "bold",
  },

  // modal
  modalBackGround: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalContainer: {
    width: "100%",
    height: "80%",
    backgroundColor: "white",
    paddingHorizontal: 20,
    paddingVertical: 30,
    borderRadius: 20,
    elevation: 20,
    position: "absolute",
    bottom: 0,
  },
  header: {
    width: "100%",
    height: 40,
    alignItems: "flex-end",
    justifyContent: "center",
  },
});

export default MyAccount;
