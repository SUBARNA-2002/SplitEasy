/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {Image, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import Checkbox from './Checkbox';
import {colors} from '../constants/color';

const FriendName = ({friend, onSelect}) => {
  const [isChecked, setIsChecked] = useState(false);

  const handlePress = () => {
    setIsChecked(!isChecked);
    onSelect(friend, !isChecked);
  };

  return (
    <TouchableOpacity
      onPress={handlePress}
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        padding: 8,
        backgroundColor: colors.primaryBackground,
        marginBottom: 5,
        justifyContent: 'space-between',
        // borderBottomWidth: 2,
      }}>
      <View
        style={{
          flexDirection: 'row',
          gap: 10,
          alignItems: 'center',
        }}>
        <View
          style={{
            height: 50,
            width: 50,
            borderRadius: 50,
            backgroundColor: 'red',
          }}>
          {/* <Image
            source={require('../assets/images/1.jpg')}
            style={{
              height: 30,
              width: 30,
              borderRadius: 50,
            }}
          /> */}
        </View>
        <Text
          style={{
            fontSize: 18,
            color: 'white',
          }}>
          {friend?.name}
        </Text>
      </View>

      <Checkbox checked={isChecked} onChange={handlePress} />
    </TouchableOpacity>
  );
};

export default FriendName;

const styles = StyleSheet.create({});