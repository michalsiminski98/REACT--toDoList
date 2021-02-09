
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
const AddTask = props => {
    return(
        <>
            <input type="text" placeholder="Dodaj zadanie"/>
            <button>Dodaj</button>
        </>
    )
}





// list
class List extends React.Component{

    state={
        tasks:[
            {id:0, task:'Sprzatnac'},
            {id:1, task:'Umyc'},
            {id:2, task:'Spac'},
        ]
    }

    handleDelete(id) {
        const tasks = [...this.state.tasks];
        const index = this.state.tasks.findIndex(person => person.id === id);
        tasks.splice(index, 1);
        this.setState({tasks});
    }

    render(){
        const {tasks} = this.state;
        return(
            <>
                <AddTask/>
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