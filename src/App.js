import React, { Component } from 'react';
import ListContacts from './ListContacts'

class App extends Component {
  state = {
    contacts: [
      {
        id: 'john',
        name: 'John Doe',
        email: 'john@mail.com',
        avatarURL: 'http://localhost:5001/john.jpg'
      },
      {
        id: 'jane',
        name: 'Jane Doe',
        email: 'jane@mail.com',
        avatarURL: 'http://localhost:5001/jane.jpg'
      },
      {
        id: 'joe',
        name: 'Joe Smith',
        email: 'joe@mail.com',
        avatarURL: 'http://localhost:5001/joe.jpg'
      }
    ]
  }
  render() {
    return (
      <div>
        <ListContacts contacts={this.state.contacts}/>
      </div>
    );
  }
}

export default App;
