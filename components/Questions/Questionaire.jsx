import { useState } from 'react';

import { View, Text, Pressable, StyleSheet } from 'react-native';
import { Image } from 'expo-image';
import { router } from 'expo-router';
import questionDog from '../../assets/images/questionDog.png';

const Questionaire = () => {
  const daysOfWeek = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];
  const answers = [
    {
      text: 'It was great!',
      value: 4,
      style: '1',
    },
    {
      text: 'It was good.',
      value: 3,
      style: '2',
    },
    {
      text: 'It was all right.',
      value: 2,
      style: '3',
    },
    {
      text: 'It was tough.',
      value: 1,
      style: '4',
    },
  ];

  const today = new Date();
  const year = today.getFullYear();
  const month = today.getMonth() + 1;
  const day = today.getDate();
  const dayOfWeekIndex = today.getDay();
  const dayOfWeek = daysOfWeek[dayOfWeekIndex];

  const formattedDate = `${month}/${day}/${year} ${dayOfWeek}`;
  const handleOnPress = (score) => {
    if (score === 1) {
      router.push('bad');
    } else if (score === 2) {
      router.push('fine');
    } else if (score === 3) {
      router.push('good');
    } else {
      router.push('greatday');
    }
  };
  const answerBoxes = (box, index) => {
    return (
      <Pressable key={index} onPress={() => handleOnPress(box.value)}>
        <View
          style={[
            box.style == 1 && styles.questionBox1,
            box.style == 2 && styles.questionBox2,
            box.style == 3 && styles.questionBox3,
            box.style == 4 && styles.questionBox4,
          ]}
        >
          <Text style={styles.questionText}>{box.text}</Text>
        </View>
      </Pressable>
    );
  };
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View>
          <Image
            source={questionDog}
            style={{
              width: 146.46,
              height: 88.78,
            }}
          />
        </View>
        <Text style={styles.description}>HOW WAS YOUR DAY?</Text>
        <View style={styles.dateBorder}>
          <Text style={styles.dateText}>{formattedDate}</Text>
        </View>
      </View>
      <View style={styles.questionList}>
        {answers.map((el, index) => {
          return answerBoxes(el, index);
        })}
      </View>
    </View>
  );
};

export default Questionaire;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginVertical: 100,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  header: {
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 10,
  },
  dateBorder: {
    backgroundColor: 'rgba(220, 216, 208, 1)',
    borderWidth: 1,
    borderRadius: 7,
    height: 32,
    justifyContent: 'center',
    padding: 5,
    width: 180,
    paddingHorizontal: 7,
    marginTop: 1,
  },
  dateText: {
    fontWeight: '400',
    textAlign: 'center',
    color: '#787878',
  },
  description: {
    fontSize: 24,
    lineHeight: 22.21,
    marginTop: 15,
    fontWeight: '400',
    textAlign: 'center',
  },
  questionList: {
    justifyContent: 'space-between',
    gap: 15,
  },
  questionBox1: {
    borderRadius: 8,
    backgroundColor: '#CBDBCF',
    height: 77,
    width: 304,
    justifyContent: 'center',
  },
  questionBox2: {
    borderRadius: 8,
    backgroundColor: '#CEDBD8',
    height: 77,
    width: 304,
    justifyContent: 'center',
  },
  questionBox3: {
    borderRadius: 8,
    backgroundColor: '#DCE2E3',
    height: 77,
    width: 304,
    justifyContent: 'center',
  },
  questionBox4: {
    borderRadius: 8,
    backgroundColor: '#E1E1E1',
    height: 77,
    width: 304,
    justifyContent: 'center',
  },
  questionText: {
    fontWeight: '400',
    fontSize: 24,
    lineHeight: 22.21,
    textAlign: 'center',
  },
});
