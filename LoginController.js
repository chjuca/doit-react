import React, { Component, Fragment } from "react";
import { SafeAreaView, StyleSheet, ScrollView, View, Text, StatusBar, Button, Image, AsyncStorage } from 'react-native';
import { Header, LearnMoreLinks, Colors } from 'react-native/Libraries/NewAppScreen';
import { GoogleSignin, GoogleSigninButton, statusCodes } from 'react-native-google-signin';
import firebase from 'react-native-firebase'
import StaticData from './StaticData';

export default class LoginController extends Component {

  constructor(props) {
    super(props);
    this.state = {
      pushData: [],
      loggedIn: false
    }
  }


  componentDidMount() {
    GoogleSignin.configure({
      webClientId: '696883679209-rs50mv46cu9dvce4tnh3mcph0jq5383r.apps.googleusercontent.com',
      offlineAccess: true,
      hostedDomain: '',
      forceConsentPrompt: true,
    });
  }

  getCurrentUser = async () => {
    try {
      const value = await AsyncStorage.getItem('currentUser');
      if (value !== null) {
        return JSON.parse(value);
      }
    } catch (error) {
    }
  };

  _storeData = async (userInfo) => {
    try {
      await AsyncStorage.setItem(
        'currentUser', JSON.stringify(userInfo.user)
      );
    } catch (error) {
      console.log('no funciono');
    }
  };

  firebaseGoogleLogin = async () => {
    try {
      // add any configuration settings here:
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      this.setState({ userInfo: userInfo, loggedIn: true });;
      this.getCurrentUser();
      // create a new firebase credential with the token
      const credential = firebase.auth.GoogleAuthProvider.credential(userInfo.idToken, userInfo.accessToken)
      // login with credential
      StaticData.CURRENT_USER = userInfo;
      this._storeData(StaticData.CURRENT_USER);
      if (StaticData.CURRENT_USER !== undefined) {
        this.props.navigation.navigate('Home')
      }
    } catch (error) {
      console.log(error)
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        // user cancelled the login flow
      } else if (error.code === statusCodes.IN_PROGRESS) {
        // operation (f.e. sign in) is in progress already
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        // play services not available or outdated
      } else {
        // some other error happened
      }
    }
  }

  signOut = async () => {
    try {
      await GoogleSignin.revokeAccess();
      await GoogleSignin.signOut();
      this.setState({ user: null, loggedIn: false }); // Remember to remove the user from your app's state as well
      StaticData.CURRENT_USER = null;
    } catch (error) {
      console.error(error);
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>¡Bienvenido!</Text>
        <GoogleSigninButton
          style={{ width: 192, height: 48 }}
          size={GoogleSigninButton.Size.Wide}
          color={GoogleSigninButton.Color.Dark}
          onPress={this.firebaseGoogleLogin}
          disabled={this.state.isSigninInProgress} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column'
  },
  welcome: {
    flex: 0.45,
    fontFamily: 'Roboto',
    fontWeight: 'bold',
    fontSize: 40
  }
});