import React from 'react';
import { View, Text, Image, StyleSheet, Dimensions } from 'react-native';
import { Cat } from '@/types/cattypes';
import { Colors } from '@/utils/Colors';

interface CatCardProps {
  cat: Cat;
  index: number;
}

const { width } = Dimensions.get('window');
const CARD_WIDTH = width * 0.88;
const CARD_RADIUS = 22;
const FOOTER_HEIGHT = 70;

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
    height: CARD_WIDTH + 20,
    borderRadius: CARD_RADIUS,
    overflow: 'hidden',
    backgroundColor: '#fff',
    alignSelf: 'center',
    marginVertical: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 4
  },
  image: {
    width: '100%',
    height: '100%'
  },
  footer: {
    position: 'absolute',
    bottom: 0,
    left: 12,
    right: 12,
    height: FOOTER_HEIGHT,
    backgroundColor: '#fff',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,

    paddingHorizontal: 18,
    paddingVertical: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    shadowOffset: { width: 0, height: -1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 1
  },
  breed: {
    fontSize: 19,
    fontWeight: '700',
    color: Colors.dark,
    marginBottom: 2
  },
  origin: {
    fontSize: 13,
    color: Colors.grey
  },
  index: {
    fontSize: 18,
    color: Colors.dark,
    fontWeight: '700'
  }
});
