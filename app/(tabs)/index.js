import { Link } from "expo-router";
import { Image, ImageBackground, Pressable, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { LinearGradient } from "expo-linear-gradient";
import { BlurView } from "expo-blur";

const BackgroundImage = require("../../assets/images/backgrounds/index.png")

export default function HomeScreen() {
  return (
    <ImageBackground source={BackgroundImage} style={styles.backgroundImage} resizeMode="cover">
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.container}>
          <View style={styles.heroContainer}>
            <BlurView intensity={40} tint="dark">
              <View style={styles.heroContent}>
                <Text style={styles.title}>FOXIE</Text>
                <Text style={styles.description}>Estrutura pronta para o aluno focar em componentes, navegação e
                  lógica de negócio desde a primeira aula.</Text>
              </View>
            </BlurView>
          </View>

          <Link href="/modal" asChild>
            <Pressable style={styles.button}>
              <LinearGradient
                colors={["#AB5282", "#AB631C"]}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                style={styles.buttonGradient}>
                <Text style={styles.buttonText}>Abrir modal de exemplo</Text>
              </LinearGradient>
            </Pressable>
          </Link>
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
  },
  safeArea: {
    flex: 1,
  },
  container: {
    flex: 1,
    padding: 24,
    gap: 20,
    justifyContent: 'flex-end'

  },
  hero: {
    alignItems: "center",
    gap: 10,
    padding: 74,
    borderRadius: 55,
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
    borderRadius: 55,
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
    width: "100%",
    borderRadius: 55,
    overflow: "hidden",
    marginBottom: 50
  },
  buttonGradient: {
    width: "100%",
    paddingVertical: 24,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 55,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "700",
    color: "#ffffff",
  },
  heroContainer: {
    borderRadius: 55,
    overflow: "hidden",
    borderWidth: 1,
    borderColor: "rgba(255, 255, 255, 0.12)"
  },
  heroContent: {
    alignItems: "center",
    gap: 10,
    padding: 24,
  }
});
