import React, { useEffect, useState } from 'react';
import { Alert, Text, View, ScrollView, TextInput, } from 'react-native';
import messaging from '@react-native-firebase/messaging';
import peopleData from './data.json'
// import filter from 'lodash.filter'
import { getToken, notificationListenr, requestUserPermission } from './src/utils/pushnotifications';
// import { Searchfilter } from './components/Searchbar';



export default function Mycal() {
  // setData(peopleData)

  const [input, setInput] = useState('')
  // console.log(input)
  // const handelSearch =(query) =>{
  //   setsearchQuery(query);
  //   const formattedQuery = query.toLowerCase();
  //   const filteredData =filter(peopleData, (user)=>{
  //     return contains(user, formattedQuery);
  //   });
  //   setData(filteredData);
  // };
  // const contains =({name,code}, query)=>{
  //   const{first} =name;
  //   if(
  //     name.includes(query) || code.includes(query)
  //   ){
  //   return true;
  //   }
  //   return false;

  // };
  // console.log(peopleData)
  useEffect(() => {
    const unsubscribe = messaging().onMessage(async remoteMessage => {
      Alert.alert('A new FCM message arrived!', JSON.stringify(remoteMessage));
    });

    return unsubscribe;
  }, []);


  //notifications
  useEffect(() => {
    requestUserPermission();
    notificationListenr();
    getToken();
  }, []);
  return (

    <View style={{ flex: 1, margin: 10 }}>
      <TextInput
        placeholder='search'
        value={input}
        onChangeText={(text) => setInput(text)}
        clearButtonMode='always'
        style={{
          paddingHorizontal: 20,
          paddingVertical: 10,
          borderColor: '#ccc',
          borderWidth: 1,
          borderRadius: 8,
        }}
        autoCapitalize='none'
        autoCorrect={false}
      />
      {/* <Searchfilter /> */}
      <ScrollView >
      {peopleData.map(item => {
        return (
          <View style={{
            width: '100%', height: 40,
            flexDirection: 'row', justifyContent: "space-between",
          }}>
            <Text>{item.name}</Text>
            <Text>{item.dial_code}</Text>
            <Text>{item.code}</Text>
          </View>
        );
      })}
    </ScrollView>
    </View >
  )
}