import React, { Component } from 'react'
import { Card, Icon } from 'react-native-elements'
import {
  Image,
  ImageBackground,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native'

import Email from './Email';
import Separator from './Separator'
import Tel from './Tel'
import Password from './Password';
import Share from './Share';
import ContactUs from './ContactUs';
import Logout from './Logout';

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: '#FFF',
    borderWidth: 0,
    flex: 1,
    marginTop: 0,
    padding: 0,
  },
  container: {
    flex: 1,
  },
  emailContainer: {
    backgroundColor: '#FFF',
    flex: 1,
    paddingTop: 30,
  },
  headerBackgroundImage: {
    paddingBottom: 20,
    paddingTop: 45,
  },
  headerContainer: {
    marginBottom: 20,
  },
  headerColumn: {
    backgroundColor: 'transparent',
    ...Platform.select({
      ios: {
        alignItems: 'center',
        elevation: 1,
        marginTop: -1,
      },
      android: {
        alignItems: 'center',
      },
    }),
  },
  placeIcon: {
    color: 'white',
    fontSize: 26,
  },
  scroll: {
    backgroundColor: '#FFF',
  },
  telContainer: {
    backgroundColor: 'yellow',
    flex: 1,
    paddingTop: 30,
  },
  userAddressRow: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  userCityRow: {
    backgroundColor: 'transparent',
  },
  userCityText: {
    color: '#A5A5A5',
    fontSize: 15,
    fontWeight: '600',
    textAlign: 'center',
  },
  userImage: {
    borderColor: '#FFF',
    borderRadius: 85,
    borderWidth: 3,
    height: 170,
    marginBottom: 15,
    width: 170,
  },
  userNameText: {
    color: '#FFF',
    fontSize: 22,
    fontWeight: 'bold',
    paddingBottom: 8,
    textAlign: 'center',
  },
})

const Profile = ({ navigation }) => {
  return (
    <ScrollView style={styles.scroll}>
      <View style={styles.container}>
        <Card containerStyle={styles.cardContainer}>
          <View style={styles.headerContainer}>
            <View
              style={styles.headerBackgroundImage}
            >
              <View style={styles.headerColumn}>
                <Image
                  style={styles.userImage}
                  source={{ uri: "https://i.imgur.com/GfkNpVG.jpg" }}
                />
                <Text style={styles.userNameText}>John</Text>
                <View style={styles.userAddressRow}>
                  <View>
                    <Icon
                      name="place"
                      underlayColor="transparent"
                      iconStyle={styles.placeIcon}
                    />
                  </View>
                  <View style={styles.userCityRow}>
                    <Text style={styles.userCityText}>
                      Addis Ababa, Ethiopia
                    </Text>
                  </View>
                </View>
              </View>
            </View>
          </View>
          <Tel
            style={{ marginTop: 10 }}
            name="John Cat"
            number="0911562451"
          />
          <Email
            name="Personal"
            email="cat@gmail.com"
          />
          <Separator />
          <Password navigation={navigation} />
          <Share />
          <ContactUs />
          <Logout />
        </Card>
      </View>
    </ScrollView>
  )
}

export default Profile
