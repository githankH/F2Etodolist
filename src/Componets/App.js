import React from 'react';
import {
  Container,Divider,
  Grid,Header} from 'semantic-ui-react';

import TodoInput from './TodoInput';
import {TodoLists} from './TodoItems';
//import  TodoLists  from './TodoLists';


/*
one todo has
1. content
1-1. id(private)
----- n: outline
2. edit, y:blue,
3. completed, y: gold,
4. atTop y: gold,
5. date, file, comment, y:exist, n: no show
 */

class App extends React.Component{
  state={
    todos:[],
    editTodo: {
      id:NaN,
      content:'',
      completed:'',
      atTop:false,
      date:'',
      file:false,
      comment:'',
    },
  };

  getInputData = (props)=>{
    let todo={};
    let newtodos=[...this.state.todos];
    todo.content=props['content'];
    todo.id=Date.now();
    todo.completed=props['completed'];
    todo.atTop=props.atTop;
    todo.date=props['date'];
    todo.file=props.file;
    todo.comment=props['comment'];
    newtodos.push(todo);
    this.setState({todos: newtodos});
  }

  updateCompleted = (name,idx)=>{
    let newtodos=[...this.state.todos];
    let todo=Object.assign({},this.state.todos[idx]);
    todo[name]=!todo[name];
    newtodos.splice(idx,1);
    newtodos.push(todo);
    this.setState({todos: newtodos});
  }

  updateAtTop = (name,idx) =>{
    let newtodos=[...this.state.todos];
    let todo=Object.assign({},this.state.todos[idx]);
    todo[name]=!todo[name];
    newtodos.splice(idx,1);
    newtodos.unshift(todo);
    this.setState({todos: newtodos});
  }

  editExistTodos = (idx)=>{
    let todo=Object.assign({},this.state.todos[idx]);
    this.setState({editTodo:todo});
  }

  deleteTodo = (idx)=>{
    let newtodos=[...this.state.todos];
    newtodos.splice(idx,1);
    this.setState({todos: newtodos});
  }

  onIconClickHandler = (name,id)=>{
    let idx=this.state.todos.findIndex((item)=>item.id===id);

    switch(name){
      case 'completed':
        this.updateCompleted('completed',idx);
      break;
      case 'atTop':
        this.updateAtTop('atTop',idx);
      break;
      case 'edit':
        this.editExistTodos(idx);
      break;
      case 'delete':
        this.deleteTodo(idx);
      break;
      default:
      break;
    }

  }

  render(){
  return (
    <Container style={{margin:'3rem auto'}}>
      <Header as='h2'>Semantic UI React version</Header>
      <Divider />
      <Grid stackable centered  >

        <Grid.Column  width={10} >
            <TodoInput getInputData={this.getInputData }  {...this.state.editTodo} />
        </Grid.Column>

        <Grid.Column width={10}>
           <TodoLists todos={this.state.todos} IconClickHandler={this.onIconClickHandler.bind(this)}/>
        </Grid.Column>

      </Grid>
    </Container>

  );
  }
}
export default App;
