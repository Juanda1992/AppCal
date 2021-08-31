import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function App() {

  //Definir variables de estado (componente)
  const [valor1, setValor1] = useState('');
  const [valor2, setValor2] = useState('');
  const [resultado, setResultado] = useState('');

  //Metodos 
  const calcularSuma = () => {
    setResultado(parseFloat(valor1) + parseFloat(valor2));
  }

  const calcularResta = function () {
    setResultado(parseFloat(valor1) - parseFloat(valor2));
  }

  const calcularResultado = (operador) => {
    if (valor1 != '' && valor2 != '') {
      let mresultado = 0;
      switch (operador) {
        case '+':
          mresultado = parseFloat(valor1) + parseFloat(valor2);
          break;
        case '-':
          mresultado = parseFloat(valor1) - parseFloat(valor2);
          break;
        case '*':
          mresultado = parseFloat(valor1) * parseFloat(valor2);
          break;
        case '/':
          mresultado = parseFloat(valor1) / parseFloat(valor2);
          break;
        case 'c':
          mresultado = 0;
          setValor1('');
          setValor2('');
          break;
      }

      setResultado(mresultado)
    }
    else {
      alert("Digite los 2 valores");
    }
  }
  return (
    <View style={styles.container}>
      <Text>Mi calculadora</Text>
      <Text>{"\n"}</Text>
      <Text>Valor 1</Text>
      <TextInput placeholder="Ingrese valor 1"
        style={{ borderBottomWidth: 2, color: 'blue', backgroundColor: 'yellow' }}
        onChangeText={valor1 => setValor1(valor1)}
        value={valor1}
      />

      <Text>Valor 2</Text>
      <TextInput placeholder="Ingrese valor 2"
        style={{ borderBottomWidth: 2, color: 'red', backgroundColor: 'aqua' }}
        onChangeText={valor2 => setValor2(valor2)}
        value={valor2}
      />

      <Text>Resultado</Text>
      <TextInput
        style={{ borderBottomWidth: 2, color: 'red', backgroundColor: 'pink' }}
        value={resultado}>
      </TextInput>

      <Text>{"\n"}</Text>
      <Button
        title="Sumar"
        onPress={() => calcularResultado('+')}
      />

      <Text>{"\n"}</Text>
      <Button
        title="Restar"
        onPress={() => calcularResultado('-')}
      />

      <Text>{"\n"}</Text>
      <Button
        title="Multiplicar"
        onPress={() => calcularResultado('*')}
      />

      <Text>{"\n"}</Text>
      <Button
        title="Dividir"
        onPress={() => calcularResultado('/')}
      />

      <Text>{"\n"}</Text>
      <Button
        title="Limpiar"
        onPress={() => calcularResultado('c')}
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
