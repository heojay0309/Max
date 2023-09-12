import { useState, useEffect } from 'react';

import {
  View,
  Text,
  Pressable,
  StyleSheet,
  Modal,
  TextInput,
  Button,
  ScrollView,
} from 'react-native';

import { Image } from 'expo-image';
import questionDog from '../../assets/images/questionDog.png';
import StarRating from 'react-native-star-rating';
import { Foundation } from '@expo/vector-icons';

const PhysicalCheck = () => {
  const [isModalVisible, setModalVisible] = useState(false);
  const [inputValue, setInputValue] = useState('');

  const currentCards = [
    {
      text: 'DRANK 8 CUPS OF WATER',
      starRating: 0,
    },
    {
      text: 'WORKED OUT FOR 30 MIN',
      starRating: 0,
    },
    {
      text: 'ATE VITAMINS',
      starRating: 0,
    },
    {
      text: 'SAID NO TO SUGARY DRINKS',
      starRating: 0,
    },
  ];

  const [cards, setCards] = useState(currentCards);

  const handleAddMore = () => {
    setModalVisible(!isModalVisible);
  };

  const onStarRatingPress = (index, rating) => {
    const updatedCards = [...cards];
    updatedCards[index].starRating = rating;
    setCards(updatedCards);
  };

  const handleSubmit = () => {
    const addNewCard = {
      text: inputValue,
      starRating: 0,
    };
    setCards([...cards, addNewCard]);
    handleAddMore();
  };

  const handleInputChange = (text) => {
    setInputValue(text);
  };

  const answerBoxes = (box, index) => {
    return (
      <View style={styles.boxCard}>
        <View style={styles.boxes}>
          <Text style={styles.questionText}>{box.text}</Text>
        </View>
        <StarRating
          disabled={false}
          maxStars={5}
          rating={cards[index].starRating}
          selectedStar={(rating) => onStarRatingPress(index, rating)}
          starSize={20}
          fullStarColor={'gold'}
          iconSet={'Ionicons'}
          emptyStar={'ios-star-outline'}
          fullstar={'ios-star'}
          animation={'flash'}
        />
      </View>
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
        <Text style={styles.description}>TELL ME ABOUT IT!</Text>
        <View>
          <Text style={styles.dateText}>PHYSICAL & INTELLECTUAL</Text>
        </View>
      </View>
      <ScrollView>
        <View style={styles.questionList}>
          {cards.map((el, index) => {
            return (
              <View key={index} style={styles.row}>
                {answerBoxes(el, index)}
              </View>
            );
          })}
          <Pressable style={styles.addMore} onPress={handleAddMore}>
            <Foundation name="plus" size={24} color="black" />
            <Text style={styles.addMoreText}>ADD MORE</Text>
          </Pressable>
        </View>
      </ScrollView>
      <Modal animationType="slide" transparent={true} visible={isModalVisible}>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.EnterText}>What would you like to add?</Text>
            <TextInput
              style={styles.input}
              value={inputValue}
              onChangeText={handleInputChange}
            />
            <Button title="Submit" onPress={handleSubmit} color={'black'} />
            <Button title="Close" onPress={handleAddMore} color={'black'} />
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default PhysicalCheck;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 100,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  header: {
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 10,
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
    flexDirection: 'row',
    gap: 5,
    flexWrap: 'wrap',
    marginHorizontal: 27,
  },
  row: {
    width: '48%',
    alignItems: 'center',
  },
  boxCard: {
    justifyContent: 'center',
    padding: 20,
    alignItems: 'center',
  },
  boxes: {
    borderRadius: 10,
    width: 122,
    height: 122,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    padding: 20,
    marginBottom: 10,
  },
  questionText: {
    fontWeight: '600',
    fontSize: 15,
    textTransform: 'uppercase',
    letterSpacing: -0.41,
    textAlign: 'center',
  },
  addMore: {
    borderRadius: 10,
    backgroundColor: '#DCD8D0',
    width: 122,
    height: 122,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 30,
    marginVertical: 20,
    gap: 5,
    padding: 20,
  },
  addMoreText: {
    fontWeight: '400',
    fontSize: 15,
    lineHeight: 22.21,
    letterSpacing: -0.41,
    textAlign: 'center',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: '#DCD8D0',
    padding: 20,
    borderRadius: 10,
    elevation: 5,
    width: 300,
  },
  EnterText: {
    textAlign: 'left',
    fontSize: 17,
    fontWeight: '700',
    textAlign: 'center',
    marginBottom: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    backgroundColor: 'white',
    padding: 8,
    borderRadius: 5,
    marginBottom: 10,
    marginTop: 10,
  },
});
