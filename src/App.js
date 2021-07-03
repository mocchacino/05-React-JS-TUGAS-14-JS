import React, {Component} from "react";
import 'semantic-ui-css/semantic.min.css'
import {
  List,
  Grid,
  Icon,
  Input,
  Table,
  Label,
  Menu,
  Feed,
} from 'semantic-ui-react' 

class App extends Component{
  render(){
    return(
      <Grid columns='equal'>
        <Grid.Row></Grid.Row>
        {/* Table */}
        <Grid.Row>
          <Grid.Column></Grid.Column>
          <Grid.Column width={10}>
            <Table called>
              {/* input search */}
              <Table.Header>
                <Table.Row>
                  <Table.HeaderCell colSpan='2'>
                    <Menu secondary>
                      <Menu.Menu position='right'>
                        <Menu.Item>
                          <Input icon='search' placeholder='Search'/>
                        </Menu.Item>
                      </Menu.Menu>
                    </Menu>
                  </Table.HeaderCell>
                </Table.Row>
              </Table.Header>

              {/* Table Header */}
              <Table.Header>
                <Table.Row>
                  <Table.HeaderCell>Nama Document</Table.HeaderCell>
                  <Table.HeaderCell>Jenis File</Table.HeaderCell>
                </Table.Row>
              </Table.Header>

              {/* Table Body */}
              <Table.Body>
                <Table.Row>
                  <Table.Cell>
                    <Label ribbon>Panduan Belajar Javascript</Label>
                  </Table.Cell>
                  <Table.Cell>PDF</Table.Cell>
                </Table.Row>

                <Table.Row>
                  <Table.Cell>
                    Panduan Belajar CSS
                  </Table.Cell>
                  <Table.Cell>PDF</Table.Cell>
                </Table.Row>

                <Table.Row>
                  <Table.Cell>
                    Panduan Belajar React JS
                  </Table.Cell>
                  <Table.Cell>PDF</Table.Cell>
                </Table.Row>
              </Table.Body>

              {/* Table Footer */}
              <Table.Footer>
                <Table.Row>
                  <Table.HeaderCell colSpan='2'>
                    <Menu floated='right' pagination>
                      {/* Arrow left */}
                      <Menu.Item as='a' icon>
                      <Icon name='chevron left' />
                      </Menu.Item>
                      {/* Number */}
                      <Menu.Item as='a'>1</Menu.Item>
                      <Menu.Item as='a'>2</Menu.Item>
                      <Menu.Item as='a'>3</Menu.Item>
                      <Menu.Item as='a'>4</Menu.Item>
                      {/* Arrow right */}
                      <Menu.Item as='a' icon>
                      <Icon name='chevron right' />
                      </Menu.Item>
                    </Menu>
                  </Table.HeaderCell>
                </Table.Row>
              </Table.Footer>
            </Table>
          </Grid.Column>
          <Grid.Column></Grid.Column>
        </Grid.Row>
        {/* End Row Table */}

        {/* Feed & List Link */}
        <Grid.Row>
        <Grid.Column></Grid.Column>
          {/* Feed */}
          <Grid.Column width={7}>
            <Feed>
              <Feed.Event>
                <Feed.Label image='https://s3-ap-southeast-1.amazonaws.com/niomic/img-v1/c_login_logo.png , https://react.semantic-ui.com/images/avatar/small/elliot.jpg'/>
                <Feed.Content>
                  <Feed.Summary 
                    user='Anton'
                    date='3 Hour Ago'
                    content='added you as a friend'
                  />
                  <Feed.Meta>
                    <Feed.Like>
                      <Icon name='like'/>4 Likes
                    </Feed.Like>
                  </Feed.Meta>
                </Feed.Content>
              </Feed.Event>

              <Feed.Event>
                <Feed.Label image=' https://react.semantic-ui.com/images/avatar/small/helen.jpg'/>
                <Feed.Content>
                  <Feed.Summary 
                    user='You'
                    date='3 days ago'
                    content='submitted a new post to the page'
                  />
                  <Feed.Extra text>
                    Saya Senang Belajar Bahasa Pemrograman
                  </Feed.Extra>
                  <Feed.Meta>
                    <Feed.Like>
                      <Icon name='like'/>11 Like
                    </Feed.Like>
                  </Feed.Meta>
                </Feed.Content>
              </Feed.Event>

              <Feed.Event>
                <Feed.Label image=' https://cdn-images-1.medium.com/max/1600/1*6kK9j74vyOmXYm1gN6ARhQ.png'/>
                <Feed.Content>
                  <Feed.Summary 
                    user='David'
                    date='4 days ago'
                    content='added 2 new Image'
                  />
                  <Feed.Extra images>
                    <a>
                      <img src="/"/>
                    </a>
                    <a>
                      <img src='/'/>
                    </a>
                  </Feed.Extra>
                  <Feed.Meta>
                    <Feed.Like>
                      <Icon name='like'/>2 Likes
                    </Feed.Like>
                  </Feed.Meta>
                </Feed.Content>
              </Feed.Event>
            </Feed>
          </Grid.Column>
          {/* End Feed */}

          {/* List Link */}
          <Grid.Column width={3}>
            <List>
              <h5>Website Terkait</h5>
              <List.Item>
                <List.Icon name='linkify'/>
                <List.Content>
                  <a href='https://google.com/'>Google</a>
                </List.Content>
              </List.Item>

              <List.Item>
                <List.Icon name='linkify'/>
                <List.Content>
                  <a href='https://www.facebook.com/'>Facebook</a>
                </List.Content>
              </List.Item>

              <List.Item>
                <List.Icon name='linkify'/>
                <List.Content>
                  <a href='http://www.semantic-ui.com'>Semantic UI</a>
                </List.Content>
              </List.Item>

              <List.Item>
                <List.Icon name='linkify'/>
                <List.Content>
                  <a href='https://niomic.com/'>Niomic</a>
                </List.Content>
              </List.Item>

              <List.Item>
                <List.Icon name='linkify'/>
                <List.Content>
                  <a href='https://reactjs.org/'>React</a>
                </List.Content>
              </List.Item>
            </List>
          </Grid.Column>
          <Grid.Column></Grid.Column>
        </Grid.Row>

        
      </Grid>
    )
  }
}

export default App;
