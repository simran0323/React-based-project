import React, { useContext, useState } from 'react';
import { View, TextInput, Button, FlatList, StyleSheet } from 'react-native';
import { TaskContext } from '../context/TaskContext';
import TaskItem from '../components/TaskItem';
import VoiceButton from '../components/VoiceButton';

export default function HomeScreen() {
  const { tasks, addTask, toggleTask } = useContext(TaskContext);
  const [input, setInput] = useState('');

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Enter task"
        value={input}
        onChangeText={setInput}
        style={styles.input}
      />
      <Button title="Add Task" onPress={() => { addTask(input); setInput(''); }} />
      <VoiceButton onCommand={addTask} />
      <FlatList
        data={tasks}
        renderItem={({ item }) => (
          <TaskItem task={item} onToggle={() => toggleTask(item.id)} />
        )}
        keyExtractor={item => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20 },
  input: { borderWidth: 1, padding: 10, marginBottom: 10 },
});
