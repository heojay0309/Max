import { useState } from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import { router, Stack } from 'expo-router';
import Questionaire from '../components/Questions/Questionaire';

const DailyPage = () => {
  return (
    <View style={styles.container}>
      <Questionaire />
    </View>
  );
};

export default DailyPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#EDECE6',
  },
});
