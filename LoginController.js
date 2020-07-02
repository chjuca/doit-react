import React, { Component } from "react";
import { StyleSheet, View, Text, AsyncStorage, BackHandler } from 'react-native';
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
    BackHandler.addEventListener('hardwareBackPress', this.onBackButtonPressed);
  }

  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', this.onBackButtonPressed);
  }

  onBackButtonPressed() {
    BackHandler.exitApp();
    return true;
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

  _removeData = async () => {
    try {
      await AsyncStorage.removeItem('currentUser')
      return true;
    }
    catch (exception) {
      return false;
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
      const firebaseUserCredential = await firebase.auth().signInWithCredential(credential);
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
      this.componentDidMount();
      await GoogleSignin.revokeAccess();
      await GoogleSignin.signOut();
      StaticData.CURRENT_USER = null;
      this._removeData();
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