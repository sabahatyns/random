import React, { useEffect, useState } from 'react';
import { Alert, Text, View, ScrollView, TextInput, FlatList, } from 'react-native';
import messaging from '@react-native-firebase/messaging';
import peopleData from './data.json'
import { getToken, notificationListenr, requestUserPermission } from './src/utils/pushnotifications';



export default function CountriesData() {
  //initial state
  const [input, setInput] = useState('');
  const [Data, setData] = useState(peopleData);
  //filter
  const handlefilter=(text) =>{
    if(text){
      let filteredData= peopleData.filter((item)=>
      item.name.toLowerCase().includes(text.toLowerCase()));
      setData(filteredData);
    }else
    setData(peopleData);

  };
  //notifications

  useEffect(() => {
    const unsubscribe = messaging().onMessage(async remoteMessage => {
      Alert.alert('A new FCM message arrived!', JSON.stringify(remoteMessage));
    });

    return unsubscribe;
  }, []);


  //cal functions from pushnotifications files
  useEffect(() => {
    requestUserPermission();
    notificationListenr();
    getToken();
  }, []);
  return (

    <View style={{ flex: 1, margin: 10 }}>
      <TextInput
        placeholder='search here...'
        onChangeText={(text) => {setInput(text);
          handlefilter(text);
        }}
        style={{
          paddingHorizontal: 20,
          paddingVertical: 10,
          borderColor: '#ccc',
          borderWidth: 1,
          borderRadius: 8,
          marginBottom:25,
        }}
      />
      <FlatList data={Data}
      renderItem={({item, index}) =>
          <View style={{
            width: '100%', height: 40,
            flexDirection: 'row', justifyContent: "space-between",
          }}>
            <Text>{item.name}</Text>
            <Text>{item.dial_code}</Text>
            <Text>{item.code}</Text>
          </View>
        
      }/>
    </View >
  )
}