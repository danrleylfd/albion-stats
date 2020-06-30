import { Feather } from '@expo/vector-icons';
import { useNavigation, useTheme } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { TextInput, Image, FlatList, Text, TouchableOpacity, View } from 'react-native';

import Header from '../../components/Header';
import getStyles from '../../global/styles/feed';
import api from '../../services/api';

export default function MarketWatch() {
  const [loading,setLoading] = useState(false);
  const [item,setItem] = useState("T1_WOOD");
  const [prices, setPrices] = useState([]);
  async function loadPrices() {
    if(loading) return;
    setLoading(true);
    const { data: prices } = await api.get(`/prices/${item}`, { params: {} });
    setPrices(prices);
    setLoading(false);
  }
  useEffect(() => {
    loadPrices();
  }, []);
  const Theme = useTheme();
  const styles = getStyles();
  const navigation = useNavigation();
  const navigateToDetail = (data) => navigation.navigate('Detail', { data });
  return (
    <View style={[styles.container]}>
      <Header />
      <View style={{ width: '100%', flexDirection: 'row', alignContent: "space-between", justifyContent: "center" }}>
        <TextInput
          style={styles.search}
          placeholder="Digite o nome do item"
          value={item}
          autoCorrect={false}
          onChangeText={(item) => setItem(item.toUpperCase())}
        />
        <TouchableOpacity
          style={[styles.search,styles.cardAction, { width: 65, height: 60 }]}
          onPress={() => loadPrices()}
        >
          <Feather name='search' size={16} color={Theme.colors.primary} />
        </TouchableOpacity>
      </View>
      <FlatList
        data={prices}
        style={styles.cardList}
        keyExtractor={(_, pos) => pos.toString()}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <View style={[styles.card,{ flexDirection: "column" }]}>
            <Image
              source={{ uri: `https://render.albiononline.com/v1/item/${item.item_id}` }}
              style={{ width: 48, height: 48 }}
            />
            <Text style={styles.cardTitle}>{item.city}</Text>
            <Text style={[styles.cardDescription, { marginBottom: 0 }]}>Pedidos de Venda variam entre ${item.sell_price_min} e ${item.sell_price_max}.</Text>
            <Text style={[styles.cardDescription, { marginBottom: 0 }]}>Pedidos de Compra variam entre ${item.buy_price_min} e ${item.buy_price_max}.</Text>
            {/* <TouchableOpacity
              style={styles.cardAction}
              onPress={() => navigateToDetail(item)}
            >
              <Text style={styles.cardActionLabel}>Detalhes</Text>
              <Feather name='arrow-right' size={16} color={Theme.colors.primary} />
            </TouchableOpacity> */}
          </View>
        )}
      />
    </View>
  );
}
