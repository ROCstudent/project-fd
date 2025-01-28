import React from 'react';
import { View, Text, FlatList, Image, TouchableOpacity, StyleSheet } from 'react-native';

const characters = [
  { id: '1', name: 'Ryu', image: require('../assets/images/ryu.jpg') },
  { id: '2', name: 'Ken', image: require('../assets/images/ken.jpg') },
  { id: '3', name: 'Chun-Li', image: require('../assets/images/chunli.jpg') },
];

export default function MoveListScreen({ route, navigation }) {
  const { character } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Move List for {character.name}</Text>
      {/* Add additional content here */}
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => navigation.goBack()}
      >
        <Text style={styles.backButtonText}>Go Back</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  backButton: {
    backgroundColor: '#007bff', // Button color
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  backButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});