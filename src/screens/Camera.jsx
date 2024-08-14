/* eslint-disable prettier/prettier */
import {Button, Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import TextRecognition from '@react-native-ml-kit/text-recognition';

const CameraScreen = () => {
  const [image, setImage] = useState(null);
  const [textValue, setTextValue] = useState('');
  const [items, setItems] = useState([]); // State to store parsed items

  const pickImage = async () => {
    try {
      let result = await launchImageLibrary({mediaType: 'photo'});
      if (result.assets && result.assets.length > 0) {
        setImage(result.assets[0].uri);
      }
    } catch (error) {
      console.error('Error picking image:', error);
    }
  };

  const openCamera = async () => {
    try {
      let result = await launchCamera({mediaType: 'photo'});
      if (result.assets && result.assets.length > 0) {
        setImage(result.assets[0].uri);
      }
    } catch (error) {
      console.error('Error opening camera:', error);
    }
  };

  const recognizeText = async () => {
    try {
      if (image) {
        const result = await TextRecognition.recognize(image);
        setTextValue(result.text); // Store the raw recognized text
        const parsedItems = parseTextDynamically(result.text); // Parse the recognized text dynamically
        setItems(parsedItems); // Update state with parsed items
      }
    } catch (error) {
      console.error('Error recognizing text:', error);
    }
  };

  const parseTextDynamically = rawText => {
    const lines = rawText.split('\n');
    const itemDetails = [];

    lines.forEach(line => {
      // Check if line contains a price
      const priceMatch = line.match(/\$\d+(\.\d{1,2})?/);
      if (priceMatch) {
        const price = parseFloat(priceMatch[0].substring(1)); // Extract price
        // Assuming the format "quantity x item name" precedes the price
        const itemPattern = /(\d+)x\s*(.+)/;
        const itemMatch = line.match(itemPattern);
        if (itemMatch) {
          const qty = parseInt(itemMatch[1], 10);
          const name = itemMatch[2].trim();
          itemDetails.push({label: name, value: price, Qty: qty});
        }
      }
    });

    return itemDetails;
  };
  console.log('+++++++', typeof textValue);
  return (
    <ScrollView style={{flex: 1, backgroundColor: 'black'}}>
      <Text style={styles.title}>Camera</Text>
      <Button onPress={openCamera} title="Open Camera" />
      <Button onPress={pickImage} title="Pick Image" />
      <Button onPress={recognizeText} title="Recognize Text" />
      {image && (
        <Image
          source={{uri: image}}
          style={{width: 200, height: 200, marginVertical: 10}}
        />
      )}
      <Text>
        <Text style={{color: 'white'}}>Recognized Text:</Text> {textValue}
      </Text>
      {/* Display parsed items */}
      {items.map((item, index) => (
        <Text key={index} style={styles.itemText}>
          {item.label}: ${item.value} x{item.Qty}
        </Text>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  itemText: {
    fontSize: 18,
    marginBottom: 10,
    color: 'white',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
    marginVertical: 10,
  },
});
export default CameraScreen;
