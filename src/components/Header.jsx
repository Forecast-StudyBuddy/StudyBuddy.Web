import React, { Component } from 'react'
import AppBar from 'material-ui/AppBar'
import IconButton from 'material-ui/IconButton'
import IconMenu from 'material-ui/IconMenu'
import MenuItem from 'material-ui/MenuItem'
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert'

const MenuIcon = props => (
  <IconMenu
    {...props}
    iconButtonElement={
      <IconButton><MoreVertIcon /></IconButton>
    }
    targetOrigin={{horizontal: 'left', vertical: 'bottom'}}
    anchorOrigin={{horizontal: 'left', vertical: 'bottom'}}
  >
    <MenuItem primaryText="Profile" />
    <MenuItem primaryText="Sign out" />
  </IconMenu>
)

class Header extends Component {
  render () {
    return (
      <AppBar title="Study Buddy" iconElementRight={<MenuIcon />}/>
    )
  }
}

export default Header
