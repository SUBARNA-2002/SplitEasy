/* eslint-disable prettier/prettier */
import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {colors} from '../constants/color';
import TopHeader from '../components/TopHeader';
import {FlatList, TextInput} from 'react-native-gesture-handler';
import FriendName from '../components/FriendName';
import {TouchableOpacity} from '@gorhom/bottom-sheet';
import {useNavigation} from '@react-navigation/native';
import axios from 'axios';

const AddFriends = () => {
  const navigate = useNavigation();
  const [selectedFriends, setSelectedFriends] = useState([]);
  const [friendsData, setFriendsData] = useState([]);

  const fetchFriendsData = async () => {
    try {
      const res = await axios.get('http://10.0.2.2:8080/friend');
      console.log('Friends data', res?.data);
      if (res?.data) {
        setFriendsData(res?.data);
      }
    } catch (error) {
      console.log(JSON.stringify(error));
      console.log('Error in fetching friends data', error);
    }
  };

  useEffect(() => {
    fetchFriendsData();
  }, []);

  const handleSelectFriend = (friend, isSelected) => {
    setSelectedFriends(prevSelectedFriends => {
      if (isSelected) {
        return [...prevSelectedFriends, friend];
      } else {
        return prevSelectedFriends.filter(
          selectedFriend => selectedFriend.id !== friend.id,
        );
      }
    });
  };

  const handleAddGroup = async () => {
    try {
      const groupData = {
        groupName: 'New Group', // You can change this to a dynamic value if needed
        members: selectedFriends?.map(friend => friend.id),
      };
      const res = await axios.post('http://10.0.2.2:8080/groups', groupData);
      if (res?.data) {
        console.log('Group added', res?.data);
        navigate.navigate('Groups');
      }
    } catch (error) {
      console.log('Error in adding group', error);
    }
  };

  console.log('selected friends', selectedFriends);

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: colors.background,
      }}>
      <TopHeader title={'Add Friends'} />
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
        <View
          style={{
            flex: 1,
            marginHorizontal: 10,
          }}>
          <FlatList
            data={friendsData}
            keyExtractor={item => item.id.toString()}
            renderItem={({item}) => (
              <FriendName friend={item} onSelect={handleSelectFriend} />
            )}
          />
        </View>
        <TouchableOpacity
          onPress={handleAddGroup}
          style={{
            backgroundColor: colors.primaryBackground,
            padding: 15,
            flexDirection: 'row',
            justifyContent: 'center',
            marginTop: 10,
            marginHorizontal: 10,
          }}>
          <Text
            style={{
              fontSize: 18,
              color: 'white',
            }}>
            Add To Group
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default AddFriends;

const styles = StyleSheet.create({});
