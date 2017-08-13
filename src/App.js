import React from 'react'
import { Container, Divider, Dropdown, Grid, Header, Image, List, Menu, Segment } from 'semantic-ui-react'

const App = () =>
  <div>
    <Menu fixed='top' inverted>
      <Container>
        <Menu.Item as='a' header>
          <Image
            size='mini'
            src='/logo.png'
            style={{ marginRight: '1.5em' }}
          />
          BART Crimes
        </Menu.Item>
        <Menu.Item as='a'>Home</Menu.Item>

        <Dropdown item simple text='Stations'>
          <Dropdown.Menu>
            <Dropdown.Item>List Item</Dropdown.Item>
            <Dropdown.Item>List Item</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Header>Header Item</Dropdown.Header>
            <Dropdown.Item>
              <i className='dropdown icon' />
              <span className='text'>Submenu</span>
              <Dropdown.Menu>
                <Dropdown.Item>List Item</Dropdown.Item>
                <Dropdown.Item>List Item</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown.Item>
            <Dropdown.Item>List Item</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </Container>
    </Menu>

    <Container text style={{ marginTop: '7em' }}>
      <Header as='h1'>West Oakland Station</Header>
      <p>This site is about Making Public Information Public.</p>
	<p>	 BART has been a little strange about sharing public information lately. This site is here to make it easier to access that information. Read more here.

Your donations help keep the site alive, and allow me to add new features, such as search and station map.


</p>

      <Image src='/assets/images/wireframe/media-paragraph.png' style={{ marginTop: '2em' }} />
      <Image src='/assets/images/wireframe/paragraph.png' style={{ marginTop: '2em' }} />
      <Image src='/assets/images/wireframe/paragraph.png' style={{ marginTop: '2em' }} />
      <Image src='/assets/images/wireframe/paragraph.png' style={{ marginTop: '2em' }} />
      <Image src='/assets/images/wireframe/paragraph.png' style={{ marginTop: '2em' }} />
      <Image src='/assets/images/wireframe/paragraph.png' style={{ marginTop: '2em' }} />
      <Image src='/assets/images/wireframe/paragraph.png' style={{ marginTop: '2em' }} />
    </Container>

    <Segment
      inverted
      vertical
      style={{ margin: '5em 0em 0em', padding: '5em 0em' }}
    >
      <Container textAlign='center'>
        <Grid divided inverted stackable>
          <Grid.Row>
            <Grid.Column width={3}>
              <Header inverted as='h4' content='BART Crimes' />
              <List link inverted>
                <List.Item as='a'>About</List.Item>
                <List.Item as='a'>Donate</List.Item>
                <List.Item as='a'>Press Inquiries</List.Item>
              </List>
            </Grid.Column>
            <Grid.Column width={3}>
              <Header inverted as='h4' content='API' />
              <List link inverted>
                <List.Item as='a'>Incidents</List.Item>
                <List.Item as='a'>Stations</List.Item>
                <List.Item as='a'>Tags</List.Item>
              </List>
            </Grid.Column>
            <Grid.Column width={3}>
              <Header inverted as='h4' content='Source Code' />
              <List link inverted>
                <List.Item as='a'>API</List.Item>
                <List.Item as='a'>Web UI</List.Item>
                <List.Item as='a'>Issues</List.Item>
                <List.Item as='a'>Contributors</List.Item>
              </List>
            </Grid.Column>
            <Grid.Column width={3}>
              <Header inverted as='h4' content='Get Involved' />
              <p>Blah blah, help us close issues, press etc. </p>
            </Grid.Column>
          </Grid.Row>
        </Grid>

        <Divider inverted section />
        <Image
          centered
          size='mini'
          src='/logo.png'
        />
        <List horizontal inverted divided link>
          <List.Item as='a' href='#'>Site Map</List.Item>
          <List.Item as='a' href='#'>Contact Us</List.Item>
          <List.Item as='a' href='#'>Terms and Conditions</List.Item>
          <List.Item as='a' href='#'>Privacy Policy</List.Item>
        </List>
      </Container>
    </Segment>
  </div>

export default App
