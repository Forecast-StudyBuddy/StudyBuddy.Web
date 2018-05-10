import React, { Component } from 'react'
import RequestsCard from './RequestsCard'
import SelectField from "material-ui/SelectField"
import MenuItem from "material-ui/MenuItem"

class AcceptRequest extends Component {
  constructor (props) {
    super(props)

    this.state = {
        userCourses: [],
        courseIndex: 0
    }
  }

    componentWillMount() {
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

    onAcceptRequest = () => {
        console.log(window.localStorage.getItem("email"))
    }

    handleChange = (event, key) => {
        this.setState({ courseIndex: key })
    }

  render () {
      const { userCourses, courseIndex } = this.state

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
        <div>
            <br/>
            Select the course you would like to help with.<br/>
            Note: only courses you are currently taking or had a high performance are shown.<br/>
            <SelectField
                floatingLabelText="Course"
                value={courseIndex}
                onChange={this.handleChange}
			>
                {
                    userCourses.map((userCourse, index) => {
                        return <MenuItem key={index} value={index} primaryText={`${userCourse.id} - ${userCourse.course_name}`} />
                    })
					}
            </SelectField>
            <br/>
            <RequestsCard areAcceptedRequests={false} allowAccept={true} allowFinish={false}
                requests={requests}
                onAccept={this.onAcceptRequest}/>
        </div>
        
    )
  }
}

export default AcceptRequest
