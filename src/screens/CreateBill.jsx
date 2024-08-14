/* eslint-disable prettier/prettier */
import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {colors} from '../constants/color';
import {TextInput} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/dist/Entypo';
import Icon1 from 'react-native-vector-icons/dist/FontAwesome';
import {TouchableOpacity} from '@gorhom/bottom-sheet';
import TopHeader from '../components/TopHeader';

const CreateBill = () => {
  return (
    <View style={{
        flex: 1,
    }}>
      <TopHeader />
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: colors.background,
        }}>
        <View>
          <Text
            style={{
              color: colors.textParimary,
              fontSize: 20,
              paddingBottom: 30,
            }}>
            With you and : Enter names
          </Text>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              gap: 20,
              paddingBottom: 10,
            }}>
            <View
              style={{
                padding: 10,
                backgroundColor: colors.primaryBackground,
                borderRadius: 10,
              }}>
              <Icon name="text-document" size={30} color="white" />
            </View>
            <View>
              <TextInput
                style={{
                  borderBottomWidth: 1,
                  borderBottomColor: colors.primaryBackground,
                  color: colors.textParimary,
                  width: 200,
                  fontSize: 20,
                }}
                placeholder="Enter Description"
              />
            </View>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              gap: 20,
            }}>
            <View
              style={{
                paddingHorizontal: 17,
                padding: 10,
                backgroundColor: colors.primaryBackground,
                borderRadius: 10,
              }}>
              <Icon1 name="rupee" size={30} color="white" />
            </View>
            <View>
              <TextInput
                style={{
                  borderBottomWidth: 1,
                  borderBottomColor: colors.primaryBackground,
                  color: colors.textParimary,
                  width: 200,
                  fontSize: 20,
                }}
                placeholder="0.00"
                keyboardType="numeric"
              />
            </View>
          </View>
          <View>
            <Text
              style={{
                color: colors.textParimary,
                fontSize: 20,
                paddingTop: 30,
              }}>
              Paid by You and split equally
            </Text>
          </View>
          <TouchableOpacity
            style={{
              paddingTop: 30,
            }}>
            <Text
              style={{
                color: 'white',
                fontSize: 20,
                textAlign: 'center',
                padding: 10,
                backgroundColor: colors.primaryBackground,
                borderRadius: 10,
              }}>
              Add a bill
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default CreateBill;

const styles = StyleSheet.create({});
