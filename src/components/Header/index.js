import React from 'react';
import { Text, View } from 'react-native';
import getStyles from '../../global/styles/feed';

export default function Header({size = { width: 48, height: 48 }, radius = 24}) {
  const styles = getStyles();
  return (
    <View style={styles.header}>
      <View style={styles.header}>
        <Text style={[styles.headerText, { marginLeft: 8 }]}>Albion Stats</Text>
      </View>
    </View>
  );
}
