import {View, ScrollView, FlatList} from 'react-native';
import estilo from './estilo';
import CardFilmes from './CardFilmes';

export default function Series() {
  const series = [
    {
      id:"1",
      imagem: require("../assets/Séries/vikinks.jpg"),
      nome: " VIKINGS",
      genero: " Aventura, Drama, Histórico",
      datalanc: " 3 de março de 2013",
      classificacao: " 16 anos",
      duracao: " 69 episódios ",
      descricao: " Vikings segue a vida de Ragnar Lothbrok (Travis Fimmel), o maior guerreiro da sua era. Lider de seu bando, com seus irmãos e sua família, ele ascende ao poder e torna-se Rei da tribo dos vikings. Além de guerreiro implacável, Ragnar segue as tradições nórdicas e é devoto dos deuses. As lendas contam que ele descende diretamente de Odin, o deus da guerra. ",
    },

    {
      id:"2",
      imagem: require("../assets/Séries/la casa de papel.jpeg"),
      nome: " LA CASA DE PAPEL",
      genero: "	Ação, Drama, Policial e Suspense",
      datalanc: " 2 de maio de 2017",
      classificacao: " 16 anos",
      duracao: " 41 episódios ",
      descricao: " Na série La Casa de Papel, da Netflix, nove habilidosos ladrões (Nairóbi, Berlim, Tókyo, Rio, Helsinki, Oslo, Professor, Denver e Moscou) se trancam na Casa da Moeda da Espanha, com o ambicioso plano de realizar o maior roubo da história. Possuindo a meta de imprimir 2,4 bilhões de euros, a gangue precisará lidar com as dezenas de pessoas que foram mantidas reféns e com os agentes da força de elite da polícia, que farão de tudo para que a investida dos criminosos fracasse.",
    },

    {
      id:"3",
      imagem: require("../assets/Séries/narcos.jpeg"),
      nome: " NARCOS",
      genero: " Drama, Policial, Suspense, Biografia",
      datalanc: " 8 de agosto de 2015",
      classificacao: " 16 anos",
      duracao: " 20 episódios ",
      descricao: " A vida e a morte de Pablo Escobar (Wagner Moura), um dos maiores narcotraficantes do mundo, chefe do Cartel de Medellín, na Colômbia. Escobar também era conhecido por ser um homem de família e reverenciado pela população mais pobre como um tipo de Robin Hood.",
    },
  ];
 
  return (
    
    <ScrollView>
      <View style={estilo.container2}>
        <FlatList
          data={series}
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
