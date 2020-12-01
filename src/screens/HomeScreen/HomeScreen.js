import React, { useEffect} from 'react'
import { Text, TouchableOpacity, View, Alert} from 'react-native'
import styles from './styles';
import {firebase} from '../../firebase/config'
import * as Notifications from 'expo-notifications';

export default function HomeScreen({navigation}) {
    useEffect( () => {
        firebase
        .auth()
        .onAuthStateChanged(async user => {
            respond = Notifications.addNotificationResponseReceivedListener((response) => {
              var title = response.notification.request.content.data.aps.alert.title;
              var body = response.notification.request.content.data.aps.alert.body;
              var message = response.notification.request.content.data;
              var loc = message.data.split(",");
              var latitude = loc[0]
              var longitude = loc[1]
              var condition = loc[2]
              Alert.alert(
                title,
                condition,
                [
                  {
                    text: "Decline",
                    onPress: () => alert("Request Denied"),
                    style: "cancel"
                  },
                  { text: "Accept", onPress: () => 
                  navigation.navigate('MapScreen', {latitude: latitude, longitude: longitude})
                 }
                ],
                { cancelable: false }
              );
                
            });
            return () => {
              Notifications.removeNotificationSubscription(respond);
            };
            
        })
    })
    return (
        <View style={styles.container}>
            <View style={styles.menu}>
                    <TouchableOpacity style={styles.button} onPress={() => navigation.openDrawer()}>
                        <Text style= {styles.men}>__{"\n"}__{"\n"}__</Text>
                    </TouchableOpacity>
            </View>
            <View style={styles.resq}>
                <TouchableOpacity style={styles.resqbutton} onPress={() => navigation.navigate('Rescue')}>
                    <Text style= {styles.text}> ResQ</Text>
                </TouchableOpacity>
            </View>
        </View>
        )
    }

