import React, { Component } from 'react'
import RaisedButton from 'material-ui/RaisedButton'
import OfferHelpForm from './OfferHelpForm'
import NeedHelpForm from './NeedHelpForm'

class Dashboard extends Component {
  constructor (props) {
    super(props)

    this.state = {
      isUserHelping: false,
      isEditingWantToHelpForm: false,
      isEditingNeedHelpForm: false
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

  render () {
    const {isEditingWantToHelpForm, isEditingNeedHelpForm} = this.state
    return (
      <div>
        <br/>
        <RaisedButton label="I would like to help" primary onClick={this.onClickWantToHelp}/>
        <br/>
        <br/>
        <RaisedButton label="I need help" primary onClick={this.onClickNeedHelp} />
        <OfferHelpForm shouldOpen={isEditingWantToHelpForm} onFinishFillingWantToHelpForm={this.onFinishFillingWantToHelpForm}/>
        <NeedHelpForm shouldOpen={isEditingNeedHelpForm} onFinishFillingWantToHelpForm={this.onFinishFillingNeedHelpForm}/>
      </div>
    )
  }
}

export default Dashboard
