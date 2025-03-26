import { useEffect } from 'react';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { useFrameworkReady } from '@/hooks/useFrameworkReady';
import { View } from 'react-native';

export default function RootLayout() {
  try {
    useFrameworkReady();

    return (
      <View style={{ flex: 1 }}>
        <Stack
          screenOptions={{
            headerShown: false,
            animation: 'slide_from_right',
            gestureEnabled: true,
            gestureDirection: 'horizontal',
            contentStyle: { backgroundColor: 'white' }
          }}
        >
          <Stack.Screen 
            name="+not-found"
            options={{
              title: 'Not Found'
            }}
          />
        </Stack>
        <StatusBar style="auto" />
      </View>
    );
  } catch (error) {
    console.error('Layout Error:', error);
    return null;
  }
}
