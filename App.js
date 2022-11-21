import { StatusBar } from "expo-status-bar";
import { ActivityIndicator, StyleSheet } from "react-native";
import RootStackScreen from "./naviagtion/RootStack";
import { useFonts } from "expo-font";
import { SafeAreaProvider } from "react-native-safe-area-context";
import RootTab from "./naviagtion/RootTab";
// import Profile1 from "./screens/Profile1";

export default function App() {
  let [fontloaded] = useFonts({
    "Roboto-Bold": require("./assets/fonts/Roboto-Bold.ttf"),
    "Roboto-Regular": require("./assets/fonts/Roboto-Regular.ttf"),
    "Roboto-Black": require("./assets/fonts/Roboto-Black.ttf"),
  });

  if (!fontloaded) {
    return <ActivityIndicator />;
  } else {
    return (
      <SafeAreaProvider>
        <RootStackScreen />
        <StatusBar backgroundColor="white" hidden={true} />
      </SafeAreaProvider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
