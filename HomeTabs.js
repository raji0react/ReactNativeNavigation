// src/navigation/HomeTabs.js
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomePage from './HomePage'; // Import the HomePage screen
import ScheduleStackScreen from './ScheduleStackScreen'; // Import ScheduleStackScreen
const SettingsStack = createNativeStackNavigator();

const Tab = createBottomTabNavigator();

function SettingsStackScreen() {
    return (
      <SettingsStack.Navigator screenOptions={{ headerShown: false }}>
        <SettingsStack.Screen name="SettingsScreen" component={SettingsPage} />
      </SettingsStack.Navigator>
    );
  }

function HomeTabs() {
  return (
    <Tab.Navigator initialRouteName="HomeTab">
      <Tab.Screen name="HomeTab" component={HomePage} />
      {/* Ensure ScheduleStackScreen is used for the Schedule tab */}
      <Tab.Screen
        name="ScheduleTab"
        component={ScheduleStackScreen}
        options={{
          tabBarVisible: true,  // Ensure tab bar stays visible when navigating to child screens
        }}
      />
      <Tab.Screen name="Settings" component={SettingsStackScreen} />
    </Tab.Navigator>
  );
}

export default HomeTabs;
