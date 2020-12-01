import React, { useEffect, useState } from 'react'
import { Text, TouchableOpacity, View, TextInput} from 'react-native'
import styles from './styles'
import {firebase} from '../../firebase/config'
import * as Location from 'expo-location';
import RadioGroup from 'react-native-radio-buttons-group';

var name = ""
var groups = ""

async function document(s, loc){  
    for (let i of s){
        if (i.selected == true){
            groups = i.label
        }
    } 
    const user = firebase.auth().currentUser;
    const id = user.uid;
    firebase.firestore().collection('users').doc(id).onSnapshot(doc => {
        name= doc.data().fullName
    })
    const usersRef = firebase.firestore().collection('users');
    const snapshot = await usersRef.get();
    
    snapshot.forEach(doc => {
         if(groups.trim() == doc.data().group){
            let response = fetch('https://exp.host/--/api/v2/push/send', {
                method: 'POST',
                headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                to: doc.data().expotoken.data,
                sound: 'default',
                title:  name + ' needs your help',
                body: 'Open the app to see the details',
                data: { data: loc }
                })
            });
         }
    });
}

export default function RescueScreen({navigation}){
    const [condition, setCondition] = useState(null);
    const [location, setLocation] = useState(null);
    const [errorMsg, setErrorMsg] = useState(null);
    const [group, setGroup] = useState([
        {
            label: 'Flooding',
            value: 'Flooding'
        },
        {
            label: 'Fire',
            value: 'Fire'
        },
        {
            label: 'Accidents',
            value: 'Accidents'
        },
        {
            label: 'Car wreck',
            value: 'Car wreck'
        },
        {
            label: 'Stuck in the house',
            value: 'Stuck in the house'
        },
        {
            label: 'Dog Bite',
            value: 'Dog Bite'
        },
        {
            label: 'Stuck in the Elevator',
            value: 'Stuck in the Elevator'
        }
    ]);


    useEffect(() => {
        (async () => {
          let { status } = await Location.requestPermissionsAsync();
          if (status !== 'granted') {
            setErrorMsg('Permission to access location was denied');
          }
    
          let location = await Location.getCurrentPositionAsync({});
          setLocation(location);
        })();
      }, []);
    let text = 'Waiting..';
    if (errorMsg) {
        text = errorMsg;
    } else if (location) {
        text = JSON.stringify(location);
    }
    return (
    <View style={styles.container}>
        <Text style={styles.title}>Rescue Screen</Text>
        <Text style={styles.valueText}>Choose a voluntary group</Text>
        <View style={styles.rescue}>
            <RadioGroup radioButtons={group} onPress={data => setGroup( data)} />
        </View>
        <View style={styles.situation}>
            <View style = {styles.view}></View>
            <TextInput
                style={styles.input}
                placeholder='Enter your situation'
                placeholderTextColor="#aaaaaa"
                underlineColorAndroid="transparent"
                autoCapitalize="none"
                onChangeText={condition => setCondition(condition)}
                defaultValue={condition}
                />
            <View style={{ flexDirection:"row" }}>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => navigation.navigate('Home')}>
                    <Text>Go Back</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => {
                    try{
                        var loc = location.coords.latitude + ',' + location.coords.longitude + ',' + condition
                    }catch{
                        console.log("Location Coords Error")
                    }
                    document(group, loc)
                    navigation.navigate('VictimScreen')
                    }}>
                    <Text> Confirm</Text>
                </TouchableOpacity>
            </View>
        </View>

    </View>
    )
    
}
