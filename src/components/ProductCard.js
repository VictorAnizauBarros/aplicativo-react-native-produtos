import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

const ProductCard = ({ product, onPress }) => {
  return (
    <View style={styles.card}>
      <View style={styles.imageContainer}>
        <Image source={{ uri: product.thumbnail }} style={styles.image} />
      </View>
      <Text style={styles.title}>{product.title}</Text>
      <Text style={styles.price}>R$ {product.price}</Text>
      <TouchableOpacity style={styles.button} onPress={() => onPress(product)}>
        <Text style={styles.buttonText}>DETALHES</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  card: { 
    backgroundColor: '#007BFF', 
    padding: 15, 
    margin: 10, 
    borderRadius: 10, 
    alignItems: 'center',
    width: 170, 
    overflow: 'hidden'
  },
  imageContainer: {
    width: 140,
    height: 140,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#333', 
    borderRadius: 5,
    overflow: 'hidden'
  },
  image: { 
    width: '100%', 
    height: '100%', 
    resizeMode: 'contain' 
  },
  title: { 
    color: '#fff', 
    fontSize: 14, 
    fontWeight: 600, 
    marginVertical: 5,
    textAlign: 'center' 
  },
  price: { 
    color: 'lightgreen', 
    fontSize: 14, 
    fontWeight: 'bold'
  },
  button: { 
    backgroundColor: '#FF9800', 
    padding: 10, 
    borderRadius: 5, 
    marginTop: 10, 
    width: '100%' 
  },
  buttonText: { 
    color: '#fff', 
    fontWeight: 'bold', 
    textAlign: 'center' 
  }
});

export default ProductCard;