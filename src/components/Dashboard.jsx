import React, { Component } from 'react'
import RaisedButton from 'material-ui/RaisedButton'
import OfferHelpForm from './OfferHelpForm'
import NeedHelpForm from './NeedHelpForm'
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
        window.location = "/offerHelp"
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
    const style = {
        display: 'inline-block !important',
        textAlign: 'center',
        verticalAlign: 'middle !important',
        padding:'20px'

      }
      const buttonStyle = {
        width:'40%',
        height: '75px',
        margin: '5px',
        textAlign: 'center',
        verticalAlign: 'middle !important',
        position: 'relative'
    }
      const divider = {
        width:'5%',
        height:'auto',
        display:'inline-block'
    }
    return (
      <Grid >
        <h3>Welcome to Studdy Buddy! </h3>
        <h4>We provide academic platform to help and get help from your peers </h4>
        <div style={style}>
            <RaisedButton style={buttonStyle} labelStyle={{fontSize: '20px', verticalAlign: 'middle', textAlign: 'center', padding:'25px'}} label="I would like to help" primary onClick={this.onClickWantToHelp}/>
            <div style={divider} />
            <RaisedButton style={buttonStyle} labelStyle={{fontSize: '20px', verticalAlign: 'middle', textAlign: 'center', padding:'25px'}} label="I need help" primary onClick={this.onClickNeedHelp} />
        </div>
        <br/>
        <br/>
        <OfferHelpForm shouldOpen={isEditingWantToHelpForm} onFinishFillingWantToHelpForm={this.onFinishFillingWantToHelpForm}/>
        <NeedHelpForm shouldOpen={isEditingNeedHelpForm} onFinishFillingWantToHelpForm={this.onFinishFillingNeedHelpForm}/>
      </Grid>
    )
  }
}

export default Dashboard
