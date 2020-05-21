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
import MarkdownView from '../commons/MarkdownView';

const styles = theme => ({
  root: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    overflow: 'auto'
  },
  centralPane: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
  },
  // topPane: {
  //   position: 'absolute',
  //   top: 0,
  //   left: 0,
  //   height: '39px',
  //   right: 0,
  //   minWidth: '800px'
  // },
  gridContainer: {
    minWidth: '600px',
    padding: '30px',
  }
});

class FunctionsFileView extends React.Component {
  static propTypes = {
    isVisible: PropTypes.bool,
    data: PropTypes.object,
    onSearch: PropTypes.func,
  };

  static defaultProps = {
    isVisible: true,
    data: {},
    onSearch: () => {
      console.info('FunctionsFileView.onSearch is not set');
    },
  };

  constructor (props) {
    super(props);
    const { data } = this.props;
    this.state = {
      markdownContent: data ? data.readmeText : '',
    };
  }

  componentDidUpdate (prevProps, prevState, snapshot) {
    const { data } = this.props;
    if (data && data !== prevProps.data) {
      this.setState({
        markdownContent: data.readmeText || '',
      });
    }
  }

  render () {
    const { classes } = this.props;
    const { markdownContent } = this.state;
    return (
      <div className={classes.root}>
        <div className={classes.centralPane}>
          <div className={classes.root}>
            <MarkdownView markdownContent={markdownContent} />
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(FunctionsFileView);
