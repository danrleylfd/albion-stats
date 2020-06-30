import { Feather } from '@expo/vector-icons';
import { useNavigation, useTheme } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { FlatList, Text, TouchableOpacity, View } from 'react-native';

import Header from '../../components/Header';
import getStyles from '../../global/styles/feed';
import api from '../../services/api';

export default function GoldWatch() {
  const [loading,setLoading] = useState(false);
  const [history, setHistory] = useState([]);
  async function loadHistory() {
    if(loading) return;
    function formatTimestamp(timestamp) {
      const [date,time] = timestamp.split("T");
      const [year,month,day] = date.split("-");
      const [hour,minute,_] = time.split(":");
      return `${day}/${month}/${year} às ${hour}:${minute}`;
    }
    setLoading(true);
    const { data } = await api.get('/gold', { params: {} });
    data.map(item => item.timestamp = formatTimestamp(item.timestamp));
    const history = [...data];
    setHistory(history.reverse());
    setLoading(false);
  }
  useEffect(() => {
    loadHistory();
  }, []);
  const Theme = useTheme();
  const styles = getStyles();
  const navigation = useNavigation();
  const navigateToDetail = (data) => navigation.navigate('Detail', { data });
  return (
    <View style={[styles.container]}>
      <Header />
      <FlatList
        data={history}
        style={styles.cardList}
        keyExtractor={(_, pos) => pos.toString()}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.cardTitle}>{item.price} Pratas</Text>
            <Text style={[styles.cardDescription, { marginBottom: "auto" }]}>{item.timestamp}</Text>
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
