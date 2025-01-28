import React from 'react';
import { View, Text, FlatList, Image, TouchableOpacity, StyleSheet } from 'react-native';
import Navbar from '../screens/Navbar';

const characters = {
  'Street Fighter 6': [
    { id: '1', name: 'Ryu', image: require('../assets/images/ryu.jpg') },
    { id: '2', name: 'Ken', image: require('../assets/images/ken.jpg') },
    { id: '3', name: 'Chun-Li', image: require('../assets/images/chunli.jpg') },
    { id: '4', name: 'Luke', image: require('../assets/images/luke.jpg') },
    { id: '5', name: 'Jamie', image: require('../assets/images/jamie.jpg') },
    { id: '6', name: 'Guile', image: require('../assets/images/guile.jpg') },
    { id: '7', name: 'Kimberly', image: require('../assets/images/kimberly.jpg') },
    { id: '8', name: 'Juri', image: require('../assets/images/juri.jpg') },
    { id: '9', name: 'Blanka', image: require('../assets/images/blanka.jpg') },
    { id: '10', name: 'Dhalsim', image: require('../assets/images/dhalsim.jpg') },
    { id: '11', name: 'Kimberly', image: require('../assets/images/kimberly.jpg') },
    { id: '12', name: 'Juri', image: require('../assets/images/juri.jpg') },
    { id: '13', name: 'Blanka', image: require('../assets/images/blanka.jpg') },
    { id: '9', name: 'E. Honda', image: require('../assets/images/ehonda.jpg') },
    { id: '10', name: 'Dee Jay', image: require('../assets/images/deejay.jpg') },
    { id: '11', name: 'Manon', image: require('../assets/images/manon.jpg') },
    { id: '12', name: 'Marisa', image: require('../assets/images/marisa.jpg') },
    { id: '13', name: 'JP', image: require('../assets/images/jp.jpg') },
    { id: '1', name: 'Zangief', image: require('../assets/images/zangief.jpg') },
    { id: '2', name: 'Lily', image: require('../assets/images/lily.jpg') },
    { id: '3', name: 'Cammy', image: require('../assets/images/cammy.jpg') },
    { id: '4', name: 'Rashid', image: require('../assets/images/rashid.jpg') },
    { id: '5', name: 'A.K.I', image: require('../assets/images/aki.jpg') },
    { id: '6', name: 'Ed', image: require('../assets/images/ed.jpg') },
    { id: '7', name: 'Akuma', image: require('../assets/images/akuma.jpg') },
    { id: '8', name: 'M. Bison', image: require('../assets/images/mbison.jpg') },
    { id: '9', name: 'Terry', image: require('../assets/images/terry.jpg') },

    
  ],
  'Tekken 8': [
    { id: '1', name: 'Jin', image: require('../assets/images/jin.jpg') },
    { id: '2', name: 'Kazuya', image: require('../assets/images/kazuya.jpg') },
    { id: '3', name: 'Paul', image: require('../assets/images/paul.jpg') },
  ],
  'Granblue Fantasy: Versus': [
    { id: '1', name: 'Gran', image: require('../assets/images/gran.jpg') },
    { id: '2', name: 'Lancelot', image: require('../assets/images/lancelot.jpg') },
    { id: '3', name: 'Ferry', image: require('../assets/images/ferry.jpg') },
  ],
};

export default function CharacterScreen({ route, navigation }) {
  const { game } = route.params;
  const gameCharacters = characters[game.name];

  const handleCharacterSelect = (character) => {
    navigation.navigate('MoveList', { character });
  };

  return (
    <View style={styles.container}>
      <Navbar />
      <Text style={styles.header}>Characters from {game.name}</Text>
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => navigation.goBack()}
      >
        <Text style={styles.backButtonText}>Go Back</Text>
      </TouchableOpacity>

      <FlatList
        data={gameCharacters}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => handleCharacterSelect(item)}>
            <View style={styles.card}>
              <Image source={item.image} style={styles.image} />
              <Text style={styles.text}>{item.name}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: '#121212' },
  header: { fontSize: 20, fontWeight: 'bold', color: '#fff', marginBottom: 16 },
  card: { marginBottom: 16, borderRadius: 8, overflow: 'hidden', backgroundColor: '#1e1e1e' },
  image: { width: '100%', height: 150 },
  text: { padding: 8, fontSize: 18, fontWeight: 'bold', color: '#fff', textAlign: 'center' },
  backButton: {
    backgroundColor: '#007bff', 
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 5,
    width: 95,
    marginBottom: 20,
  },
  backButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
