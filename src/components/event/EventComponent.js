import React, { Component, useState } from "react";
import { View, Text, StyleSheet, TextInput, Button, Picker } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

export default class EventComponent extends Component {

    state = {
        date: new Date('2020-06-12T14:42:42'),
        mode: 'date',
        show: false,
        name: '',
        description: '',
        priority:''
      }
      setDate = (event, date) => {
        date = date || this.state.date;
    
        this.setState({
          show: Platform.OS === 'ios' ? true : false,
          date,
        });
      };

      onChange = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setShow(Platform.OS === 'ios');
        setDate(currentDate);
      };

      showMode = currentMode => {
        setShow(true);
        setMode(currentMode);
      };

      show = mode => {
        this.setState({
          show: true,
          mode,
        });
      };
    
      datepicker = () => {
        this.show('date');
      };
    
      timepicker = () => {
        this.show('time');
      };  
      
      updatePriority = (priority) => {
        this.setState({ priority: priority })
     }
   /* constructor(props) {
        super(props);
        this.state = {event:[]};
    }*/

    render() {
        const { show, date, mode } = this.state
        console.log(date);
       // const [selectedValue, setSelectedValue] = useState("Alta");
        return (
            <View style={styles.cont}>
                <Text style={styles.tittle}>EVENTOS</Text>
                <Text style={styles.subtittle}>Nombre</Text>
                <TextInput style={styles.inputBox} id='name' value={this.state.name} ></TextInput>
                <Text style={styles.areaBox} >Descripción</Text>
                <TextInput style={styles.inputBox} id='description' value={this.state.description} ></TextInput>
                <Text style={styles.subtittle} >Fecha</Text>
                <View style={styles.button} >
                    <Button 
                        onPress={this.datepicker} 
                        title="Seleccione una fecha"
                    />
                </View>
                <Text style={styles.subtittle} >Hora</Text>
                <View style={styles.button} >
                     <Button 
                        onPress={this.timepicker} 
                        title="Seleccione una hora"
                        type="clear"
                    />
                </View>
                    { show && 
                        <DateTimePicker
                         value={date}
                         mode={mode}
                         is24Hour={true}
                         display="default"
                         onChange={ this.setDate }
                        />
                    }
                    
                    
                <View>
                <Text style={styles.subtittle} >Prioridad</Text>
                    <Picker style={styles.pickcont} selectedValue = {this.state.priority} onValueChange = {this.updatePriority}>
                        <Picker.Item label= 'Seleccione prioridad' value='0' />
                        <Picker.Item label= 'Alta' value='alta' />
                        <Picker.Item label= 'Media' value='media'/>
                        <Picker.Item label= 'Baja' value='baja' />
                    </Picker>
                </View>
                <View style={styles.button}>
                    <Button  
                        title='GUARDAR'
                    />

                </View>
            </View>


           /* <View style={styles.container}>
                <View style={styles.containerRight}>
                    <Text style={styles.hour}>{this.props.item.hourStart} - {this.props.item.hourEnd} </Text>
                    <Text style={styles.subtittle}>{this.props.item.name}</Text>
                    <Text style={styles.description}>{this.props.item.description}</Text>
                </View>
                <View style={styles.containerLeft}>
                    <Text style={[styles.image, {backgroundColor: this.props.item.color}]}>{this.props.item.image}</Text>
                </View>
            </View>*/

        );
        if (event.type === "set")
        console.log("value:" , value);
    }

}


const styles = StyleSheet.create({
    cont:{
        flexGrow: 1,
        justifyContent: 'flex-start',
        alignItems: 'stretch',
        backgroundColor: '#0000',
        marginTop: 40
    },
    container: {
        margin: 10,
        backgroundColor: '#FFFFFF',
        flexDirection: 'row',
        borderRadius: 10,
        alignItems: 'center',
       // justifyContent: 'center',
        alignSelf: 'stretch'
    },
    containerRight: {
        flex: 2,
        flexDirection: 'column',
        margin: 10,
    },
    containerLeft: {
        flex: 0.75,
    },
    hour: {
        fontFamily: 'Roboto',
        fontSize: 15,
        margin: 3,
        color: '#737373'
    },
    subtittle: {
        fontFamily: 'Roboto',
        fontWeight: 'bold',
        fontSize: 18,
        alignSelf: 'flex-start',
        marginLeft: 58,
        marginTop: 10
    },
    tittle: {
        fontFamily: 'Roboto',
        fontWeight: 'bold',
        fontSize: 28,
        alignSelf: 'center',
    },
    name: {
        fontFamily: 'Roboto',
        fontWeight: 'bold',
        fontSize: 20,
        margin: 3,
    },
    description: {
        fontFamily: 'Roboto',
        fontSize: 13,
        margin: 3,
        color: '#929292'
    },
    image:{
        borderRadius: 100,
        textAlign: 'center',
        textAlignVertical: 'center',
        fontFamily: 'sans-serif-condensed',
        width: 60,
        height: 60,
        color: 'white',
        fontSize: 45
    },
    inputBox:{
        width:320,
        backgroundColor: 'rgba(255, 255, 255, 0.42)',
        borderColor: 'gray',
        borderRadius: 25,
        paddingHorizontal: 16,
        fontSize: 16,
        marginVertical: 10,
        alignSelf: "center",
        borderWidth: 0.5
    },
    button: {
        alignItems: 'center',
        marginBottom: 10,
        borderRadius: 25,
    },
    pickcont: {
        flex: 1,
        paddingTop: 40,
        alignItems: "center",
        marginLeft: 50
    },
    areaBox:{
        width:320,
        height: 50,
        backgroundColor: 'rgba(255, 255, 255, 0.42)',
        borderColor: 'gray',
        borderRadius: 25,
        paddingHorizontal: 16,
        fontSize: 16,
        marginVertical: 10,
        alignSelf: "center",
        borderWidth: 0.5
    },
    submit:{
        width: 200,
        marginRight:40,
        marginLeft:40,
        marginTop:10,
        paddingTop:10,
        paddingBottom:10,
        backgroundColor:'#68a0cf',
        borderRadius:15,
        borderWidth: 1,
        borderColor: '#fff',
        alignSelf: "center"
    }
})
