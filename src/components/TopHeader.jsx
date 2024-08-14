/* eslint-disable prettier/prettier */
import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
const TopHeader = () => {
  return (
    <View>
      <View>
        <Ionicons name="chevron-back" size={30} />
      </View>
      <View>
        <Text>Screens</Text>
      </View>
      <View></View>
    </View>
  );
};

export default TopHeader;

const styles = StyleSheet.create({});
