import React, { useEffect, useState } from 'react'
import { StyleSheet,Text, TouchableOpacity, View } from 'react-native'

class  Groups extends React.Component{

    render(){
        return (
            <View style={styles.container}>
            <Text>Groups Screen</Text>

            <TouchableOpacity
                style={styles.groupsButton}
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
    groupsButton: {
        height: 30,
        width: '40%',
        margin: 5,
        borderWidth: 1,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
      }
  })
export default Groups