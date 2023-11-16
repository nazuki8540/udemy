import React, {Component} from 'react';
import { StyleSheet, Text, View, Animated,TouchableOpacity } from 'react-native';


class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      LarAnimada: new Animated.Value(150),
      AltAnimada: new Animated.Value(50),
      // OpacidadeAnimada: new Animated.Value(0)
      OpAnimada: new Animated.Value(0)
    };

    // Animated.loop(

    //  Animated.sequence([
    //   Animated.timing(
    //     this.state.LarAnimada,
    //     {
    //       toValue:200,
    //       duration:700
    //     }
    //     ),

    //     Animated.timing(
    //       this.state.LarAnimada,
    //       {
    //         toValue:150,
    //         duration:700
    //       }
    //     )
          
    //  ])
    // ).start();
    
    this.carregarGrafico = this.carregarGrafico.bind(this);

  }

  carregarGrafico(){
    
    Animated.sequence([
      Animated.timing(
        this.state.OpAnimada,
        {
          toValue:1,
          duration:400,
        }
      ),
     
        Animated.timing(
          this.state.AltAnimada,
          {
            toValue:300,
            duration:1000
          }
        )
          
     ]).start();
  }
  
  render(){
    return(
      <View style={{flex: 1}}>
        <View style={{height:80,
                      marginTop:40, 
                      alignItems:'center',
                      justifyContent:'center',
                      flexDirection:'row',
                      backgroundColor: '#4169E1'}}>

          <TouchableOpacity onPress={this.carregarGrafico}>
            <Text style={{fontSize:25, color: '#ffffff',alignItems:'center'}}>
              Gerar Grafico
            </Text>
          </TouchableOpacity>
          
        </View>

        <View style={{flex:1,flexDirection:'column',justifyContent:'flex-end',alignItems:'center'}}>
        <Text>Vendas</Text>
        <Animated.View style={{ width: this.state.LarAnimada,
                                height:this.state.AltAnimada,
                                backgroundColor:'#FF0000',
                                justifyContent:'center',
                                opacity:this.state.OpAnimada,
                               }}>

          <Text style={{color:'#ffffff',
                        fontSize: 20,
                        textAlign:'center',
                        }}>R$ 150,00</Text>


        </Animated.View>

        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 40,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;