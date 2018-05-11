import React, { Component } from "react"
import RequestsCard from "./RequestsCard"
import ConfirmationPopup from './ConfirmaionPopup'

class Profile extends Component {
	constructor (props) {
		super(props)

		this.state = {
			postedRequests: [],
			acceptedRequests: [],
			shouldOpenConfirmation: false
		}
	}

	componentWillMount() {
		this.fetchAcceptedRequests()
		this.fetchPostedRequests()
	}

	fetchAcceptedRequests = () => {
		const body = {
			email: window.localStorage.getItem("email")
		}

		const init = {
			method: "POST",
			headers: { "content-type": "application/json" },
			body: JSON.stringify(body)
		}

		fetch("http://localhost:48480/api/acceptedRequests", init)
			.then(res => {
				return res.json()
			})
			.then(data => {
				this.setState({ acceptedRequests: data })
			})
			.catch(err => {
				throw err
			})
	}

	fetchPostedRequests = () => {
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
				return res.json()
			})
			.then(data => {
				this.setState({ postedRequests: data })
			})
			.catch(err => {
				throw err
			})
	}

	onFinishRequest = requestId => {
		const body = {
			email: window.localStorage.getItem("email"),
			requestId
		}

		const init = {
			method: "POST",
			headers: { "content-type": "application/json" },
			body: JSON.stringify(body)
		}

		fetch("http://localhost:48480/api/completeRequest", init)
			.then(res => {
				if(res.ok)
					this.setState({ shouldOpenConfirmation: true })
			})
			.catch(err => {
				throw err
			})
	}
  
	render () {
		const { acceptedRequests, postedRequests, shouldOpenConfirmation } = this.state
		return (
			<div>
				<br/>
				My Open Requests<br/>
				<RequestsCard areAcceptedRequests={false} allowAccept={false} allowFinish={true}
					onFinish={this.onFinishRequest} requests={postedRequests}/>
				<br/>
				Accepted Requests<br/>
				<RequestsCard areAcceptedRequests={true} allowAccept={false} allowFinish={false}
					requests={acceptedRequests}/>
				<ConfirmationPopup shouldOpen={shouldOpenConfirmation} title="Confirmation" text={`Thank you for confirming the request has been
					completed! Hope you enjoyed using Study Buddy!`} onConfirm={() => {this.setState({ shouldOpenConfirmation: false })
					this.fetchPostedRequests()
				}}/>
			</div>
		)
	}
}

export default Profile
