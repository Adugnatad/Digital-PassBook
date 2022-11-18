import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import Ionicons from "react-native-vector-icons/Ionicons";
import Octicons from "react-native-vector-icons/Octicons";
import AntDesign from "react-native-vector-icons/AntDesign";
import Fontisto from "react-native-vector-icons/Fontisto";
import Header from "../components/Header";
import { MaterialIcons } from "@expo/vector-icons";
import { ListItem } from "react-native-elements";
import { COLORS, SIZES } from "../constants";

const AccountsDetail = () => {
  //   const [accountInfo, setAccountInfo] = useState(true);
  //   const [Transactions, setTransactions] = useState(false);
  const [balanceVisible, setBalanceVisible] = useState(false);
  const balance = "10200.125";
  //   const AccountInfoClicked = () => {
  //     setAccountInfo(true);
  //     setTransactions(false);
  //   };
  //   const TransactionClicked = () => {
  //     setTransactions(true);
  //     setAccountInfo(false);
  //   };
  //   const QRClicked = () => {};
  const [selectedCategoryIndex, setSelectedCategoryIndex] = React.useState(0);
  const categories = ["Account Info", "Transaction", "djfhksdfh"];
  const [accountInfo, setAccountInfo] = React.useState(false);

  const CategoryList = () => {
    const handleOnPress = (index) => {
      setSelectedCategoryIndex(index);
      console.warn(index);
      if (index === 0) {
        setAccountInfo(true);
      }
      // setVisible(true);
    };
    return (
      <View style={styles.categoryListContainer}>
        {categories.map((item, index) => (
          <TouchableOpacity
            key={index}
            activeOpacity={0.8}
            onPress={() => handleOnPress(index)}
          >
            <View>
              <Text
                style={{
                  ...styles.categoryListText,
                  color:
                    selectedCategoryIndex == index
                      ? COLORS.primary
                      : COLORS.grey,
                }}
              >
                {item}
              </Text>
              {selectedCategoryIndex == index && (
                <View
                  style={{
                    height: 3,
                    width: 30,
                    backgroundColor: COLORS.primary,
                    marginTop: 2,
                  }}
                />
              )}
            </View>
          </TouchableOpacity>
        ))}
      </View>
    );
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Header />
      <View style={styles.card}>
        <View style={styles.branchDetails}>
          <Text style={{ marginBottom: 20, fontWeight: "900", fontSize: 20 }}>
            CBo
          </Text>
        </View>
        <View>
          <Text style={{ margin: 10 }}>ADUGNA TADESSE DURESSA</Text>
          <Text style={{ margin: 10 }}>101212200022</Text>
          <View
            style={{ margin: 10, flexDirection: "row", alignItems: "center" }}
          >
            <View style={{ marginRight: 10, padding: 5 }}>
              <Text style={{ fontWeight: "bold" }}>BALANCE</Text>
              {balanceVisible ? (
                <Text
                  style={{
                    color: "green",
                    fontSize: 16,
                    fontWeight: "900",
                  }}
                >
                  {balance}
                </Text>
              ) : (
                <Text>{[...balance].map((c) => "*")}</Text>
              )}
            </View>

            <Ionicons
              name={balanceVisible ? "eye-off" : "eye"}
              size={30}
              color="#00ADEF"
              onPress={() => setBalanceVisible(!balanceVisible)}
            />
          </View>
        </View>
      </View>

      <CategoryList />

      {accountInfo && (
        <View
          style={{
            marginBottom: SIZES.padding,
          }}
        >
          <TouchableOpacity onPress={() => navigation.navigate("ATMRequest")}>
            <ListItem
              style={{ backgroundColor: COLORS.lightpurple }}
              // bottomDivider
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
              // bottomDivider
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
        </View>
      )}

      {/* <View style={styles.tabs}>
        <TouchableOpacity>
          <Octicons name="home" size={35} />
        </TouchableOpacity>
        <TouchableOpacity>
          <AntDesign name="infocirlceo" size={35} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Fontisto name="arrow-swap" size={35} />
        </TouchableOpacity>
      </View> */}
      {/* <View>
        <TouchableOpacity>
          <ListItem bottomDivider>
            <MaterialIcons
              name="verified-user"
              size={28}
              color={COLORS.primary}
              style={{ marginTop: 12 }}
            />
            <ListItem.Content>
              <ListItem.Title style={{ marginTop: 12 }}>
                Request ATM Card
              </ListItem.Title>
            </ListItem.Content>
            <ListItem.Chevron />
          </ListItem>
        </TouchableOpacity>
        <TouchableOpacity>
          <ListItem bottomDivider>
            <MaterialIcons
              name="verified-user"
              size={28}
              color={COLORS.primary}
              style={{ marginTop: 12 }}
            />
            <ListItem.Content>
              <ListItem.Title style={{ marginTop: 12 }}>
                Request ATM Card
              </ListItem.Title>
            </ListItem.Content>
            <ListItem.Chevron />
          </ListItem>
        </TouchableOpacity>
        <TouchableOpacity>
          <ListItem bottomDivider>
            <MaterialIcons
              name="verified-user"
              size={28}
              color={COLORS.primary}
              style={{ marginTop: 12 }}
            />
            <ListItem.Content>
              <ListItem.Title style={{ marginTop: 12 }}>
                Request ATM Card
              </ListItem.Title>
            </ListItem.Content>
            <ListItem.Chevron />
          </ListItem>
        </TouchableOpacity>
      </View> */}

      {/* <View style={styles.tabs}>
        <TouchableOpacity onPress={QRClicked}>
          <Image source={HomeIcon} />
        </TouchableOpacity>
        <TouchableOpacity onPress={AccountInfoClicked}>
          <Image source={UserIcon} />
        </TouchableOpacity>
        <TouchableOpacity onPress={TransactionClicked}>
          <Image source={TransactionIcon} />
        </TouchableOpacity>
      </View> */}
      {/* {accountInfo && (
        <View style={styles.accountInfo}>
          <View style={styles.photo}>
            <Image source={person} style={{}} />
          </View>
          <View style={styles.tabContent}>
            <View style={styles.tabcontents}>
              <Text style={{ color: "#bbb", marginBottom: 7 }}>Phone No</Text>
              <Text>+2519736482</Text>
            </View>
            <View style={styles.tabcontents}>
              <Text style={{ color: "#bbb", marginBottom: 7 }}>Email</Text>
              <Text>example@gmail.com</Text>
            </View>
            <View style={styles.tabcontents}>
              <Text style={{ color: "#bbb", marginBottom: 7 }}>
                Customer Address
              </Text>
              <Text>Ethiopia</Text>
            </View>
            <View style={styles.tabcontents}>
              <Text style={{ color: "#bbb", marginBottom: 7 }}>
                Account Opening Date
              </Text>
              <Text>06-12-1996</Text>
            </View>
            <View style={styles.tabcontents}>
              <Text style={{ color: "#bbb", marginBottom: 7 }}>
                Account Type
              </Text>
              <Text>Savings</Text>
            </View>
          </View>
        </View>
      )} */}
      {/* {Transactions && (
        <View style={styles.transactionsList}>
          <View style={styles.transactions}>
            <View style={styles.transactionDetails}>
              <MaterialIcons
                name="arrow-top-right-thin"
                size={30}
                color="red"
              />
              <View style={{ marginLeft: 5 }}>
                <Text>UPI Ref no. 21618165584 - Bank</Text>
                <Text>10/06/2022</Text>
              </View>
            </View>

            <View>
              <Text>60.00</Text>
              <Text style={{ color: "red" }}>Dr</Text>
            </View>
          </View>
          <View style={styles.transactions}>
            <View style={styles.transactionDetails}>
              <MaterialIcons
                name="arrow-bottom-right-thin"
                size={30}
                color="green"
              />
              <View style={{ marginLeft: 5 }}>
                <Text>UPI Ref no. 21618165584 - Bank</Text>
                <Text>10/06/2022</Text>
              </View>
            </View>

            <View>
              <Text>60.00</Text>
              <Text style={{ color: "green" }}>Cr</Text>
            </View>
          </View>
          <View style={styles.transactions}>
            <View style={styles.transactionDetails}>
              <MaterialIcons
                name="arrow-bottom-right-thin"
                size={30}
                color="green"
              />
              <View style={{ marginLeft: 5 }}>
                <Text>UPI Ref no. 21618165584 - Bank</Text>
                <Text>10/06/2022</Text>
              </View>
            </View>

            <View>
              <Text>60.00</Text>
              <Text style={{ color: "green" }}>Cr</Text>
            </View>
          </View>
        </View>
      )} */}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    // alignItems: "center",
    // justifyContent: "center",
  },
  card: {
    flexDirection: "row",
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 15,
    margin: 15,
    // marginTop: "30%",
  },
  branchDetails: {
    justifyContent: "center",
    paddingHorizontal: 40,
    paddingVertical: 20,
    borderRightWidth: 2,
    borderLeftWidth: 10,
    borderLeftColor: "#00ADEF",
    borderRightColor: "#ddd",
    borderTopLeftRadius: 15,
    borderBottomLeftRadius: 15,
    // backgroundColor: "yellow",
  },
  categoryListContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 20,
    marginTop: 30,
  },
  categoryListText: {
    fontSize: 17,
    fontWeight: "bold",
  },
});

export default AccountsDetail;
