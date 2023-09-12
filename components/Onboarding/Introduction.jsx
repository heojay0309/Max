import { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  KeyboardAvoidingView,
  ScrollView,
} from 'react-native';
import { Image } from 'expo-image';
import DropDownPicker from 'react-native-dropdown-picker';
import welcome from '../../assets/images/welcome.png';

const Introduction = () => {
  const [age, setAge] = useState('');
  const [optionOpen, setOptionOpen] = useState(false);
  const [gender, setGender] = useState(null);
  const [options, setOptions] = useState([
    { label: 'Male', value: 'male' },
    { label: 'Female', value: 'female' },
  ]);

  return (
    <KeyboardAvoidingView style={{ flex: 1 }} keyboardVerticalOffset={100}>
      <ScrollView>
        <View style={styles.container}>
          <Image
            source={welcome}
            style={{
              width: 158.67,
              height: 151.91,
            }}
          />
          <View style={styles.description}>
            <Text style={styles.descriptionText1}>HELLO, JAY. I'M MAX.</Text>
            <Text style={styles.descriptionText}>
              Mind telling me a bit more about you?
            </Text>
          </View>
          <View style={styles.questions}>
            <TextInput
              placeholder="YOUR AGE"
              value={age}
              onChangeText={(text) => setAge(text)}
              style={styles.input}
              placeholderTextColor={'#c3c3c3'}
            />
            <DropDownPicker
              open={optionOpen}
              value={gender}
              items={options}
              setOpen={setOptionOpen}
              setValue={setGender}
              setItems={setOptions}
              placeholder="GENDER"
              placeholderStyle={{
                color: '#c3c3c3',
                textAlign: 'center',
                paddingLeft: 18,
              }}
              containerStyle={styles.dropdownContainer}
              style={styles.dropdown}
            />
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default Introduction;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginVertical: 100,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  description: {
    marginTop: 50,
    gap: 18,
    flexWrap: 'nowrap',
  },
  descriptionText1: {
    fontSize: 25,
    fontWeight: '500',
    textAlign: 'center',
  },
  descriptionText: {
    fontSize: 18,
    fontWeight: '300',
    fontStyle: 'italic',
    textAlign: 'center',
  },
  questions: {
    padding: 30,
    margin: 10,
    gap: 14,
  },
  input: {
    backgroundColor: 'white',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#E0E0E0',
    height: 50,
    textAlign: 'center',
  },
  dropdownContainer: {
    height: 40,
  },
  dropdown: {
    backgroundColor: 'white',
    borderColor: '#E0E0E0',
    borderWidth: 1,
    borderRadius: 8,
  },
});
