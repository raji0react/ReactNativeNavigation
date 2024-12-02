// src/navigation/ScheduleStackScreen.js
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ScheduleScreen from './SchedulePage'; 
import ProfileScreen from './ProfileScreen'; 
import TestScreen from './TestScreen'; 

const ScheduleStack = createNativeStackNavigator();



const ScheduleStackScreen = () => {
  return (
    <ScheduleStack.Navigator
      screenOptions={{
        headerShown: false,  // Hide header for all screens in this stack
      }}
    >
      <ScheduleStack.Screen name="Schedule" component={ScheduleScreen} />
      <ScheduleStack.Screen name="Profile" component={ProfileScreen} />
      <ScheduleStack.Screen name="Test" component={TestScreen} />
    </ScheduleStack.Navigator>
  );
};

export default ScheduleStackScreen;
