import {View, TextInput, Button, StyleSheet, Modal, Image} from 'react-native'
import { useState } from 'react'

function GoalInput(props){
    const [taskItem, taskItemUpdate] = useState('');
    
    function updateTaskItem(task){
        taskItemUpdate(task);
    }

    function onAddTask(){
        props.addTask(taskItem);
        taskItemUpdate("");
    }

    return (
        <Modal visible={props.visible} animationType="slide">
            <View style={styles.inputContainer}>
                <Image style={styles.image} source={require("../assets/adaptive-icon.png")}/>
                <TextInput style={styles.textInputContainer} value={taskItem} placeholderTextColor="#120438" placeholder='Enter Your Task' onChangeText={updateTaskItem}></TextInput>
                <View style={styles.buttonContainer}>
                    <View style={styles.button}>
                        <Button title='Add Task' onPress={onAddTask} color="#5e0acc"></Button>
                    </View>
                    <View style={styles.button}>
                        <Button title='Cancel' onPress={props.showList} color="#f31282"></Button>
                    </View>
                </View>
            </View>
        </Modal>
    );
}

export default GoalInput

const styles = StyleSheet.create({
    inputContainer:{
        flex:1,
        paddingHorizontal:16,
        justifyContent:"center",
        alignItems:"center",
        backgroundColor: "#311b6b",
      },
    
      textInputContainer:{
        padding:10,
        borderColor: "#e4d0ff",
        backgroundColor:"#e4d0ff",
        borderWidth: 1,
        width:"100%",
        color:"#120438",
        borderRadius:6
      },

      buttonContainer:{
        flexDirection:'row',
        margin:16
      },

      button:{
        margin:10,
        width:"40%"
      },

      image:{
        height:100,
        width:100,
        margin:10
      }
})