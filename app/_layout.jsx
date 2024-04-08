import { View, Text, LogBox } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'

export default function _layout() {

    LogBox.ignoreLogs["Warning: Failed prop type"]

  return (
    <Stack
        screenOptions={{ headerShown: false}}
    >
        <Stack.Screen name="exercises" options={{prensentation:'fullScreenModal'}}/>
        <Stack.Screen name="exerciseDetails" options={{prensentation:'modal'}}/>
    </Stack>
  )
}