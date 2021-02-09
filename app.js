
// task
const Task = props => {
    return(
        <li>
        <i onClick={props.delete} className="fas fa-check-circle"></i>
        {props.content} 
        </li>
    )
}

// add task
const AddInput = props => {
    return(
        <div className="inputWrapper">
            <input className="addInput" type="text" placeholder="Add task" onChange={props.onChange}/>
            <p>from</p>
            <input type="time" className="timeInput" onChange={props.timeStart}></input>
            <p>to</p>
            <input type="time" className="timeInput" onChange={props.timeStop}></input>
            <i onClick={props.addTask} className="fas fa-plus"></i>
        </div>
    )
}

// list
class List extends React.Component{

    state={
        id:0,
        inputValue: '',
        timeStart: '',
        timeStop: '',
        tasks:[]
    }

    //  input functions   
    handleChange = (e) => {
        this.setState({inputValue: e.target.value});
      }

    addTask = () => {
        if(!this.state.inputValue){
            return alert('You did not add task :)')
        }
        if(!this.state.timeStart || !this.state.timeStop){
            return alert('You did not add time :)')
        }
        const tasks = this.state.tasks;
        tasks.push({id:this.state.id,task:`${this.state.inputValue} ${this.state.timeStart} - ${this.state.timeStop}`});
        this.setState({tasks, id: this.state.id + 1});
    }

    handleTimeStart = (e) => {
        this.setState({timeStart: e.target.value});
      }
      handleTimeStop = (e) => {
        this.setState({timeStop: e.target.value});
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
                <AddInput addTask={this.addTask} onChange={this.handleChange} value={inputValue} timeStart={this.handleTimeStart} timeStop={this.handleTimeStop}/>
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