import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const Header = () => {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.subtitle}>Hello, Subanra✌️</Text>
        <Text style={styles.title}>Split your bill</Text>
      </View>
      <View>
        <Image
          height={100}
          width={100}
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
    padding: 10,
    backgroundColor: 'white',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
  },
  subtitle: {
    fontSize: 16,
    color: 'gray',
  },
});
