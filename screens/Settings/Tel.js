import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { Icon } from 'react-native-elements'
import PropTypes from 'prop-types'

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginBottom: 25,
  },
  iconRow: {
    flex: 2,
    justifyContent: 'center',
  },
  smsIcon: {
    color: 'darkgray',
    fontSize: 30,
  },
  smsRow: {
    flex: 2,
    justifyContent: 'flex-start',
  },
  telIcon: {
    color: "grey",
    fontSize: 30,
  },
  telNameColumn: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  telNameText: {
    color: 'gray',
    fontSize: 14,
    fontWeight: '200',
  },
  telNumberColumn: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginBottom: 5,
  },
  telNumberText: {
    fontSize: 16,
  },
  telRow: {
    flex: 6,
    flexDirection: 'column',
    justifyContent: 'center',
  },
})

const Tel = ({
  containerStyle,
  name,
  number
}) => {

  return (
    <View style={[styles.container, containerStyle]}>
      <View style={styles.iconRow}>
        <Icon
          name="call"
          underlayColor="transparent"
          iconStyle={styles.telIcon}
        />
      </View>
      <View style={styles.telRow}>
        <View style={styles.telNumberColumn}>
          <Text style={styles.telNumberText}>{number}</Text>
        </View>
        <View style={styles.telNameColumn}>
          {name.length !== 0 && (
            <Text>{name}</Text>
          )}
        </View>
      </View>
      <View style={styles.smsRow}>
        <Icon
          name="textsms"
          underlayColor="transparent"
          iconStyle={styles.smsIcon}
        />
      </View>
    </View>
  )
}


export default Tel
