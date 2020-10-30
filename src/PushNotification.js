import * as Notifications from 'expo-notifications';
import * as Permissions from 'expo-permissions'
import React, { useState } from 'react'
import {firebase} from './firebase/config'
 var data =[]

 async function registerForPushNotificationsAsync  (user) {


   const {status: existingStatus } = await Permissions.getAsync(
     Permissions.NOTIFICATIONS
   );
   let finalStatus = existingStatus;
 // Only ask if permissions have not been determined because iOS won't necessarily prompt the user a second time
   if (existingStatus !== 'granted'){
     //Android permissions are granted during the app install. So, it asks only for iOS
     const {status} = await Permissions.askAsync(Permissions.NOTIFICATIONS);
     finalStatus = status;
   }
//If user does not give permissions, stop here
   if(finalStatus !== 'granted'){
     return;
   }
//Get token that uniquely identifies this device
   let token = await Notifications.getExpoPushTokenAsync();
    const uid = user.user.uid
//    setToken(token)
    firebase.firestore().collection('users').doc(uid).update({
        expotoken: token
    })
 }

 export  default registerForPushNotificationsAsync