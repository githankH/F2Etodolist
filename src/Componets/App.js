import React from 'react';
import {
  Item,
  Container,
  Divider, Grid, Form,
  Header, Icon, Segment } from 'semantic-ui-react'

function App() {
  return (
    <Container style={{marginTop:'3rem'}}>
      <Header as='h2'>Semantic UI React version</Header>
      <Divider />
      <Grid stackable textAlign='center'>
        <Grid.Row >
        <Grid.Column style={{maxWidth:'50%'}}>
          <Form size='middle'>
            <Segment>
            <Icon color='blue' name='square' size='large' />
            <Form.Input icon='user' value='check e-mail !' iconPosition='right' />
            </Segment>
          </Form>
        </Grid.Column>
        </Grid.Row>

        <Grid.Row >
        <Grid.Column style={{maxWidth:'50%'}} textAlign='left'>
        <Item.Group>
          <Item>
            <Item.Content>
              <Item.Description>lorem</Item.Description>
              <Item.Extra>
                <Icon color='green' name='check' />
                <Icon color='yellow' name='star' />
                <Icon color='yellow' name='file' />
              </Item.Extra>
            </Item.Content>
          </Item>

          <Item>
            <Item.Content>
              <Item.Description>lorem</Item.Description>
              <Item.Extra content='121 Votes' />
            </Item.Content>
          </Item>
        </Item.Group>
        </Grid.Column>
        </Grid.Row>
      </Grid>
    </Container>
  );
}

export default App;
