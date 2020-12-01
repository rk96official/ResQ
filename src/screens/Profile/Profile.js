import React, { useEffect, useState } from 'react'
import { StyleSheet,Text, TouchableOpacity, View } from 'react-native'
import { firebase } from '../../firebase/config';

class  Profile extends React.Component{
    state = {
        user: {
            fullName: "",
            age: "",
            email: "",
            groups: ""
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
                        groups: doc.data().group
                    }
                })
        });
    }
    render(){
        return (
            <View style={styles.container}>
                <View style={styles.menu}>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => this.props.navigation.openDrawer()}>
                        <Text style = {styles.men}>__{"\n"}__{"\n"}__</Text>
                    </TouchableOpacity>
                </View>
                <Text style={styles.title}>Profile Screen</Text>
                <View style={styles.profile}>
                    <View >
                            <Text style={styles.input}> Name: {this.state.user.fullName}</Text>
                            <Text style={styles.input}> Age: {this.state.user.age}</Text>
                            <Text style={styles.input}> Email: {this.state.user.email}</Text>
                            <Text style={styles.input}> Groups: {this.state.user.groups}</Text>
                    </View>
                </View>
                
                    <TouchableOpacity
                        style={styles.buttons}
                        onPress={() => this.props.navigation.navigate('UpdateScreen')}>
                        <Text>Update Profile</Text>
                    </TouchableOpacity>
            
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#376C93'

    },
    menu: {
        justifyContent: 'center',
        textAlign: 'center',
    },
    men: {
        color: "black",
        fontFamily: 'Times New Roman',
        fontSize: 25,
        lineHeight: 10,
        fontWeight: "bold"
    },
    title:{
        color: "#ffffff",
        fontSize: 40,
        fontWeight: "800",
        marginVertical: 8,
        justifyContent: 'center',
        alignSelf: 'center',
        marginBottom: 50
    },
    profile: {
        flex: 1,
        alignSelf: 'flex-start',
        justifyContent: "flex-start",
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
        backgroundColor: '#376C93',
        fontSize: 20
    },
    button: {
        height: 80,
        borderRadius: 5,
        width: 50,
        alignItems: "center",
        justifyContent: 'center'
    },
    buttons: {
        backgroundColor: '#788eec',
        marginLeft: 30,
        marginRight: 30,
        marginTop: 20,
        marginBottom: 100,
        height: 48,
        width: 150,
        borderRadius: 5,
        alignSelf: "center",
        justifyContent: 'center',
        alignItems: "center",

    },
    buttonTitle: {
        color: 'white',
        fontSize: 16,
        fontWeight: "bold"
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