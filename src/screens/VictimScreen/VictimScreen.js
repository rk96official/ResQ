import React, { useEffect, useState } from 'react'
import { StyleSheet,Text, TouchableOpacity, View } from 'react-native'
import { firebase } from '../../firebase/config';
import CountDown from 'react-native-countdown-component';

class  VictimScreen extends React.Component{   
 
render() {
    return (
    <View style={styles.container}>
        <Text style={styles.title}>Rescue Operation CountDown</Text>
        <CountDown
            until={15}
            onFinish={() => this.props.navigation.navigate('SurveyScreen')}
            onPress={() => alert('hello')}
            size={20}
        />
    </View>
      
    )
}
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#376c93",
      alignItems: 'center',
      justifyContent: 'center'
    },
    title:{
        color: "#161924",
        fontSize: 20,
        fontWeight: "800",
        marginVertical: 8,
        justifyContent: 'center',
        alignSelf: 'center'
    },
    profile: {
        flex: 1,
        alignSelf: 'center',
        justifyContent: 'center',
        textAlign: 'center'
    },
    input: {
        height: 48,
        borderRadius: 5,
        overflow: 'hidden',
        backgroundColor: 'lightgrey',
        marginTop: 20,
        marginBottom: 10,
        marginLeft: 30,
        marginRight: 30,
        paddingLeft: 16,
    },
    button: {
        height: 60,
        borderRadius: 5,
        backgroundColor: '#788eec',
        width: 150,
        alignItems: "center",
        justifyContent: 'center'
    },
    profileButton: {
        height: 30,
        width: '40%',
        margin: 5,
        borderWidth: 1,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
      }
  })
export default VictimScreen