import React from 'react';
import { TaskProvider } from './context/TaskContext';
import AppNavigator from './navigation/AppNavigator';

export default function App() {
  return (
    <TaskProvider>
      <AppNavigator />
    </TaskProvider>
  );
}
