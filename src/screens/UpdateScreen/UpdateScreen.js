import React, { useState } from 'react'
import { Image, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import styles from './styles';
import { firebase } from '../../firebase/config'
import DropDownPicker from 'react-native-dropdown-picker';

export default function UpdateScreen({navigation}) {
    const [fullName, setFullName] = useState('')
    const [email, setEmail] = useState('')
    const [age, setAge] = useState('')
    const [group, setGroup] = useState('')
    const [shouldshow] = useState(true)

    const onUpdatePress = () => { 
        const user = firebase.auth().currentUser;
        const id = user.uid;
        firebase
            .firestore()
            .collection('users')
            .doc(id)
            .update({
                fullName: fullName,
                email: email,
                age: age,
                group: group,
            }
            )
        navigation.navigate('Home')
    }

    return (
        <View style={styles.container}>
            <KeyboardAwareScrollView
                style={{ flex: 1, width: '100%' }}
                keyboardShouldPersistTaps="always">
                <Text style={styles.title}>Update Profile</Text>
                <View style = {styles.contain}>
               
                <TextInput
                    style={styles.input}
                    placeholder='Full Name'
                    placeholderTextColor="#aaaaaa"
                    onChangeText={(text) => setFullName(text)}
                    value={fullName}
                    underlineColorAndroid="transparent"
                    autoCapitalize="none"
                />
                <TextInput
                    style={styles.input}
                    placeholderTextColor="#aaaaaa"
                    placeholder='Age'
                    onChangeText={(text) => setAge(text)}
                    value={age}
                    underlineColorAndroid="transparent"
                    autoCapitalize="none"
                />
                {shouldshow && age>=18? (
                    <DropDownPicker
                    items={[
                        {label: 'Flooding', value: 0 },
                        {label: 'Fire', value: 1 },
                        {label: 'Accidents', value: 2 },
                        {label: 'Car wreck', value: 3 },
                        {label: 'Stuck in the house', value: 4 },
                        {label: 'Dog Bite', value: 5 },
                        {label: 'Stuck in the Elevator', value: 6 }
                    ]}
                    placeholder="Select a voluntary group"
                    containerStyle={{height: 40, width: 250}}
                    style={{backgroundColor: 'lightgrey', marginLeft: 30}}
                    itemStyle={{
                        justifyContent: 'flex-start'
                    }}
                    dropDownStyle={{backgroundColor: '#fafafa'}}
                    onChangeItem={item => setGroup(item.label)}
                />
                ):null}
                
                <TextInput
                    style={styles.input}
                    placeholder='E-mail'
                    placeholderTextColor="#aaaaaa"
                    onChangeText={(text) => setEmail(text)}
                    value={email}
                    underlineColorAndroid="transparent"
                    autoCapitalize="none"
                />
                <View style={{ flexDirection:"row" }}>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => navigation.navigate('Home')}>
                    <Text>Go Back</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => onUpdatePress()}>
                    <Text >Update Profile</Text>
                </TouchableOpacity>
                </View>
                </View>
            </KeyboardAwareScrollView>
        </View>
    )
}
    