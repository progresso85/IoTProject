import { StatusBar } from "expo-status-bar";
import { Image, StyleSheet, Text, TextInput, View } from "react-native";
import React, { useState } from "react";
import { Audio } from 'expo-av';
import { TouchableOpacity } from 'react-native';
// import AudioPlayer from "./audio.js";

export default function App() {
  const [inputText, setInputText] = useState("");
  let soundObject;

  const play = async () => {
    soundObject = new Audio.Sound();

    try {
      await soundObject.loadAsync(require('./assets/Tuning_Note_D.mp3'));
      await soundObject.playAsync();
      
      // Attendez 5 secondes (5000 millisecondes) avant d'unloadAsync
      setTimeout(async () => {
        await soundObject.unloadAsync();
      }, 1000);
    } catch (error) {
      console.error("Erreur de chargement du son:", error);
    }
  }

  return (
    <View style={styles.container}>
      {/* Champ de texte */}
      <TextInput
        style={styles.input}
        placeholder="Entrez votre message"
        onChangeText={(text) => setInputText(text)}
        value={inputText}
      />
      {/* <AudioPlayer /> */}
      {/* Boutons alignés à gauche et à droite */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={[styles.button, styles.yesButton]} onPress={() => play()}>
          <Text style={styles.buttonText}>Yes</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, styles.noButton]} onPress={() => console.log("No pressed")}>
          <Text style={styles.buttonText}>No</Text>
        </TouchableOpacity>
      </View>

      {/* Image en-dessous des boutons */}
      <Image
        source={require("./assets/Code_Morse.webp")}
        style={styles.image}
      />

      <StatusBar style="auto" />
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "flex-start",
    paddingTop: 50,
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 20,
    paddingLeft: 10,
    paddingRight: 10,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "80%",
    marginBottom: 20,
  },
  button: {
    width: "45%",
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },
  yesButton: {
    backgroundColor: "green",
  },
  noButton: {
    backgroundColor: "red",
  },
  image: {
    width: 300,
    height: 300,
    marginTop: 20,
  },
});
