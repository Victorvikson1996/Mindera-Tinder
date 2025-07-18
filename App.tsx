import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList, Image } from 'react-native';
import React, { useEffect, useState } from 'react';
import { fetchCatBreeds, CatBreed } from './services/catApi';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

export default function App() {
  const [cats, setCats] = useState<CatBreed[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchCatBreeds()
      .then(setCats)
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <View style={styles.container}>
        <StatusBar style='auto' />
        <Text style={styles.title}>Cat Tinder</Text>
        {loading && <Text>Loading cats...</Text>}
        {error && <Text>Error: {error}</Text>}
        <FlatList
          data={cats}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.catCard}>
              {item.image?.url && (
                <Image
                  source={{ uri: item.image.url }}
                  style={styles.catImage}
                />
              )}
              <Text style={styles.catName}>{item.name}</Text>
              <Text style={styles.catDesc}>{item.description}</Text>
            </View>
          )}
        />
      </View>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 40,
    paddingHorizontal: 10
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20
  },
  catCard: {
    backgroundColor: '#f9f9f9',
    borderRadius: 10,
    padding: 16,
    marginBottom: 16,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2
  },
  catImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 12
  },
  catName: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8
  },
  catDesc: {
    fontSize: 14,
    color: '#555',
    textAlign: 'center'
  }
});
