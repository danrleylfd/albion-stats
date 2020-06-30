import { Feather } from '@expo/vector-icons';
import { useTheme } from '@react-navigation/native';
import React from 'react';
import { Image, TouchableOpacity, View, Text } from 'react-native';

import getStyles from '../../global/styles/feed';

export default function Header({ data, onPress, size = { width: 32, height: 48 }, radius = 4}) {
  const Theme = useTheme();
  const styles = getStyles();
  return (
    <View style={styles.header}>
      <Text style={[styles.headerText, { marginLeft: 8 }]}>Detalhes</Text>
      <Image source={{ uri: data.thumbnail }} style={{ width: size.width, height: size.height, borderRadius: radius }} />
      <TouchableOpacity onPress={onPress}>
        <Feather name='arrow-left' size={28} color={Theme.colors.primary} />
      </TouchableOpacity>
    </View>
  );
}
