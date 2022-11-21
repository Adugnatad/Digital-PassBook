import { View, Text } from "react-native";
import Feather from "react-native-vector-icons/Feather";
import styles from "./styles";
import { COLORS } from "../../constants";
import { Divider } from "react-native-elements";

const Item = ({ data }) => {
  return (
    <View
      style={{
        paddingBottom: 8,
      }}
    >
      <View style={styles.transactions}>
        <View style={styles.transactionDetails}>
          <Feather
            name={
              data.transactiontype === "Cr"
                ? "arrow-up-right"
                : "arrow-down-left"
            }
            size={30}
            color={data.transactiontype === "Cr" ? COLORS.primary : "red"}
          />
          <View style={{ marginLeft: 5 }}>
            <Text>
              {data.transactionId} - {data.transactionway}
            </Text>
            <Text style={{ color: COLORS.darkgray, marginTop: 3 }}>
              {data.transactiondate}
            </Text>
          </View>
        </View>
        <View style={{ flexDirection: "column", alignItems: "center" }}>
          <Text>{data.amount}</Text>
          <Text
            style={{
              color: data.transactiontype === "Cr" ? COLORS.primary : "red",
            }}
          >
            {data.transactiontype}
          </Text>
        </View>
      </View>
      <Divider />
    </View>
  );
};

export default Item;
