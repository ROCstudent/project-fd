import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import WelcomeScreen from '../screens/WelcomeScreen';
import CharacterScreen from '../screens/CharacterScreen';
import MoveListScreen from '../screens/MoveListScreen';

export default function Navbar() {
  const navigation = useNavigation();

  return (
    <View style={styles.navbar}>
      <TouchableOpacity onPress={() => navigation.navigate('Welcome')}>
        <Text style={styles.navText}>Home</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('CharacterScreen', { game: { name: 'Street Fighter 6' } })}>
        <Text style={styles.navText}>Street Fighter 6</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('CharacterScreen', { game: { name: 'Tekken 8' } })}>
        <Text style={styles.navText}>Tekken 8</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('CharacterScreen', { game: { name: 'Granblue Fantasy: Versus' } })}>
        <Text style={styles.navText}>Granblue</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  navbar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingVertical: 10,
    backgroundColor: '#1e1e1e',
    borderBottomWidth: 1,
    borderBottomColor: '#333',
  },
  navText: {
    fontSize: 16,
    color: 'white',
    fontWeight: 'bold',
  },
});
