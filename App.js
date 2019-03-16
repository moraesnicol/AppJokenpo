

import React, {Component} from 'react';
import { StyleSheet, Text, View, Button, Alert, Image, ScrollView, TouchableOpacity} from 'react-native';


//área principal
export default class App extends Component {

    constructor(props){
      super(props);

      this.state = { escolhaUsuario :  ' ',  
                           escolhaComputador: ' ', 
                           resultado: ' ',                            
      };
    }
//gerar número aleatório
    jokenpo(escolhaUsuario) {
    var  numAleatorio  =  Math.floor(Math.random()  * 3 );
    var escolhaComputador = "";

    switch(numAleatorio ){
      case 0:  escolhaComputador = 'pedra' ; break;
      case 1:  escolhaComputador = 'papel' ; break;
      case 2:  escolhaComputador = 'tesoura' ; break;
      default: escolhaComputador = ' ';
    }

    var resultado =  '';

      if(escolhaComputador == 'pedra' ){
        if(escolhaUsuario ==  'pedra' ){
          resultado = 'Ah, vocês Empataram, tente outra vez :( ';
        }

        if(escolhaUsuario == 'papel'){
          resultado  = 'Você ganhou!!!! :)' ;
        
        }
      
        if(escolhaUsuario == 'tesoura'){
          resultado  = 'Você perdeu! Tente outra vez' ;
         }
        }
///

      if(escolhaComputador == 'tesoura'){
        if(escolhaUsuario ==  'tesoura' ){
          resultado = 'Ah, vocês Empataram, tente outra vez';
        }

        if(escolhaUsuario == 'pedra'){
          resultado  = 'Você ganhou!!!!' ;
        
        }
        if(escolhaUsuario == 'papel'){
          resultado  = 'Você perdeu! Tente outra vez' ;
        }
        }

        if(escolhaComputador == 'papel'){
          if(escolhaUsuario ==  'papel' ){
            resultado = 'Ah, vocês Empataram, tente outra vez';
          }
  
          if(escolhaUsuario == 'tesoura'){
            resultado  = 'Você ganhou!!!!' ;
          
          }
        
          if(escolhaUsuario == 'pedra'){
            resultado  = 'Você perdeu! Tente outra vez' ;
          }
          }







      this.setState({ escolhaUsuario  :  escolhaUsuario, 
                              escolhaComputador  :  escolhaComputador,
                              resultado : resultado
                            });
    }
     //------------------------------------- 
  render() {
    return (
      <ScrollView>
      <View>

        <Topo></Topo>

       <View style={styles.conjuntoButtons}>

        <View style={styles.buttonLeft}>
        <TouchableOpacity title ="pedra" onPress={  ()   => {this.jokenpo('pedra')}}>
        <Text style={{color: 'white', fontFamily: 'Roboto',  fontSize: 22,  fontWeight: 'bold', justifyContent: 'center',  marginTop: 5, marginBottom: 5, marginLeft: 30}}> Pedra</Text>
        </TouchableOpacity>
        </View>

      <View style={styles.buttonCenter}>
      <TouchableOpacity title ="papel"  onPress={  ()   => {this.jokenpo('papel')}}    >
      <Text style={{color: 'white', fontFamily: 'Roboto',  fontSize: 22,  fontWeight: 'bold', justifyContent: 'center',  marginTop: 5, marginBottom: 5, marginLeft: 30}}> Papel</Text> 
      </TouchableOpacity>
      </View>
      
      <View style={styles.buttonRight}>
        <TouchableOpacity  title ="tesoura" onPress={  ()   => {this.jokenpo('tesoura')}}    >
        <Text style={{color: 'white', fontFamily: 'Roboto',  fontSize: 22,  fontWeight: 'bold', justifyContent: 'center',  marginTop: 5, marginBottom: 5, marginLeft: 13}}> Tesoura</Text> 
        </TouchableOpacity>
        </View>
       
        
        </View>

        
      

      <View style={styles.palco}>
      <Text style={styles.textoResultado}> {this.state.resultado}</Text>

      <Icone escolha={this.state.escolhaComputador} jogador="Computador" ></Icone>
      <Icone escolha={this.state.escolhaUsuario} jogador="Você" ></Icone>

      
      </View>
  
      
       


      </View>
      </ScrollView>
    );
  }
}
//------------------------------------------

class Topo extends Component{
  render() {
    return (
<View>   
 <Image source={require('./assets/jokenpotop.png')} style={styles.imagetop} />
</View>            

    );
    }
}

class Icone extends Component {
    render() { 
      if(this.props.escolha  == 'pedra' ) {
      
        return ( 
          <View style={styles.icones}>
          <Text style={{color: 'red', fontFamily: 'Roboto',  fontSize: 22,  fontWeight: 'bold', justifyContent: 'center',  marginTop: 10}}>{this.props.jogador}</Text>
        <Image source={require('./assets/pedra.png')} />
        </View>
); 
}        else if(this.props.escolha  == 'papel') { 
  return ( 
    <View style={styles.icones}>
    <Text style={{color: '#a900b8', fontFamily: 'Roboto',  fontSize: 22,  fontWeight: 'bold', justifyContent: 'center', marginTop: 10}}>{this.props.jogador}</Text>
  <Image source={require('./assets/papel.png')} />
  </View>
  );

} else if(this.props.escolha  == 'tesoura') {
  return ( 
    <View style={styles.icones}>
    <Text  style={{color: '#d7c938', fontFamily: 'Roboto',  fontSize: 22,  fontWeight: 'bold', justifyContent: 'center', marginTop: 10}}>{this.props.jogador}</Text>
  <Image source={require('./assets/tesoura.png')} />
  </View>
  );

 } else {
            return false; 

            }
          }
        }

    





//---------------------------------------------

const styles = StyleSheet.create({
  conjuntoButtons: {
   flexDirection: 'row',
      justifyContent: 'space-between',
      marginTop: 5,
      borderRadius: 40, 
  },
  buttonLeft: {
    width: 130,
    borderRadius: 40,   
    backgroundColor: "#0abde3",
    marginLeft: 2
  },
  buttonCenter: {
    width: 130,
    borderRadius: 40,   
    backgroundColor: "#9b59b6",
    marginLeft: 18
  },
  buttonRight: {
    width: 120,
    borderRadius: 40,   
    backgroundColor: "#f9ca24",
    marginLeft: 10
  },
  imagetop: {
     width: 420,
     height: 250,
     borderRadius: 2
  },
  palco: {
    alignItems: 'center',
    marginTop: 10
  },
  textoResultado: {

    fontFamily: 'Roboto',
    color: 'red',
    fontWeight: 'bold',
    fontSize: 25

  },
    icones: {
      alignItems: 'center',
      marginBottom: 20
    }


});
