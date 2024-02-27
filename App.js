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
import Bugatti from './screens/Bugatti';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';
import First from './screens/home';
import Chat from './screens/chat';
import Meet from './screens/meet';






const Stack = createNativeStackNavigator();

export default function Mycal() {
  const theme = {
    colors: {
      background: "transparent",
    },
  };
  
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
    <NavigationContainer  >
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen
          name="Bugatti5"
          component={Bugatti5}
        />
        {/* <Stack.Screen
          name="Menu"
          component={DrawerNavigator}
          options={{ headerShown: false }}
        /> */}
        {/* <Stack.Screen
          name="Bugatti5"
          component={Bugatti5}
          options={{ headerShown: false }}
        /> */}
      </Stack.Navigator>
    </NavigationContainer>
  )
}

const Drawer = createDrawerNavigator();

// export function DrawerNavigator() {
//   return (
//     <Drawer.Navigator >
//       <Drawer.Screen name="Qr Code Scanner" component={Qrscanner} />
//       <Drawer.Screen name="Countries Code" component={CountriesData} />
//       <Drawer.Screen name="Reels" component={Reels} />
//       <Drawer.Screen options={{ headerShown: false }}
//         name="Bugatti" component={Bugatti} />
//     </Drawer.Navigator>
////);
//}//
const Tab = createBottomTabNavigator();
const Bugatti5 = () => {
  return (
    < Tab.Navigator tabBarOptions={{ showLabel: false,}}
      screenOptions={{ headerShown: false,
      tabBarStyle: {backgroundColor:'black',  },
    }}
      >
      <Tab.Screen options={{
        tabBarIcon: ({ color, size }) => (
          <Icon name="home" color={color} size={size} />
        ),
      }} name="meet" component={Meet} />
      <Tab.Screen options={{
        tabBarIcon: ({ color, size }) => (
          <Icon name="play" color={color} size={size} />
        ),
      }} name="Reels" component={Reels} />
      <Tab.Screen
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name="camera"color={color}  size={size} />
          ),
        }} name="Scanner" component={Qrscanner} />
      <Tab.Screen options={{
        tabBarIcon: ({ color, size }) => (
          <Icon name="heart"color={color}  size={size}  />
        ),
      }}
        name="Cars" component={Bugatti} />
      <Tab.Screen
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name="user" color={color} size={size}/>
          ),
        }} name="Cuntries" component={CountriesData} />


    </Tab.Navigator >
  )
}