import React, { Component } from "react"
import FlatButton from "material-ui/FlatButton"
import Checkbox from "material-ui/Checkbox"
import Dialog from "material-ui/Dialog"
import SelectField from "material-ui/SelectField"
import MenuItem from "material-ui/MenuItem"
import TextField from "material-ui/TextField"

class NeedHelpForm extends Component {
	constructor (props) {
		super(props)

		this.state = {
			currentCourses: [],
			courseIndex: 0,
			text: ''
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

		fetch("http://localhost:48480/api/currentCourses", init)
			.then(res => {
				return res.json()
			})
			.then(data => {
				this.setState({ currentCourses: data })
			})
			.catch(err => {
				throw err
			})
	}

	handleChange = (event, key) => {
		this.setState({ courseIndex: key })
	}

	onTextChange = (event, newValue) => {
		this.setState({ text: newValue })
	}

	onSubmitNeedHelpForm = () => {
		const body = {
			email: window.localStorage.getItem("email"),
			courseId: this.state.currentCourses[this.state.courseIndex].id,
			text: this.state.text
		}

		const init = {
			method: "POST",
			headers: { "content-type": "application/json" },
			body: JSON.stringify(body)
		}

		fetch("http://localhost:48480/api/requestAssistance", init)
			.then(res => {
				if (res.ok)
					this.props.onNeedHelpRequestSubmitted()
			})
			.catch(err => {
				throw err
			})
		this.props.onFinishFillingWantToHelpForm()
	}

	render () {
		const { shouldOpen } = this.props
		const { currentCourses, courseIndex } = this.state

		const actions = [
			<FlatButton
				label="Cancel"
				primary
				onClick={this.props.onFinishFillingWantToHelpForm}
			/>,
			<FlatButton
				label="Submit"
				secondary
				onClick={this.onSubmitNeedHelpForm}
			/>
		]

		return (
			<Dialog
				title="I need help"
				actions={actions}
				modal={true}
				open={shouldOpen}
			>
        		Select a course you would like help with
				<SelectField
					floatingLabelText="Course"
					value={courseIndex}
					onChange={this.handleChange}
				>
					{
						currentCourses.map((currentCourse, index) => {
							return <MenuItem key={index} value={index} primaryText={`${currentCourse.id} - ${currentCourse.course_name}`} />
						})
					}
				</SelectField>
				<Checkbox
					label="Do you prefer to have someone who is in the same class with you?"
					style={{marginBottom: 16}}
				/>
				<TextField
					hintText="What do you need help with? (Please be as specific as you can,
            			so helpers have a better idea of what you need help with)"
					multiLine={true}
					rows={2}
					rowsMax={4}
					onChange={this.onTextChange}
				/>
			</Dialog>
		)
	}
}

export default NeedHelpForm
