
// task
const Task = props => {
    return(
        <li>
            {props.content} 
            <button onClick={props.delete}>Usuń</button> 
        </li>
    )
}

// add task
const AddInput = props => {
    return(
        <>
            <input type="text" placeholder="Dodaj zadanie" onChange={props.onChange}/>
            <button onClick={props.addTask}>Dodaj</button>
        </>
    )
}

// list
class List extends React.Component{

    state={
        inputValue: '',
        tasks:[
        ]
    }

    //  input functions   
    handleChange = (e) => {
        this.setState({inputValue: e.target.value});
      }

    addTask = () => {
        const tasks = this.state.tasks;
        const id = this.state.tasks.length;
        tasks.push({id:id,task:this.state.inputValue})
        this.setState({tasks})
    }

    //  delete
    handleDelete(id) {
        const tasks = [...this.state.tasks];
        const index = this.state.tasks.findIndex(person => person.id === id);
        tasks.splice(index, 1);
        this.setState({tasks});
    }

    render(){
        const {tasks, inputValue} = this.state;
        return(
            <>
                <AddInput addTask={this.addTask} onChange={this.handleChange} value={inputValue}/>
                <ul>
                    {tasks.map(task => (
                        <Task key={task.id} content={task.task} delete={this.handleDelete.bind(this, task.id)}/>
                    ))}
                </ul>
            </>
        )
    }
}

ReactDOM.render(<List/>, document.querySelector('#root'))