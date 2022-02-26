import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, ScrollView, FlatList, Image, ImageBackground, Dimensions } from 'react-native';


export const RECIPE_NAME = [
  {
    name: 'Biriyani',
    ingedients: '\nIngedients',
    ingedient2: '\n   1 kg Aromatic rice (Chinigura/kalijeera)\n   1.5 kg Meat (Beef/mutton)\n   1/2 cup Chopped onions\n   1 tbsp each Ginger-garlic paste\n   3 pcs Bay leaves\n   6-7 pcs Cinnamon\n   1 tbsp Dried red chili powder\n   1 cup Sour yogurt\n   2 tbsp Milk powder\n   2/3 cup Ghee\n   1 cup Vegetable/soybean oil\n   10 pcs Whole green chilies\n   3-4 pcs Potatoes\n   1 tsp Black cumin (Shahi jeera)\n   1/2 cup Crispy fried onions\n   1 tbsp Sugar\n   To taste Salt',
    directions: '\nDirections',
    direction2: '\n   1. Firstly the Biryani spices mix is prepared by roasting and grinding 10 pcs cardamoms, 3 pcs large cinnamon sticks, ½ tsp white pepper, ½ tsp black pepper, a whole nutmeg, 2 pcs mace and 6 pcs cloves.\n\n   2. Heat some oil in a pressure cooker, add bay leaves, cinnamon and onions and stir for a while. Add ginger-garlic pastes, chili powder and salt and stir for a while. Now add the pre-washed and properly drained meats and keep stirring to mix everything well. Add beaten yogurt and again keep stirring.\n\n   3. No need to add water in this stage since the meats releases water. When the water dries to half, add the pre-made Biryani spices mix and 1 tbsp fried onions and keep stirring for some minutes. Now add 2 cups water, cover and wait for 8 whistles.\n\n   4. Strain the meats out and set aside. Heat the remaining sauce from the meat in a large pot and add pre-washed and properly drained aromatic rice and keep stirring for 2-3 minutes to fry with the remaining sauce. Pour warm or boiled water, double of the amount of the rice. After a minute add milk powder, raisins, potato pieces (Pre-fried with turmeric powder and salt), black cumin, salt and sugar. Keep the flame low to medium high this time.\n\n   5. When the water starts boiling, add the cooked meats and green chilies. Now cover and bring to a simmer till the water completely dries. Add rest of the ghee and fried onions, turn the flame off, cover and leave for half an hour. It’s ready to be served.',
    image: require('./assets/biriyani.jpg')
  },
  {
    name: 'Mutton Curry with Potatoes',
    ingedients: '\nIngredients',
    ingedient2: '\n  1 kg Mutton\n  4 pcs Potato\n  1/2 cup Chopped onion\n  1 tsp each Ginger-garlic paste\n  1 tsp Cumin powder\n  1 tbsp Red chili powder\n  1/2 tsp Mace-nutmeg paate\n  1 tsp Papaya paste\n  1 tsp Turmeric powder\n  As required Roasted spices powder (Cinnamon, cardamom & cumin)\n  1/2 cup Vegetable/soybean oil\n  To taste Salt\n  2 pcs Bay leaves\n  4 pcs Cloves/n1/2 tsp each Cinnamon-cardamom powders',
    directions: '\nDirections',
    direction2: '\n   1. Cut the meat into small pieces, wash and drain properly.\n\n   2. Wash and drain potatoes. Mix with some salt and a pinch of turmeric powder or alternatively saffron powder for color.\n\n   3. Now heat oil in a pan. Deep fry the potatoes till brown. Strain the potatoes to remove extra oil and set aside.\n\n   4. Now in the same oil add chopped onions, bay leaves, cloves and cook for a minute to make onions tender. No need to fry onions to brown. Add garlic and ginger pastes and stir for a while. Now add cumin powder, red chili powder, cinnamon powder, cardamom powder and some water. Mix and cook well till the spices release oil. Now add meat pieces and mix them properly. No need to add water in this stage since meat releases water. Cook for 5 minutes.\n\n   5. When the spices mix gets thick and oil separates, add mace-nutmeg pastes, papaya paste and give a nice mix. Add water and cover with the lid. Cook for 20 minutes. You can add extra water in this stage and cook for extra 5 minutes if the meat is still hard. When water is reduced to half, add turmeric powder and cook for 2 to 3 minutes.\n\n   6. Then add water as per your gravy requirement and cook with the lid. While boiling add the potatoes, again close the lid and cook for 15 to 20 minutes. When the gravy is dried to your requirement, turn the heat off and sprinkle some roasted cardamom, cumin and cinnamon powder mix. Serve warm with plain or pulao/pilaf rice, roti, paratha or naan bread.',
    image: require('./assets/photo.jpg')
  },
  {
    name: 'Chicken Pakora',
    ingedients: '\nIngredients',
    ingedient2: '\n   2 regular size boneless chicken breasts, washed and finely chopped\n   tbsp ginger paste\n   1 tsp garlic paste\n   1/2 tsp garam masala powder\n   1/2 tsp salt\n   5 green chilli, finely chopped\n   1 tbsp lime juice\n   1 medium onion, finely chopped (optional)\n   1  tbsp finely chopped cilantro\n   2 tbsp gram flour\n   Oil to fry',
    directions: '\nDirections',
    direction2: '   1. Marinate the chicken with ginger, garlic, garam masala and lime juice. Keep aside for 2 hours (can also be marinated overnight, or in the morning to fry in the afternoon/evening, in that case, add lime juice a few hours before frying).\n\n   2. Add the salt, green chilli, cilantro and onions (if desired) and mix.\n\n   3. Add gram flour and mix well. Divide into balls.\n\n   4. Heat oil and deep fry on medium heat. (I usually prick the balls with a fork during frying to ensure that the pakora is evenly cooked on the inside as well.) The color should be a light golden brown.\n\n   5. Serve hot.',
    image: require('./assets/maxresdefault.jpg')
  },
  {
    name: '',
    ingedients: '',
    ingedient2: '',
    directions: '',
    direction2: '',
    // image:
  },
  {
    name: '',
    ingedients: '',
    ingedient2: '',
    directions: '',
    direction2: '',
    // image:
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