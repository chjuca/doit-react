/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { Image } from 'react-native';
import { InputToolbar, Actions, Composer, Send } from 'react-native-gifted-chat';

export const renderInputToolbar = (props) => (
  <InputToolbar
    {...props}
    containerStyle={{
      backgroundColor: '#E6E6E6',
      paddingTop: 6,
    }}
    primaryStyle={{ alignItems: 'center' }}
  />
);

export const renderActions = (props) => (
  <Actions
    {...props}
    containerStyle={{
      width: 44,
      height: 44,
      alignItems: 'center',
      justifyContent: 'center',
      marginLeft: 4,
      marginRight: 4,
      marginBottom: 0,
    }}
    icon={() => (
      <Image
        style={{ width: 32, height: 32 }}
        source={{
          uri: 'https://placeimg.com/32/32/any',
        }}
      />
    )}
    options={{
      'Choose From Library': () => {
        console.log('Choose From Library');
      },
      Cancel: () => {
        console.log('Cancel');
      },
    }}
    optionTintColor="#222B45"
  />
);

export const renderComposer = (props) => (
  <Composer
    {...props}

    textInputStyle={{
      color: '#222B45',
      backgroundColor: 'white',
      borderWidth: 1.3,
      borderRadius: 23,
      borderColor: '#000000',
      paddingTop: 8.5,
      paddingHorizontal: 20,
      marginLeft: 7,
      marginBottom: 5
    }}
  />
);

export const renderSend = (props) => (
  <Send
    {...props}
    disabled={!props.text}
    containerStyle={{
      //backgroundColor: 'white',
      // width: 44,
      // height: 44]
      alignItems: 'center',
      justifyContent: 'center',
      marginHorizontal: 12,
      marginBottom: 4
    }}
  >
    <Image
      style={{ width: 32, height: 36 }}

      source={require('../../assets/send.png')}
    />
  </Send>
);