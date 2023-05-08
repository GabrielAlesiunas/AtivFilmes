
import { View, ScrollView, FlatList } from 'react-native';
import estilo from './estilo';
import CardFilmes from './CardFilmes';

export default function Filmes() {
  const Filmes = [
    {
      id: "1",
      imagem: require("../assets/Filmes/velozes e furiosos 5.jpeg"),
      nome: " VELOZES E FURIOSOS 5",
      genero: " Ação, Suspense",
      datalanc: " 6 de maio de 2011",
      classificacao: " 14 anos",
      duracao: " 2h 10min ",
      descricao: " Em Velozes & Furiosos 5: Operação Rio, Dominic Toretto (Vin Diesel) foi resgatado da prisão por sua irmã Mia (Jordana Brewster) e Brian O'Conner (Paul Walker), que realizam um ousado resgate sobre rodas. Ele propõe ao casal o roubo de carros que estão sendo levados em um trem, algo que, segundo ele, será uma operação simples que renderá um bom lucro. Ao desmontar o carro, o trio descobre que ele contém um chip com todas as operações ilegais de Hernan Reis (Joaquim de Almeida), incluindo onde guarda o dinheiro arrecadado.",
    },

    {
      id: "2",
      imagem: require("../assets/Filmes/Com as próprias mãos.jpeg"),
      nome: " COM AS PRÓPRIAS MÃOS",
      genero: " Ação, Policial",
      datalanc: " 9 de outubro de 2004",
      classificacao: " 14 anos",
      duracao: " 1h 26min ",
      descricao: " Chris Vaughn (The Rock) é um soldado aposentado das Forças Especiais do exército americano, que retorna para sua cidade natal com a intenção de reatar antigos laços e iniciar uma nova vida. Porém a cidade em que ele nasceu não é mais a mesma, sendo agora um local controlado pelo crime.",
    },

    {
      id: "3",
      imagem: require("../assets/Filmes/todo mundo em panico.jpg"),
      nome: " TODO MUNDO EM PÂNICO",
      genero: " Comédia",
      datalanc: " 22 de setembro de 2000",
      classificacao: " 12 anos",
      duracao: " 1h 24min ",
      descricao: " Das mentes dos criadores do seriado da TV americana 'In living color' surge o primeiro thriller-comédia, em que adolescentes apavorados fugindo de maníacos assassinos são o pretexto para uma série de piadas envolvendo todos os recentes filme de terror, da série 'Pânico' até 'O sexto sentido', passando ainda por outros grandes sucessos do cinema, como 'Matrix' e 'Os suspeitos'.",
    },
  ];

  return (

    <ScrollView>
      <View style={estilo.container2}>
        <FlatList
          data={Filmes}
          renderItem={({ item }) =>
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