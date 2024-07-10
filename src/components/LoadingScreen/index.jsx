import React from 'react';
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';

const LoadingScreen = () => {

    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color="#E31734" />
        <Text style={styles.loadingText}>Cargando...</Text>
      </View>
    );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loadingText: {
    marginTop: 10,
    fontSize: 18,
  },
  loadedText: {
    fontSize: 22,
  },
});

export default LoadingScreen;
