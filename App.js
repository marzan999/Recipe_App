import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, ScrollView, FlatList, Image, ImageBackground, Dimensions } from 'react-native';


export const RECIPE_NAME = [
  {
    name: 'Biriyani',
    ingedients: '\nIngedients',
    ingedient2: '\n1 kg Aromatic rice (Chinigura/kalijeera)\n1.5 kg Meat (Beef/mutton)\n1/2 cup Chopped onions\n1 tbsp each Ginger-garlic paste\n3 pcs Bay leaves\n6-7 pcs Cinnamon\n1 tbsp Dried red chili powder\n1 cup Sour yogurt\n2 tbsp Milk powder\n2/3 cup Ghee\n1 cup Vegetable/soybean oil\n10 pcs Whole green chilies\n3-4 pcs Potatoes\n1 tsp Black cumin (Shahi jeera)\n1/2 cup Crispy fried onions\n1 tbsp Sugar\nTo taste Salt',
    directions: '\nDirections',
    direction2: '\n1. Firstly the Biryani spices mix is prepared by roasting and grinding 10 pcs cardamoms, 3 pcs large cinnamon sticks, ½ tsp white pepper, ½ tsp black pepper, a whole nutmeg, 2 pcs mace and 6 pcs cloves.\n\n  2. Heat some oil in a pressure cooker, add bay leaves, cinnamon and onions and stir for a while. Add ginger-garlic pastes, chili powder and salt and stir for a while. Now add the pre-washed and properly drained meats and keep stirring to mix everything well. Add beaten yogurt and again keep stirring.\n\n  3. No need to add water in this stage since the meats releases water. When the water dries to half, add the pre-made Biryani spices mix and 1 tbsp fried onions and keep stirring for some minutes. Now add 2 cups water, cover and wait for 8 whistles.\n\n  4. Strain the meats out and set aside. Heat the remaining sauce from the meat in a large pot and add pre-washed and properly drained aromatic rice and keep stirring for 2-3 minutes to fry with the remaining sauce. Pour warm or boiled water, double of the amount of the rice. After a minute add milk powder, raisins, potato pieces (Pre-fried with turmeric powder and salt), black cumin, salt and sugar. Keep the flame low to medium high this time.\n\n5. When the water starts boiling, add the cooked meats and green chilies. Now cover and bring to a simmer till the water completely dries. Add rest of the ghee and fried onions, turn the flame off, cover and leave for half an hour. It’s ready to be served.',
    image: require('./assets/homely-ghoroa-biryani.jpg')
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
      <View style={styles.listView} >
        <Image source={item.image} style={styles.imageStyle} resizeMode='contain'/>
        <Text style={styles.topicName} style={{ fontSize: 40, textTransform: 'uppercase', fontWeight: 'bold' }} >{item.name}</Text>
        <Text style={styles.topicName} style={{ fontSize: 25, textTransform: 'uppercase', fontWeight: 'bold' }} >{item.ingedients}</Text>
        <Text style={styles.topicName} style={{ fontSize: 18}}>{item.ingedient2}</Text>
        <Text style={styles.topicName} style={{ fontSize: 25, textTransform: 'uppercase', fontWeight: 'bold' }}>{item.directions}</Text>
        <Text style={styles.topicName} style={{ fontSize: 18}}>{item.direction2}</Text>
      </View>
    );
  }


  return (
    <SafeAreaView style={styles.container}>
    <Text style={styles.headingStyle}>Recipes</Text>
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
    backgroundColor: 'orange',
    paddingTop: 40,
  },
  listView: {
    margin: 10,
    borderWidth: 1,
    padding: 10,
    borderRadius: 30,
    backgroundColor: '#DCDCDC'
  }, 
  headingStyle: {
    fontSize: 35, 
    fontWeight: 'bold', 
    alignSelf: 'center',
  }, 
  imageStyle: {
    alignSelf: 'center', 
    width: Dimensions.get('screen').width-50 , 
    height: 100, 
    paddingTop: 300, 
    borderRadius:30
  }
});