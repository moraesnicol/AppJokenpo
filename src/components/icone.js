import React, {Component} from 'react';
import { StyleSheet, Text, View,  Image, } from 'react-native';

const imgPedra = require('../../assets/pedra.png')
const imgPapel = require('../../assets/papel.png')
const imgTesoura = require('../../assets/tesoura.png')

class Icone extends Component {
    render() { 
      if(this.props.escolha  == 'pedra' ) {
      
        return ( 
          <View style={styles.icones}>
          <Text style={{color: 'red', fontFamily: 'Roboto',  fontSize: 22,  fontWeight: 'bold', justifyContent: 'center',  marginTop: 10}}>{this.props.jogador}</Text>
        <Image source={imgPedra} />
        </View>
); 
}        else if(this.props.escolha  == 'papel') { 
  return ( 
    <View style={styles.icones}>
    <Text style={{color: '#a900b8', fontFamily: 'Roboto',  fontSize: 22,  fontWeight: 'bold', justifyContent: 'center', marginTop: 10}}>{this.props.jogador}</Text>
  <Image source={imgPapel} />
  </View>
  );

} else if(this.props.escolha  == 'tesoura') {
  return ( 
    <View style={styles.icones}>
    <Text  style={{color: '#d7c938', fontFamily: 'Roboto',  fontSize: 22,  fontWeight: 'bold', justifyContent: 'center', marginTop: 10}}>{this.props.jogador}</Text>
  <Image source={imgTesoura} />
  </View>
  );

 } else {
            return false; 

            }
          }
        }

        const styles = StyleSheet.create({
    
              icones: {
                alignItems: 'center',
                marginBottom: 20
              }

            });

export default Icone ;

