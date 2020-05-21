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

import {
  getRecord, getStorageInstance,
  setRecord,
} from './storage';
import * as config from './config';

const store = new Map();

const globalStore = {
  restore: async function(key) {
    const result = await getRecord(config.projectName, key);
    store.set(key, result);
    return result;
  },
  get: function (key) {
    return store.get(key);
  },
  set: function (key, object, doMakeRecord = false) {
    if (doMakeRecord) {
      setRecord(config.projectName, object, key);
    }
    store.set(key, object);
  },
  merge: function (key, object, doMakeRecord = false) {
    const existingObject = this.get(key);
    const newObject = {...existingObject, ...object};
    if (doMakeRecord) {
      setRecord(config.projectName, newObject, key);
    }
    store.set(key, newObject);
    return newObject;
  },
  clear: function () {
    store.clear();
  },
  getEtcFiles: async function () {
    try {
      return await getStorageInstance().getItem(config.projectEtcFilesStoreKey);
    } catch (error) {
      console.error('Error retrieving etc files from localstorage');
      return null;
    }
  },
  saveEtcFiles: async function (etcFiles) {
    try {
      await getStorageInstance().setItem(config.projectEtcFilesStoreKey, etcFiles);
    } catch (error) {
      console.error('Error saving etc files to localstorage');
    }
  },
  // getDeclarationFiles: async function () {
  //   try {
  //     return await getStorageInstance().getItem(config.projectDeclarationFilesStoreKey);
  //   } catch (error) {
  //     console.error('Error retrieving declaration files from localstorage');
  //     return null;
  //   }
  // },
  // saveDeclarationFiles: async function (declarationFiles) {
  //   try {
  //     await getStorageInstance().setItem(config.projectDeclarationFilesStoreKey, declarationFiles);
  //   } catch (error) {
  //     console.error('Error saving declaration files to localstorage');
  //   }
  // },
};

export default globalStore;
