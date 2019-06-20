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
        <Segment >
        <Form widths='equal' onSubmit={this.onSubmithandler} style={{marginTop: '12px'}}>
        <Form.Group inline >
        <Icon link size='huge' name='square outline' />
        <Form.Input size='huge'
          value={this.state.term}
          action={{ icon: 'add' }}
          actionPosition='right'
          onChange={this.onChangehandler}/>
        <Icon link color='yellow' size='big' name='star' />
        </Form.Group>
        </Form>
        </Segment>


      );
    }
    render(){
      return(
        this.renderForm()
      );
    }
}

export default TodoInput;