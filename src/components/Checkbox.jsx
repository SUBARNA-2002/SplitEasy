/* eslint-disable prettier/prettier */
import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {TouchableOpacity} from 'react-native-gesture-handler';

const Checkbox = ({checked, onChange}) => {
  return (
    <TouchableOpacity onPress={onChange}>
      <View style={[styles.checkbox, checked && styles.checked]}>
        {checked && <Text style={styles.checkmark}>✓</Text>}
      </View>
    </TouchableOpacity>
  );
};

export default Checkbox;

const styles = StyleSheet.create({
    checkbox: {
        width: 24,
        height: 24,
        borderWidth: 2,
        borderColor: '#000',
        borderRadius: 4,
        justifyContent: 'center',
        alignItems: 'center',
      },
      checked: {
        backgroundColor: '#000',
      },
      checkmark: {
        color: '#fff',
        fontSize: 16,
      },
});
