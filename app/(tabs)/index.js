import { Link } from "expo-router";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { LinearGradient } from "expo-linear-gradient";

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <LinearGradient
        colors={["#19db7a", "#000000"]}
        start={{ x: 0, y: 0}}
        end={{ x: 1, y: 0}}
        style={styles.hero}
        >
          <Text style={styles.eyebrow}>React Native + Expo Router</Text>
          <Text style={styles.title}>Seu app já nasce organizado</Text>
          <Text style={styles.description}>
            Estrutura pronta para o aluno focar em componentes, navegação e
            lógica de negócio desde a primeira aula.
          </Text>
        </LinearGradient>

        <LinearGradient
        colors={['#ffffff', '#ffffff']}
        start={{x: 0, y: 0}}
        end={{x:0.5, y:2}}
        style={styles.card}
        >
          <Text style={styles.cardTitle}>O que vem configurado</Text>
          <Text style={styles.cardItem}>• JavaScript habilitado</Text>
          <Text style={styles.cardItem}>• Rotas com expo-router</Text>
          <Text style={styles.cardItem}>• Abas e modal de exemplo</Text>
          <Text style={styles.cardItem}>• Scripts para Android, iOS e Web</Text>
        </LinearGradient>

        <Link href="/modal" asChild>
          <Pressable style={styles.button}>
            <Text style={styles.buttonText}>Abrir modal de exemplo</Text>
          </Pressable>
        </Link>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#050505",
  },
  container: {
    flex: 1,
    padding: 24,
    gap: 20,
    justifyContent: 'space-between'
    
  },
  hero: {
    alignItems: "center",
    gap: 10,
    padding: 74,
    borderRadius: 24,
  },
  eyebrow: {
    fontSize: 13,
    fontWeight: "700",
    letterSpacing: 1,
    textTransform: "uppercase",
    color: "#fafafa",
    textAlign: "center",
  },
  title: {
    fontSize: 32,
    fontWeight: "800",
    color: "#ffffff",
    textAlign: "center",
  },
  description: {
    fontSize: 16,
    lineHeight: 24,
    color: "#ffffff",
    textAlign: "center",
  },
  card: {
    gap: 8,
    padding: 20,
    borderRadius: 20,
    backgroundColor: "#ffffff",
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: "700",
    color: "#000000",
  },
  cardItem: {
    fontSize: 15,
    color: "#000000",
  },
  button: {
    paddingVertical: 16,
    paddingHorizontal: 20,
    borderRadius: 16,
    alignItems: "center",
    backgroundColor: "#ffffff",
    marginBottom: 20
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "700",
    color: "#050505",
  },
});
