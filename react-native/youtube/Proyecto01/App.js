import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
} from 'react-native';
import { Viewer } from './components/view/Viewer';
import { Contador } from './src/views/Contador';

function App(){

  return (
      <SafeAreaView style={ styles.SafeAreaView }>
          {
          /*<View style={ styles.cabecera }>
            <Viewer/>
            <View style={ styles.rojo }>
              
            </View>

            <View style={ styles.negro }>
              
            </View>
            
          </View>*/
          }
          <Contador/>
      </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  SafeAreaView: {
    flex: 1,
    backgroundColor: '#2c3e50'
  },
  cabecera: {
    flex:1, 
    backgroundColor: 'blue', 
    flexDirection: 'row',
  },
  rojo: {
    flex:1, 
    width: 50, 
    height:50, 
    backgroundColor: 'red'
  },
  negro: {
    flex:1,
    width: 50,
    height:50,
    backgroundColor: 'black'
  }
});

export default App;
