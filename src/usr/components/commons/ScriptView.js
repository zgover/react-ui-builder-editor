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
import { getHighlightedTSCodeHtml } from './utils';

const styles = theme => ({
  codeBlock: {
    fontSize: '12px',
    borderRadius: '4px',
    // backgroundColor: theme.palette.background.paper,
    padding: 0,
  },
  formatted: {
    border: 0,
    // backgroundColor: theme.palette.background.paper,
    padding: '1em',
  }
});

class ScriptView extends React.Component {
  static propTypes = {
    scriptText: PropTypes.string,
    extraClassName: PropTypes.string,
  };

  static defaultProps = {
    scriptText: '',
    extraClassName: ''
  };

  constructor (props, context) {
    super(props, context);
    // this.codeBlock = React.createRef();
    this.state = {
      htmlText: '',
    };
  }

  componentDidMount () {
    const { scriptText } = this.props;
    if (scriptText) {
      this.setState({
        htmlText: getHighlightedTSCodeHtml(scriptText)
      });
    }
  }

  componentDidUpdate (prevProps, prevState, snapshot) {
    const { scriptText } = this.props;
    if (scriptText !== prevProps.scriptText) {
      this.setState({
        htmlText: getHighlightedTSCodeHtml(scriptText)
      });
    }
  }

  render () {
    const { classes, scriptText, extraClassName } = this.props;
    if (scriptText) {
      const { htmlText } = this.state;
      return (
        <pre className={classes.formatted} style={{backgroundColor: '#ffffff'}}>
          <code
            ref={this.codeBlock}
            className={`${classes.codeBlock} ${extraClassName || ''}`}
            dangerouslySetInnerHTML={{__html: htmlText}}
          />
        </pre>
      );
    }
    return (
      <pre className={classes.formatted}>
        <code>
          undefined
        </code>
      </pre>
    );
  }
}

export default withStyles(styles)(ScriptView);
