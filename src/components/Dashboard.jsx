import React, { Component } from 'react'
import RaisedButton from 'material-ui/RaisedButton'
import OfferHelpForm from './OfferHelpForm'
import NeedHelpForm from './NeedHelpForm'
import RequestsCard from './RequestsCard'
import { Grid, Row, Col } from 'react-bootstrap';

class Dashboard extends Component {
  constructor (props) {
    super(props)

    this.state = {
      isUserHelping: false,
      isEditingWantToHelpForm: false,
      isEditingNeedHelpForm: false,
      requests:[
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
    }
  }

    onClickWantToHelp = () => {
        this.setState({ isEditingWantToHelpForm: true })
    }

    onFinishFillingWantToHelpForm = () => {
        this.setState({ isEditingWantToHelpForm: false })
    }

    onClickNeedHelp = () => {
        this.setState({ isEditingNeedHelpForm: true })
    }

    onFinishFillingNeedHelpForm = () => {
        this.setState({ isEditingNeedHelpForm: false })
        
    }

    onAcceptRequest = () => {
        console.log(window.localStorage.getItem("email"))
    }

  render () {
    const {isEditingWantToHelpForm, isEditingNeedHelpForm} = this.state
    return (
      <Grid>
          <Row>
              <Col>
              <p> “If you want academic help —ask Study Buddy.”</p>
              </Col>
          </Row>
       
        <Row className="show-grid">
              <Col  xs={6} md={4}>
              <RaisedButton label="I would like to help" primary onClick={this.onClickWantToHelp}/>
              </Col>
              <Col  xs={6} md={4}>
              <RaisedButton label="I need help" primary onClick={this.onClickNeedHelp} />
             </Col>
             <Col  xs={6} md={4}>
             <OfferHelpForm shouldOpen={isEditingWantToHelpForm} onFinishFillingWantToHelpForm={this.onFinishFillingWantToHelpForm}/>
        <NeedHelpForm shouldOpen={isEditingNeedHelpForm} onFinishFillingWantToHelpForm={this.onFinishFillingNeedHelpForm}/>
              </Col>
          </Row>
          <h3>Current Request Pool</h3>
          <Row>
              <Col>
              <RequestsCard areAcceptedRequests={false} allowAccept={true} onCellClick={this.onCellClick} requests={this.state.requests}
        onAccept={this.onAcceptRequest}/>
              </Col>
          </Row>
          </Grid>
    )
  }
}

export default Dashboard
