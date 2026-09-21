import { Link } from "expo-router";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { LinearGradient } from 'expo-linear-gradient';

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <LinearGradient
          colors={['#48ff66', '#030303']}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          style={styles.hero}
        >
          <Text style={styles.eyebrow}>React Native + Expo Router</Text>
          <Text style={styles.title}>Seu app já nasce organizado</Text>
          <Text style={styles.description}>
            Estrutura pronta para o aluno focar em componentes, navegação e
            lógica de negócio desde a primeira aula.
          </Text>
        </LinearGradient>

        <View style={styles.card}>
          <Text style={styles.cardTitle}>O que vem configurado</Text>
          <Text style={styles.cardItem}>• JavaScript habilitado</Text>
          <Text style={styles.cardItem}>• Rotas com expo-router</Text>
          <Text style={styles.cardItem}>• Abas e modal de exemplo</Text>
          <Text style={styles.cardItem}>• Scripts para Android, iOS e Web</Text>
        </View>

        <Link href="/modal" asChild>
          <Pressable style={styles.button}>
            <LinearGradient
              colors={['#48ff66', '#050505']}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
              style={styles.buttonGradient}
            >
              <Text style={styles.buttonText}>Abrir modal de exemplo</Text>
            </LinearGradient>
          </Pressable>
        </Link>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#000000',
  },
  container: {
    justifyContent: 'center',
    flex: 1,
    padding: 24,
    gap: 20,
  },
  hero: {
    alignItems: 'center',
    gap: 10,
    padding: 24,
    borderRadius: 24,
  },
  logo: {
    width: 120,
    height: 120,
    marginBottom: 4,
  },
  eyebrow: {
    fontSize: 13,
    fontWeight: '700',
    letterSpacing: 1,
    textTransform: 'uppercase',
    color: '#ffffff',
    textAlign: 'center',
  },
  title: {
    fontSize: 32,
    fontWeight: '800',
    color: '#ffffff',
    textAlign: 'center',
  },
  description: {
    fontSize: 16,
    lineHeight: 24,
    color: '#ffffff',
    textAlign: 'center',
  },
  card: {
    gap: 8,
    padding: 20,
    borderRadius: 20,
    backgroundColor: '#ffffff',
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#000000',
  },
  cardItem: {
    fontSize: 15,
    color: '#020202',
  },
  button: {
    borderRadius: 12,
    overflow: 'hidden',
  },
  buttonGradient: {
    paddingVertical: 20,
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 16,
    fontWeight: '700',
    color: '#ffffff',
  },
});