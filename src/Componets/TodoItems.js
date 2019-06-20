import React from 'react';
import {Item,Icon, List, Checkbox } from 'semantic-ui-react'

function TodoItems ({todos,editTodoItem}){
    return(
        <Item.Group>
            {todos.map((todo)=>{return(
              <Item>
                <Item.Content>
                <Item.Header>{todo.content}</Item.Header>
                <Item.Extra >
                {todo.star?<Icon color='yellow' name='star' />:''}
                {todo.file?<Icon color='yellow' name='file' />:''}
                {todo.comment?<Icon color='yellow' name='comment' />:''}
                </Item.Extra>
                </Item.Content>
               </Item>
            )})}
        </Item.Group>
    );
}

export function TodoLists() {
    return (
      <List size="huge" verticalAlign='middle'>
        <List.Item >
            <List.Content floated='right'>
                <List.Icon name='edit outline' size='large'/>
                <List.Icon name='star outline' size='large'/>
            </List.Content>
            <List.Content>
                <List.Header as='a'> 
                    <Checkbox fitted label='what the this' style={{fontSize:'24px'}}/>
                </List.Header>
                <List.Description>
                    <List.Icon name="calendar outline" size="mini" />
                    <List.Icon name="file outline" size="mini" />
                </List.Description>
            </List.Content>
        </List.Item>

      </List>

    );
}

export  default TodoItems;
