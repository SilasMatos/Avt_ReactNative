import React, { useState, useRef } from 'react';
import { View, TextInput, Text, StyleSheet, Animated } from 'react-native';

function InputScreen() {
  const [text, setText] = useState('');
  const [showAlert, setShowAlert] = useState(false);

  const alertOpacity = useRef(new Animated.Value(0)).current;

  const handleTextChange = (text) => {
    setText(text);
    if (text.toLowerCase().includes('ok')) {
      setShowAlert(true);
      Animated.timing(alertOpacity, {
        toValue: 1,
        duration: 500,
        useNativeDriver: true,
      }).start(() => {
        Animated.timing(alertOpacity, {
          toValue: 0,
          duration: 500,
          delay: 1000,
          useNativeDriver: true,
        }).start(() => {
          setShowAlert(false);
        });
      });
    } else {
      setShowAlert(false);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Digite algo:</Text>
      <TextInput
        style={styles.input}
        value={text}
        onChangeText={handleTextChange}
      />
      {showAlert && (
        <Animated.View style={[styles.alert, { opacity: alertOpacity }]}>
          <Text style={styles.alertText}>Isso com certeza é verdade!</Text>
        </Animated.View>
      )}
      <Text style={styles.label}>Você digitou:</Text>
      <Text style={styles.output}>{text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  label: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 20,
  },
  input: {
    height: 40,
    width: 80,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 10,
    paddingLeft: 10,
    marginTop: 10,
    marginBottom: 20,
  },
  output: {
    fontSize: 20,
    marginTop: 10,
    color: 'blue',
  },
  alert: {
    backgroundColor: 'red',
    padding: 10,
    borderRadius: 5,
    position: 'absolute',
    bottom: 10,
  },
  alertText: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default InputScreen;
