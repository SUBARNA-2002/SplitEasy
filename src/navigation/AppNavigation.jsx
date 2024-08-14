/* eslint-disable prettier/prettier */
import React, {useMemo} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Home from '../screens/Home';
import History from '../screens/History';
import Profile from '../screens/Profile';
import {colors} from '../constants/color';
import CameraScreen from '../screens/Camera';
import CreateBill from '../screens/CreateBill';
import AddFriends from '../screens/AddFriends';
import Groups from '../screens/Groups';

// Custom label component that displays icon and label horizontally
const CustomTabLabel = ({focused, color, iconName, label}) => (
  <View
    style={{
      flexDirection: 'row',
      alignItems: 'center',
      padding: 10,
      backgroundColor: colors.background,
      borderRadius: 50,
      marginBottom: 12,
    }}>
    <MaterialCommunityIcons
      name={iconName}
      color={color}
      size={focused ? 26 : 26}
    />
    {focused && <Text style={{color, marginLeft: 8}}>{label}</Text>}
  </View>
);

const AppNavigation = () => {
  const Tab = useMemo(() => createBottomTabNavigator(), []);
  const Stack = useMemo(() => createNativeStackNavigator(), []);

  const TabLayout = () => {
    return (
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarActiveTintColor: 'white',
          tabBarInactiveTintColor: colors.primaryBackground,
          tabBarStyle: {
            backgroundColor: colors.secondaryBackground,
            height: 72,
            borderTopWidth: 0,
            borderTopColor: colors.secondaryBackground,
          },
        }}>
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarLabel: ({focused, color}) => (
              <CustomTabLabel
                focused={focused}
                color={color}
                iconName="home"
                label="Home"
              />
            ),
            tabBarIcon: () => {},
          }}
        />
        <Tab.Screen
          name="History"
          component={History}
          options={{
            tabBarLabel: ({focused, color}) => (
              <CustomTabLabel
                focused={focused}
                color={color}
                iconName="history"
                label="History"
              />
            ),
            tabBarIcon: () => {},
          }}
        />
        <Tab.Screen
          name="Profile"
          component={Profile}
          options={{
            tabBarLabel: ({focused, color}) => (
              <CustomTabLabel
                focused={focused}
                color={color}
                iconName="account"
                label="Profile"
              />
            ),
            tabBarIcon: () => {},
          }}
        />
      </Tab.Navigator>
    );
  };

  return (
    <Stack.Navigator
      // initialRouteName="Home"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="TabLayout" component={TabLayout} />
      <Stack.Screen name="Camera" component={CameraScreen} />
      <Stack.Screen name="CreateBill" component={CreateBill} />
      <Stack.Screen name="AddFriend" component={AddFriends} />
      <Stack.Screen name="Groups" component={Groups} />
    </Stack.Navigator>
  );
};

export default AppNavigation;

const styles = StyleSheet.create({});
