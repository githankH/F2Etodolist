import React from 'react';
import { List,Button, Icon } from 'semantic-ui-react';

export function TodoLists({todos,IconClickHandler}) {
    return (
      <List size="big" relaxed='very' verticalAlign='middle' divided>
        {todos.map((todo)=>{return(
          <List.Item key={todo.id}>
            <List.Content floated='right' >
                <List.Icon link
                  name='edit outline'
                  size='big'
                  data-iconname='edit'
                  data-itemid={todo.id}
                  //onClick={(ev)=>IconClickHandler(ev,'edit',todo.id)}/>
                  onClick={IconClickHandler}/>
                <List.Icon link
                  name={todo.atTop? 'star':'star outline' }
                  color={todo.atTop? 'yellow':'black'}
                  size='big'
                  data-iconname='atTop'
                  data-itemid={todo.id}
                  onClick={IconClickHandler}/>
            </List.Content>

            <List.Icon
               link
               size='large'
               name={todo.completed?'check square outline':'square outline'}
               data-iconname='completed'
               data-itemid={todo.id}
               onClick={IconClickHandler}/>
            <List.Content verticalAlign='middle'>
                <List.Header > {todo.content}
                  <Button basic icon
                    floated='right'
                    data-itemid={todo.id}
                    data-iconname='delete'
                    onClick={IconClickHandler}>
                      <Icon name='delete' color='red'/>
                  </Button>
                </List.Header >
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

