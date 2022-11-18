import ATMRequest from "../components/ATMRequest";
import { View } from "react-native";

const ATMRequestScreen = ({ navigation }) => {
  return (
    <View>
      <ATMRequest navigation={navigation} />
    </View>
  );
};

export default ATMRequestScreen;
