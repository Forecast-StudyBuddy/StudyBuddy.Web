import React, { Component } from 'react'
import RequestsCard from './RequestsCard'

class AcceptRequest extends Component {
//   constructor (props) {
//     super(props)
//   }

    onAcceptRequest = () => {
        console.log(window.localStorage.getItem("email"))
    }

  render () {
    const requests = [
        {name: 'Student 1',
            course: 'CS110',
            text: 'fjadokf jadkf jakdf joadkfj oajkdfa ',
            status: 'Finished'
        },
        {name: 'Student 2',
            course: 'MA210',
            text: 'fdaf dk aof adkf adfjdakfajod ',
            status: 'Finished'
        },
        {name: 'Student 3',
            course: 'MUS233',
            text: 'owk fow fkwjfkwjfowkej fowef ',
            status: 'Finished'
        },
        {name: 'Student 4',
            course: 'ECON321',
            text: 'adsfadfaod fjaokdf jaosdk fji fjow ',
            status: 'Finished'
        },
        {name: 'Student 5',
            course: 'ENGL100',
            text: 'oo adof oaf diadjfjefwojfow  ',
            status: 'Finished'
        },
      ]
    return (
        <RequestsCard areAcceptedRequests={false} allowAccept={true} allowFinish={false}
            requests={requests}
            onAccept={this.onAcceptRequest}/>
    )
  }
}

export default AcceptRequest
