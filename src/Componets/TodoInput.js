import React from 'react';
import axios from 'axios';
import { Form, Icon,Grid, TextArea,Card,Button } from 'semantic-ui-react';


class TodoInput extends React.Component{

    state = { focus:'none',
    atTop: false,
    file: false,
    'content': '',
    'completed': false,
    'date': '',
    'comment': '',
    };

    componentDidUpdate(prevProps,prevState) {

      const {atTop,comment,completed,content,date,file} = this.props;
      if(content !== prevState.content &&
         content !== prevProps.content ){
          /*console.log('props.content',content);
          console.log('prevProps.content',prevProps.content);
          console.log('prevState.content',prevState.content);*/
        this.setState({
          focus:'block',
          atTop: atTop,
          file: file,
          'content': content,
          'completed': completed,
          'date': date,
          'comment': comment,
        });
      }
    }

    clearState = ()=>{
      this.setState({
        focus:'none',
        atTop: false,
        file: false,
        'content': '',
        'completed': false,
        'date': '',
        'comment': '',
      });
    }

    onSubmithandler = async (ev) => {
      ev.preventDefault();

      if(this.state['content']===''){
        const response = await axios.get('https://api.github.com/zen');
        this.setState({'content':response.data});
      }
      this.props.getInputData(this.state);
      this.clearState();
    }

    onChangehandler = (ev)=>{
      this.setState({[ev.target.name]:ev.target.value});
    }

    onFocusHandler(){
      this.setState({focus:'block'});
    }

    onBlurHandler(){
      this.setState({focus:'none'});
    }

    renderForm(){

      return(
        <Card fluid >
        <Card.Content>
        <Form widths='equal' onSubmit={this.onSubmithandler} style={{marginTop: '12px'}}>

            <Grid verticalAlign='middle' textAlign='justified'>
            <Grid.Column width='1'>
            <Icon link size='big' name='square outline' style={{display:`${this.state.focus}`}}/>
            </Grid.Column>
            <Grid.Column width='13'>
            <Form.Input size='huge' fluid
              name='content'
              value={this.state['content']}
              action={{ icon: 'add' }}
              actionPosition='left'
              onFocus={this.onFocusHandler.bind(this)}
              onChange={this.onChangehandler}/>
            </Grid.Column>
            <Grid.Column width='2'>
            <Icon link size='big' name='star outline' style={{display:`${this.state.focus}`}}/>
            </Grid.Column>
            </Grid>

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

        </Card.Content>
          <div className='ui two buttons ' style={{marginTop: '16px', display:`${this.state.focus}`}}>
          <Button  positive onClick={this.onSubmithandler.bind(this)}> Accpet</Button>
          <Button  negative onClick={this.onBlurHandler.bind(this)}> Cancel</Button>
          </div>
        </Card>

      );
    }

    render(){
      return(
        this.renderForm()
      );
    }
}

export default TodoInput;
