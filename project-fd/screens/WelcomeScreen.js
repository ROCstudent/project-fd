import React from 'react';
import { View, Text, FlatList, Image, TouchableOpacity, StyleSheet } from 'react-native';
import Navbar from '../screens/Navbar';
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
    {/* Add the Navbar */}
    <Navbar />
    <View style={styles.container}>
      <FlatList
        data={games}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => handleGameSelect(item)}>
            <View style={styles.card}>
              <Image source={item.image} style={styles.image} />
              <Text style={styles.text}>{item.name}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: '#121212' },
  card: { marginBottom: 16, borderRadius: 8, overflow: 'hidden', backgroundColor: '#1e1e1e' },
  image: { width: '100%', height: 150 },
  text: { padding: 8, fontSize: 18, fontWeight: 'bold', color: 'white', textAlign: 'center' },
});
