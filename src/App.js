import React from "react";
import "./App.css";
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import tasks from "./example/task.json";
import Tasks from "./components/Tasks";
import TaskForm from "./components/TaskForm";
import Post from './components/Post';

class App extends React.Component {

  state = {
    tasks: tasks
  }

  addTask = (title, description) => {
    const newTask = {
      title: title,
      description: description,
      id: this.state.tasks.length
    }
    this.setState({
      tasks: [...this.state.tasks, newTask]
    })
  } 

  deleteTask = id => {
    const newTask = this.state.tasks.filter(task => task.id !== id);
    this.setState({tasks: newTask})
  }

  checkDone = id => {
    const newTasks = this.state.tasks.map(task => {
      if(task.id === id) {
        task.done = !task.done;
      }
      return task;
    });
    this.setState({tasks: newTasks});
  }
  
  render() {
    return <div>
      <Router>

        <Link to="/">Home</Link>
        <br/>
        <Link to="/posts">Posts</Link>

        <Route exact path="/" render={() => {
          return <div>
            <TaskForm addTask={this.addTask} />
            <Tasks 
            tasks={this.state.tasks}
            deleteTask={this.deleteTask}
            checkTasks={this.checkDone}
            />
          </div>
        }} >

        </Route>
        <Route path="/posts" component={Post} />
      </Router>
      
      <Post />
    </div>
  }
}

export default App;