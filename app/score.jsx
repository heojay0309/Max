import { useState } from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import { router, Stack } from 'expo-router';
import Scored from '../components/Scored';
import { LinearGradient } from 'expo-linear-gradient';

const ScorePage = () => {
  const handleOnPress = () => {
    router.push('index');
  };

  return (
    <View style={styles.container}>
      <Scored />
      <View style={styles.tabBar}>
        <LinearGradient
          colors={['rgba(43, 73, 183, 0.53)', 'rgba(167, 136, 177, 1)']}
          start={{ x: 0, y: 0 }}
          end={{ x: 0, y: 1 }}
          style={styles.tabBar}
        >
          <Pressable onPress={() => handleOnPress()}>
            <Text style={styles.tabBarText}>GOODNIGHT</Text>
          </Pressable>
        </LinearGradient>
      </View>
    </View>
  );
};

export default ScorePage;

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
    backgroundColor:
      'linear-gradient(180deg, rgba(43, 73, 183, 0.53) 0%, #A788B1 100%)',
  },
  tabBarText: {
    fontSize: 24,
    color: 'white',
    textAlign: 'center',
    justifyContent: 'center',
    fontWeight: '400',
    textShadowOffset: {
      justifyContent: 'flex-end',
    },
    textShadowRadius: 3,
  },
});
