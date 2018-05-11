import React, { Component } from "react"
import RequestsCard from "./RequestsCard"

class Profile extends Component {
	constructor (props) {
		super(props)

		this.state = {
			myrequests: [
				{
					name: "null",
					course: "null",
					text: "null",
					status: "Finished"
				}],
			acceptedRequests:[{
					name: "",
					course: "",
					text: "",
					status: "Finished"
				}]
		}
	}
	componentWillMount(){
		this.get_all_requests()
		this.get_posted_requests()
	}

get_all_requests = () => {
	const body = {
		email: window.localStorage.getItem("email")
	}

	const init = {
	  method: "POST",
	  headers: { "content-type": "application/json" },
	  body : JSON.stringify(body)
	}
	fetch("http://localhost:48480/api/acceptedRequests", init)
		.then(res => {
			if (res.status === 200) {
		}
	}).catch(err => {
			console.log(err)
		})
	}
	get_posted_requests = () => {
		const body = {
			email: window.localStorage.getItem("email")
		}
		const init = {
		  method: "POST",
		  headers: { "content-type": "application/json" },
		  body: JSON.stringify(body)
		}
		fetch("http://localhost:48480/api/postedRequests", init)
			.then(res => {
				if (res.status === 200) {
					
			}
		}).catch(err => {
				console.log(err)
			})
		}

	render () {
		return (
			<div>
				<h2>Request Created by User</h2>
				<br/>
				<RequestsCard areAcceptedRequests={false} allowAccept={false} requests={this.state.myrequests}/>
				<h2>Request Accepted by User</h2>
				<br/>
				<RequestsCard areAcceptedRequests={true} allowAccept={false} requests={this.state.acceptedRequests}/>
			</div>
		)
	}
}

export default Profile
