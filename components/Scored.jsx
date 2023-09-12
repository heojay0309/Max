import { useState } from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';
import { Image } from 'expo-image';
import goodnight from '../assets/images/goodnight.png';
import { LinearGradient } from 'expo-linear-gradient';

const Scored = () => {
  return (
    <View style={styles.container}>
      <View>
        <Text
          style={{
            textAlign: 'center',
            fontSize: 24,
            fontWeight: '400',
          }}
        >
          YOUR LAST WEEK
        </Text>
      </View>
      <View style={{ gap: 20 }}>
        <View style={styles.threeScores}>
          <View style={{ gap: 10 }}>
            <Text
              style={{ textAlign: 'center', fontSize: 14, fontWeight: '600' }}
            >
              PHYSICAL
            </Text>
            <View style={styles.circle}>
              <Text
                style={{
                  textAlign: 'center',
                  fontSize: 24,
                  fontWeight: '400',
                  color: 'white',
                }}
              >
                3.25
              </Text>
            </View>
          </View>
          <View style={{ gap: 10 }}>
            <Text
              style={{ textAlign: 'center', fontSize: 14, fontWeight: '600' }}
            >
              MENTAL
            </Text>
            <View
              style={[
                styles.circle,
                { backgroundColor: 'rgba(203, 186, 191, 0.67)' },
              ]}
            >
              <Text
                style={{
                  textAlign: 'center',
                  fontSize: 24,
                  fontWeight: '400',
                  color: 'white',
                }}
              >
                4.7
              </Text>
            </View>
          </View>
          <View style={{ gap: 10 }}>
            <Text
              style={{ textAlign: 'center', fontSize: 14, fontWeight: '600' }}
            >
              FINANCIAL
            </Text>
            <View
              style={[
                styles.circle,
                { backgroundColor: 'rgba(215, 206, 158, 0.67)' },
              ]}
            >
              <Text
                style={{
                  textAlign: 'center',
                  fontSize: 24,
                  fontWeight: '400',
                  color: 'white',
                }}
              >
                4.5
              </Text>
            </View>
          </View>
        </View>
        <View style={{ alignItems: 'center', gap: 10 }}>
          <Text
            style={{ textAlign: 'center', fontSize: 24, fontWeight: '500' }}
          >
            CURRENT SCORE
          </Text>
          <LinearGradient
            colors={['rgba(204,217,194,0.67)', 'rgba(155, 202, 179, 1)']}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={styles.totalScore}
          >
            <View style={styles.totalScore}>
              <Text
                style={{
                  textAlign: 'center',
                  fontSize: 48,
                  fontWeight: '400',
                  color: 'black',
                }}
              >
                4.15
              </Text>
            </View>
          </LinearGradient>
        </View>
      </View>

      <View>
        <Image
          source={goodnight}
          style={{
            height: 125,
            width: 125,
          }}
        />
      </View>
      <Text>WELL DONE.</Text>
    </View>
  );
};

export default Scored;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 50,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  threeScores: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    gap: 15,
  },
  names: {
    textAlign: 'center',
  },
  circle: {
    backgroundColor: 'rgba(186, 194, 203, 0.74)',
    width: 85,
    height: 85,
    borderRadius: 100,
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#9BCAB3',
  },
  totalScore: {
    width: 124,
    height: 124,
    borderRadius: 100,
    justifyContent: 'center',
    borderColor: '#9BCAB3',
    borderWidth: 1,

    backgroundColor:
      'linear-gradient(180deg, rgba(204, 217, 194, 0.67) 0%, #9BCAB3 100%)',
  },
  outcomeBox: {
    marginTop: 10,
    justifyContent: 'space-between',
    gap: 30,
  },
  outcomeText: {
    fontWeight: '400',
    fontSize: 24,
    lineHeight: 22.21,
    letterSpacing: -0.41,
    textAlign: 'center',
  },
  outcomeDetailText: {
    fontWeight: '400',
    fontSize: 15,
    lineHeight: 22.21,
    letterSpacing: -0.41,
    textAlign: 'center',
  },
});
