import React, { useEffect, useState } from 'react'
import { StyleSheet,Text, TouchableOpacity, View, TextInput,PermissionsAndroid } from 'react-native'
import styles from './styles'
import DropDownPicker from 'react-native-dropdown-picker';
import {firebase} from '../../firebase/config'
import {Constants, Permissions} from 'expo';
import * as Location from 'expo-location';
 

var name = ""


async function document(s, loc){
    const user = firebase.auth().currentUser;
    const id = user.uid;
    firebase.firestore().collection('users').doc(id).onSnapshot(doc => {
        name= doc.data().fullName
    })
    const usersRef = firebase.firestore().collection('users');
    const snapshot = await usersRef.get();
    snapshot.forEach(doc => {
         if(s == doc.data().group){
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
    const [situation, setSituation] = useState(null);
    const [condition, setCondition] = useState(null);
    const [location, setLocation] = useState(null);
    const [errorMsg, setErrorMsg] = useState(null);

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
        <View style={styles.rescue}>
            <DropDownPicker 
                items={[
                    {label: 'Flooding', value: 'Flooding' },
                    {label: 'Fire', value: 'Fire' },
                    {label: 'Accidents', value: 'Accidents' },
                    {label: 'Car wreck', value: 'Car wreck' },
                    {label: 'Stuck in the house', value: 'Stuck in the house' },
                    {label: 'Dog Bite', value: 'Dog Bite' },
                    {label: 'Stuck in the Elevator', value: 'Stuck in the Elevator' }
                ]}
                placeholder="Select a voluntary group"
                containerStyle={{height: 50, width: 200}}
                style={{backgroundColor: '#fafafa'}}
                itemStyle={{
                    justifyContent: 'flex-start'
                }}
                dropDownStyle={{backgroundColor: '#fafafa'}}
                onChangeItem={item => setSituation(item.label)
                }
                value={situation}
            />
        </View>
        <View style={styles.situation}>
            <TextInput
                style={styles.input}
                placeholder='Enter your situation'
                placeholderTextColor="#aaaaaa"
                underlineColorAndroid="transparent"
                autoCapitalize="none"
                onChangeText={condition => setCondition(condition)}
                defaultValue={condition}
                />
        </View>
        <View style={{ flexDirection:"row" }}>
            <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate('Home')}>
                <Text>Go Back</Text>
            </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => {
            try{
                var loc = location.coords.latitude + ',' + location.coords.longitude
            }catch{
                console.log("Location Coords Error")
            }
            
            document(situation, loc)
            navigation.navigate('')
        }}>
        <Text> Confirm</Text>
        </TouchableOpacity>
        </View>
        
    </View>
    )
    
}
