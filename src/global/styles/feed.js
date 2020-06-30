import { useTheme } from '@react-navigation/native';
import Constants from 'expo-constants';
import { StyleSheet } from 'react-native';

export default function getStyles() {
  const Theme = useTheme();
  return StyleSheet.create({
    container: {
      flex: 1,
      paddingHorizontal: 24,
      paddingTop: Constants.statusBarHeight + 20,
      backgroundColor: Theme.colors.background,
    },
    header: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    headerText: {
      fontFamily: 'Rubik-Regular',
      fontSize: 15,
      color: Theme.colors.secondaryText,
    },
    headerTextBold: {
      fontFamily: 'Rubit-Regular',
      fontWeight: 'bold',
    },
    headerAction: {
      fontFamily: 'Rubik-Regular',
      fontSize: 15,
      color: Theme.colors.primaryNegative,
    },
    title: {
      fontFamily: 'Rubik-Regular',
      fontSize: 30,
      marginBottom: 16,
      marginTop: 48,
      color: Theme.text,
      fontWeight: 'bold',
    },
    description: {
      fontFamily: 'Rubik-Regular',
      fontSize: 16,
      lineHeight: 24,
      color: Theme.colors.secondaryText,
    },
    search: {
      width: '83%',
      height: 60,
      backgroundColor: Theme.colors.card,
      color: Theme.colors.primaryText,
      borderRadius: 10,
      marginTop: 32,
      marginBottom: -24,
      marginHorizontal: 4,
      paddingVertical: 8,
      paddingHorizontal: 24,
      fontSize: 16,
    },
    cardList: {
      marginTop: 32,
    },
    card: {
      padding: 24,
      borderRadius: 8,
      backgroundColor: Theme.colors.card,
      marginVertical: 8,
    },
    cardTitle: {
      fontFamily: 'Rubik-Regular',
      fontSize: 14,
      color: Theme.colors.primaryText,
      fontWeight: 'bold',
    },
    cardDescription: {
      fontFamily: 'Rubik-Regular',
      marginTop: 8,
      fontSize: 15,
      marginBottom: 24,
      color: Theme.colors.secondaryText,
    },
    cardAction: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    cardActionLabel: {
      fontFamily: 'Rubik-Regular',
      color: Theme.colors.primary,
      fontSize: 15,
      fontWeight: 'bold',
    }
  });
}
