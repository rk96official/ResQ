import React, { useEffect, useState } from 'react'
import { StyleSheet,Text, TouchableOpacity, View } from 'react-native'
import { firebase } from '../../firebase/config';

class  Profile extends React.Component{
    state = {
        user: {
            fullName: "",
            age: "",
            email: "",
        }
    }

    componentDidMount() {
        const user = firebase.auth().currentUser;
        const id = user.uid;
        const docRef = firebase.firestore().collection("users").doc(id).onSnapshot(doc => {
                this.setState({
                    user: {
                        fullName: doc.data().fullName,
                        age: doc.data().age,
                        email: doc.data().email,
                    }
                })
        });
    }
    render(){
        return (
            <View style={styles.container}>
            <Text>Profile Screen</Text>
            <View>
                    <Text> Name: {this.state.user.fullName}</Text>
                    <Text> Age: {this.state.user.age}</Text>
                    <Text> Email: {this.state.user.email}</Text>
            </View>
            <TouchableOpacity
                style={styles.profileButton}
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
export default Profile