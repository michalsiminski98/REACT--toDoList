
// task
const Task = props => {
    return(
        <li>
        <i onClick={props.delete} class="fas fa-check-circle"></i>
        {props.content} 
        </li>
    )
}

// add task
const AddInput = props => {
    return(
        <div className="inputWrapper">
            <input type="text" placeholder="Add task" onChange={props.onChange}/>
            <i onClick={props.addTask} class="fas fa-plus"></i>
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
                <div className="nameWrapper">
                    <h1>To-do List App</h1>
                </div>
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