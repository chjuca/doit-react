import React, { Component } from 'react';
import { FlatList } from 'react-native';
import { ListItem } from 'react-native-elements';

export default class GroupChatListComponent extends Component{

    constructor(props){
        super(props);
        this.state = {
            groups: [
                {
                    groupId: "111",
                    groupName: "Fundamentos de Ingenieria de software",
                    lastMessage: "Buenos dias",
                    lastMessageTime: '18:42'
                },
                {
                    groupId: "112",
                    groupName: "Sistemas Operativos",
                    lastMessage: "Todo bien miyin?",
                    lastMessageTime: '08:43'
                },
                {
                    groupId: "113",
                    groupName: "Base de datos Avanzada",
                    lastMessage: "JAJAJAJA",
                    lastMessageTime: '12:29'
                },
                {
                    groupId: "114",
                    groupName: "GP 2.2",
                    lastMessage: "Presentaran el informe",
                    lastMessageTime: '16:11'
                }
            ]
        };
    }

    render(){
        return(
            <FlatList 
                data = { this.state.groups }
                renderItem = { ({item}) => (
                    <ListItem onPress = { () => this.props.navigation.navigate('ChatComponent')} // Call Gerson's screen
                    roundAvatar
                    title={item.groupName}
                    titleStyle={{ 
                        color: 'black', 
                        fontWeight: 'bold' 
                    }}
                    rightTitle={item.lastMessageTime}
                    rightTitleStyle={{
                        color: 'black',
                        fontSize: 12,
                        fontWeight: 'bold' 
                    }}
                    subtitle={item.lastMessage}
                    leftAvatar={{
                        overlayContainerStyle:{backgroundColor: 'gray'},
                        title:item.groupName[0]
                      }}
                    badge={{
                        value: 3,
                        status: "primary",
                        containerStyle:{ position: 'absolute', top: 50, right: 40 }
                    }}
                    bottomDivider 
                    />
                )}
                keyExtractor={item => item.groupId}
            />

        );
    }

}