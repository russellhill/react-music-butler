import React from 'react';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';

export default class NavigationBar extends React.Component {

    constructor(props) {
      super(props);
      this.state = {open: false};
    }
  
    handleToggle = () => this.setState({open: !this.state.open});
  
    render() {
      return (
        <div>
            <AppBar
                title="Music Butler"
                onLeftIconButtonClick={this.handleToggle}
            />
            <div>
            <Drawer 
                open={this.state.open}
                docked={false}>
                <MenuItem>Menu Item</MenuItem>
                <MenuItem>Menu Item 2</MenuItem>
            </Drawer>
            </div>
        </div>
      );
    }

  }