import React from 'react';
import { View, TouchableOpacity, Image, StyleSheet, Platform } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Navbar() {
  const navigation = useNavigation();

  return (
    <View style={styles.navbar}>
      <View style={styles.navContainer}>
        {/* Home Button */}
        <TouchableOpacity onPress={() => navigation.navigate('Welcome')} style={[styles.navItem, styles.navLeft]}>
          <Image source={require('../assets/images/about.png')} style={styles.fabImage} />
        </TouchableOpacity>

        {/* Floating Action Button with Logo */}
        <TouchableOpacity onPress={() => navigation.navigate('Welcome')} style={styles.fab}>
          <Image source={require('../assets/images/logo.png')} style={styles.fabImage} />
        </TouchableOpacity>

        {/* Profile Button */}
        <TouchableOpacity onPress={() => navigation.navigate('ProfileScreen')} style={[styles.navItem, styles.navRight]}>
          <Image source={require('../assets/images/profile.png')} style={styles.fabImage} />
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
    zIndex: 100,
    flexDirection: 'row', // Ensures children align correctly
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
  navLeft: {
    marginRight: 90, // Moves left button away from the bubble
  },
  navRight: {
    marginLeft: 90, // Moves right button away from the bubble
  },
  /* Floating Button */
  fab: {
    position: 'absolute',
    bottom: Platform.select({ ios: '30%', android: 20, default: 20 }), // Adjusts for iOS & Android
    left: '50%', // Centers horizontally
    transform: [{ translateX: -45 }], // Moves it back by half its width (assuming width is 90)
    backgroundColor: '#1e1e1e',
    width: 90,
    height: 90,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
  },
  /* Logo inside the FAB */
  fabImage: {
    width: 70,
    height: 70,
    resizeMode: 'contain',
  },
});

