import React, { useEffect, useState } from 'react'
import { StyleSheet,Text, TouchableOpacity, View, TextInput } from 'react-native'
import {RadioForm} from 'react-native-simple-radio-button';
import styles from './styles'
import DropDownPicker from 'react-native-dropdown-picker';
import {firebase} from '../../firebase/config'

async function document(s){
    const usersRef = firebase.firestore().collection('users');
    const snapshot = await usersRef.get();
    snapshot.forEach(doc => {
         if(s == doc.data().group.value){
            console.log(doc.data().fullName, '=>', doc.data().group.value);
         }
    });
}
export default class  RescueScreen extends React.Component{
    state = {
        situation: 0
    }
    render(){
        return (
        <View style={styles.container}>
            <Text style={styles.title}>Rescue Screen</Text>
             <View style={styles.rescue}>
            <DropDownPicker 
                items={[
                    {label: 'Flooding', value: 0 },
                    {label: 'Fire', value: 1 },
                    {label: 'Accidents', value: 2 },
                    {label: 'Landslide', value: 3 },
                    {label: 'Earthquake', value: 4 },
                    {label: 'Volcano', value: 5 },
                    {label: 'Hurricane', value: 6 }
                ]}
                defaultNull={this.state.situation === null}
                placeholder="Select a voluntary group"
                containerStyle={{height: 50, width: 200}}
                style={{backgroundColor: '#fafafa'}}
                itemStyle={{
                    justifyContent: 'flex-start'
                }}
                dropDownStyle={{backgroundColor: '#fafafa'}}
                onChangeItem={item => this.setState({
                    situation: item.label
                })}
            />
            </View>
            <View style={styles.situation}>
            <TextInput
                style={styles.input}
                placeholder='Enter your situation'
                placeholderTextColor="#aaaaaa"
                underlineColorAndroid="transparent"
                autoCapitalize="none"
            />
            </View>
            <View style={{ flexDirection:"row" }}>
            <TouchableOpacity
                style={styles.button}
                onPress={() => this.props.navigation.navigate('Home')}>
                <Text>Go Back</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => {
                document(this.state.situation)
                alert('Notified')
            }}>
            <Text> Confirm</Text>
            </TouchableOpacity>
            </View>
            
        </View>
        )
    }
}
