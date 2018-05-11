import React, { Component } from "react"
import Paper from "material-ui/Paper"
import {
	Table,
	TableBody,
	TableHeader,
	TableHeaderColumn,
	TableRow,
	TableRowColumn
} from "material-ui/Table"
import RequestDetail from "./RequestDetail"

const style = {
	height: 300,
	width: 800,
	margin: "auto",
	textAlign: "center",
	display: "block"
}

class RequestsCard extends Component {
	constructor (props) {
		super(props)

		this.state = {
			currentViewCellIndex: null
		}
	}

	onCellClick = row => {
	    this.setState({ currentViewCellIndex: row })
	}

	onCloseRequestDetail = () => {
	    this.setState({ currentViewCellIndex: null})
	}

	render () {
		const { areAcceptedRequests, requests, allowAccept, onAccept, allowFinish, onFinish } = this.props
		const { currentViewCellIndex } = this.state

		return (
			<div>
				<Paper style={style} zDepth={1} >
					<Table selectable onCellClick={this.onCellClick}>
						<TableHeader displaySelectAll={false} adjustForCheckbox={false} enableSelectAll={false}>
							<TableRow>
								<TableHeaderColumn>Course</TableHeaderColumn>
								<TableHeaderColumn>Request</TableHeaderColumn>
								{ areAcceptedRequests &&
                					<TableHeaderColumn>Status</TableHeaderColumn>
								}
							</TableRow>
						</TableHeader>
						<TableBody displayRowCheckbox={false}>
							{requests.map((request, index) =>
								<TableRow key={index}>
									<TableRowColumn>{request.course_id}</TableRowColumn>
									<TableRowColumn>{request.text}</TableRowColumn>
									{areAcceptedRequests &&
                    					<TableRowColumn>Helping</TableRowColumn>
									}
								</TableRow>
							)}
						</TableBody>
					</Table>
				</Paper>
				<RequestDetail shouldOpen={currentViewCellIndex !== null} allowAccept={allowAccept} 
					allowFinish={allowFinish}
					onFinish={() => {onFinish(requests[currentViewCellIndex].id)
						this.setState({ currentViewCellIndex: null})
						}}
					request={requests[currentViewCellIndex]}
					onClose={this.onCloseRequestDetail} onAccept={() => {onAccept(requests[currentViewCellIndex]) 
						this.onCloseRequestDetail()}} />
			</div>
		)
	}
}

export default RequestsCard
