import Cabecalho from './src/components/cabecalho';
import Botao from './src/components/botao';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View>
      <Cabecalho></Cabecalho>
      <Botao Logo="game-controller" texto="Jogos" cor="green" Logo2="apps" texto2="Apps" cor2= "grey" > </Botao>
      <Botao Logo="film" texto="Filmes" cor="red" Logo2= "book" texto2="Livros" cor2="blue"> </Botao>
      <Botao Logo="musical-notes" texto="Músicas" cor="orange" Logo2="book" texto2="Notícias" cor2="purple"> </Botao>
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
