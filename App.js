
 import {createSwitchNavigator} from 'react-navigation'
 import {createDrawerNavigator, DrawerNavigatorItems} from 'react-navigation-drawer'
 import {Dimensions} from 'react-native'
 import {Feather} from '@expo/vector-icons'
 import Sidebar from './src/screens/Components/Sidebar'
 import Home from './src/screens/HomeScreen/HomeScreen'
 import React from 'react'
 import { SafeAreaView, StyleSheet } from 'react-native'
 import { createAppContainer} from 'react-navigation'
 import {createStackNavigator} from 'react-navigation-stack'
 import Login from './src/screens/LoginScreen/LoginScreen'
 import Profile from './src/screens/Profile/Profile'
 import Groups from './src/screens/Groups/Groups'
 import SignOut from './src/screens/SignOut/SignOut'
 import Rescue from './src/screens/RescueScreen/RescueScreen'
 import SignUp from './src/screens/RegistrationScreen/RegistrationScreen'
 import AuthLoading from './src/screens/Loading'


const DrawerNavigator = createDrawerNavigator({
  Home:{
      screen: Home,
      navigationOptions:{
        title: "Home",
        drawerIcon: ({tintColor}) => <Feather name="home" size={16} color={tintColor} />
    }
  },
  Profile:{
    screen: Profile,
    navigationOptions:{
      title: "Profile",
      drawerIcon: ({tintColor}) => <Feather name="user" size={16} color={tintColor} />
    }
  },
  Groups:{
    screen: Groups,
    navigationOptions:{
      title: "My Groups",
      drawerIcon: ({tintColor}) => <Feather name="list" size={16} color={tintColor} />
    }
  },
  SignOut:{
     screen: SignOut,
    navigationOptions:{
      title: "Sign Out",
      drawerIcon: ({tintColor}) => <Feather name="log-out" size={16} color={tintColor} />
    }
  },
  },{
    contentComponent: props => <Sidebar {...props} />,
    drawerWidth: Dimensions.get("window").width * 0.85,
    hideStatusBar: true,

    contentOptions:{
      activeBackgroundColor: "rgba(212,118,207,0.2)",
      activeTintColor: "#53115B",
      itemsContainerStyle:{
        marginTop: 16,
        marginHorizontal: 8
      },
      itemStyle: {
        borderRadius: 4
      }
    }
},{
  initialRouteName: 'Home'
});


const switchNavigator = createSwitchNavigator(
  {
    AuthLoading,
    Login,
    SignUp,
    Rescue,
    DrawerNavigator,
  },
  {
    initialRouteName: 'AuthLoading',
  },
)

const AppNavigator = createAppContainer(switchNavigator)

class App extends React.Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <AppNavigator />
      </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})

export default App