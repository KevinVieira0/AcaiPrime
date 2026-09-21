import { Ionicons } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';
import { Image, KeyboardAvoidingView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { ScrollView } from 'react-native';
import { Button } from 'react-native';

export default function App() {
  return (

    <KeyboardAvoidingView style={styles.container} behavior="padding" keyboardVerticalOffset={30}>
      <ScrollView style={styles.container}>
        {/*Header*/}
        <View style={styles.header}>
          <View>
            <Text style={styles.titleHeader}>Açaí Prime</Text>
            <Text style={styles.subtitleHeader}>O sabor puro da Amazônia</Text>
          </View>

          <View>
            <Ionicons name="ice-cream" size={24} color="black" />
          </View>
        </View>

        {/*Header*/}

        {/*Conteudo*/}
        <View style={styles.content}>

          <View style={styles.saudacao}>
            <Text style={styles.conteudoTitle}>Bom dia!</Text>
            <Text style={styles.conteudoSubtitle}>Que tal um café hoje?</Text>
          </View>


          <View>
            <View style={styles.feature}>
              <Image source={require("./assets/acaipreferido.jpg")} style={styles.image}></Image>
              <Text style={styles.cardTitle}>Açaí Turbinado 500ml</Text>
              <Text style={styles.cardReference}>Mais Pedido</Text>
              <Text style={styles.cardDescription}>Açaí puro batido com morango, banana, leite condensado e granola crocante</Text>
              <Text style={styles.cardPrice}>R$ 22,90</Text>
              <TouchableOpacity style={styles.addItem}></TouchableOpacity>
            </View>
          </View>

        </View>

        {/*Conteudo*/}

      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  header: {
    width: '100%',
    paddingHorizontal: 24,
    paddingTop: 60,
    paddingBottom: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  titleHeader: {
    fontSize: 20,
    fontWeight: "800",
    color: "#2C1B30"
  },
  subtitleHeader: {
    fontSize: 14,
    color: "#644D6A",
    marginTop: 4
  },
  container: {
    flex: 1,
    backgroundColor: '#ffffff'
  },

  saudacao: {
    marginBottom: 24,
    marginTop: 10,
  },
  content: {
    paddingHorizontal: 24
  },
  conteudoTitle: {
    fontSize: 32,
    fontWeight: "800",
    color: "#2C1B30"
  },
  conteudoSubtitle: {
    fontSize: 16,
    color: "#644D6A",
    marginTop: 8
  },
  feature: {
    backgroundColor: "#ffffff",
    padding: 16,
    borderRadius: 24,
    shadowColor: "#000000",
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.05,
    elevation: 4,
    marginBottom: 32
  },
  image: {
    width: "100%",
    height: 180,
    marginBottom: 16,
    borderRadius: 16
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: "800",
    color: "#2f2d2c"
  },
  cardReference: {

  },
  cardDescription: {
    fontSize: 14,
    color: "#9b9b9b",
    marginTop: 4
  },
  cardPrice: {
    fontSize: 20,
    color: "#7B1FA2",
    marginTop: 12,
    fontWeight: "800"
  },
  addItem: {

  },
});
