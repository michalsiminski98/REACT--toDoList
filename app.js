
// task
const Task = props => {
    return(
        <li>
            {props.content} 
            <button className="deleteButton" onClick={props.delete}>Usuń</button> 
        </li>
    )
}

// add task
const AddInput = props => {
    return(
        <div className="inputWrapper">
            <input type="text" placeholder="Dodaj zadanie" onChange={props.onChange}/>
            <button  className="inputButton" onClick={props.addTask}><span>Dodaj</span></button>
        </div>
    )
}

// list
class List extends React.Component{

    state={
        id:0,
        inputValue: '',
        tasks:[]
    }

    //  input functions   
    handleChange = (e) => {
        this.setState({inputValue: e.target.value});
      }

    addTask = () => {
        const tasks = this.state.tasks;
        tasks.push({id:this.state.id,task:this.state.inputValue});
        this.setState({tasks, id: this.state.id + 1});
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