import React from 'react';
import { View, Text, Image, StyleSheet, Dimensions } from 'react-native';
import { Cat } from '@/types/cattypes';

interface CatCardProps {
  cat: Cat;
}

const { width } = Dimensions.get('window');
const CARD_WIDTH = width * 0.88;

export const CatCard: React.FC<CatCardProps> = React.memo(({ cat }) => (
  <View style={styles.card}>
    <Image
      source={{ uri: cat.image?.url }}
      style={styles.image}
      resizeMode='cover'
    />
    <View style={styles.infoContainer}>
      <Text style={styles.breed}>{cat.name}</Text>
      <Text style={styles.origin}>{cat.origin}</Text>
    </View>
  </View>
));

const styles = StyleSheet.create({
  card: {
    width: CARD_WIDTH,
    borderRadius: 20,
    overflow: 'hidden',
    backgroundColor: '#fff',
    elevation: 3,
    shadowColor: '#aaa',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.17,
    shadowRadius: 12,
    alignSelf: 'center',
    marginVertical: 24
  },
  image: {
    width: '100%',
    height: CARD_WIDTH,
    backgroundColor: '#eee'
  },
  infoContainer: {
    padding: 18,
    backgroundColor: 'white',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20
  },
  breed: {
    fontSize: 21,
    fontWeight: 'bold',
    marginBottom: 4,
    color: '#222'
  },
  origin: {
    fontSize: 15,
    color: '#888'
  }
});
