import React from "react";
import { View, Text, StyleSheet, ScrollView, ImageBackground, Image} from "react-native";
import {DrawerNavigatorItems} from "react-navigation-drawer";
import {Ionicons} from "@expo/vector-icons";
import styles from "./styles"

export default Sidebar = props =>(
    <ScrollView>
        <ImageBackground source={require("../../../assets/splash.png")} style={{width: undefined, padding:16, paddingTop:48}}
        >
            <Image source= {require("../../../assets/icon.png")} style={styles.profile} />
            <Text style={styles.name}>Rupak Kadel </Text>

            <View style= {{flexDirection: "row"}}>
                <Text style={styles.followers}> 734 Followers</Text>
                <Ionicons name="md-people" size={16} color="rgba(255,255,255,0.8)" />
            </View>
        </ImageBackground>
            <View style={styles.container}>
                <DrawerNavigatorItems {...props} />
            </View>
    </ScrollView>
);