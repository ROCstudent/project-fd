import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Navbar() {
  const navigation = useNavigation();

  return (
    <View style={styles.navbar}>
      <View style={styles.navContainer}>
        {/* Home Button */}
        <TouchableOpacity onPress={() => navigation.navigate('Welcome')} style={[styles.navItem, styles.navLeft]}>
          <Text style={styles.navText}>🏠 Home</Text>
        </TouchableOpacity>

        {/* Floating Action Button with Logo */}
        <TouchableOpacity onPress={() => navigation.navigate('Welcome')} style={styles.fab}>
          <Image source={require('../assets/images/logo.png')} style={styles.fabImage} />
        </TouchableOpacity>

        {/* Profile Button */}
        <TouchableOpacity onPress={() => navigation.navigate('ProfileScreen')} style={[styles.navItem, styles.navRight]}>
          <Text style={styles.navText}>👤 Profile</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  navbar: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    width: '100%',
    height: 70,
    backgroundColor: '#1e1e1e',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex:100,
  },
  navContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    width: '100%',
  },
  navItem: {
    flex: 1,
    alignItems: 'center',
    marginBottom: 5,
  },
  navLeft:{ 
    marginRight: 100,
  },
  navRight:{
    marginLeft: 10,
  },
  navText: {
    color: 'white',
    fontSize: 16,
  },
  /* Floating Button */
  fab: {
    position: 'absolute',
    bottom: -5,
    alignSelf: 'center',
    backgroundColor: '#1e1e1e', // Customize to match your UI
    width: 90,
    height: 90,
    borderRadius: 50, // Perfect circle
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5, // Shadow effect for Android
  },
  /* Logo inside the FAB */
  fabImage: {
    width: 70,  // Adjust based on your logo size
    height: 70, // Adjust based on your logo size
    resizeMode: 'contain',
  },
});
