import React from 'react';
import {
  Container,Divider,
  Grid,Header, Menu} from 'semantic-ui-react';

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
//class TabContent extends React.Component{
  state={
    todos:[],
    editTodo: {
      id:NaN,
      content:'',
      completed:false,
      atTop:false,
      date:'',
      file:false,
      comment:'',
      show:'',
    },
  };

  getInputData = (data)=>{
    let todo={};
    let newtodos=[...this.state.todos];
    todo.content=data['content'];
    todo.id=Date.now();
    todo.completed=data['completed'];
    todo.atTop=data.atTop;
    todo.date=data['date'];
    todo.file=data.file;
    todo.comment=data['comment'];
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

  onIconClickHandler = (ev)=>{
    let id=parseInt(ev.currentTarget.dataset.itemid);
    let idx=this.state.todos.findIndex((item)=>item.id===id);

    switch(ev.currentTarget.dataset.iconname){
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

  menuItemClick = (e,{name})=>(this.setState({show:name}))

  filterTodos =(condition)=>{
    console.log('condition',condition);
    if(condition === undefined){
      return this.state.todos;
    }

    if(condition){
      return this.state.todos.filter((todo)=>todo.completed === condition)
    }else{
      return this.state.todos.filter((todo)=>todo.completed !== condition)
    }
  }

  render(){
  return (
    <Container style={{margin:'3rem auto'}}>
      <Menu pointing secondary>
        <Menu.Item name='option1' active={this.state.show === 'option1'} onClick={this.menuItemClick}/>
        <Menu.Item name='option2' active={this.state.show === 'option2'}  onClick={this.menuItemClick}/>

      </Menu>

      <Header as='h2'>{this.props.logo}{' - '}Semantic UI React version</Header>
      <Divider />
      <Grid stackable centered  >

        <Grid.Column  width={10} >
            <TodoInput getInputData={this.getInputData }  {...this.state.editTodo} />
        </Grid.Column>

        <Grid.Column width={10}>
           <TodoLists
             todos={this.filterTodos(this.props.completed)}
             IconClickHandler={this.onIconClickHandler.bind(this)}/>
        </Grid.Column>

      </Grid>
    </Container>

  );
  }
};
/*
const panes = [
  {
    menuItem:'My Task',
    pane:{
      key:'mytask',
      content:(<TabContent logo='My Task'/>),
    }
  },
  {
    menuItem:'In progress',
    pane:{
      key:'inprogress',
      content:(<TabContent logo='In progress' completed={false}/>),
    }
  },
  {
    menuItem:'Completed',
    pane:{
      key:'completed',
      content:(<TabContent logo='Completed' completed={true} />),
    }
  },
]
*/

export default App;
