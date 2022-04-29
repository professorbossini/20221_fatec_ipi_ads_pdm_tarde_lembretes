import { useState } from 'react';
import { 
  Button,
  FlatList,
  ScrollView,
  StyleSheet, 
  Text,
  TextInput, 
  View 
} from 'react-native';


export default function App() {
  const [lembrete, setLembrete] = useState('')
  const[lembretes, setLembretes] = useState([])
  const[contadorLembretes, setContadorLembretes] = useState(0)

  const capturarLembrete = (lembreteDigitado) => {
    setLembrete(lembreteDigitado)
  }

  const adicionarLembrete = () => {
    //operador spread
    //const lista = [1, 2, 3]
    //...lista
    setLembretes(lembretes => {
      setContadorLembretes(contadorLembretes + 1)
      return [{key: contadorLembretes.toString(), value: lembrete}, ...lembretes]
    })
  }
  
  return (
    <View style={styles.telaPrincipalView}>
      <View>
        {/* usuário irá inserir lembretes aqui */}
        <TextInput
          onChangeText={capturarLembrete} 
          placeholder='Lembrar...'
          style={{borderBottomColor: 'black', borderBottomWidth: 1, marginBottom: 8, padding: 12}}
        />
        <Button
          title="Adicionar lembrete"
          onPress={adicionarLembrete}
        />
      </View>
      <FlatList 
        data={lembretes}
        renderItem={
          l => (
            <View
              style={styles.itemNaLista}>
                <Text>{l.item.value}</Text>
            </View>
          )
        }
      />
       
    </View>
  );
}

const styles = StyleSheet.create({
  telaPrincipalView: {
    padding: 40   
  },
  itemNaLista: {
    padding: 12,
    backgroundColor: '#CCC',
    borderColor: '#000',
    borderWidth: 1,
    borderRadius: 8,
    marginTop: 8
  }
});
{/* <ScrollView>
        
        {
          lembretes.map((l) => (
            <View 
              key={l}
              style={styles.itemNaLista}>
                <Text>{l}</Text>
            </View>
          ))
        }
      </ScrollView>  */}