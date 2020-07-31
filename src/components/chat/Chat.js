import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import { GiftedChat } from 'react-native-gifted-chat';
import initialMessages from './messages';
import { renderInputToolbar, renderActions, renderComposer, renderSend } from './InputToolbar';
import {
  renderAvatar,
  renderBubble,
  renderSystemMessage,
  renderMessage,
  renderMessageText,
  renderCustomView,
} from './MessageContainer.js';


const Chats = () => {
  const [text, setText] = useState('');
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    setMessages(initialMessages.reverse());
  }, []);

  const onSend = (newMessages = []) => {
    setMessages((prevMessages) => GiftedChat.append(prevMessages, newMessages));  
  };


  
  return (
    
      <GiftedChat
        //renderActions={renderActions}
        messages={messages}
        text={text}
        onInputTextChanged={setText}
        onSend={onSend}
        user={{
          _id: 1,
          name: 'Carlos Castillo',
          avatar: 'https://scontent.fgye4-1.fna.fbcdn.net/v/t1.0-1/23621647_1574745289268698_75971956595828836_n.jpg?_nc_cat=105&_nc_sid=dbb9e7&_nc_ohc=aty_UkXJz58AX_91JL9&_nc_ht=scontent.fgye4-1.fna&oh=8ab6c6babb4496d7cc6c9f27cadec50c&oe=5F42415D',
        }}

        alignTop
        alwaysShowSend
        scrollToBottom
        // showUserAvatar
        renderAvatarOnTop
        renderUsernameOnMessage
        bottomOffset={26}
        onPressAvatar={console.log}
        renderInputToolbar={renderInputToolbar}
        renderComposer={renderComposer}
        renderSend={renderSend}
        renderAvatar={renderAvatar}
        renderBubble={renderBubble}
        renderSystemMessage={renderSystemMessage}
        renderMessage={renderMessage}
        renderMessageText={renderMessageText}
        // renderMessageImage
        //renderCustomView={renderCustomView}
        isCustomViewBottom
        messagesContainerStyle={{ backgroundColor: '#E6E6E6' }}
        parsePatterns={(linkStyle) => [
          {
            pattern: /#(\w+)/,
            style: linkStyle,
            onPress: (tag) => console.log(`Pressed on hashtag: ${tag}`),
          },
        ]}
      />

   
  );
  

};


export default Chats;