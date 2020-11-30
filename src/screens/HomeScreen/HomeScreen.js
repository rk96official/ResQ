import React, { useEffect, useState, useRef } from 'react'
import { Text, SafeAreaView, TouchableOpacity, View, Alert} from 'react-native'
import styles from './styles';
import {firebase} from '../../firebase/config'
import * as Notifications from 'expo-notifications';

export default function HomeScreen({navigation}) {
    useEffect(() => {
        firebase
        .auth()
        .onAuthStateChanged(user => {
            respond = Notifications.addNotificationResponseReceivedListener((response) => {
              var title = response.notification.request.content.data.aps.alert.title;
              var body = response.notification.request.content.data.aps.alert.body;
              var message = response.notification.request.content.data;
              var loc = message.data.split(",");
              var latitude = loc[0]
              var longitude = loc[1]
              Alert.alert(
                title,
                message.data,
                [
                  {
                    text: "Cancel",
                    onPress: () => alert("Request Denied"),
                    style: "cancel"
                  },
                  { text: "OK", onPress: () => navigation.navigate('MapScreen', {latitude: latitude, longitude: longitude})
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
                        <Text style= {styles.men}>Open Menu</Text>
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

