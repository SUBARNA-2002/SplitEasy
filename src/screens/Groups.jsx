/* eslint-disable prettier/prettier */
import {StyleSheet, Text, TextInput, View} from 'react-native';
import React, {useState} from 'react';
import {useNavigation, useRoute} from '@react-navigation/native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import TopHeader from '../components/TopHeader';
import {colors} from '../constants/color';
import axios from 'axios';

const Groups = () => {
  const [groupData, setGroupData] = useState([]);
  
  const getGroupData = async () => {
    try {
      const res = await axios.get('http://localhost:8080/groups');
      if (res?.data) {
        setGroupData(res?.data);
        console.log('Group data', res?.data);
      }
    } catch (error) {
      console.log('Error in fetching group data', error);
    }
  };
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: colors.background,
      }}>
      <TopHeader title={'Groups'} />
      <View
        style={{
          flex: 1,
        }}>
        <TextInput
          placeholder="Search"
          placeholderTextColor={'white'}
          style={{
            color: 'white',
            borderBottomWidth: 1,
            borderBottomColor: colors.primaryBackground,
            width: '90%',
            alignSelf: 'center',
            fontSize: 20,
            marginBottom: 20,
          }}
        />
        <View></View>
      </View>
    </View>
  );
};

export default Groups;

const styles = StyleSheet.create({});
