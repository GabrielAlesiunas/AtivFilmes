
import {View, ScrollView, FlatList} from 'react-native';
import estilo from './estilo';
import CardFilmes from './CardFilmes';

export default function Desenho() {
  const Desenho = [
    {
      id:"1",
      imagem: require("../assets/Desenhos/cyberchase.jpeg"),
      nome: " CYBERCHASE",
      genero: " Educativo ,Comédia, Aventura, Fantasia científica", 
      datalanc: " 21 de janeiro de 2002",
      classificacao: " 6 anos",
      duracao: " 136 episódios ",
      descricao: " O desenho mostra com uma leve dose de humor vários cybermistérios com personagens bastante atraentes. Quando o vilão Hacker inventa uma missão para conquistar o universo virtual, a Placa Mãe chama três crianças da Terra para ajudar. Elas são Jackie, Mateus e Inês, os heróis de culturas diferentes de Cyberchase.",
    },

    {
      id:"2",
      imagem: require("../assets/Desenhos/bem10.jpg"),
      nome: " BEN 10",
      genero: " Ficção científica, Ação, Aventura, Comédia",
      datalanc: " 27 de dezembro de 2005",
      classificacao: " Livre para todos os públicos",
      duracao: " 49 episódios ",
      descricao: " O herói pré-adolescente é na verdade Ben Tennyson, um menino comum que, um dia, achou uma estranha peça alienígena enquanto andava pela floresta perto de casa. O objeto, que se parece com um relógio, se chama Ominitrix e dá a Ben a habilidade de se transformar em diversos alienígenas poderosos.",
    },

    {
      id:"3",
      imagem: require("../assets/Desenhos/pocoyo.jpg"),
      nome: " POCOYO",
      genero: " Educação Pré-Escolar, infantil, comédia",
      datalanc: " 10 de maio de 2005",
      classificacao: " Livre para todos os públicos",
      duracao: " 260 episódios ",
      descricao: " Quem disse que aprender não é divertido? De chapéu e roupas azuis, Pocoyo faz de cada dia uma inesquecível aventura enquanto explora o mundo ao seu redor ao lado de seus amigos, o que inclui um pato amarelo, uma elefanta rosa, um pássaro dorminhoco e a cadelinha Loula.",
    },
  ];
 
  return (
    
    <ScrollView>
      <View style={estilo.container2}>
        <FlatList
          data={Desenho}
          renderItem={({item})=>
            <CardFilmes 
                imagem={item.imagem}
                nome={item.nome}
                genero={item.genero}
                datalanc={item.datalanc}
                classificacao={item.classificacao}
                duracao={item.duracao}
                descricao={item.descricao}
            />
          }
          keyExtractor={item => item.id}
        />        
      </View>
    </ScrollView>
  );
}
