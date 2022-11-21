import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { COLORS } from "../constants";
import HomeInfo from "../components/HomeInfo/HomeInfo";
import AccountInfo from "../components/AccountInfo";
import TransactionInfo from "../components/TransactionInfo";
import Header from "../components/Header";

const AccountsDetail = ({ navigation }) => {
  const [selectedCategoryIndex, setSelectedCategoryIndex] = React.useState(0);
  const categories = ["Home", "Account Info", "Transaction"];
  const [data, setData] = React.useState({
    home: true,
    transaction: false,
    account: false,
  });

  const CategoryList = () => {
    const handleOnPress = (index) => {
      setSelectedCategoryIndex(index);
      if (index === 0) {
        setData({ ...data, home: true, transaction: false, account: false });
      } else if (index === 1) {
        setData({ ...data, account: true, home: false, transaction: false });
      } else {
        setData({
          ...data,
          transaction: true,
          home: false,
          account: false,
        });
      }
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
      <Header navigation={navigation} />
      <View style={{ marginTop: 10 }}>
        <CategoryList />
      </View>
      {data.home && <HomeInfo navigation={navigation} />}
      {data.account && <AccountInfo navigation={navigation} />}
      {data.transaction && <TransactionInfo navigation={navigation} />}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
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
