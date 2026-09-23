import { Ionicons } from '@expo/vector-icons';
import Feather from '@expo/vector-icons/Feather';
import { Image, KeyboardAvoidingView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';


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

          <View style={styles.icon}>
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


              <View style={styles.align}>
                <Text style={styles.cardTitle}>Açaí Turbinado 500ml</Text>
                <Text style={styles.cardReference}>MAIS PEDIDO</Text>
              </View>

              <Text style={styles.cardDescription}>Açaí puro batido com morango, banana, leite condensado e granola crocante</Text>

              <View style={styles.align}>
                <Text style={styles.cardPrice}>R$ 22,90</Text>

                <TouchableOpacity style={styles.addItem}>

                  <View style={styles.iconButton}>
                    <Feather name="shopping-bag" size={14} color="white"
                      style={{
                        textShadowColor: '#fff',
                        textShadowOffset: { width: 0.5, height: 0.5 },
                        textShadowRadius: 1,
                      }} />
                    <View>
                      <Text style={styles.textButton}>Adicionar</Text>
                    </View>
                  </View>

                </TouchableOpacity>
              </View>

            </View>
          </View>

        </View>

        <View>
          <Text> Nossos Copos e Tigelas</Text>
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
  icon: {
    backgroundColor: "#F3E5F5",
    borderRadius: 16,
    padding: 5
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
  align: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: "800",
    color: "#2f2d2c"
  },
  cardReference: {
    fontSize: 14,
    fontWeight: "700",
    paddingHorizontal: 10,
    borderRadius: 6,
    backgroundColor: "#F3E5F5",
    color: "#7B1FA2",
  },
  cardDescription: {
    fontSize: 14,
    color: "#9b9b9b",
    marginTop: 4
  },
  cardPrice: {
    fontSize: 20,
    color: "#7B1FA2",
    flexDirection: "row",
    marginTop: 12,
    fontWeight: "800"
  },
  addItem: {
    backgroundColor: "#7B1FA2",
    borderRadius: 6,
    padding: 4,
  },
  iconButton: {
    paddingHorizontal: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  textButton: {
    fontSize: 14,
    fontWeight: "700",
    color: "#FFFFFF",
    paddingHorizontal: 6
  },
});
