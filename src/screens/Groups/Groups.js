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
                        group: doc.data().group.value
                    }
                })
        });
    }
    render(){
        return (
            <View style={styles.container}>
            <Text>Groups Screen</Text>
            <View>
                <Text> Name: {this.state.user.group}</Text>
            </View>
            <TouchableOpacity
                style={styles.groupsButton}
                onPress={() => this.props.navigation.openDrawer()}>
                <Text>Open Drawer</Text>
            </TouchableOpacity>
      </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
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