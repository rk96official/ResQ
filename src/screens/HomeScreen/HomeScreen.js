import React, { useEffect, useState } from 'react'
import { Text, SafeAreaView, TouchableOpacity, View } from 'react-native'
import styles from './styles';
import { FontAwesome5} from "@expo/vector-icons"

export default class HomeScreen extends React.Component{
    
    
    render(){
        return (
            <View style={styles.container}>
                <View>
                        <TouchableOpacity style={styles.button} onPress={() => this.props.navigation.openDrawer()}>
                            <Text>Open Drawer</Text>
                        </TouchableOpacity>
                </View>
                <View>
                    <TouchableOpacity style={styles.button} onPress={() => this.props.navigation.navigate('Rescue')}>
                       <Text> ResQ</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

