import React, { Component } from 'react';
import { Text, View, StyleSheet,TouchableOpacity } from 'react-native';
import { firebase } from '../../firebase/config'
import RadioGroup from 'react-native-radio-buttons-group';

var ans=''
export default class SurveyScreen extends Component {
    onSubmitPress(){
        for (let i of this.state.success){
            if (i.selected == true){
                ans = i.label
            }
        } 
        firebase.firestore().collection('Feedback').doc('Yes').set({
            feedback: ans
            
        })
        alert('Thank you for your feedback')
        this.props.navigation.navigate('Home')
    }

    state = {
        success: [
            {
                label: 'Yes',
                value: 'yes'
            },
            {
                label: 'No',
                value: 'no'
            }
        ],
        answer: [
            {
                label: 'Yes',
                value: 'yes'
            },
            {
                label: 'No',
                value: 'no'
            }
        ],
        rate: [
            {
                label: 1,
                value: 1
            },
            {
                label: 2,
                value: 2
            },
            {
                label: 3,
                value: 3
            },
            {
                label: 4,
                value: 4
            },
            {
                label: 5,
                value: 5
            }
        ]
    };

    render() {
        let selectedButton = this.state.answer.find(e => e.selected == true);
        selectedButton = selectedButton ? selectedButton.value : this.state.answer[0].label;

        let selectedButton1 = this.state.rate.find(e => e.selected == true);
        selectedButton1 = selectedButton1 ? selectedButton1.value : this.state.rate[0].label;

        let selectedButton2 = this.state.rate.find(e => e.selected == true);
        selectedButton2 = selectedButton2 ? selectedButton2.value : this.state.success[0].label;
        return (
            <View style={styles.container}>
                <View style= {styles.text}>
                <Text style={styles.title}>Survey Screen</Text>
                <View>
                    <Text style={styles.valueText}>Did the volunteer arrive in time?</Text>
                    <RadioGroup radioButtons={this.state.answer} onPress={data => this.setState({ answer: data })} />
                </View>
                <View>
                    <Text style={styles.valueText}>Were you successfully rescued?</Text>
                    <RadioGroup radioButtons={this.state.success} onPress={data => this.setState({ success: data })} />
                </View>
                <View>
                    <Text style={styles.valueText}>How would you rate our service?</Text>
                    <RadioGroup radioButtons={this.state.rate} onPress={data => this.setState({ rate: data })} />
                    
                </View>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => this.onSubmitPress() }>
                    <Text style={styles.buttonTitle}>Submit Feedback</Text>
                </TouchableOpacity>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: "#376C93"
    },
    text: {
        marginTop:50, 
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: "#376C93"
    },
    valueText: {
        marginTop: 20,
        fontSize: 18, 
       
    },
    title:{
        color: "#161924",
        fontSize: 50,
        fontWeight: "800",
        marginVertical: 8,
        justifyContent: 'center',
        alignSelf: 'center'
    },
    button: {
        backgroundColor: '#788eec',
       marginTop: 80,
       marginBottom: 120,
        height: 48,
        width: 150,
        borderRadius: 5,
        alignItems: "center",
        justifyContent: 'center',
        alignSelf: 'center'
    },
   
    buttonTitle: {
        fontSize: 16,
        fontWeight: "bold"
    },
});