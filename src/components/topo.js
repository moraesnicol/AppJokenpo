import React, {Component} from 'react';
import { StyleSheet, View, Image} from 'react-native' ;

const jokenpotop =  require('../../assets/jokenpotop.png');

class Topo extends Component{
    render() {
      return (
  <View>   
   <Image source={jokenpotop} style={styles.imagetop} />
  </View>            
  
      );
      }
  }

  const styles = StyleSheet.create({
  
    imagetop: {
       width: 420,
       height: 250,
       borderRadius: 2
    },
  
    });

  export  default Topo 