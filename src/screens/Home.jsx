/* eslint-disable prettier/prettier */
import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Header from '../components/Header';
import {colors} from '../constants/color';

const Home = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header_container}>
        <Header />
        <View style={styles.mainBox}>
          <View>
            <Text style={styles.title}>Need to Devide amount?</Text>
            <Text style={styles.camera_btn}>Open camera or Upload bill </Text>
          </View>
        </View>
      </View>
      <View style={styles.listHeader}>
        <Text style={styles.listLeft}>Recents bills</Text>
        <Text style={styles.listRight}>see all</Text>
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#181a1f',
  },
  header_container: {
    padding: 20,
    backgroundColor: '#21242c',
    borderBottomStartRadius: 20,
    borderBottomEndRadius: 20,
    // paddingBottom: 20,
  },
  mainBox: {
    backgroundColor: '#996BBF',
    padding: 45,
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  camera_btn: {
    backgroundColor: '#21242c',
    padding: 10,
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    color: colors.textParimary,
    fontSize: 20,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#ADB0B9',
    paddingBottom: 15,
    textAlign: 'center',
  },
  listHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  listLeft: {
    color: colors.textParimary,
    fontSize: 20,
    fontWeight: 'bold',
  },
  listRight: {
    color: colors.primaryBackground,
    fontSize: 20,
    textDecorationLine: 'underline',
  },
});
