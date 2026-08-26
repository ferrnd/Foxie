import { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Pressable,
  StyleSheet,
  Alert,
  ScrollView,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import axios from "axios";

const API_KEY = "cv__knrQc1d6TZu3-ECOLCkLGckcT5fYDOZF4P9gcvHi0-Paa58IDak9PX4swBhl8J8";

const api = axios.create({
  baseURL: "https://api-ds.codeverse.dev.br",
  headers: {
    "x-api-key": API_KEY,
  },
});

export default function AnimesCriarScreen() {
  const [titulo, setTitulo] = useState("");
  const [descricao, setDescricao] = useState("");
  const [imagemUrl, setImagemUrl] = useState("");
  const [estudio, setEstudio] = useState("");
  const [baseadoEmManga, setBaseadoEmManga] = useState("");
  const [genero, setGenero] = useState("");

  const [enviando, setEnviando] = useState(false);

  async function criarAnime() {
    if (!titulo) {
      Alert.alert("Aviso", "Preencha pelo menos o título.");
      return;
    }

    setEnviando(true);
    try {
      const resposta = await api.post("/api/animes", {
        title: titulo,
        description: descricao, 
        imageUrl: imagemUrl, 
        estudio: estudio,
        baseado_em_manga: baseadoEmManga.toLowerCase().trim() === "sim",
        genero: genero,
      });

      Alert.alert("Anime criado!", resposta.data.title);
      
      setTitulo("");
      setDescricao("");
      setImagemUrl("");
      setEstudio("");
      setBaseadoEmManga("");
      setGenero("");
      
    } catch (e) {
      console.log("RESPOSTA DA API (ERRO):", e.response?.data);
      
      const mensagemErro = e.response?.data?.error || "Verifique os dados e tente novamente.";
      
      Alert.alert("Não deu pra criar o anime", mensagemErro);
    } finally {
      setEnviando(false);
    }
  }

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.conteudo}>
        <View style={styles.header}>
          <Text style={styles.tituloPagina}>Criar Anime</Text>
          <Text style={styles.subtitulo}>POST /api/animes</Text>
        </View>

        <Text style={styles.rotulo}>Título</Text>
        <TextInput
          style={styles.campo}
          value={titulo}
          onChangeText={setTitulo}
          placeholder="Ex: Naruto Shippuden"
        />

        <Text style={styles.rotulo}>Descrição</Text>
        <TextInput
          style={styles.campo}
          value={descricao}
          onChangeText={setDescricao}
          placeholder="Ex: A jornada de um ninja renegado..."
        />

        <Text style={styles.rotulo}>URL da imagem (Deve ser HTTP/HTTPS)</Text>
        <TextInput
          style={styles.campo}
          value={imagemUrl}
          onChangeText={setImagemUrl}
          placeholder="Ex: https://site.com/naruto.jpg"
        />

        <Text style={styles.secao}>Campos específicos do tema Animes</Text>

        <Text style={styles.rotulo}>Estúdio</Text>
        <TextInput
          style={styles.campo}
          value={estudio}
          onChangeText={setEstudio}
          placeholder="Ex: Studio Pierrot"
        />

        <Text style={styles.rotulo}>Baseado em Mangá?</Text>
        <TextInput
          style={styles.campo}
          value={baseadoEmManga}
          onChangeText={setBaseadoEmManga}
          placeholder="Ex: Sim (ou o nome do mangá)"
        />

        <Text style={styles.rotulo}>Gênero</Text>
        <TextInput
          style={styles.campo}
          value={genero}
          onChangeText={setGenero}
          placeholder="Ex: Shounen, Ação"
        />

        <Pressable style={styles.botao} onPress={criarAnime} disabled={enviando}>
          <Text style={styles.botaoTexto}>{enviando ? "Enviando..." : "Criar Anime"}</Text>
        </Pressable>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: "#f8fbff" },
  conteudo: { padding: 24, paddingBottom: 48 },
  header: { marginBottom: 16 },
  tituloPagina: { fontSize: 24, fontWeight: "800", color: "#102542" },
  subtitulo: { fontSize: 14, color: "#5f6b7a", marginTop: 2 },
  secao: {
    fontSize: 14,
    fontWeight: "700",
    color: "#102542",
    marginTop: 8,
    marginBottom: 8,
  },
  rotulo: { fontSize: 13, fontWeight: "600", color: "#334155", marginBottom: 4 },
  campo: {
    borderWidth: 1,
    borderColor: "#cbd5e1",
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 10,
    marginBottom: 12,
    backgroundColor: "white",
  },
  botao: {
    backgroundColor: "#1565c0",
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: "center",
  },
  botaoTexto: { color: "white", fontWeight: "700" },
});