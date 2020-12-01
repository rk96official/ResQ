import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#376C93'    
    },
    title: {
        color: "#161924",
        fontSize: 50,
        fontWeight: "800",
        marginVertical: 8,
        justifyContent: 'center',
        alignSelf: 'center'
    },
    rescue: {
        flex: 1,
        backgroundColor: '#376C93',
        textAlign: 'center',
        alignSelf: 'center',
        marginTop: 20,
        marginBottom: -200
    },
    situation: {
        flex: 1,
        backgroundColor: '#376C93',
        marginTop: 20,

    },
    logo: {
        flex: 1,
        height: 120,
        width: 90,
        alignSelf: "center",
        margin: 30
    },
    valueText: {
        fontSize: 18, 
        justifyContent: 'center',
        alignSelf: 'center'
    },
    view: {
        height: 50
    },
    input: {
        flexWrap: 'wrap',
        marginTop: 30,
        height: 80,
        width: 350,
        borderRadius: 5,
        overflow: 'hidden',
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center'
    },
    button: {
        backgroundColor: '#788eec',
        marginLeft: 30,
        marginRight: 120,
        marginTop: 50,
        marginBottom: 20,
        height: 48,
        width: 100,
        borderRadius: 5,
        alignItems: "center",
        justifyContent: 'center'
    },
   
    buttonTitle: {
        color: 'white',
        fontSize: 16,
        fontWeight: "bold"
    },
    footerView: {
        flex: 1,
        alignItems: "center",
        marginTop: 20
    },
    footerText: {
        fontSize: 16,
        color: '#2e2e2d'
    },
    footerLink: {
        color: "#788eec",
        fontWeight: "bold",
        fontSize: 16
    },
    radioText: {
        marginRight: 35,
        fontSize: 20,
        color: '#000',
        fontWeight: '700'
    },
	radioCircle: {
		height: 30,
		width: 30,
		borderRadius: 100,
		borderWidth: 2,
		borderColor: '#3740ff',
		alignItems: 'center',
		justifyContent: 'center',
	},
	selectedRb: {
		width: 15,
		height: 15,
		borderRadius: 50,
		backgroundColor: '#3740ff',
    },
    result: {
        marginTop: 20,
        color: 'white',
        fontWeight: '600',
        backgroundColor: '#F3FBFE',
    }
})