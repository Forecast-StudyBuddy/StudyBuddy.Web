import React, { Component } from "react"
import FlatButton from "material-ui/FlatButton"
import Dialog from "material-ui/Dialog"

class ConfirmationPopup extends Component {
	constructor (props) {
		super(props)

		this.state = {
			currentCourses: [],
			courseIndex: 0
		}
	}

	render () {
		const { shouldOpen, onConfirm, title, text } = this.props
		const actions = [
			<FlatButton
				label="OK"
				primary={true}
				onClick={onConfirm}
			/>
		]

		return (
			<Dialog
				title={title}
				actions={actions}
				modal={true}
				open={shouldOpen}
			>
        		{text}
			</Dialog>
		)
	}
}

export default ConfirmationPopup
