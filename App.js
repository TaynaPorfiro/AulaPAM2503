import Cabecalho from './src/components/cabecalho';
import Botao from './src/components/botao';
import { StatusBar } from 'expo-status-bar';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import Jogos from './src/components/jogos';
import dados from './src/dados/dadosJogos';
import JogosLancamentos from './src/dados/dadosLancamentos';

export default function App() {
  return (
    <View>
      <Cabecalho></Cabecalho>
      <Botao Logo="game-controller" texto="Jogos" cor="red" Logo2="book" texto2="Livros" cor2="orange"> </Botao>
      <Botao Logo="film" texto="Filmes" cor="green" Logo2="videocam" texto2="Séries" cor2="blue"> </Botao>
      <Botao Logo="musical-notes" texto="Músicas" cor="purple" Logo2="american-football" texto2="Esportes" cor2="gray"> </Botao>

      <Text>Jogos em Destaque</Text>
      <FlatList
      horizontal={true}
      data = {dados}
      keyExtractor = {(item) => item.id}
      renderItem = { ({ item }) => (

      <Jogos
      titulo ={item.nome}
      imagem = {item.imagem}
      valor = {item.valor}
      />
      )} 
 
      />
      <Text>Próximos Lançamentos</Text>
      <FlatList
      horizontal={true}
      data = {dados}
      keyExtractor = {(item) => item.id}
      renderItem = { ({ item }) => (

      <Jogos
      titulo ={item.nome}
      imagem = {item.imagem}
      valor = {item.valor}
      />
      )} 
 
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});