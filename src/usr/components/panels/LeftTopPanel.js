/*
 *     React UI Builder
 *     Copyright (C) React UI Builder Team
 *
 *     This program is free software: you can redistribute it and/or modify
 *     it under the terms of the GNU General Public License as published by
 *     the Free Software Foundation, either version 3 of the License, or
 *     (at your option) any later version.
 *
 *     This program is distributed in the hope that it will be useful,
 *     but WITHOUT ANY WARRANTY; without even the implied warranty of
 *     MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 *     GNU General Public License for more details.
 *
 *     You should have received a copy of the GNU General Public License
 *     along with this program.  If not, see <https://www.gnu.org/licenses/>.
 */

import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import ToolbarButton from '../commons/ToolbarButton';
import constants from '../../../commons/constants';

const styles = theme => ({
  root: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    minWidth: '150px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  biggerArea: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    flexWrap: 'nowrap',
    flexGrow: 2,
  },
  smallArea: {
    flexGrow: 0,
  }
});

class LeftTopPanel extends React.Component {
  static propTypes = {
    onShowSyslog: PropTypes.func,
    onShowLeftPanel: PropTypes.func,
  };

  static defaultProps = {
    onShowSyslog: () => {
      console.info('LeftTopPanel.onShowSyslog is not set');
    },
    onShowLeftPanel: () => {
      console.info('LeftTopPanel.onShowLeftPanel is not set');
    },
  };

  handleOpenHomePage = () => {
    window.open(constants.URL_REACTUIBUILDER_HOME, '__blank').focus();
  };

  handleShowLeftPanel = () => {
    this.props.onShowLeftPanel(false);
  };

  render () {
    const { classes } = this.props;
    return (
      <div ref={this.root} className={classes.root}>
        <div className={classes.biggerArea}>
          <ToolbarButton
            iconType="ReactUIBuilder"
            title="React UI Builder"
            iconColor="#2196f3"
            tooltip="Go to the React UI Builder main page"
            onClick={this.handleOpenHomePage}
          />
          {/*<ToolbarButton*/}
          {/*  iconType="MenuIcon"*/}
          {/*  tooltip="Webcodesk console output"*/}
          {/*  onClick={this.handleShowSyslog}*/}
          {/*/>*/}
          {/*<ToolbarButton*/}
          {/*  iconType="OpenInNew"*/}
          {/*  title="Issue Tracker"*/}
          {/*  tooltip="Open issue tracker"*/}
          {/*  onClick={this.handleOpenIssueTracker}*/}
          {/*/>*/}
          {/*<ToolbarButton*/}
          {/*  onClick={this.handleOpenUserGuide}*/}
          {/*  iconType="HelpOutline"*/}
          {/*  title="User Guide"*/}
          {/*  iconColor="#2e7d32"*/}
          {/*  tooltip="Open Webcodesk User Guide"*/}
          {/*/>*/}
        </div>
        <div className={classes.smallArea}>
          <ToolbarButton
            iconType="KeyboardArrowLeft"
            tooltip="Hide left panel"
            onClick={this.handleShowLeftPanel}
          />
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(LeftTopPanel);
