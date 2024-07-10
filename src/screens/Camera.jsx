/* eslint-disable prettier/prettier */
import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import {
  Camera,
  useCameraDevice,
  useCameraDevices,
  useCameraPermission,
} from 'react-native-vision-camera';

const CameraScreen = () => {
  const device = useCameraDevice('back');
  const {hasPermission} = useCameraPermission();

  if (!hasPermission) return <PermissionsPage />;
  if (device == null) return <Text>Loading...</Text>;

  useEffect(() => {
    checkPermission();
  }, []);

  const checkPermission = async () => {
    // Replace "requestCameraPermissions" with the correct method name
    const newCameraPermission = await Camera.requestPermission(); // Example correction
    console.log(newCameraPermission);
  };

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'black',
      }}>
      <Camera style={StyleSheet.absoluteFill} device={device} isActive={true} />
    </View>
  );
};

export default CameraScreen;

const styles = StyleSheet.create({});
