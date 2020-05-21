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

import cloneDeep from 'lodash/cloneDeep';
import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Slide from '@material-ui/core/Slide';
import Dialog from '@material-ui/core/Dialog';
import List from '@material-ui/core/List';
import ScriptView from '../commons/ScriptView';
import SplitPane from '../splitPane';
import PanelWithTitle from '../commons/PanelWithTitle';
import { CommonToolbar, CommonToolbarDivider } from '../commons/Commons.parts';
import ToolbarButton from '../commons/ToolbarButton';
import * as componentSourceCodeGenerator from '../../core/scaffolding/componentSourceCodeGenerator';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import PropertyTextField from '../commons/PropertyTextField';
import PropertySelect from '../commons/PropertySelect';
import PropertyCheckbox from '../commons/PropertyCheckbox';
import PropertyNumericField from '../commons/PropertyNumericField';

function Transition (props) {
  return <Slide direction="up" {...props} />;
}

const COMPONENT_TYPES_VARIANTS = [
  'function', 'class'
];

function download(filename, text) {
  var element = document.createElement('a');
  element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
  element.setAttribute('download', filename);
  element.style.display = 'none';
  document.body.appendChild(element);
  element.click();
  document.body.removeChild(element);
}

const SettingsListItem = withStyles(theme => ({
  root: {
    alignItems: 'flex-start',
    position: 'relative',
    cursor: 'default',
    // '&:hover': {
    //   backgroundColor: theme.palette.action.hover,
    // },
    userSelect: 'none',
  },
  dense: {
    paddingTop: 0,
    paddingBottom: 0,
    paddingLeft: 0,
    paddingRight: 0,
    margin: '5px 0',
  }
}))(ListItem);
const SettingsListItemText = withStyles({
  primary: {
    padding: 0,
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    display: 'flex',
    alignItems: 'center',
    flexWrap: 'nowrap',
    fontWeight: 400,
    color: '#607d8b',
  }
})(ListItemText);

const styles = theme => ({
  root: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  topPane: {
    position: 'absolute',
    top: 0,
    left: 0,
    height: '39px',
    right: 0
  },
  contentPane: {
    position: 'absolute',
    top: '39px',
    left: 0,
    bottom: 0,
    right: 0,
    overflow: 'auto',
  },
  settingsItemEditorContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    width: '100%'
  },
  settingsItemEditorWrapper: {
    width: '100%',
    border: '1px solid #dcdcdc',
    borderRadius: '4px',
    marginTop: '5px'
  },
});

class SourceCodePreviewDialog extends React.Component {
  static propTypes = {
    title: PropTypes.string,
    componentsTree: PropTypes.object,
    isOpen: PropTypes.bool,
    onClose: PropTypes.func,
    onSubmit: PropTypes.func,
  };

  static defaultProps = {
    title: '',
    componentsTree: null,
    isOpen: false,
    onClose: () => {
      console.info('SourceCodePreviewDialog.onClose is not set');
    },
    onSubmit: (options) => {
      console.info('SourceCodePreviewDialog.onSubmit is not set: ', options);
    },
  };

  constructor (props) {
    super(props);
    this.state = {
      sourceCodeText: '',
      options: {
        newComponentName: 'NewComponent',
        componentType: 'function',
        prettierOptions: {
          singleQuote: false,
          tabWidth: 2
        }
      },
    };
  }

  componentDidMount () {
    const { componentsTree } = this.props;
    if (componentsTree) {
      const { options } = this.state;
        const sourceCodeText = componentSourceCodeGenerator.generateSourceCode(
          componentsTree,
          {
            newComponentName: options.newComponentName,
            componentType: options.componentType,
            prettierOptions: options.prettierOptions
          }
        );
        this.setState({
          sourceCodeText,
        });
    }
  }

  componentDidUpdate (prevProps, prevState, snapshot) {
    const { componentsTree } = this.props;
    const { options } = this.state;
    if (componentsTree !== prevProps.componentsTree || options !== prevState.options) {
      let sourceCodeText = '';
      try {
        sourceCodeText = componentSourceCodeGenerator.generateSourceCode(
          componentsTree,
          {
            newComponentName: options.newComponentName,
            componentType: options.componentType,
            prettierOptions: options.prettierOptions
          }
        );
      } catch (e) {
        sourceCodeText = e.message;
      }
      this.setState({
        sourceCodeText,
      });
    }
  }

  handleClose = () => {
    this.props.onClose(false);
  };

  handleSubmit = (e) => {
    if (e) {
      e.stopPropagation();
      e.preventDefault();
    }
    const { sourceCodeText, options } = this.state;
    if (options.newComponentName) {
      // Start file download.
      download(`${options.newComponentName}.tsx`, sourceCodeText);
    }
  };

  handleNewComponentNameChange = (value) => {
    const newOptions = cloneDeep(this.state.options);
    newOptions.newComponentName = value;
    this.setState({
      options: newOptions,
    });
  };

  handleComponentTypeChange = (value) => {
    const newOptions = cloneDeep(this.state.options);
    newOptions.componentType = value;
    this.setState({
      options: newOptions,
    });
  };

  handleSingleQuoteChange = (value) => {
    const newOptions = cloneDeep(this.state.options);
    newOptions.prettierOptions.singleQuote = value;
    this.setState({
      options: newOptions,
    });
  };

  handleTabWidthChange = (value) => {
    const newOptions = cloneDeep(this.state.options);
    newOptions.prettierOptions.tabWidth = value;
    this.setState({
      options: newOptions,
    });
  };

  render () {
    const {
      isOpen,
      classes,
    } = this.props;
    if (!isOpen) {
      return null;
    }
    const {
      sourceCodeText,
      options
    } = this.state;
    return (
      <Dialog
        aria-labelledby="SourceCodePreviewDialog-dialog-title"
        onClose={this.handleClose}
        open={isOpen}
        fullScreen={true}
        scroll="paper"
        TransitionComponent={Transition}
      >
        <div className={classes.root}>
          <div className={classes.topPane}>
            <CommonToolbar disableGutters={true} dense="true">
              <ToolbarButton
                iconType="Close"
                onClick={this.handleClose}
                title="Close"
                tooltip="Close code preview"
              />
              <CommonToolbarDivider/>
              <ToolbarButton
                iconType="Save"
                onClick={this.handleSubmit}
                title="Save"
                tooltip="Save the source code file"
              />
            </CommonToolbar>
          </div>
          <div className={classes.contentPane}>
            <SplitPane
              split="vertical"
              defaultSize={200}
              primary="first"
            >
              <div className={classes.root}>
                <PanelWithTitle title="Generator options">
                  <List
                    key="componentPropsTree"
                    dense={true}
                    disablePadding={true}
                  >
                    <SettingsListItem
                      component="div"
                      disableGutters={true}
                      button={false}
                    >
                      <div className={classes.settingsItemEditorContainer}>
                        <SettingsListItemText primary="Component Name"/>
                        <div className={classes.settingsItemEditorWrapper}>
                          <PropertyTextField
                            text={options.newComponentName}
                            onChange={this.handleNewComponentNameChange}
                          />
                        </div>
                      </div>
                    </SettingsListItem>
                    <SettingsListItem
                      component="div"
                      disableGutters={true}
                      button={false}
                    >
                      <div className={classes.settingsItemEditorContainer}>
                        <SettingsListItemText primary="Component Variant"/>
                        <div className={classes.settingsItemEditorWrapper}>
                          <PropertySelect
                            value={options.componentType}
                            values={COMPONENT_TYPES_VARIANTS}
                            onChange={this.handleComponentTypeChange}
                          />
                        </div>
                      </div>
                    </SettingsListItem>
                    <SettingsListItem
                      component="div"
                      disableGutters={true}
                      button={false}
                    >
                      <div className={classes.settingsItemEditorContainer}>
                        <SettingsListItemText primary="Single quote" />
                        <PropertyCheckbox
                          value={options.prettierOptions.singleQuote}
                          onChange={this.handleSingleQuoteChange}
                        />
                      </div>
                    </SettingsListItem>
                    <SettingsListItem
                      component="div"
                      disableGutters={true}
                      button={false}
                    >
                      <div className={classes.settingsItemEditorContainer}>
                        <SettingsListItemText primary="Tab width" />
                        <div className={classes.settingsItemEditorWrapper}>
                          <PropertyNumericField
                            value={options.prettierOptions.tabWidth}
                            onChange={this.handleTabWidthChange}
                          />
                        </div>
                      </div>
                    </SettingsListItem>
                  </List>
                </PanelWithTitle>
              </div>
              <div className={classes.root}>
                  <PanelWithTitle title="Output source code">
                    <ScriptView scriptText={sourceCodeText} />
                  </PanelWithTitle>
              </div>
            </SplitPane>
          </div>
        </div>
      </Dialog>
    );
  }
}

export default withStyles(styles)(SourceCodePreviewDialog);
