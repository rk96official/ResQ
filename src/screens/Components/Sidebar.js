import React from "react";
import { View, Text, ScrollView,} from "react-native";
import {DrawerNavigatorItems} from "react-navigation-drawer";
import styles from "./styles"
import {firebase} from '../../firebase/config'

var name=""
var res = ""
firebase.auth().onAuthStateChanged(user => {
    if (user) {
         const id = user.uid 
         firebase.firestore().collection('users').doc(id).onSnapshot(doc => {
            name= doc.data().fullName 
            var x = name.split(' ')
            res = x[0].charAt(0)
            var i;
            for (i = 1; i < x.length; i++) {
                res += x[i].charAt(0);
            }  
        })
    }
})

export default Sidebar = props =>(
    <ScrollView>
        <View style={{width: undefined, padding:16, paddingTop:48, backgroundColor: 'lavender'}}
        >
            <View style={styles.profile} >
                <Text style={styles.name}>{res}</Text> 
                </View>
            <Text style={styles.name}>{name} </Text>
        </View>
            <View style={styles.container}>
                <DrawerNavigatorItems {...props} />
            </View>
    </ScrollView>
);