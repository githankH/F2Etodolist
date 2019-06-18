import React from 'react';
import {Item,Icon, List } from 'semantic-ui-react'

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
      <List size="huge">
        <List.Item >
            <List.Icon name='square outline' size='large' />
            <List.Content>
                <List.Header as='a'> <span >1234456ㄅㄆ</span></List.Header>
                <List.Description>
                    <List.Icon name="calendar outline" size="mini" />
                    <List.Icon name="file outline" size="mini" />
                </List.Description>
            </List.Content>
        </List.Item>
        <List.Item>
            <List.Icon name='square outline' size='large' />
            <List.Content>
                <List.Header as='a'> <span >1234456ㄅㄆ</span></List.Header>
                <List.Description>
                    <List.Icon name="calendar outline" size="mini" /> <span style={{fontSize:'18px'}}>6/18</span>
                    <List.Icon name="file outline" size="mini" />
                    <List.Icon name="comment outline" size="mini" />
                </List.Description>
            </List.Content>
        </List.Item>
      </List>

    );
}

export  default TodoItems;
