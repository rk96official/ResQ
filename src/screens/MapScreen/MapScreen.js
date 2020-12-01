import React, { useEffect, useState } from 'react'
import { StyleSheet,Text, TouchableOpacity, View } from 'react-native'
import * as Location from 'expo-location';
import getDirections from 'react-native-google-maps-directions'

export default function MapScreen({navigation}){
    const [location, setLocation] = useState(null);
    const [errorMsg, setErrorMsg] = useState(null);
    let [currentLatitude, setCurrentLatitude] = useState(null);
    let [currentLongitude, setCurrentLongitude] = useState(null);
    var finallatitude = navigation.getParam('latitude')
    var finallongitude = navigation.getParam('longitude')
    finallatitude = parseFloat(finallatitude)
    finallongitude = parseFloat(finallongitude)

    useEffect(() => {
        (async () => {
          let { status } = await Location.requestPermissionsAsync();
          if (status !== 'granted') {
            setErrorMsg('Permission to access location was denied');
          }
    
          let location = await Location.getCurrentPositionAsync({});
          console.log('From',location)
          setCurrentLatitude(location.coords.latitude)
          setCurrentLongitude(location.coords.longitude)
          setLocation(location);
        })();
    }, []);

    let text = 'Waiting..';
    if (errorMsg) {
        text = errorMsg;
    } else if (location) {
        text = JSON.stringify(location);
    }
    currentLatitude = parseFloat(currentLatitude)
    currentLongitude = parseFloat(currentLongitude)

    handleGetDirections = () => {
        const data = {
           source: {
            latitude: currentLatitude,
            longitude: currentLongitude
          },
          destination: {
            latitude: finallatitude,
            longitude:  finallongitude
          },
          params: [
            {
              key: "travelmode",
              value: "driving"        
            },
            {
              key: "dir_action",
              value: "navigate"       
            }
          ],
        }
        getDirections(data)
    }
    return (
        <View style = {styles.container}>
        <View>
            <TouchableOpacity 
                style={styles.button}
                onPress={() => handleGetDirections()}>
                <Text style={styles.buttonTitle}>Get Directions</Text>
            </TouchableOpacity>
            </View>
            <View >
            <TouchableOpacity
                style={styles.buttons}
                onPress={() => navigation.navigate('Home')}>
                <Text>Go Back</Text>
            </TouchableOpacity>
        </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#376C93"
    },
    title:{
        color: "#161924",
        fontSize: 50,
        fontWeight: "800",
        marginVertical: 8,
        justifyContent: 'center',
        alignSelf: 'center'
    },
    profile: {
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
        marginTop: 200,
        backgroundColor: '#788eec',
        width: 150,
        alignItems: "center",
        justifyContent: 'center',
        alignSelf: 'center'
    },
    buttons: {
        height: 60,
        borderRadius: 5,
        backgroundColor: '#788eec',
        width: 150,
        marginTop: 100,
        alignItems: "center",
        justifyContent: 'center',
        alignSelf: 'center'
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

