import React, { Component } from 'react'
import RequestsCard from './RequestsCard'
import SelectField from "material-ui/SelectField"
import MenuItem from "material-ui/MenuItem"
import ConfirmationPopup from './ConfirmaionPopup'

class AcceptRequest extends Component {
  constructor (props) {
    super(props)

    this.state = {
        userCourses: [],
        courseIndex: 0,
        requests: [],
        filteredRequests: [],
        shouldOpenConfirmation: false,
        requesterEmail: null
    }
  }

    componentWillMount() {
        this.fetchUserCourses()
        this.fetchRequests()
    }

    fetchUserCourses = () => {
        const body = {
            email: window.localStorage.getItem("email")
        }

        const init = {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(body)
        }

        fetch("http://localhost:48480/api/userCourses", init)
            .then(res => {
                return res.json()
            })
            .then(data => {
                this.setState({ userCourses: data })
            })
            .catch(err => {
                throw err
            })
    }

    fetchRequests = () => {
        const body = {
            email: window.localStorage.getItem("email")
        }

        const init = {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(body)
        }

        fetch("http://localhost:48480/api/openRequests", init)
            .then(res => {
                return res.json()
            })
            .then(data => {
                this.setState({ requests: data }, () => this.handleChange(null, 0))
            })
            .catch(err => {
                throw err
            })
    }

    onAcceptRequest = request => {
        const body = {
            email: window.localStorage.getItem("email"),
            requestId: request.id
        }

        const init = {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(body)
        }

        fetch("http://localhost:48480/api/acceptRequest", init)
            .then(res => {
                this.setState({ shouldOpenConfirmation: true, requesterEmail: request.user_id })
            })
            .catch(err => {
                throw err
            })
    }

    handleChange = (event, key) => {
        const {userCourses, requests} = this.state
        const filteredRequests = requests.filter(req => req.course_id === userCourses[key].id )
        this.setState({ courseIndex: key, filteredRequests })
    }

  render () {
      const { userCourses, courseIndex, filteredRequests, shouldOpenConfirmation, requesterEmail } = this.state
      const selectFieldStyle = {
        width:'80%',
        verticalAlign: 'middle !important',
        textAlign: 'left !important',

      }
    return (
        <div>
            <br/>
            Select the course you would like to help with.<br/>
            Note: only courses you are currently taking or had a high performance are shown.<br/>
            <SelectField
                floatingLabelText="Course"
                value={courseIndex}
                onChange={this.handleChange}
                style={selectFieldStyle}
			>
                {
                    userCourses.map((userCourse, index) => {
                        return <MenuItem key={index} value={index} primaryText={`${userCourse.id} - ${userCourse.course_name}`} />
                    })
					}
            </SelectField>
            <br/>
            <RequestsCard  style= {selectFieldStyle} areAcceptedRequests={false} allowAccept={true} allowFinish={false}
                requests={filteredRequests}
                onAccept={this.onAcceptRequest}/>
            <ConfirmationPopup shouldOpen={shouldOpenConfirmation} title="Confirmation" text={`Thank you for accepting the help request! You
                can now email ${requesterEmail} to study together!`} onConfirm={() => {this.setState({ shouldOpenConfirmation: false })
                this.fetchRequests()
                }}/>
        </div>
        
    )
  }
}

export default AcceptRequest
