import React, { Component } from 'react'
import RequestsCard from './RequestsCard'

class Profile extends Component {
  constructor (props) {
    super(props)

    this.state = {
      isUserHelping: false
    }
  }

  render () {
    return (
      <div>
        <br/>
        <RequestsCard areAcceptedRequests={false}/>
        <br/>
        <RequestsCard areAcceptedRequests={true}/>
      </div>
    )
  }
}

export default Profile
