import React from 'react';
import { View, Text, Image, StyleSheet, Dimensions } from 'react-native';
import { Cat } from '@/types/cattypes';

interface CatCardProps {
  cat: Cat;
  index: number;
}

const { width } = Dimensions.get('window');
const CARD_WIDTH = width * 0.88;

export const CatCard: React.FC<CatCardProps> = ({ cat, index }) => (
  <View style={styles.card}>
    <Image
      source={{ uri: cat.image?.url }}
      style={styles.image}
      resizeMode='cover'
    />
    <View style={styles.footer}>
      <View>
        <Text style={styles.breed}>{cat.name}</Text>
        <Text style={styles.origin}>{cat.origin}</Text>
      </View>
      <Text style={styles.index}>{index}</Text>
    </View>
  </View>
);

const styles = StyleSheet.create({
  card: {
    width: CARD_WIDTH,
    borderRadius: 22,
    overflow: 'hidden',
    backgroundColor: '#fff',
    elevation: 3,
    shadowColor: '#aaa',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.14,
    shadowRadius: 16,
    alignSelf: 'center',
    marginVertical: 12
  },
  image: {
    width: '100%',
    height: CARD_WIDTH,
    backgroundColor: '#eee',
    borderTopLeftRadius: 22,
    borderTopRightRadius: 22
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 18,
    paddingVertical: 16,
    backgroundColor: '#fff',
    borderBottomLeftRadius: 22,
    borderBottomRightRadius: 22
  },
  breed: {
    fontSize: 19,
    fontWeight: 'bold',
    color: '#222',
    marginBottom: 2
  },
  origin: {
    fontSize: 13,
    color: '#bbb'
  },
  index: {
    fontSize: 18,
    color: '#222',
    fontWeight: '700'
  }
});
