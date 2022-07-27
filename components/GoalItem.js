import {View, Text, StyleSheet, Pressable} from 'react-native'

function GoalItem(props) {

    function deleteTask() {
        props.onDeleteTask(props.id);
    }

    return (
        <View style={styles.listItem}>
            <Pressable android_ripple={{color:"#dddddd"}} onPress={deleteTask}>
                <Text style={{color:'white', padding:8}}>{props.text}</Text>
            </Pressable>
        </View>
    );
}

export default GoalItem

const styles = StyleSheet.create({
    listItem:{
        margin:8,
        borderRadius:6,
        backgroundColor:"#5e0acc",
        color:'white'
      }
})