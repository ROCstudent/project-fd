import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, SafeAreaView, ActivityIndicator } from 'react-native';
import Navbar from '../screens/Navbar';
import { useNavigation } from '@react-navigation/native'; // Remove this import
import { Image as ExpoImage } from 'expo-image'; // Import from expo-image

const games = [
  { id: '1', name: 'Street Fighter 6', image: require('../assets/images/sf6.jpg') },
  { id: '2', name: 'Tekken 8', image: require('../assets/images/tekken8.jpg') },
  { id: '3', name: 'Granblue Fantasy: Versus', image: require('../assets/images/gbvs.jpg') },
  { id: '4', name: 'Undernight In-birth 2', image: require('../assets/images/uni2.jpg') },
  { id: '5', name: 'Mortal Kombat 1', image: require('../assets/images/mortalkombat1.jpg') },
  { id: '6', name: 'Guilty Gear Strive', image: require('../assets/images/GG.jpg') },
  { id: '7', name: 'KOF XV', image: require('../assets/images/KOF.jpg') },
  { id: '8', name: 'Marvel vs Capcom', image: require('../assets/images/mvc2.png') },
];

export default function WelcomeScreen({ navigation }) {
  const [isLoading, setIsLoading] = useState(false); // Loading state

  const handleGameSelect = (game) => {
    setIsLoading(true); // Set loading state to true
    setTimeout(() => {
      navigation.navigate('Characters', { game });
      setIsLoading(false); // Set loading state to false after loading
    }, 1500); // Simulate loading time (1.5 seconds)
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        {isLoading ? (
          // Show loading screen
          <View style={styles.loadingContainer}>
            <ActivityIndicator size="large" color="#45559E" />
            <ExpoImage source={require('../assets/images/loading.png')} style={styles.loadingImage} />
          </View>
        ) : (
          // Show game selection screen
          <View style={styles.gridContainer}>
            {games.map((item) => (
              <TouchableOpacity key={item.id} onPress={() => handleGameSelect(item)} style={styles.card}>
                <ExpoImage source={item.image} style={styles.image} contentFit="cover" />
                <Text style={styles.text}>{item.name}</Text>
              </TouchableOpacity>
            ))}
          </View>
        )}
      </View>

      {/* Navbar outside the main container */}
      <Navbar />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#121212', // Ensures full black background
  },
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#121212',
    paddingBottom: 60,
  },
  gridContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  card: {
    width: '48%',
    marginBottom: 16,
    borderRadius: 10,
    overflow: 'hidden',
    backgroundColor: '#1e1e1e',
    padding: 10,
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
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#121212',
  },
  loadingText: {
    marginTop: 10,
    color: '#45559E',
    fontSize: 18,
  },
  loadingImage: {
    width: 50,
  },
  loadingImage: {
    width: 100,  // Smaller width
    height: 100, // Smaller height
    resizeMode: 'contain', // Maintain aspect ratio
  },
});
