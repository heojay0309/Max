import { Image } from 'expo-image';
import { View, Text, Pressable, StyleSheet } from 'react-native';
import happyDog from '../../assets/images/happyDog.png';
import cheerDog from '../../assets/images/cheerDog.png';

const Greatday = ({ props }) => {
  const score = props;
  const textDictionary = {
    1: [
      'cheerDog',
      'IT MUST HAVE BEEN TOUGH',
      `But I'm so happy you are here.
    Tired you, sad you, happy you are
    all still you, my best friend!
    You deserve a good rest.
    Let's check your day!`,
    ],
    2: [
      'cheerDog',
      'YOU WILL HAVE A BETTER DAY TOMORROW',
      `But I'm so happy you are here.
    Tired you, sad you, happy you are
    all still you, my best friend!
    You deserve a good rest.
    Let's check your day!`,
    ],
    3: [
      'happyDog',
      'YOU HAD A GOOD DAY!',
      `You are such an awesome friend
      anyone would wish for.
      Let's check your day!`,
    ],
    4: [
      'happyDog',
      'YOU HAD A GREAT DAY!',
      `You are such an awesome friend
      anyone would wish for.
      Let's check your day!`,
    ],
  };
  const dayRatings = (rating) => {
    const outcome = textDictionary[rating];

    return (
      <View>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            alignContent: 'center',
            alignItems: 'center',
            marginBottom: 25,
          }}
        >
          <Image
            source={score > 2 ? happyDog : cheerDog}
            style={
              score > 2
                ? {
                    width: 216.36,
                    height: 145.54,
                  }
                : {
                    width: 173,
                    height: 148,
                  }
            }
          />
        </View>
        <View style={styles.outcomeBox}>
          <Text style={styles.outcomeText}>{outcome[1]}</Text>
          <Text style={styles.outcomeDetailText}>{outcome[2]}</Text>
        </View>
      </View>
    );
  };

  return <View style={styles.container}>{dayRatings(score)}</View>;
};

export default Greatday;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 30,
    justifyContent: 'space-around',
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
