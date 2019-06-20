import React from 'react';
import {
  Container,Divider, 
  Grid,Header} from 'semantic-ui-react';

import TodoInput from './TodoInput';
import TodoItems,{TodoLists} from './TodoItems';
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
      completed: false,
      atTop: false,
      date: false,
      file: true,
      comment: false,
    },
    {
      id: 1,
      content: 'Item-2',
      edit: false,
      completed: false,
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
    todo.completed=false;
    todo.atTop=false;
    todo.date=false;
    todo.file=true;
    todo.comment=false;
    newtodos.push(todo);
    this.setState({todos: newtodos,nextid:this.state.nextid+1});
  }

  render(){
  return (
    <Container style={{margin:'3rem auto'}}>
      <Header as='h2'>Semantic UI React version</Header>
      <Divider />
      <Grid stackable centered  >
        <Grid.Row >
        <Grid.Column  width={10} >
          <TodoInput getInputData={this.getInputData}/>
        </Grid.Column>
        </Grid.Row>

        <Grid.Row>
        <Grid.Column  width={10} >
           <TodoItems todos={this.state.todos}/>
        </Grid.Column>
        </Grid.Row>

        <Grid.Row >
        <Grid.Column width={10}>
           <TodoLists />
        </Grid.Column>
        </Grid.Row>

      </Grid>
    </Container>

  );
  }
}

export default App;
