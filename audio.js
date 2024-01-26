import React, { useState } from 'react';
import { View, Button } from 'react-native';
import Sound from 'react-native-sound';

const AudioPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const sound = new Sound('canRoll.mp3', Sound.MAIN_BUNDLE, (error) => {
    if (error) {
      console.log('failed to load the sound', error);
      return;
    }
  });

  const togglePlayback = () => {
    if (isPlaying) {
      sound.pause();
    } else {
      sound.play((success) => {
        if (!success) {
          console.log('playback failed due to audio decoding errors');
        }
      });
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <View>
      <Button title={isPlaying ? 'Pause' : 'Play'} onPress={togglePlayback} />
    </View>
  );
};

export default AudioPlayer;