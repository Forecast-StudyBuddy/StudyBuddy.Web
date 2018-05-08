import React, { Component } from 'react'
import FlatButton from 'material-ui/FlatButton'
import Checkbox from 'material-ui/Checkbox'
import Dialog from 'material-ui/Dialog'
import SelectField from 'material-ui/SelectField'
import MenuItem from 'material-ui/MenuItem'
import TextField from 'material-ui/TextField'

class NeedHelpForm extends Component {
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
        title="I need help"
        actions={actions}
        modal={true}
        open={shouldOpen}
      >
        Select a course you would like help with
        <SelectField
          floatingLabelText="Course"
          value={true}
          onChange={this.handleChange}
        >
          <MenuItem value={null} primaryText="" />
          <MenuItem value={false} primaryText="No" />
          <MenuItem value={true} primaryText="Yes" />
        </SelectField>
        <Checkbox
          label="Do you prefer to have someone who is in the same class with you?"
          style={{marginBottom: 16}}
        />
        <TextField
          hintText="What do you need help with? (Please be as specific as you can, so helpers have a better idea of what you need help with)"
          multiLine={true}
          rows={2}
          rowsMax={4}
        />
      </Dialog>
    )
  }
}

export default NeedHelpForm
