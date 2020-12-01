import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        // backgroundColor: '#ff99cc'
        
        backgroundColor: '#376C93'
        // 26699A
    },
    
    resq: {
        flex: 1,
        alignSelf: 'center',
        justifyContent: 'center',
        textAlign: 'center'
    },
    menu: {
        justifyContent: 'center',
        textAlign: 'center',
    },
    text: {
        color: "black",
        fontFamily: 'Times New Roman',
        fontSize: 40,
        fontWeight: "500"
    },
    men: {
        color: "black",
        fontFamily: 'Times New Roman',
        fontSize: 35,
        lineHeight: 10,
        fontWeight: "bold"
    },
    resqbutton: {
        padding: 5,
        height: 300,
        width: 300,  
        borderRadius:400,  
        backgroundColor:'#ff6347',
        alignItems: "center",
        justifyContent: 'center',
    },
    button: {
        height: 80,
        borderRadius: 5,
        // backgroundColor: '#788eec',
        width: 50,
        alignItems: "center",
        justifyContent: 'center'
    },
    buttonText: {
        color: 'white',
        fontSize: 16
    },
    listContainer: {
        marginTop: 20,
        padding: 20,
    },
    entityContainer: {
        marginTop: 16,
        borderBottomColor: '#cccccc',
        borderBottomWidth: 1,
        paddingBottom: 16
    },
    entityText: {
        fontSize: 20,
        color: '#333333'
    }
})