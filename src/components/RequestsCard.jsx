import React, { Component } from 'react'
import Paper from 'material-ui/Paper'
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn
} from 'material-ui/Table'

const style = {
  height: 300,
  width: 800,
  margin: 'auto',
  textAlign: 'center',
  display: 'block'
}

class RequestsCard extends Component {
  constructor (props) {
    super(props)

    this.state = {
      requests: [
        {name: 'Darrell',
          course: 'CS190',
          request: 'I have no idea what to do with life.',
          status: 'Finished'
        }
      ]
    }
  }

  render () {
    const { areAcceptedRequests } = this.props

    return (
      <Paper style={style} zDepth={1} >
        <Table selectable={false}>
          <TableHeader displaySelectAll={false} adjustForCheckbox={false} enableSelectAll={false}>
            <TableRow>
              <TableHeaderColumn>Name</TableHeaderColumn>
              <TableHeaderColumn>Course</TableHeaderColumn>
              <TableHeaderColumn>Request</TableHeaderColumn>
              { areAcceptedRequests &&
                <TableHeaderColumn>Status</TableHeaderColumn>
              }
            </TableRow>
          </TableHeader>
          <TableBody displayRowCheckbox={false}>
            {this.state.requests.map(request =>
              <TableRow>
                <TableRowColumn>{request.name}</TableRowColumn>
                <TableRowColumn>{request.course}</TableRowColumn>
                <TableRowColumn>{request.request}</TableRowColumn>
                {areAcceptedRequests &&
                    <TableRowColumn>{request.status}</TableRowColumn>
                }
              </TableRow>
            )}
          </TableBody>
        </Table>
      </Paper>
    )
  }
}

export default RequestsCard
