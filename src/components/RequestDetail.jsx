import React, { Component } from "react"
import FlatButton from "material-ui/FlatButton"
import Dialog from "material-ui/Dialog"

class RequestDetail extends Component {
	render () {
		const { shouldOpen, request, allowAccept, onAccept } = this.props

		var actions = [
			<FlatButton
				label="Close"
				primary={true}
				onClick={this.props.onClose}
			/>
		]

		if (allowAccept) {
			actions.push(<FlatButton
				label="Accept"
				secondary
				onClick={onAccept}
			/>)
		}

		return (
			<Dialog
				title="I need help"
				actions={actions}
				modal={true}
				open={shouldOpen}
			>
        Request
				<br/>
				{request && request.course}
				<br/>
				{request && request.text}
			</Dialog>
		)
	}
}

export default RequestDetail
