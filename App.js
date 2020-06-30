import { NavigationContainer } from '@react-navigation/native';
import * as Font from 'expo-font';
import React, { useState } from 'react';
import { View } from 'react-native';
import { AppearanceProvider, useColorScheme } from 'react-native-appearance';

import Dark from './src/global/themes/dark';
import Light from './src/global/themes/light';
import Routes from './src/routes';

function useFonts(fontMap) {
  let [fontsLoaded, setFontsLoaded] = useState(false);
  (async () => {
    await Font.loadAsync(fontMap);
    setFontsLoaded(true);
  })();
  return [fontsLoaded];
}

export default function App() {
  const scheme = useColorScheme();
  const [fontsLoaded] = useFonts({
    'Rubik-Regular': require('./assets/fonts/Rubik-Regular.ttf'),
  });
  if(!fontsLoaded) return (<View />);
  return (
    <AppearanceProvider>
      <NavigationContainer theme={scheme === 'dark' ? Dark : Light}>
        <Routes />
      </NavigationContainer>
    </AppearanceProvider>
  );
}
