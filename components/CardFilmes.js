import { ImageBackground, Text, View } from "react-native";
import { StyleSheet} from 'react-native';


const CardFilmes = ({imagem, nome, genero, datalanc, classificacao, duracao, descricao})=>{
    return(
        <View>
            <ImageBackground
                style={estilo.imgfilme}
                source={imagem}
                borderRadius={15}
                resizeMode="cover"
            >
                <Text style={estilo.titulo}>{nome}</Text>                
            </ImageBackground>
            <View style={estilo.e_descricao}>
                <Text style={estilo.texto1}>{genero}</Text>
                <Text style={estilo.texto1}>{datalanc}</Text>
                <Text style={estilo.texto1}>{classificacao}</Text>
                <Text style={estilo.texto1}>{duracao}</Text>
                <Text style={estilo.texto1}>{descricao}</Text>
            </View>
        </View>
    );
}


const estilo = StyleSheet.create({
    imgfilme:{
        width: 350,
        height: 600,
        backgroundColor: '#ddd',
        borderRadius: 15,
        justifyContent: "space-between",
        marginVertical: 35,
               
    },
    titulo:{
        fontSize: 20,
        fontWeight: "900",
        padding: 15,       
        backgroundColor:"#040404c2",
        color: "#FFF",
        borderTopLeftRadius: 20,
        borderTopRightRadius: 10,
    },
    texto1:{
        flex: 1,
        fontSize: 18,
        padding:10,       
        backgroundColor:"#00000061",
        color: "#FFF",
        // borderBottomLeftRadius: 10,
        // borderBottomRightRadius: 10,
        textAlign: "justify",
    },
    e_descricao:{
        marginTop: 10,
        width: 350,
        backgroundColor:"#040404c2",
    }
    
  });
  
  export default CardFilmes;