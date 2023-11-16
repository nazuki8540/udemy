import React, {Component} from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";

class Filmes extends Component{
    render(){
        return (
            <View>
                <Text>{this.props.data.nome}</Text>
                <Text>{this.props.data.data}</Text>
                <Text>{this.props.data.sinopse}</Text>
            </View>
        );
        
    }
}

export default Filmes;