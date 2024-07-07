/* eslint-disable prettier/prettier */
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useCallback, useMemo, useRef} from 'react';
import Header from '../components/Header';
import {colors} from '../constants/color';
import ListItem from '../components/ListItem';
import Icon from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import BottomSheet, {
  BottomSheetBackdrop,
  BottomSheetView,
} from '@gorhom/bottom-sheet';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
const Home = () => {
  const bottomSheetRef = useRef(null);
  const snapPoints = useMemo(() => [1, '34%'], []); // Updated to use percentage for the second snap point

  const listData = [
    {
      hotelName: 'The Grand',
      totalAmount: 200,
      date: '12/12/2021',
      people: 4,
    },
    {
      hotelName: 'Burger King',
      totalAmount: 100,
      date: '12/12/2021',
      people: 2,
    },
    {
      hotelName: 'Subway',
      totalAmount: 150,
      date: '12/12/2021',
      people: 3,
    },
  ];
  const handleExpandPress = useCallback(() => {
    bottomSheetRef.current?.expand();
  }, []);

  const handleCollapsePress = useCallback(() => {
    bottomSheetRef.current?.collapse();
  }, []);
  const handleClosePress = useCallback(() => {
    bottomSheetRef.current?.close();
  }, []);

  const handleSheetChanges = useCallback(index => {
    console.log('handleSheetChanges', index);
  }, []);
  const renderBackdrop = useCallback(
    props => (
      <BottomSheetBackdrop
        {...props}
        disappearsOnIndex={-1}
        appearsOnIndex={0}
        onPress={handleClosePress} // Close the bottom sheet when the backdrop is pressed
      />
    ),
    [handleClosePress],
  );
  return (
    <View style={styles.container}>
      <View style={styles.header_container}>
        <Header />
        <View style={styles.mainBox}>
          <View>
            <Text style={styles.title}>Need to Devide amount?</Text>
            <TouchableOpacity onPress={handleExpandPress}>
              <Text style={styles.camera_btn}>Open camera or Upload bill </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View style={styles.listHeader}>
        <Text style={styles.listLeft}>Recents bills</Text>
        <Text style={styles.listRight}>see all</Text>
      </View>
      <View>
        {listData.map((item, index) => (
          <ListItem
            key={index}
            hotelName={item.hotelName}
            date={item.date}
            toalAmount={item.totalAmount}
            totalPerson={item.people}
          />
        ))}
      </View>
      <BottomSheet
        ref={bottomSheetRef}
        index={0}
        snapPoints={snapPoints}
        onChange={handleSheetChanges}
        backdropComponent={renderBackdrop}>
        {/* Updated to use handleSheetChanges */}
        <BottomSheetView style={styles.contentContainer}>
          <TouchableOpacity
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              padding: 10,
              paddingHorizontal: 20,
            }}>
            <View style={{flexDirection: 'row', gap: 20, alignItems: 'center'}}>
              <View
                style={{
                  padding: 10,
                  backgroundColor: colors.primaryBackground,
                  borderRadius: 10,
                }}>
                <Icon name="camera" size={30} color="white" />
              </View>
              <Text
                style={{
                  fontSize: 20,
                  color: 'black',
                }}>
                Open camera
              </Text>
            </View>
          </TouchableOpacity>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              padding: 10,
              paddingHorizontal: 20,
            }}>
            <View style={{flexDirection: 'row', gap: 20, alignItems: 'center'}}>
              <View
                style={{
                  padding: 10,
                  backgroundColor: colors.primaryBackground,
                  borderRadius: 10,
                }}>
                <Ionicons name="cloud-upload" size={32} color="white" />
              </View>
              <Text
                style={{
                  fontSize: 20,
                  color: 'black',
                }}>
                Upload bill
              </Text>
            </View>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              padding: 10,
              paddingHorizontal: 20,
            }}>
            <View style={{flexDirection: 'row', gap: 20, alignItems: 'center'}}>
              <View
                style={{
                  padding: 10,
                  backgroundColor: colors.primaryBackground,
                  borderRadius: 10,
                }}>
                <Ionicons name="create-outline" size={32} color="white" />
              </View>
              <Text
                style={{
                  fontSize: 20,
                  color: 'black',
                }}>
                Create bill
              </Text>
            </View>
          </View>
        </BottomSheetView>
      </BottomSheet>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  contentContainer: {
    flex: 1,
    backgroundColor: 'white',
  },
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
