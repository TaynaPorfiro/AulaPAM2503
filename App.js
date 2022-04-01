import Cabecalho from './src/components/cabecalho';
import Botao from './src/components/botao';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View>
      <Cabecalho></Cabecalho>
      <Botao Logo="game-controller" texto="Jogos" cor="green"> </Botao>
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
