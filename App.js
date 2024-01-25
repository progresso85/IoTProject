import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import Sound from 'react-native-sound';

const App = () => {
  const [inputText, setInputText] = useState('');

  // Chargez le son lors du montage du composant
  const sound = new Sound('your_sound_file.mp3', Sound.MAIN_BUNDLE, (error) => {
    if (error) {
      console.error('Impossible de charger le son', error);
    }
  });

  // Fonction pour jouer le son
  const playSound = () => {
    // Rembobinez le son au début avant de le jouer
    sound.stop(() => sound.play());
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Entrez votre message"
        onChangeText={(text) => setInputText(text)}
        value={inputText}
      />
      <Text>{`Bonjour ${inputText} !`}</Text>
      <View style={styles.buttonContainer}>
        <Button title="Yes" onPress={playSound} />
        <Button title="No" />
      </View>
    </View>
  );
};

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
    marginTop: 20,
  },
});

export default App;
