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

import queryString from 'query-string';
import globalStore from '../core/config/globalStore';
import * as projectManager from '../core/project/projectManager';
import constants from '../../commons/constants';
import * as config from '../core/config/config';

export const initProjectConfiguration = () => async dispatch => {
  const paramsMap = queryString.parse(window.location.search);
  if (paramsMap && paramsMap.appDemo) {
    projectManager.initProjectConfiguration(paramsMap.appDemo);
    try {
      const doExists = await projectManager.checkEtcFilesInStore();
      if (doExists) {
        dispatch({
          projectConfigStatus: {
            status: 'existingSetup'
          }
        });
      } else {
        dispatch({
          projectConfigStatus: {
            status: 'initialSetup'
          }
        });
      }
    } catch (e) {
      dispatch({
        projectConfigStatus: {
          status: 'initialSetup'
        }
      });
    }
  } else {
    dispatch({
      projectConfigStatus: {
        errorText: 'The "appDemo" URI parameter is not set. ' +
          'The parameter should point to the http URL of the demo application. ' +
          'Try to set correct URL into "appDemo" parameter and reload the entire screen.',
        status: 'error'
      }
    });
  }
};

export const validateProjectFiles = (initialSetup = false) => async (dispatch) => {
  dispatch({
    projectConfigStatus: {
      status: 'loading'
    }
  });
  const iframeElement = document.createElement('iframe');
  iframeElement.setAttribute('src', `${config.projectName}/webcodesk__demo_app_config`);
  iframeElement.style.position = 'absolute';
  iframeElement.style.top = '0px';
  iframeElement.style.left = '0px';
  iframeElement.style.right = '0px';
  iframeElement.style.bottom = '0px';
  iframeElement.style.opacity = '0';
  iframeElement.addEventListener('load', () => {
    setTimeout(() => {
      if (initialSetup) {
        console.info('Send message getDeclarationFilesWithEtcFiles');
        iframeElement.contentWindow.postMessage(
          { type: constants.WEBCODESK_MESSAGE_GET_DECLARATIONS_WITH_ETC },
          '*'
        );
      } else {
        console.info('Send message getDeclarationFiles');
        iframeElement.contentWindow.postMessage(
          { type: constants.WEBCODESK_MESSAGE_GET_DECLARATIONS },
          '*'
        );
      }
    }, 2000);
  });
  let iframeLoadingTimeoutId;
  const handleIFrameMessage = (e) => {
    const { data } = e;
    if (data) {
      const { type, payload } = data;
      if (
        type === constants.FRAMEWORK_MESSAGE_DECLARATIONS_WITH_ETC
        || type === constants.FRAMEWORK_MESSAGE_DECLARATIONS
      ) {
        if (payload) {
          const { etcFiles, declarationFiles } = payload;
          Promise.resolve()
            .then(() => {
              projectManager.saveDeclarationFiles(declarationFiles);
            })
            .then(() => {
              if (etcFiles) {
                return projectManager.saveEtcFilesInStore(etcFiles);
              }
            })
            .then(() => {
              if (iframeElement && iframeLoadingTimeoutId) {
                clearTimeout(iframeLoadingTimeoutId);
                iframeElement.remove();
              }
              window.removeEventListener('message', handleIFrameMessage);
              dispatch({
                projectConfigStatus: {
                  projectName: config.projectName,
                  status: 'ready'
                }
              });
            });
        }
      } else if (type === 'error') {
        if (iframeElement && iframeLoadingTimeoutId) {
          clearTimeout(iframeLoadingTimeoutId);
          iframeElement.remove();
        }
        window.removeEventListener('message', handleIFrameMessage);
        dispatch({
          projectConfigStatus: {
            errorText: payload,
            status: 'error'
          }
        });
      }
    }
  };
  window.addEventListener('message', handleIFrameMessage, false);
  document.body.appendChild(iframeElement);
  iframeLoadingTimeoutId = setTimeout(() => {
    clearTimeout(iframeLoadingTimeoutId);
    iframeElement.remove();
    window.removeEventListener('message', handleIFrameMessage);
    dispatch({
      projectConfigStatus: {
        errorText: 'The application did not respond within 30 seconds.',
        status: 'error'
      }
    });
  }, 30000);
};

export const testError = (error) => dispatch => {
  if (error && error.message) {
    dispatch({ success: error });
  }
};

export const openExistingProject = () => async (dispatch) => {
  globalStore.clear();
  dispatch({ isOpening: true });
  // dispatch('infoMessage', 'Reading source files. Please wait...');
  try {
    await projectManager.watchUsrSourceDir();
    dispatch({ success: true });
    // dispatch('successMessage', 'Project initialised successfully');
  } catch (e) {
    console.error(e);
  }
  dispatch({ isOpening: false });
};

export const closeExistingProject = () => dispatch => {
  globalStore.clear();
  dispatch({
    activeEditorTabIndex: -1,
    resourceEditorTabs: [],
    selectedResourceKey: null,
    selectedResource: null,
    selectedVirtualPath: '',
    success: true,
  });
};
