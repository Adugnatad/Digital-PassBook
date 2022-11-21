import React, {
  createRef,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import {
  View,
  Text,
  StatusBar,
  ScrollView,
  TouchableOpacity,
  FlatList,
  Image,
  Dimensions,
  Animated,
  StyleSheet,
} from "react-native";
import coopLogo from "../assets/icons/white_logo.png";
import Ionicons from "react-native-vector-icons/Ionicons";
import { COLORS } from "../constants";

let CurrentSlide = 0;
let IntervalTime = 4000;
let _timerId = 0;

const Home = ({ navigation }) => {
  useEffect(() => {
    _stopAutoPlay();
    _startAutoPlay();
    return () => {
      _stopAutoPlay();
    };
  }, []);

  const [balanceVisible, setBalanceVisible] = useState(false);
  const balance = "10200.125";

  const flatList = createRef();

  useEffect(() => {
    _stopAutoPlay();
    _startAutoPlay();
  }, [balanceVisible]);

  const [product, setProduct] = useState({
    id: 1,
    category: "product",
    productName: "MI Super Bass Bluetooth Wireless Headphones",
    productPrice: 1799,
    description:
      "Up to 20 hours battery life | Super powerful Bass | 40mm dynamic driver | Pressure less ear muffs | Bluetooth 5.0 | Voice control",
    isOff: true,
    offPercentage: 10,
    productImage: require("../assets/icons/Mi1.png"),
    isAvailable: true,
    productImageList: [
      require("../assets/icons/Mi1.png"),
      require("../assets/icons/Mi2.png"),
      require("../assets/icons/Mi3.png"),
    ],
  });

  const handlePress = () => {
    setBalanceVisible(!balanceVisible);
  };

  const _goToNextPage = () => {
    if (CurrentSlide >= product.productImageList.length - 1) {
      CurrentSlide = 0;
      flatList?.current?.scrollToIndex({
        index: CurrentSlide,
        animated: true,
      });
    } else {
      flatList?.current?.scrollToIndex({
        index: ++CurrentSlide,
        animated: true,
      });
    }
  };
  const _startAutoPlay = () => {
    _timerId = setInterval(_goToNextPage, IntervalTime);
  };
  const _stopAutoPlay = () => {
    if (_timerId) {
      clearInterval(_timerId);
      _timerId = null;
    }
  };

  const _keyExtractor = (item, index) => {
    return index.toString();
  };

  const width = Dimensions.get("window").width;

  const scrollX = new Animated.Value(0);

  let position = Animated.divide(scrollX, width);

  const renderProduct = ({ item, index }) => {
    return (
      <View
        style={{
          width: width,
          height: 240,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Image
          source={item}
          style={{
            width: "100%",
            height: "100%",
            resizeMode: "contain",
          }}
        />
      </View>
    );
  };

  return (
    <View
      style={{
        width: "100%",
        height: "100%",
        backgroundColor: COLORS.white,
        position: "relative",
      }}
    >
      <StatusBar
        backgroundColor={COLORS.backgroundLight}
        barStyle="dark-content"
      />
      <ScrollView>
        <View
          style={{
            width: "100%",
            backgroundColor: COLORS.backgroundLight,
            borderBottomRightRadius: 20,
            borderBottomLeftRadius: 20,
            position: "relative",
            justifyContent: "center",
            alignItems: "center",
            marginBottom: 4,
          }}
        >
          <FlatList
            data={product.productImageList ? product.productImageList : null}
            horizontal
            renderItem={renderProduct}
            showsHorizontalScrollIndicator={false}
            decelerationRate={0.8}
            snapToInterval={width}
            bounces={false}
            onScroll={Animated.event(
              [{ nativeEvent: { contentOffset: { x: scrollX } } }],
              { useNativeDriver: false }
            )}
            keyExtractor={_keyExtractor}
            flatListRef={createRef()}
            ref={flatList}
          />
          <View
            style={{
              width: "100%",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              marginBottom: 16,
              marginTop: 32,
            }}
          >
            {product.productImageList
              ? product.productImageList.map((data, index) => {
                  let opacity = position.interpolate({
                    inputRange: [index - 1, index, index + 1],
                    outputRange: [0.2, 1, 0.2],
                    extrapolate: "clamp",
                  });
                  return (
                    <Animated.View
                      key={index}
                      style={{
                        width: "16%",
                        height: 2.4,
                        backgroundColor: COLORS.black,
                        opacity,
                        marginHorizontal: 4,
                        borderRadius: 100,
                      }}
                    ></Animated.View>
                  );
                })
              : null}
          </View>
        </View>
        <View
          style={{
            paddingHorizontal: 16,
            marginTop: 6,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginVertical: 14,
            }}
          >
            <Text
              style={{
                fontSize: 20,
                color: COLORS.black,
              }}
            >
              Your Account
            </Text>
          </View>
        </View>
        <TouchableOpacity
          style={styles.cardClick}
          onPress={() => navigation.navigate("Account")}
        >
          <View style={styles.card}>
            <View style={{ flex: 1 }}>
              <View style={styles.details}>
                <Image
                  source={coopLogo}
                  style={{
                    width: 70,
                    height: 40,
                    left: 0,
                    bottom: 4,
                  }}
                />
                <Text
                  style={{
                    color: COLORS.white,
                    fontSize: 16,
                    left: 20,
                  }}
                >
                  {" "}
                  Bank Details
                </Text>
              </View>
              <View style={{ flexDirection: "row", top: 15 }}>
                <View style={{ color: COLORS.white, fontSize: 16 }}>
                  <Text
                    style={{
                      color: COLORS.white,
                      marginLeft: 20,
                      fontSize: 15,
                    }}
                  >
                    BALANCE
                  </Text>
                  <View style={{ flexDirection: "row" }}>
                    {balanceVisible ? (
                      <Text style={styles.visible}>{balance}</Text>
                    ) : (
                      <Text style={styles.visible}>
                        {[...balance].map((c) => "*")}
                      </Text>
                    )}
                    <Ionicons
                      name={balanceVisible ? "eye-off" : "eye"}
                      size={28}
                      color={COLORS.white}
                      onPress={handlePress}
                      style={{
                        alignItems: "center",
                        justifyContent: "center",
                        bottom: 12,
                      }}
                    />
                  </View>
                </View>
                <View style={{ marginLeft: 40 }}>
                  <Text
                    style={{
                      color: COLORS.white,
                      fontSize: 15,
                    }}
                  >
                    Account Number
                  </Text>
                  <Text
                    style={{
                      color: COLORS.white,
                      fontSize: 15,
                      fontweight: "bold",
                    }}
                  >
                    123445677708908
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    flex: 1,
    justifyContent: "space-around",
    backgroundColor: "#00adef",
    padding: 20,
    margin: 10,
    marginVertical: 10,
    width: "90%",

    borderRadius: 15,
  },
  details: {
    flex: 1,
    flexDirection: "row",
    bottom: 10,
  },
  visible: {
    color: COLORS.white,
    fontSize: 15,
    fontweight: "bold",
    marginLeft: 23,
    marginRight: 10,
  },
});

export default Home;
