import React from 'react';
import { Button } from 'react-native';
// Imagine this uses react-native-voice under the hood
export default function VoiceButton({ onCommand }) {
  const fakeVoiceCommand = () => {
    const mockTask = 'Buy groceries'; // Simulate voice result
    onCommand(mockTask);
  };

  return <Button title="Speak Task" onPress={fakeVoiceCommand} />;
}
