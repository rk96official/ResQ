import React from 'react';
import { ActivityIndicator, View, Text, StyleSheet } from 'react-native';

import { firebase } from '../firebase/config';

export default class Loading extends React.Component {
    componentDidMount() {
        firebase
        .auth()
        .onAuthStateChanged(user => {
            this.props.navigation.navigate(user ? 'DrawerNavigator' : 'Login')
        })
    }
    render() {
    return (
        <View style={styles.container}>
            <Text>Loading</Text>
            <ActivityIndicator size="large" />
        </View>
    )}
}

const styles = StyleSheet.create({
    container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    }
})