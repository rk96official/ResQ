import { StyleSheet } from 'react-native';
import { color } from 'react-native-reanimated';

export default StyleSheet.create({
    container:{
        flex: 1
    },
    profile:{
        width: 80,
        height: 80,
        fontSize: 40,
        justifyContent:'center',
        alignItems: 'flex-start',
        borderRadius: 40,
        borderWidth: 3,
        borderColor: "grey",
        alignSelf: 'center'
    },
    name: {
        color: "#161924",
        fontSize: 30,
        fontWeight: "800",
        marginVertical: 8,
        alignSelf: 'center'

    }
})