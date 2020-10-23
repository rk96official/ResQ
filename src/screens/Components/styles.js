import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container:{
        flex: 1
    },
    profile:{
        width: 80,
        height: 80,
        borderRadius: 40,
        borderWidth: 3,
        borderColor: "#FFF"
    },
    name: {
        color: "#161924",
        fontSize: 20,
        fontWeight: "800",
        marginVertical: 8
    },
    followers:{
        color: "rgba(255,255,255,0.8)",
        fontSize: 13,
        marginRight:4
    }
})