import React from 'react';
import { View, Text, FlatList, Image, TouchableOpacity, StyleSheet } from 'react-native';
import Navbar from '../screens/Navbar';
import CharacterScreen from '../screens/CharacterScreen';

const games = [
  { id: '1', name: 'Street Fighter 6', image: require('../assets/images/sf6.jpg') },
  { id: '2', name: 'Tekken 8', image: require('../assets/images/tekken8.jpg') },
  { id: '3', name: 'Granblue Fantasy: Versus', image: require('../assets/images/gbvs.jpg') },
];

export default function WelcomeScreen({ navigation }) {
  const handleGameSelect = (game) => {
    navigation.navigate('Characters', { game });
  };

  return (
    <View style={styles.container}>
      <View style={styles.gridContainer}>
        {games.map((item) => (
          <TouchableOpacity key={item.id} onPress={() => handleGameSelect(item)} style={styles.card}>
            <Image source={item.image} style={styles.image} />
            <Text style={styles.text}>{item.name}</Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Navbar at the bottom */}
      <Navbar />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: '#121212', paddingBottom: 60 },
  gridContainer: { flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between' },
  card: { width: '48%', marginBottom: 16, borderRadius: 10, overflow: 'hidden', backgroundColor: '#1e1e1e', padding: 10 },
  image: { width: '100%', height: 100, borderRadius: 10 },
  text: { paddingTop: 8, fontSize: 16, fontWeight: 'bold', color: 'white', textAlign: 'center' },
});
