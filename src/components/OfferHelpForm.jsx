import React, { Component } from 'react'
import FlatButton from 'material-ui/FlatButton'
import Checkbox from 'material-ui/Checkbox'
import Dialog from 'material-ui/Dialog'

class OfferHelpForm extends Component {
  constructor (props) {
    super(props)

    this.state = {
      isUserHelping: false
    }
  }

  render () {
    const { shouldOpen } = this.props

    const actions = [
      <FlatButton
        label="Cancel"
        primary={true}
        onClick={this.props.onFinishFillingWantToHelpForm}
      />,
      <FlatButton
        label="Submit"
        primary={true}
        disabled={true}
        onClick={this.props.onFinishFillingWantToHelpForm}
      />
    ]

    return (
      <Dialog
        title="I would like to help"
        actions={actions}
        modal={true}
        open={shouldOpen}
      >
        Select courses you would like help with
        <Checkbox
          label="CS180"
          style={{marginBottom: 16}}
        />
        <Checkbox
          label="ECON251"
          style={{marginBottom: 16}}
        />
      </Dialog>
    )
  }
}

export default OfferHelpForm
