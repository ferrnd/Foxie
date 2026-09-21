import { useEffect, useState } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  ActivityIndicator,
  ScrollView,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import axios from "axios";

// Em produção, uma chave de API não deveria morar direto no código do
// app (dá pra extrair de qualquer APK/IPA instalado). Aqui, como é uma
// API pública de estudo, deixamos direto no código pra simplificar.
const API_KEY = "cv__knrQc1d6TZu3-ECOLCkLGckcT5fYDOZF4P9gcvHi0-Paa58IDak9PX4swBhl8J8";

// Uma instância única do axios com a base URL e o header já configurados.
// Toda chamada feita com "api" já sai com a chave certa — inclusive o GET,
// mesmo ele sendo público nesta API.
const api = axios.create({
  baseURL: "https://api-ds.codeverse.dev.br",
  headers: {
    "x-api-key": API_KEY,
  },
});

// ---------- GET: listar animes ----------
export default function AnimesListarScreen() {
  const [animes, setAnimes] = useState([]);
  const [carregando, setCarregando] = useState(true);
  const [erro, setErro] = useState(null);

  async function buscarAnimes() {
    setCarregando(true);
    setErro(null);
    try {
      const resposta = await api.get("/api/animes", {
        params: { limit: 50 },
      });

      setAnimes(resposta.data.data);
    } catch (e) {
      setErro("Não foi possível carregar os animes. Tenta de novo em instantes.");
    } finally {
      setCarregando(false);
    }
  }

  useEffect(() => {
    buscarAnimes();
  }, []);

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.conteudo}>
        <View style={styles.header}>
          <Text style={styles.tituloPagina}>Listar animes</Text>
          <Text style={styles.subtitulo}>GET /api/animes</Text>
        </View>

        {carregando && <ActivityIndicator style={{ marginVertical: 16 }} />}
        {erro && <Text style={styles.erro}>{erro}</Text>}

        {!carregando &&
          animes.map((item) => (
            <View key={item.id} style={styles.card}>
              <Image source={{ uri: item.imageUrl }} style={styles.imagem} />
              <View style={styles.info}>
                <Text style={styles.titulo}>{item.title}</Text>
                <Text style={styles.categoria}>
                  {item.estudio} · {item.genero}
                </Text>
              </View>
            </View>
          ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: "#000000" },
  conteudo: { padding: 24, paddingBottom: 48 },
  header: { marginBottom: 16 },
  tituloPagina: { fontSize: 24, fontWeight: "800", color: "#fefeff" },
  subtitulo: { fontSize: 14, color: "#ffffff", marginTop: 2 },

  erro: { color: "#c62828", marginTop: 12 },
  card: {
    flexDirection: "row",
    gap: 12,
    marginTop: 12,
    backgroundColor: "white",
    borderRadius: 10,
    overflow: "hidden",
  },
  imagem: { width: 64, height: 64 },
  info: { flex: 1, justifyContent: "center", paddingRight: 12 },
  titulo: { fontSize: 16, fontWeight: "700" },
  categoria: { fontSize: 13, color: "#64748b" },
});