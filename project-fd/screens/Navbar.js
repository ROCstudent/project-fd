import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Navbar() {
  const navigation = useNavigation();

  return (
    <View style={styles.navbar}>
      <TouchableOpacity onPress={() => navigation.navigate('Welcome')} style={styles.navItem}>
        <Text style={styles.navText}>🏠 Home</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('SettingsScreen')} style={styles.navItem}>
        <Text style={styles.navText}>⚙️ Settings</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('ProfileScreen')} style={styles.navItem}>
        <Text style={styles.navText}>👤 Profile</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  navbar: {
    position: 'absolute', // Fix at bottom
    bottom: 0,
    left: 0, 
    right: 0, 
    width: '100%', // Ensure full width
    height: 60, 
    flexDirection: 'row', 
    justifyContent: 'space-around', 
    alignItems: 'center', 
    backgroundColor: '#1e1e1e',
  },
  navItem: {
    flex: 1, 
    alignItems: 'center',
  },
  navText: {
    color: 'white',
    fontSize: 16,
  },
});
