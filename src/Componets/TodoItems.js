import React from 'react';
import {Item,Icon } from 'semantic-ui-react'

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

export default TodoItems ;