/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { View, Text } from 'react-native';
import { Avatar, Bubble, SystemMessage, Message, MessageText } from 'react-native-gifted-chat';


export const renderAvatar = (props) => (
  <Avatar
    {...props}
    imageStyle= {{fontSize:18}}
  />
);

export const renderBubble = (props) => (
  <Bubble
    {...props}
    // renderTime={() => <Text>Time</Text>}
    // renderTicks={() => <Text>Ticks</Text>}
    containerStyle={{
      left: { },
      right: {},
    }}
    wrapperStyle={{
      // left: { borderColor: 'tomato', borderWidth: 4 },
      right: {},
    }}
    bottomContainerStyle={{
      left: {},
      right: {},
    }}
    tickStyle={{}}
    usernameStyle={{ color: 'tomato', fontWeight: '100' }}
    
  />
);

// export const renderSystemMessage = (props) => (
//   <SystemMessage
//     {...props}
//     containerStyle={{ backgroundColor: '#E6E6E6' }}
//     //wrapperStyle={{ borderWidth: 10, borderColor: 'white' }}
//     textStyle={{ fontSize: 18 ,color: 'black', fontWeight: '900' }}
//   />
// );

export const renderMessage = (props) => (
  <Message
    {...props}
    // renderDay={() => <Text>Date</Text>}
    containerStyle={{
      // left: { backgroundColor: 'white' },
      // right: { backgroundColor: 'white' },
    }}
  />
);

export const renderMessageText = (props) => (
  <MessageText
    {...props}
    containerStyle={{
      // left: { backgroundColor: 'white' },
      // right: { backgroundColor: 'blue' },
    }}
    textStyle={{
      left: { color: 'black' },
      right: { color: 'white' },
    }}
    linkStyle={{
      left: { color: 'orange' },
      right: { color: 'orange' },
    }}
    customTextStyle={{ fontSize: 14, lineHeight: 24 }}
  />
);

// export const renderCustomView = ({ user }) => (
//   <View style={{ minHeight: 20, alignItems: 'center' }}>
//     <Text>
//       Current user:
//       {user.name}
//     </Text>
//     <Text>From CustomView</Text>
//   </View>
// );