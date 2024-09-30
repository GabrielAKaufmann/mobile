import React, { useState } from 'react';
import { Text, SafeAreaView, StyleSheet, TextInput, Button, Alert, View } from 'react-native';
import { Card } from 'react-native-paper';
import AssetExample from './components/AssetExample';

export default function App() {
  const [number, setNumber] = useState('');

  const handleVerify = () => {
    const userNumber = parseInt(number);
    if (isNaN(userNumber) || userNumber < 0 || userNumber > 10) {
      Alert.alert('Erro', 'Por favor, digite um número válido entre 0 e 10.');
      return;
    }

    const randomNumber = Math.floor(Math.random() * 11); // Gera um número aleatório de 0 a 10
    if (userNumber === randomNumber) {
      Alert.alert('Resultado', 'Você acertou!');
    } else {
      Alert.alert('Resultado', `Você errou! O número era ${randomNumber}`);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Card style={styles.card}>
        <Text style={styles.title}>
          Jogo de Adivinhação
        </Text>
        <Text style={styles.paragraph}>
          Digite um número de 0 a 10 e pressione "Verificar".
        </Text>
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          placeholder="Digite um número"
          value={number}
          onChangeText={setNumber}
        />
        <View style={styles.buttonContainer}>
          <Button title="Verificar" onPress={handleVerify} color="#841584" />
        </View>
        <AssetExample />
      </Card>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#f5f5f5',
    padding: 16,
  },
  card: {
    padding: 16,
    borderRadius: 8,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 16,
    color: '#333',
  },
  paragraph: {
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 16,
    color: '#666',
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 4,
    marginBottom: 16,
    paddingHorizontal: 8,
  },
  buttonContainer: {
    marginBottom: 16,
  },
});
