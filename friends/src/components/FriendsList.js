import React from 'react';
import Loader from 'react-loader-spinner';

import { axiosWithAuth } from '../utils/axiosWithAuth';

import Friends from './Friends';

class FriendsList extends React.Component {
  state = {
    friends: []
  }

  componentDidMount() {
    this.getData();
  }

  getData = () => {
    axiosWithAuth()
      .get('/api/friends')
      .then(res => {
        this.setState({
          friends: res.data
        })
      })
      .catch(err => console.log(err))
  }

  render() {
    return (
      <div><Friends />
        <div>
          {this.state.friends.map(friend => {
            return <div>
              <p>Name: {friend.name}</p>
              <p>Age: {friend.age}</p>
              <p>Email: {friend.email}</p>
              <button onClick={e => {
                e.preventDefault();
                axiosWithAuth()
                  .delete(`http://localhost:5000/api/friends/${friend.id}`)
                  .then(res => {
                    console.log(friend.id)
                    this.setState({
                      ...this.state.friends,
                      friends: res.data
                    })
                  })
                  .catch(err => console.log(err))
              }}>Delete Friend</button>
            </div>
          })}
        </div>
      </div>
    )
  }

}

export default FriendsList;