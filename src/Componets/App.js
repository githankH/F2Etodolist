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
    todos:[{
      id: 0,
      content: 'Item-1',
      edit: false,
      'completed': false,
      atTop: false,
      date: false,
      file: true,
      comment: false,
    },
    {
      id: 1,
      content: 'Item-2',
      edit: false,
      'completed': false,
      atTop: true,
      date: true,
      file: true,
      comment: true,
    }],
    editTodoItem: 0,
    nextid: 2,
  };

  getInputData = (term)=>{
    let todo={};
    let newtodos=[...this.state.todos];
    console.log(term);
    todo.content=term;
    todo.id=this.state.nextid;
    todo.edit=false;
    todo['completed']=false;
    todo.atTop=false;
    todo.date=false;
    todo.file=true;
    todo.comment=false;
    newtodos.push(todo);
    this.setState({todos: newtodos,nextid:this.state.nextid+1});
  }

  onIconClickHandler = (name,id)=>{
    let todo=Object.assign({},this.state.todos[id]);
    let newtodos=[...this.state.todos];
    todo[name]=!todo[name];
    newtodos.splice(id,1,todo);

    this.setState({todos: newtodos});
    console.log(this.state.todos);
  }

  render(){
  return (
    <Container style={{margin:'3rem auto'}}>
      <Header as='h2'>Semantic UI React version</Header>
      <Divider />
      <Grid stackable centered  >

        <Grid.Column  width={10} >
          <TodoInput getInputData={this.getInputData}/>
        </Grid.Column>

        <Grid.Column width={9}>
           <TodoLists todos={this.state.todos} IconClickHandler={this.onIconClickHandler.bind(this)}/>
        </Grid.Column>

      </Grid>
    </Container>

  );
  }
}

        /*
        <Grid.Column  width={10} >
           <TodoItems todos={this.state.todos}/>
        </Grid.Column> */

export default App;
