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

import path from 'path-browserify';
import { repairPath } from 'usr/core/utils/fileUtils';
import { findPageDeclarations } from './pagesParser';
import { findFlowDeclarations } from './flowsParser';
import { findTemplateDeclarations } from './templatesParser';
import { findSettingsDeclarations } from './settingsParser';
import { findStateDeclarations } from './stateParser';
import * as config from '../config/config';
import constants  from '../../../commons/constants';
import DeclarationsInFile from './DeclarationsInFile';

const validFileExtensions = {
  '.json': true
};

export const createEmptyResource = (filePath) => {
  return [
    new DeclarationsInFile(
      constants.RESOURCE_IN_USER_FUNCTIONS_TYPE,
      [],
      filePath
    ),
    new DeclarationsInFile(
      constants.RESOURCE_IN_COMPONENTS_TYPE,
      [],
      filePath
    ),
    new DeclarationsInFile(
      constants.RESOURCE_IN_PAGES_TYPE,
      [],
      filePath
    ),
    new DeclarationsInFile(
      constants.RESOURCE_IN_FLOWS_TYPE,
      [],
      filePath
    ),
    new DeclarationsInFile(
      constants.RESOURCE_IN_PROP_TYPES_TYPE,
      [],
      filePath
    ),
    new DeclarationsInFile(
      constants.RESOURCE_IN_MARKDOWN_TYPE,
      [],
      filePath
    ),
    new DeclarationsInFile(
      constants.RESOURCE_IN_TEMPLATES_TYPE,
      [],
      filePath
    ),
    new DeclarationsInFile(
      constants.RESOURCE_IN_SETTINGS_CONF_TYPE,
      [],
      filePath
    ),
    new DeclarationsInFile(
      constants.RESOURCE_IN_SETTINGS_TYPE,
      [],
      filePath
    ),
    new DeclarationsInFile(
      constants.RESOURCE_IN_STATE_TYPE,
      [],
      filePath
    ),
  ];
};

/**
 *
 * @param filePath
 * @param fileData
 * @returns {*}
 */
const parseFileData = (filePath, fileData) => {
  const result = [];
  const extName = path.extname(filePath);
  if (validFileExtensions[extName]) {
    if (filePath.indexOf(config.etcPagesSourceDir) === 0) {
      result.push(new DeclarationsInFile(
        constants.RESOURCE_IN_PAGES_TYPE,
        findPageDeclarations(fileData),
        filePath
      ));
    } else if (filePath.indexOf(config.etcFlowsSourceDir) === 0) {
      result.push(new DeclarationsInFile(
        constants.RESOURCE_IN_FLOWS_TYPE,
        findFlowDeclarations(fileData),
        filePath
      ));
    } else if (filePath.indexOf(config.etcTemplatesSourceDir) === 0) {
      result.push(new DeclarationsInFile(
        constants.RESOURCE_IN_TEMPLATES_TYPE,
        findTemplateDeclarations(fileData),
        filePath
      ));
    } else if (filePath.indexOf(config.etcSettingsSourceDir) === 0) {
      result.push(new DeclarationsInFile(
        constants.RESOURCE_IN_SETTINGS_TYPE,
        findSettingsDeclarations(fileData),
        filePath
      ));
    } else if (filePath.indexOf(config.etcStateSourceDir) === 0) {
      result.push(new DeclarationsInFile(
        constants.RESOURCE_IN_STATE_TYPE,
        findStateDeclarations(fileData),
        filePath
      ));
    }
  }
  return result;
};

export const parseMultipleResources = (fileObjects) => {
  let declarationsInFiles = null;
  if (fileObjects && fileObjects.length > 0) {
    declarationsInFiles = [];
    let declarations;
    for (let i = 0; i < fileObjects.length; i++) {
      const {filePath, fileData} = fileObjects[i];
      const validResourcePath = repairPath(filePath);
      if (fileData) {
        declarations = parseFileData(validResourcePath, fileData);
      }
      if (declarations && declarations.length > 0) {
        declarationsInFiles = declarationsInFiles.concat(declarations);
      }
    }
  }
  return declarationsInFiles;
};
