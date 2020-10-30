import React from 'react';
import { ActivityIndicator, View, Text, StyleSheet } from 'react-native';

import { firebase } from '../../firebase/config';

export default class SignOut extends React.Component {
    componentDidMount() {
        firebase
        .auth()
        .signOut()
        this.props.navigation.navigate('AuthLoading');
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