import React, { Component } from 'react'
import RaisedButton from 'material-ui/RaisedButton'
import OfferHelpForm from './OfferHelpForm'
import NeedHelpForm from './NeedHelpForm'
import ConfirmationPopup from './ConfirmaionPopup'

class Dashboard extends Component {
  constructor (props) {
    super(props)

    this.state = {
      isUserHelping: false,
      isEditingWantToHelpForm: false,
      isEditingNeedHelpForm: false,
      shouldOpenConfirmation: false,
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

    onNeedHelpRequestSubmitted = () => {
        this.setState({ shouldOpenConfirmation: true })
    }

  render () {
    const {isEditingWantToHelpForm, isEditingNeedHelpForm, shouldOpenConfirmation} = this.state
    return (
      <div>
        <br/>
        <RaisedButton label="I would like to help" primary onClick={this.onClickWantToHelp}/>
        <br/>
        <br/>
        <RaisedButton label="I need help" primary onClick={this.onClickNeedHelp} />
        <OfferHelpForm shouldOpen={isEditingWantToHelpForm} onFinishFillingWantToHelpForm={this.onFinishFillingWantToHelpForm}/>
        <NeedHelpForm shouldOpen={isEditingNeedHelpForm} onFinishFillingWantToHelpForm={this.onFinishFillingNeedHelpForm}
            onNeedHelpRequestSubmitted={this.onNeedHelpRequestSubmitted}/>
        <ConfirmationPopup shouldOpen={shouldOpenConfirmation} title="Confirmation" text={`Thank you for submitting a help request! You
                will receive an email once your peer accepts your request!`} onConfirm={() => {this.setState({ shouldOpenConfirmation: false })
                }}/>
      </div>
    )
  }
}

export default Dashboard
