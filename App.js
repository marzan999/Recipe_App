import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, ScrollView, FlatList } from 'react-native';


export const RECIPE_NAME = [
  {
    name: 'abcde',
    description: 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
  },
  {
    name: 'mnopq',
    description: 'bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb'
  },
  {
    name: 'wxyz',
    description: 'cccccccccccccccccccccccccccccccccccccccccccc'
  },
]

export default function App({ navigation, route }) {

  const renderItem = ({ item, index }) => {

    return (
      <View style={styles.listView}>
        <Text style={styles.topicName} >{item.name}</Text>
        <Text style={styles.topicName} >{item.description}</Text>
      </View>
    );
  }


  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={RECIPE_NAME}
        renderItem={renderItem}
        keyExtractor={(item, index) => item.name}
      />
      <StatusBar barStyle="light-content" />
    </SafeAreaView>
  )
}

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      paddingTop: 40,
    },
    listView: {
      margin: 10,
      borderWidth: 1,
      padding: 10,
    }
  });