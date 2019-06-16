import React from 'react';
import axios from 'axios';
import { Form, Icon, Segment } from 'semantic-ui-react'


class TodoInput extends React.Component{
    state = {focus:false,term:'try'};
    
    onSubmithandler = async (ev) => {
      ev.preventDefault();
      const response = await axios.get('https://api.github.com/zen');
      this.setState({term:response.data});
      this.props.getInputData(response.data);
    }

    onChangehandler = (ev)=>{
      this.setState({term:ev.target.value});
    }

    renderForm(){
      return(
        <Form size='large' onSubmit={this.onSubmithandler}>
        <Segment>
        <Icon color='blue' name='square' size='large' />
        <Form.Input 
          icon='add'
          iconPosition='left'
          value={this.state.term}  
          onChange={this.onChangehandler}/>
        <Icon color='yellow' name='star' />
        <Icon color='yellow' name='file' />
        </Segment>

        </Form>
      );
    }
    render(){
      return(
        this.renderForm()
      );
    }
}

export default TodoInput;