import React, { Component } from 'react'
import RequestsCard from './RequestsCard'

class Profile extends Component {
  constructor (props) {
    super(props)

    this.state = {
      requests: [
        {name: 'Darrell',
          course: 'CS190',
          text: 'I have no idea what to do with life.',
          status: 'Finished'
        },
        {name: 'Gemma',
          course: 'MA161',
          text: 'This course is hard.',
          status: 'Finished'
        }
      ]
    }
  }
  
  render () {
    return (
      <div>
        <br/>
        <RequestsCard areAcceptedRequests={false} allowAccept={false} requests={this.state.requests}/>
        <br/>
        <RequestsCard areAcceptedRequests={true} allowAccept={false} requests={this.state.requests}/>
        />
      </div>
    )
  }
}

export default Profile
