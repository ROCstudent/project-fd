import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, SafeAreaView, ActivityIndicator } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import Navbar from '../screens/Navbar';
import { useNavigation } from '@react-navigation/native';
import { Image as ExpoImage } from 'expo-image';

export default function WelcomeScreen({ navigation }) {
  const [games, setGames] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // Fetch games data
  useFocusEffect(
    React.useCallback(() => {
      setIsLoading(true);
      fetch('http://192.168.1.7/project-framedata/project-fd/project-fd/db/FetchGames.php')
        .then((response) => response.json())
        .then((data) => {
          setGames(data);  // Ensure data is fresh when navigating back
          setIsLoading(false);
        })
        .catch((error) => {
          console.error('Error fetching games data:', error);
          setIsLoading(false);
        });
  
      return () => {
        setGames([]);  // Reset games when leaving the screen
      };
    }, [])
  );

  const handleGameSelect = (gameId) => {
    setIsLoading(true);
    setTimeout(() => {
      navigation.navigate('Characters', { gameId }); // Send game ID to next screen
      setIsLoading(false);
    }, 1500);
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      {/* Full-screen loading overlay */}
      {isLoading && (
        <View style={styles.loadingOverlay}>
          <ActivityIndicator size="large" color="#45559E" />
          <ExpoImage source={require('../assets/images/loading.png')} style={styles.loadingImage} />
        </View>
      )}

      <FlatList
        data={games}
        keyExtractor={(item) => item.id.toString()} // Use game ID as key
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => handleGameSelect(item.id)} style={styles.card}>
            <ExpoImage source={{ uri: `http://192.168.1.7/project-framedata/project-fd/project-fd/${item.url}` }} style={styles.image} contentFit="cover" />
            <Text style={styles.text}>{item.name}</Text>  {/* Display the game name */}
          </TouchableOpacity>
        )}
        numColumns={2}
        contentContainerStyle={styles.flatListContent} // Ensuring proper spacing and centering
        showsVerticalScrollIndicator={false} // Hide vertical scrollbar
      />
      <Navbar />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#121212', // Ensures full black background
  },
  loadingOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.8)', // Slightly transparent overlay
    zIndex: 1, // Ensure it's above the rest of the screen content
  },
  flatListContent: {
    padding: 16,
  },
  card: {
    width: '48%',
    marginBottom: 16,
    borderRadius: 10,
    overflow: 'hidden',
    backgroundColor: '#1e1e1e',
    padding: 10,
    margin: 3.5,
  },
  image: {
    width: '100%',
    height: 100,
    borderRadius: 10,
  },
  text: {
    paddingTop: 8,
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
  },
  loadingImage: {
    width: 100,  // Corrected smaller width
    height: 100, // Corrected smaller height
    resizeMode: 'contain', // Maintain aspect ratio
  },
});
