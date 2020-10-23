import React, { useEffect, useState } from 'react'
import { Text, SafeAreaView, TouchableOpacity, View } from 'react-native'
import styles from './styles';
import { FontAwesome5} from "@expo/vector-icons"
import { firebase } from '../../firebase/config';

export default class HomeScreen extends React.Component{
    componentDidMount() {
        const user = firebase.auth().currentUser;
        const docRef = firebase.firestore().collection('users').doc(user.uid);
        
        docRef.get().then(doc => {
            if (doc.exists) {
                 alert("Document data:", doc.data());
            } else {
                 alert("No such document!");
            }
        }).catch(function(error) {
           alert(error)
        });
    }
    render(){
        return (
            <View style={styles.container}>
                <View>
                        <TouchableOpacity style={styles.button} onPress={() => this.props.navigation.openDrawer()}>
                            <Text>Open Drawer</Text>
                        </TouchableOpacity>
                </View>
                <View>
                    <TouchableOpacity style={styles.button} onPress={() => alert('Hi')}>
                       <Text> ResQ</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

