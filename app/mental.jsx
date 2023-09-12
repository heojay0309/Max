import { useState } from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import { router, Stack } from 'expo-router';
import MentalCheck from '../components/Questions/MentalCheck';
const tabBackgroundGradient =
  'linear-gradient(180deg, rgba(107, 167, 93, 0.53) 0%, #4E6156 100%)';

const MentalPage = () => {
  const handleOnPress = () => {
    router.push('financial');
  };

  return (
    <View style={styles.container}>
      <MentalCheck />
      <View style={styles.tabBar}>
        <Pressable onPress={() => handleOnPress()}>
          <Text style={styles.tabBarText}>NEXT</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default MentalPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#EDECE6',
  },
  tabBar: {
    justifyContent: 'center',
    width: '100%',
    height: 85,
    backgroundColor: `var(--grn-grad, ${tabBackgroundGradient})`,
  },
  tabBarText: {
    fontSize: 24,
    color: 'white',
    textAlign: 'center',
    justifyContent: 'center',
  },
});
