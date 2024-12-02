// src/screens/ScheduleScreen.js
import React, {useState} from 'react';
import { View, Text, Button, SafeAreaView } from 'react-native';
import TestScreen from './TestScreen';
import ProfileScreen from './ProfileScreen';


const ScheduleScreen = () => {
    // State to manage which screen to show
    const [activeScreen, setActiveScreen] = useState('none'); // 'none', 'profile', or 'test'
  
    return (
      <SafeAreaView style={{ flex: 1 }}>
        {/* Header with buttons to navigate to Profile and Test */}
        <View style={{ padding: 10, backgroundColor: '#f8f8f8' }}>
          <Button 
            title="Show Profile" 
            onPress={() => setActiveScreen('profile')} 
          />
          <Button 
            title="Show Test" 
            onPress={() => setActiveScreen('test')} 
          />
        </View>
  
        {/* Main content */}
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text>Schedule Screen</Text>
        </View>
  
        {/* Conditional rendering of Profile or Test screen */}
        <View style={{ flex: 1 }}>
          {activeScreen === 'profile' && <ProfileScreen />}
          {activeScreen === 'test' && <TestScreen />}
        </View>
      </SafeAreaView>
    );
  };
  
  

export default ScheduleScreen;
