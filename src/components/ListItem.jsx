/* eslint-disable prettier/prettier */
import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {colors} from '../constants/color';

const ListItem = ({hotelName, date, toalAmount, totalPerson}) => {
  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          gap: 10,
        }}>
        <View
          style={{
            padding: 18,
            backgroundColor: colors.primaryBackground,
            borderRadius: 10,
          }}>
          <Text>SA</Text>
        </View>
        <View>
          <Text style={styles.title}>{hotelName}</Text>
          <Text style={styles.subTitle}>{date}</Text>
        </View>
      </View>
      <View>
        <Text style={styles.title}>${toalAmount}</Text>
        <Text style={styles.subTitle}>{totalPerson} person</Text>
      </View>
    </View>
  );
};

export default ListItem;

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: colors.secondaryBackground,
    borderRadius: 10,
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 20,
  },
  title: {
    color: colors.textParimary,
    fontSize: 20,
    fontWeight: 'bold',
  },
  subTitle: {
    color: colors.textParimary,
    fontSize: 15,
  },
});
