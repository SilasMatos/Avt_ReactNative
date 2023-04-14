import React, { useState } from 'react';
import {
  Text,
  TextInput,
  View,
  Image,
  TouchableOpacity,
  Alert,
} from 'react-native';
import * as LocalAuthentication from 'expo-local-authentication';
import styles from './Style/Style';

export default function App() {
  const [gasPrice, setGasPrice] = useState('');
  const [ethanolPrice, setEthanolPrice] = useState('');
  const [isEthanolCheaper, setIsEthanolCheaper] = useState(false);
  const [showResult, setShowResult] = useState(false);

  const calculateCheaperFuel = async () => {
    const hasBiometricHardware = await LocalAuthentication.hasHardwareAsync();
    const isEnrolled = await LocalAuthentication.isEnrolledAsync();

    if (!hasBiometricHardware) {
      Alert.alert('Erro', 'Este dispositivo não possui autenticação biométrica.');
      return;
    }

    if (!isEnrolled) {
      Alert.alert('Erro', 'Você ainda não configurou uma autenticação biométrica neste dispositivo.');
      return;
    }

    const result = await LocalAuthentication.authenticateAsync();
    
    if (result.success) {
      if (ethanolPrice <= 0.7 * gasPrice) {
        setIsEthanolCheaper(true);
      } else {
        setIsEthanolCheaper(false);
      }
      setShowResult(true);
    } else {
      Alert.alert('Erro', 'Autenticação biométrica falhou.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Qual combustível é mais vantajoso?</Text>
      <TextInput
        style={styles.input}
        onChangeText={setGasPrice}
        value={gasPrice}
        placeholder="Preço da gasolina"
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        onChangeText={setEthanolPrice}
        value={ethanolPrice}
        placeholder="Preço do etanol"
        keyboardType="numeric"
      />
      <TouchableOpacity style={styles.button} onPress={calculateCheaperFuel}>
        <Text style={styles.buttonText}>Calcular</Text>
      </TouchableOpacity>
      {showResult && (
        <View>
          <View style={styles.resultContainer}>
            {isEthanolCheaper ? (
              <Image style={styles.resultImage} source={require('./assets/ethanol.png')} />
            ) : (
              <Image style={styles.resultImage} source={require('./assets/gasoline.png')} />
            )}
          </View>
          <Text style={styles.resultText}>
            {isEthanolCheaper ? 'Etanol' : 'Gasolina'} é mais vantajoso no momento.
          </Text>
        </View>
      )}
      <Text style={styles.footer}>Digite o preço por litro de cada combustível.</Text>
      <Text style={styles.footer}>Apenas valores numéricos.</Text>
    </View>
  );
}
