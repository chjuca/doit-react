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
      <Fragment>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView>
          <ScrollView
            contentInsetAdjustmentBehavior="automatic"
            style={styles.scrollView}>
            <Header />
            {global.HermesInternal == null ? null : (
              <View style={styles.engine}>
                <Text style={styles.footer}>Engine: Hermes</Text>
              </View>
            )}
            <View style={styles.body}>
              <View style={styles.sectionContainer}>
                <GoogleSigninButton
                  style={{ width: 192, height: 48 }}
                  size={GoogleSigninButton.Size.Wide}
                  color={GoogleSigninButton.Color.Dark}
                  onPress={this.firebaseGoogleLogin}
                  disabled={this.state.isSigninInProgress} />
              </View>
              <View style={styles.buttonContainer}>
                {!this.state.loggedIn && <Text>You are currently logged out</Text>}
                {this.state.loggedIn && <Button onPress={this.signOut}
                  title="Signout"
                  color="#841584">
                </Button>}
                <Button title='Group' onPress={() => this.props.navigation.navigate('CreateGroupComponent')} />
              </View>

              {!this.state.loggedIn && <LearnMoreLinks />}
              {this.state.loggedIn && <View>
                <View style={styles.listHeader}>
                  <Text>User Info</Text>
                </View>
                <View style={styles.dp}>
                  <Image
                    style={{ width: 100, height: 100, borderRadius: 50 }}
                    source={{ uri: this.state.userInfo && this.state.userInfo.user && this.state.userInfo.user.photo }}
                  />
                </View>
                <View style={styles.detailContainer}>
                  <Text style={styles.title}>Name</Text>
                  <Text style={styles.message}>{this.state.userInfo && this.state.userInfo.user && this.state.userInfo.user.name}</Text>
                </View>
                <View style={styles.detailContainer}>
                  <Text style={styles.title}>Email</Text>
                  <Text style={styles.message}>{this.state.userInfo && this.state.userInfo.user && this.state.userInfo.user.email}</Text>
                </View>
                <View style={styles.detailContainer}>
                  <Text style={styles.title}>ID</Text>
                  <Text style={styles.message}>{this.state.userInfo && this.state.userInfo.user && this.state.userInfo.user.id}</Text>
                </View>
              </View>}
            </View>
          </ScrollView>
        </SafeAreaView>
      </Fragment>
    );
  }
}

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  listHeader: {
    backgroundColor: '#eee',
    color: "#222",
    height: 44,
    padding: 12
  },
  detailContainer: {
    paddingHorizontal: 20
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    paddingTop: 10
  },
  message: {
    fontSize: 14,
    paddingBottom: 15,
    borderBottomColor: "#ccc",
    borderBottomWidth: 1
  },
  dp: {
    marginTop: 32,
    paddingHorizontal: 24,
    flexDirection: 'row',
    justifyContent: 'center'
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
    flexDirection: 'row',
    justifyContent: 'center'
  },
  buttonContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
    flexDirection: 'row',
    justifyContent: 'center'
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});