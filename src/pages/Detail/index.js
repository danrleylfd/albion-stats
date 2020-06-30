import { useNavigation, useRoute } from '@react-navigation/native';
import React from 'react';
import { Text, View } from 'react-native';

import Header from '../../components/DetailHeader';
import getStyles from '../../global/styles/feed';

export default function Detail() {
  const styles = getStyles();
  const route = useRoute();
  const { data } = route.params;
  const navigation = useNavigation();
  const navigateBack = () => navigation.goBack();
  return (
    <View style={styles.container}>
      <Header data={data} onPress={navigateBack} />
      <View style={[styles.card,styles.cardList]}>
        <Text style={[styles.cardTitle,{ marginTop: 0 }]}>Preço:</Text>
        <Text style={styles.cardDescription}>{data.price} Pratas</Text>
        <Text style={[styles.cardTitle,{ marginTop: 0 }]}>Data:</Text>
        <Text style={[styles.cardDescription, { marginTop: 8 }]}>{data.timestamp}</Text>
      </View>
    </View>
  );
}