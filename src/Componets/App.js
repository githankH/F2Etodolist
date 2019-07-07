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
    show:'My Task',
    editTodo: {
      id:NaN,
      content:'',
      completed:false,
      atTop:false,
      date:'',
      file:false,
      comment:'',
    },
  };

  getInputData = (data)=>{
    let todo={};
    let newtodos=[...this.state.todos];
    todo.id = data.id;
    todo.content=data['content'];
    todo.completed=data['completed'];
    todo.atTop=data.atTop;
    todo.date=data['date'];
    todo.file=data.file;
    todo.comment=data['comment'];
    if(isNaN(data.id)){
      todo.id=Date.now();
      newtodos.push(todo);  
    }else{
      let idx=newtodos.findIndex((item)=>item.id===data.id);
      newtodos.splice(idx,1,todo);
    }
    this.setState({todos: newtodos});
  }

  updateCompleted = (name,idx)=>{ 
    let newtodos=[...this.state.todos];
    //let todo=Object.assign({},this.state.todos[idx]);
    let todo={...this.state.todos[idx]};
    todo[name]=!todo[name];
    newtodos.splice(idx,1);
    newtodos.push(todo);
    this.setState({todos: newtodos});
  }

  updateAtTop = (name,idx) =>{
    let newtodos=[...this.state.todos];
    //let todo=Object.assign({},this.state.todos[idx]);
    let todo={...this.state.todos[idx]};
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
    //using filter and ...rest op to do array add/delete ?
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

  filterTodos = ()=>{
    const {show, todos} = this.state;
    if(show === 'My Task')
      return todos;
    if(show === 'In Progress')
      return todos.filter((todo)=>!todo.completed);
    if(show === 'Completed')
      return todos.filter((todo)=>todo.completed);
  }

  render() {
  return (
    <Container style={{margin:'3rem auto'}}>
      <Header as='h2'>Semantic UI React TodoList version</Header>
      <Divider />
      <Menu widths='12' pointing secondary>
        <Menu.Item
          name='My Task'
          active={this.state.show === 'My Task'}
          onClick={this.menuItemClick}/>
        <Menu.Item
          name='In Progress'
          active={this.state.show === 'In Progress'}
          onClick={this.menuItemClick}/>
        <Menu.Item
          name='Completed'
          active={this.state.show === 'Completed'}
          onClick={this.menuItemClick}/>
      </Menu>

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
}
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
