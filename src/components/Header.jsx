/* eslint-disable prettier/prettier */
import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const Header = () => {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.subtitle}>Hello, Subarna✌️</Text>
        <Text style={styles.title}>Split your bill</Text>
      </View>
      <View>
        <Image
          height={60}
          width={60}
          borderRadius={30}
          source={{
            uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2RoW-A0vGk7dSIh82fKozeYTuw-pJNdmxHDUfiuaU10nZzyVJjXvtc6KEEo8TpbP6Frc&usqp=CAU',
          }}
        />
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: 20,
    alignItems: 'center',
  },
  title: {
    fontSize: 35,
    fontWeight: 'bold',
    color: '#ADB0B9',
    paddingTop: 5,
  },
  subtitle: {
    fontSize: 20,
    color: '#ADB0B9',
  },
});
