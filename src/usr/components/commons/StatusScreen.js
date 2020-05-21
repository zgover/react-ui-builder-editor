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
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const styles = theme => ({
  root: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 10
  },
  progress: {
    width: '40%',
    padding: '1em'
  },
  actionsArea: {
    display: 'grid',
    width: '100%',
    gridGap: '1em',
    gridAutoFlow: 'column',
    justifyContent: 'center'
  }
});

class StatusScreen extends React.Component {

  handleContinue = (e) => {
    if (e) {
      e.stopPropagation();
      e.preventDefault();
    }
    if (this.props.onContinue) {
      this.props.onContinue();
    }
  };

  handleReset = (e) => {
    if (e) {
      e.stopPropagation();
      e.preventDefault();
    }
    if (this.props.onReset) {
      this.props.onReset();
    }
  };

  render () {
    const { classes, statusText, errorText, isRequestToContinue } = this.props;
    return (
      <div className={classes.root}>
        <div className={classes.progress}>
          <Typography
            variant="h6"
            gutterBottom={true}
            align="center"
          >
            {statusText}
          </Typography>
          {isRequestToContinue && (
            <div className={classes.actionsArea}>
              <div>
                <Button variant="contained" onClick={this.handleContinue}>Continue working</Button>
              </div>
              <div>
                <Button variant="contained" onClick={this.handleReset}>Reset to default demo</Button>
              </div>
            </div>
          )}
          {errorText && (
            <Typography
              variant="h5"
              gutterBottom={true}
              align="center"
              color="error"
            >
              {errorText}
            </Typography>
          )}
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(StatusScreen);
