import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native"

export default function Sobre () {
    return (
        <View style={styles.containerT}>
            
            <View style={styles.areaC}>
                <Text style={styles.textoT}>Sobre Mim</Text>
                <Text style={styles.textoS}>Desenvolvedor Full Stack</Text>
            </View>

            <Image
                source={{ uri: 'https://avatars.githubusercontent.com/u/197298573?v=4' }}
                style={styles.imagemP}
            />


            <View style={styles.cartaoI}>
                <Text style={styles.textoC}>Gosto muito de ler</Text>
            </View>
            
            <View style={styles.cartaoI}>
                <Text style={styles.textoC}>Hobbie: Jogar videogame</Text>
            </View>


            <View style={styles.areaB}>

                <TouchableOpacity style={styles.botaoP}>
                    <Text style={styles.letraB}>Botão</Text>
                </TouchableOpacity>


                <TouchableOpacity style={styles.botaoV}>
                    <Text style={styles.letraV}>Botão</Text>
                </TouchableOpacity>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    containerT: { 
        flex: 1,
        alignItems: 'center',
        padding: 20,
        backgroundColor: '#080808',
        justifyContent: 'center',
    },

    areaC: { 
        alignItems: 'center',
        marginBottom: 20,
    },

    textoT: { 
        fontSize: 30,
        fontWeight: 'bold',
        color: '#ffffff',
    },

    textoS: { 
        fontSize: 15,
        color: '#ffffff',
        marginTop: 5,
    },

    imagemP: { 
        width: 150,
        height: 150,
        borderRadius: 80,
        marginBottom: 30,
    },

    cartaoI: { 
        backgroundColor: '#ffffff',
        width: '100%',
        padding: 15,
        borderRadius: 10,
        marginBottom: 15,
    },

    textoC: { 
        fontSize: 15,
        color: '#000000',
        textAlign: 'center',
    },

    areaB: { 
        flexDirection: 'row',
    },

    botaoP: { 
        backgroundColor: '#39ff7b',
        width: '48%',
        borderRadius: 11,
        marginRight: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },

    botaoV: { 
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 10,
        backgroundColor: 'transparent',
        borderWidth: 2,
        borderColor: '#39ff7b',
        width: '48%',
        paddingVertical: 15,
        paddingHorizontal: 30,
        borderRadius: 11,
    },

    letraB: { 
        color: '#ffffff',
    },

    letraV: { 
        color: '#39ff7b',
    }
})