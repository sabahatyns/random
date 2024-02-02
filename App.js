import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { useEffect } from 'react';
import 'react-native-gesture-handler';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Qrscanner from './screens/qrscan';
import CountriesData from './screens/countries';
import { Alert } from 'react-native';
import messaging from '@react-native-firebase/messaging';
import { getToken, notificationListenr, requestUserPermission } from './src/utils/pushnotifications';
import Reels from './screens/reels';


const Stack = createNativeStackNavigator();

export default function Mycal() {
  useEffect(() => {
    const unsubscribe = messaging().onMessage(async remoteMessage => {
      Alert.alert('A new FCM message arrived!', JSON.stringify(remoteMessage));
    });

    return unsubscribe;
  }, []);


//notifications
useEffect(() => {
  requestUserPermission() ;
  notificationListenr() ;
  getToken() ;
}, []);
  return (
    <NavigationContainer >
      <Stack.Navigator screenOptions={{ headerShown: true }} initialRouteName='Qrscanner'>
      <Stack.Screen
          name="Menu"
          component={DrawerNavigator}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="Scanner" component={Qrscanner} />
      </Stack.Navigator>
    </NavigationContainer>
  )}

const Drawer = createDrawerNavigator();

export function DrawerNavigator() {
  return (
    <Drawer.Navigator >
      <Drawer.Screen name="Qr Code Scanner" component={Qrscanner} />
      <Drawer.Screen name="Countries Code" component={CountriesData} />  
      <Drawer.Screen name="Reels" component={Reels} />  
    </Drawer.Navigator>
  );
}