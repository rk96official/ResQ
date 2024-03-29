
import React from 'react'
import Home from './HomeScreen/HomeScreen'
export { default as HomeScreen } from './HomeScreen/HomeScreen'
export { default as LoginScreen } from './LoginScreen/LoginScreen'
export { default as RegistrationScreen } from './RegistrationScreen/RegistrationScreen'
export { default as RescueScreen } from './RescueScreen/RescueScreen'
export { default as MapScreen } from './MapScreen/MapScreen'
export { default as VictimScreen } from './VictimScreen/VictimScreen'
export { default as UpdateScreen } from './UpdateScreen/UpdateScreen'
export { default as SurveyScreen } from './SurveyScreen/SurveyScreen'
export const Profile = ({navigation}) => <Home navigation={navigation} name= "Profile" />
export const Groups = ({navigation}) => <Home navigation={navigation} name= "Groups" />
export const SignOut = ({navigation}) => <Home navigation={navigation} name= "SignOut" />

