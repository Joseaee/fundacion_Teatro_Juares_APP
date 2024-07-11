import React, { useState } from 'react';
import { View, StyleSheet, ScrollView, Text as RNText } from 'react-native';
import Svg, { Rect, Text } from 'react-native-svg';
import Sofa from '../../../assets/icons/sofa.svg'

const SeatingChart = () => {
  const [selectedArea, setSelectedArea] = useState(null);

  const areas = [
    { id: 'Patio', x: 10, y: 110, width: 280, height: 80, color: 'lightgray', label: 'Patio' },
    { id: 'PalcosIzq', x: 10, y: 60, width: 60, height: 40, color: 'lightgray', label: 'Palcos Izq' },
    { id: 'PalcosDer', x: 230, y: 60, width: 60, height: 40, color: 'lightgray', label: 'Palcos Der' },
    { id: 'Galeria', x: 10, y: 10, width: 280, height: 40, color: 'lightgray', label: 'Galería' },
  ];

  const seats = {
    Patio: Array.from({ length: 50 }, (_, i) => `Patio-${i + 1}`),
    PalcosIzq: Array.from({ length: 20 }, (_, i) => `PalcosIzq-${i + 1}`),
    PalcosDer: Array.from({ length: 20 }, (_, i) => `PalcosDer-${i + 1}`),
    Galeria: Array.from({ length: 30 }, (_, i) => `Galeria-${i + 1}`),
  };

  const handlePress = (areaId) => {
    setSelectedArea(areaId);
  };

  return (
    <View style={styles.container}>
      <Svg height="200" width="300">
        {areas.map((area) => (
          <Rect
            key={area.id}
            x={area.x}
            y={area.y}
            width={area.width}
            height={area.height}
            fill={selectedArea === area.id ? 'blue' : area.color}
            stroke="black"
            strokeWidth="2"
            onPress={() => handlePress(area.id)}
          />
        ))}
        {areas.map((area) => (
          <Text
            key={`${area.id}-label`}
            x={area.x + area.width / 2}
            y={area.y + area.height / 2}
            fontSize="16"
            fill="black"
            textAnchor="middle"
            alignmentBaseline="middle"
          >
            {area.label}
          </Text>
        ))}
      </Svg>
      {/* {selectedArea && (
        <ScrollView style={styles.seatsContainer}>
          <RNText style={styles.seatsTitle}>Asientos en {selectedArea}:</RNText>
          <View style={styles.seatsGrid}>
            {seats[selectedArea].map((seat, index) => (
              <View key={seat} style={styles.seat}>
                <Sofa color="black" size={12} />
                <RNText>{`A${index}`}</RNText>
              </View>
            ))}
          </View>
        </ScrollView>
      )} */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 50,
  },
  seatsContainer: {
    marginTop: 20,
    width: '100%',
    maxHeight: 206,
  },
  seatsTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  seatsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: 4
  },
  seat: {
    width: 25,
    height: 25, // Aumentado para dar espacio a la silla y el texto
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 5,
    marginTop: 5,
    marginBottom: 10
  },
});

export default SeatingChart;
