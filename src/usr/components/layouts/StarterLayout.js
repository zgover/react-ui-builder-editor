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
import {withSnackbar} from 'notistack';
import {Helmet} from 'react-helmet';
import {cutFilePath} from '../commons/utils';
import StatusScreen from '../commons/StatusScreen';

class StarterLayout extends React.Component {
  static propTypes = {
    projectConfigStatus: PropTypes.object,
    projectLayout: PropTypes.element,
    newProjectWizard: PropTypes.element,
    onMounted: PropTypes.func,
    onSetupProject: PropTypes.func,
  };

  static defaultProps = {
    projectStatus: null,
    projectLayout: null,
    newProjectWizard: null,
    onMounted: () => {
      console.info('StarterLayout.onMounted is not set');
    },
    onSetupProject: () => {
      console.info('StarterLayout.onSetupProject is not set');
    }
  };

  constructor (props, context) {
    super(props, context);
  }

  componentDidMount() {
    this.props.onMounted();
  }

  componentDidUpdate (prevProps, prevState, snapshot) {
    const { projectConfigStatus } = this.props;
    if (projectConfigStatus !== prevProps.projectConfigStatus) {
      const { status } = projectConfigStatus;
      if (status === 'initialSetup') {
        this.handleResetProject();
      }
    }
  }

  handleResetProject = () => {
    this.props.onSetupProject(true);
  };

  handleContinueProject = () => {
    this.props.onSetupProject(false);
  };

  render() {
    const {projectConfigStatus, projectLayout, children, onSetupProject} = this.props;
    if (projectConfigStatus) {
      const {status} = projectConfigStatus;
      if (status === 'ready') {
        return (
          <React.Fragment>
            <Helmet>
              <title>
                {cutFilePath(projectConfigStatus.projectName, 50)}
              </title>
            </Helmet>
            {projectLayout}
            {children}
          </React.Fragment>
        );
      } else if (status === 'existingSetup') {
        return (
          <StatusScreen
            statusText="It seems that you were working with the demo project before"
            isRequestToContinue={true}
            onReset={this.handleResetProject}
            onContinue={this.handleContinueProject}
          />
        );
      } else if (status === 'loading') {
        return (
          <StatusScreen
            statusText="It may take about 30 seconds. Please wait."
          />
        );
      } else if (status === 'error') {
        return (
          <StatusScreen
            statusText='Error'
            errorText={projectConfigStatus.errorText}
          />
        );
      }
    }
    return (<span />);
  }
}

export default withSnackbar(StarterLayout);
