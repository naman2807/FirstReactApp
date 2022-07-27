import { useState } from 'react';
import { Button, StyleSheet, View, FlatList} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {
  const [modalIsVisible, updateModalVisibility] = useState(false)
  const [taskItemList, taskItemListUpdate] = useState([]);

  function updateListItemTask(taskItem){
    taskItemListUpdate((list) => [...list, {text: taskItem, key: Math.random().toString()}]);
    stopAddTaskHandler()
  }

  function deleteTaskHandler(id) {
    taskItemListUpdate((list) => {
        return list.filter((task) => task.key !== id);
    });
  }

  function startAddTaskHandler() {
    updateModalVisibility(true)
  }

  function stopAddTaskHandler() {
    updateModalVisibility(false)
  }

  return (
    <>
    <StatusBar style='light'/>
    <View style={styles.appContainer}>
      <Button title='Add New Task' color="#5e0acc" onPress={startAddTaskHandler}/>
      <GoalInput addTask ={updateListItemTask} showList={stopAddTaskHandler} visible={modalIsVisible}/>
      <View style={styles.listContainer}>
        <FlatList data={taskItemList} renderItem={(itemData) => {
            return <GoalItem text={itemData.item.text} id={itemData.item.key} onDeleteTask={deleteTaskHandler}/>
        }}/>
      </View>
    </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer:{
    flex:1,
    paddingTop:70,
    paddingHorizontal:16,
    backgroundColor: "#311b6b",
 },

  listContainer:{
    flex:5,
    marginTop:10
  }
 
});
