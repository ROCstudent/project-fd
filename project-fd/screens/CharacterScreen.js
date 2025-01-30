import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, ActivityIndicator, StyleSheet, SafeAreaView, TouchableOpacity } from 'react-native';
import Navbar from '../screens/Navbar';
import { Image as ExpoImage } from 'expo-image';

export default function CharacterScreen({ route, navigation }) {
  const { gameId } = route.params; // Retrieve gameId passed from WelcomeScreen
  const [gameCharacters, setGameCharacters] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // Fetch characters from the server based on the gameId
  useEffect(() => {
    const fetchCharacters = async () => {
      try {
        const response = await fetch(`http://192.168.1.7/project-framedata/project-fd/project-fd/db/FetchCharacters.php?gameId=${gameId}`);
        const data = await response.json();
        setGameCharacters(data); // Set characters from API
      } catch (error) {
        console.error('Error fetching characters:', error);
      } finally {
        setIsLoading(false);
      }
    };

    if (gameId) {
      fetchCharacters();
    }
  }, [gameId]);

  if (isLoading) {
    return <ActivityIndicator size="large" color="#45559E" style={styles.loader} />;
  }

  const renderItem = ({ item, index }) => {
    const isLastItem = index === gameCharacters.length - 1; // Check if it's the last item

    return (
      <TouchableOpacity onPress={() => navigation.navigate('MoveList', { character: item })} style={[styles.card, isLastItem && styles.lastCard]}>
        <ExpoImage source={{ uri: `http://192.168.1.7/project-framedata/project-fd/project-fd/${item.image_url}` }} style={styles.image} contentFit="cover" />
        <Text style={styles.text}>{item.name}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={gameCharacters}
        keyExtractor={(item) => item.id.toString()} // Ensure id is a string
        renderItem={renderItem}
        numColumns={2}
        showsVerticalScrollIndicator={false}  // Hide the vertical scrollbar
        contentContainerStyle={styles.gridContainer}
      />
      <Navbar />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#121212' },
  gridContainer: { flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between', padding: 16 },
  card: { width: '50%', marginBottom: 16, marginRight: 1, borderRadius: 10, overflow: 'hidden', backgroundColor: '#1e1e1e' },
  lastCard: { width: '100%' }, // Special style for the last card
  image: { width: '100%', height: 150, borderRadius: 10 },
  text: { padding: 8, fontSize: 16, fontWeight: 'bold', color: 'white', textAlign: 'center' },
  loader: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#121212' },
});
