import { View, Image, ScrollView } from "react-native";
import styles from "./styles";
import {
  Avatar,
  Title,
  Caption,
  Text,
  TouchableRipple,
} from "react-native-paper";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { AntDesign, MaterialCommunityIcons } from "@expo/vector-icons";
import { COLORS } from "../../constants";
import { Divider, ListItem } from "react-native-elements";
import { ListItemContent } from "@rneui/base/dist/ListItem/ListItem.Content";

const AccountInfo = ({ navigation }) => {
  return (
    <View style={styles.userInfoSection}>
      <ListItem style={{ flex: 1, width: "100%" }}>
        <ListItemContent>
          <View style={{ flexDirection: "row", marginTop: 15 }}>
            <Avatar.Image
              source={{
                uri: "https://th.bing.com/th/id/R.c2a1f7ca921bb44d5f6457a6832e2f45?rik=MAdPf7e%2baqy9GA&riu=http%3a%2f%2ffintechprofile.com%2fwp-content%2fuploads%2f2015%2f10%2fMichael-Fotis_Smart-Money-People.jpg&ehk=wDF5rqsAX%2fK7%2f6MdoPcejQPK1bY2ufCZkpuTYHjrlww%3d&risl=&pid=ImgRaw&r=0",
              }}
              size={80}
            />
            <View style={{ marginLeft: 20 }}>
              <Title
                style={[
                  styles.title,
                  {
                    marginTop: 15,
                    marginBottom: 5,
                  },
                ]}
              >
                John Doe
              </Title>
              <Caption style={styles.caption}>+25192222222</Caption>
            </View>
          </View>

          <ScrollView style={styles.menuWrapper}>
            <TouchableRipple onPress={() => {}}>
              <View style={styles.menuItem}>
                <Icon
                  name="account-box-multiple-outline"
                  color={COLORS.primary}
                  size={25}
                />
                <View style={{ flexDirection: "column" }}>
                  <Text style={styles.menuItemText}>Account Type</Text>
                  <Text style={styles.text}>Saving</Text>
                </View>
              </View>
            </TouchableRipple>
            <Divider />
            <TouchableRipple onPress={() => {}}>
              <View style={styles.menuItem}>
                <Icon
                  name="calendar-clock-outline"
                  color={COLORS.primary}
                  size={25}
                />
                <View style={{ flexDirection: "column" }}>
                  <Text style={styles.menuItemText}>Opening Date</Text>
                  <Text style={styles.text}>Nov 24, 2022</Text>
                </View>
              </View>
            </TouchableRipple>
            <Divider />
            <TouchableRipple onPress={() => {}}>
              <View style={styles.menuItem}>
                <Icon
                  name="map-marker-radius-outline"
                  color={COLORS.primary}
                  size={25}
                />
                <View style={{ flexDirection: "column" }}>
                  <Text style={styles.menuItemText}>Address</Text>
                  <Text style={styles.text}>Addis Ababa</Text>
                </View>
              </View>
            </TouchableRipple>
            <Divider />
            <TouchableRipple onPress={() => {}}>
              <View style={styles.menuItem}>
                <Icon name="email-outline" color={COLORS.primary} size={25} />
                <View style={{ flexDirection: "column" }}>
                  <Text style={styles.menuItemText}>Email</Text>
                  <Text style={styles.text}>john@doe.com</Text>
                </View>
              </View>
            </TouchableRipple>
            <Divider />
            <TouchableRipple onPress={() => {}}>
              <View style={styles.menuItem}>
                <MaterialCommunityIcons
                  name="package-variant"
                  color={COLORS.primary}
                  size={25}
                />
                <View style={{ flexDirection: "column" }}>
                  <Text style={styles.menuItemText}>Product</Text>
                  <Text style={styles.text}>Gammee</Text>
                </View>
              </View>
            </TouchableRipple>
          </ScrollView>
        </ListItemContent>
      </ListItem>
    </View>
    // <View style={styles.accountInfo}>
    //   <View style={styles.photo}>
    //     {/* <Image source={person} style={{}} /> */}
    //   </View>

    // </View>
  );
};

export default AccountInfo;
