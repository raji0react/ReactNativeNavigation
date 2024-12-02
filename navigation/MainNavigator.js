import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import LoginPage from '../LoginPage';
import HomePage from '../HomePage';
import SettingsPage from '../SettingsPage';
import CommonHeader from '../CommonHeader'; // Import the common header
import ProfileScreen from '../ProfileScreen'; 
import TestScreen from '../TestScreen'; 
import ScheduleStackScreen from '../ScheduleStackScreen';
import HomeTabs from '../HomeTabs';
// const SettingsStack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

// function SettingsStackScreen() {
//   return (
//     <SettingsStack.Navigator screenOptions={{ headerShown: false }}>
//       <SettingsStack.Screen name="SettingsScreen" component={SettingsPage} />
//     </SettingsStack.Navigator>
//   );
// }



// function HomeTabs() {
//   return (
//     <Tab.Navigator initialRouteName="HomeTab">
//       <Tab.Screen name="HomeTab" component={HomePage} />
//       <Tab.Screen name="Schedule" component={ScheduleStackScreen}   options={{
//           tabBarVisible: true,  // Ensure tab bar stays visible when navigating to child screens
//         }}/>
//       <Tab.Screen name="Settings" component={SettingsStackScreen} />
//     </Tab.Navigator>
//   );
// }

const Stack = createNativeStackNavigator();

// MainNavigator includes the login screen and the HomeTabs with the common header
function MainNavigator() {

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        {/* Login page has its own header */}
        <Stack.Screen 
          name="Login" 
          component={LoginPage} 
          options={{ headerShown: false }} 
        />

        {/* HomePage, Schedule, and Settings will show the CommonHeader */}
        <Stack.Screen
          name="Home"
          component={HomeTabs}
          options={{
            header: () => <CommonHeader />, // Add the CommonHeader component
            headerShown: true,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default MainNavigator;
