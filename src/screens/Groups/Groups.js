import React, { useEffect, useState } from 'react'
import { StyleSheet,Text, TouchableOpacity, View } from 'react-native'
import { firebase } from '../../firebase/config';

class  Groups extends React.Component{
    state = {
        user: {
            group: "",
        }
    }

    componentDidMount() {
        const user = firebase.auth().currentUser;
        const id = user.uid;
        const docRef = firebase.firestore().collection("users").doc(id).onSnapshot(doc => {
                this.setState({
                    user: {
                        group: doc.data().group
                    }
                })
        });
    }
    render(){
        return (
            <View style={styles.container}>
                <TouchableOpacity
                style={styles.button}
                onPress={() => this.props.navigation.openDrawer()}>
                <Text>Open Menu</Text>
            </TouchableOpacity>
            <Text style={styles.title}>Groups Screen</Text>
            <View style={styles.profile}>
                <Text style={styles.input}> Name: {this.state.user.group}</Text>
            </View>
            
      </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "grey"
    },
    title:{
        color: "#161924",
        fontSize: 50,
        fontWeight: "800",
        marginVertical: 8,
        justifyContent: 'center',
        alignSelf: 'center'
    },
    groups: {
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
    groupsButton: {
        height: 30,
        width: '40%',
        margin: 5,
        borderWidth: 1,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
      }
  })
export default Groups