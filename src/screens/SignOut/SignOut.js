import React, { useEffect, useState } from 'react'
import { StyleSheet,Text, TouchableOpacity, View } from 'react-native'

class  SignOut extends React.Component{

    render(){
        return (
            <View style={styles.container}>
            <Text>SignOut Screen</Text>

            <TouchableOpacity
                style={styles.signoutButton}
                onPress={() => this.props.navigation.openDrawer()}>
                <Text>Open Drawer</Text>
            </TouchableOpacity>
      </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    signoutButton: {
        height: 30,
        width: '40%',
        margin: 5,
        borderWidth: 1,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
      }
  })
export default SignOut