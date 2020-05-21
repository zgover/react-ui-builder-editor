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

import { SequentialTaskQueue } from 'sequential-task-queue';
import * as projectManager from '../core/project/projectManager';

// Use sequential queue for accessing graph instance while multiple resources added in parallel
const taskQueue = new SequentialTaskQueue();

export const removeResource = (resourcePath) => async (dispatch) => {
  taskQueue.push(async () => {
    const update = await projectManager.removeResource(resourcePath);
    dispatch({success: true});
    if (update.doUpdateAll) {
      dispatch({changedByCompilation: true});
    }
  });
};

export const updateResource = (fileObjects) => async (dispatch) => {
  taskQueue.push(async () => {
    try {
      const update = await projectManager.updateResource(fileObjects);
      if (update.updatedResources && update.updatedResources.length > 0) {
        dispatch({success: true});
      }
      if (update.doUpdateAll) {
        dispatch({changedByCompilation: true});
      }
    } catch (e) {
      console.error(e.message);
    }
  });
};

export const writeEtcFiles = (fileObjects) => async (dispatch) => {
  taskQueue.push(async () => {
    try {
      await projectManager.writeEtcFiles(fileObjects);
      dispatch({success: true});
    } catch (e) {
      console.error('Writing etc files.', e.message);
      dispatch({exception: e});
    }
  });
};

export const deleteEtcFile = (filePath) => async (dispatch) => {
  taskQueue.push(async () => {
    try {
      await projectManager.deleteEtcFile(filePath);
      dispatch({success: filePath});
    } catch (e) {
      console.error(`Deleting etc file ${filePath}.`, e.message);
      dispatch({exception: e});
    }
  });
};

export const getSyslog = () => async (dispatch) => {
  const sysLog = await projectManager.getSyslog();
  dispatch({sysLog: sysLog});
  dispatch({isOpen: true});
};
