import React, { useEffect, useState } from 'react'
import { Text, SafeAreaView, TouchableOpacity, View } from 'react-native'
import styles from './styles';
import { FontAwesome5} from "@expo/vector-icons"

export default class HomeScreen extends React.Component{
    
    
    render(){
        return (
            <View style={styles.container}>
                <View style={styles.menu}>
                        <TouchableOpacity style={styles.button} onPress={() => this.props.navigation.openDrawer()}>
                            <Text style= {styles.men}>Open Menu</Text>
                        </TouchableOpacity>
                </View>
                <View style={styles.resq}>
                    <TouchableOpacity style={styles.resqbutton} onPress={() => this.props.navigation.navigate('Rescue')}>
                       <Text style= {styles.text}> ResQ</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

