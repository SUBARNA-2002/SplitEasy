/* eslint-disable prettier/prettier */
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {colors} from '../constants/color';
import {useNavigation} from '@react-navigation/native';
const TopHeader = ({title}) => {
  const navigate = useNavigation();
  const handleBack = () => {
    navigate.goBack();
  };
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: colors.primaryBackground,
        padding: 5,
      }}>
      <TouchableOpacity onPress={handleBack}>
        <Ionicons name="chevron-back" size={30} color={'white'} />
      </TouchableOpacity>
      <View>
        <Text
          style={{
            fontSize: 18,
            color: 'white',
          }}>
          {title}
        </Text>
      </View>
      <View
        style={{
          paddingRight: 30,
          // padding: 10,
        }}></View>
    </View>
  );
};

export default TopHeader;

const styles = StyleSheet.create({});
