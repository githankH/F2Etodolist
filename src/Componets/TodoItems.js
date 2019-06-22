import React from 'react';
import { List } from 'semantic-ui-react'


export function TodoLists({todos,IconClickHandler,editTodoItem}) {
    return (
      <List size="big" relaxed='very' verticalAlign='middle' divided>
        {todos.map((todo)=>{return(
          <List.Item key={todo.id}>
            <List.Content floated='right' >
                <List.Icon  link name='edit outline' size='big' />
                <List.Icon  link name='star outline' size='big'/>
            </List.Content>

            <List.Icon
               link
               size='large'
               onClick={()=>IconClickHandler('completed',todo.id)}
               name={todo.completed?'check square outline':'square outline'}  />
            <List.Content verticalAlign='middle'>
                <List.Header > {todo.content} </List.Header >
            </List.Content>
            <List.Content style={{marginLeft:'2rem', marginTop:'.5rem'}}>
                {todo.date?<List.Icon  name="calendar outline"/>   :''}{todo.date}
                {todo.file?<List.Icon  name="file outline"  />:''}
                {todo.comment?<List.Icon  name="comment outline" />:''}
            </List.Content>
          </List.Item>
        )})}
      </List>

    );
}

/*<Checkbox fitted label={todo.content} style={{fontSize:'24px'}}/>

*/
