import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Linking } from 'react-native';
import { RNCamera } from 'react-native-camera';
import QRCodeScanner from 'react-native-qrcode-scanner';




export default function Qrscanner() {
const onSuccess = async e =>{
    try{
console.log(e);
await Linking.openURL(e.data);
    }
    catch(err){
        console.log(err)
    }
};
  return (
    <QRCodeScanner
        onRead={e=>onSuccess(e) }
        // flashMode={RNCamera.Constants.FlashMode.torch}
        reactivate={true}
        reactivateTimeout={5000}
        topContent={
          <Text style={styles.textBold}>
           Scan Code
          </Text>
        }
         
      />
  )
}
const styles = StyleSheet.create({
   
    textBold: {
      fontWeight: '500',
      fontSize:35,
      color: '#000',
      marginBottom:25,
    }
});
  