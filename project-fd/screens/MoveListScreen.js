import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, FlatList, StyleSheet } from 'react-native';
import Collapsible from 'react-native-collapsible';
import { ExpoImage } from 'expo-image'; 

export default function MoveListScreen({ route, navigation }) {
  const { character } = route.params;

  const [isFramedataOpen, setIsFramedataOpen] = useState(false);
  const [isCalculatorOpen, setIsCalculatorOpen] = useState(false);

  const framedata = [
    { id: '1', move: 'Hadouken', damage: '60', speed: '15f', advantage: '+2' },
    { id: '2', move: 'Shoryuken', damage: '120', speed: '12f', advantage: '-3' },
    { id: '3', move: 'Tatsumaki', damage: '90', speed: '20f', advantage: '0' },
  ];

  useEffect(() => {
    setIsFramedataOpen(true);
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Move List for {character.name}</Text>

      <TouchableOpacity
        onPress={() => setIsFramedataOpen(!isFramedataOpen)}
        style={styles.accordionHeader}
      >
        <Text style={styles.accordionTitle}>Framedata</Text>
        <Text style={styles.accordionChevron}>{isFramedataOpen ? '↑' : '↓'}</Text>
      </TouchableOpacity>
      <Collapsible collapsed={!isFramedataOpen}>
        <View style={styles.accordionContent}>
          <FlatList
            data={framedata}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <View style={styles.tableRow}>
                <Text style={styles.tableCell}>{item.move}</Text>
                <Text style={styles.tableCell}>{item.damage}</Text>
                <Text style={styles.tableCell}>{item.speed}</Text>
                <Text style={styles.tableCell}>{item.advantage}</Text>
              </View>
            )}
          />
        </View>
      </Collapsible>

      <TouchableOpacity
        onPress={() => setIsCalculatorOpen(!isCalculatorOpen)}
        style={styles.accordionHeader}
      >
        <Text style={styles.accordionTitle}>Calculator (Coming Soon)</Text>
        <Text style={styles.accordionChevron}>{isCalculatorOpen ? '↑' : '↓'}</Text>
      </TouchableOpacity>
      <Collapsible collapsed={!isCalculatorOpen}>
        <View style={styles.accordionContent}>
          <Text style={styles.accordionText}>The calculator will be implemented later.</Text>
        </View>
      </Collapsible>

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
  container: { flex: 1, padding: 16, backgroundColor: '#121212' },
  header: { fontSize: 22, fontWeight: 'bold', color: '#fff', marginBottom: 16, marginTop: 50 },
  backButton: {
    backgroundColor: '#007bff',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  backButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  accordionHeader: {
    backgroundColor: '#1e1e1e',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  accordionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
  accordionChevron: {
    fontSize: 18,
    color: '#fff',
  },
  accordionContent: {
    backgroundColor: '#1e1e1e',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  accordionText: {
    color: '#fff',
    fontSize: 16,
  },
  tableRow: {
    flexDirection: 'row',
    marginBottom: 10,
    paddingVertical: 5,
    borderBottomWidth: 1,
    borderBottomColor: '#333',
  },
  tableCell: {
    flex: 1,
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
  },
});
