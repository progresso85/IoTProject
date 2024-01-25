import { StatusBar } from 'expo-status-bar';
import { Button, Image, StyleSheet, Text, TextInput, View } from 'react-native';
import React, { useState } from 'react';

export default function App() {
  const [inputText, setInputText] = useState('');

  return (
    <View style={styles.container}>
      {/* Champ de texte */}
      <TextInput
        style={styles.input}
        placeholder="Entrez votre message"
        onChangeText={(text) => setInputText(text)}
        value={inputText}
      />

      {/* Message "Bonjour !" */}
      <Text>{`Bour ${inputText} !`}</Text>

      {/* Boutons alignés à gauche et à droite */}
      <View style={styles.buttonContainer}>
        <Button title="Yes" />
        <Button title="No" />
      </View>

      {/* Image en-dessous des boutons */}
      <Image
        source={require('C:\Users\User\OneDrive\Documents\GitHub\IoTProject\assets\Code_Morse.webp')}
        style={styles.image}
      />

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: 50,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    paddingLeft: 10,
    paddingRight: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
    marginTop: 200,  // Ajuster la marge pour déplacer les boutons plus bas
  },
  image: {
    width: 200,  // Ajustez la largeur de l'image selon vos besoins
    height: 200, // Ajustez la hauteur de l'image selon vos besoins
    marginTop: 20,  // Ajustez la marge pour déplacer l'image plus bas
  },
});



