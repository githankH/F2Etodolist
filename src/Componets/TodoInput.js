import React from 'react';
import axios from 'axios';
import { Form, Icon, Segment,Grid, TextArea } from 'semantic-ui-react';


class TodoInput extends React.Component{
    state = {
             focus:'none',
             edit: false,
             atTop: false,
             file: true,
             'content': '',
             'completed': false,
             'date': '',
             'comment': '',   
            };
    
    onSubmithandler = async (ev) => {
      ev.preventDefault();
      const response = await axios.get('https://api.github.com/zen');
      
      if(this.state['content']==='')
        this.setState({'content':response.data});

      this.props.getInputData(this.state);
      console.log(this.state);
    }

    onChangehandler = (ev)=>{
      const name=ev.target.name
      this.setState({[name]:ev.target.value});
      
    }

    onFocusHandler(){
      this.setState({focus:'block'});
    }

    onBlurHandler(){
      this.setState({focus:'none'});
    }

    renderForm(){
      return(
        <Segment textAlign='left'> 
        <Form widths='equal' onSubmit={this.onSubmithandler} style={{marginTop: '12px'}}>
          <Form.Group inline >
            <Icon link size='big' name='square outline' style={{display:`${this.state.focus}`}}/>
            <Form.Input size='huge' fluid 
              name='content'
              value={this.state['content']}
              action={{ icon: 'add' }}
              actionPosition='left'
              onFocus={this.onFocusHandler.bind(this)}
              onChange={this.onChangehandler}/>
            <Icon link size='big' name='star outline' style={{display:`${this.state.focus}`}}/>
          </Form.Group>

          <Grid textAlign='left' style={{marginLeft:'20px', display:`${this.state.focus}`}}>
            <Grid.Column width='16'>
              <Icon  name="calendar outline" size='large' /><b>Due Date </b>
              <Form.Group inline>
                <Form.Input fluid 
                  type='date'
                  placeholder='yyyy:MM:dd' 
                  name='date' 
                  value={this.state['date']}
                  onChange={this.onChangehandler}/>
                <Form.Input fluid placeholder='hh:mm' type='time' name='date-end' />
              </Form.Group>
            </Grid.Column>
            <Grid.Row>
              <Grid.Column width='3'>
                <Icon name="file outline" size='large' /><b>FILE </b>
                <Form.Button icon={{name:'add square'}} />
              </Grid.Column>
            </Grid.Row>
            <Grid.Column width='16'>
              <Icon  name="comment outline"  size='large' /><b>Comment </b>
              <TextArea 
                rows='3' 
                placeholder='Add comment here' 
                name='comment' 
                value={this.state['comment']}
                onChange={this.onChangehandler}
                />
            </Grid.Column >
          </Grid>
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