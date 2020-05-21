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
import { repairPath } from '../utils/fileUtils';
import constants from '../../../commons/constants';

export let projectDirPath;
/**
 * Project src directory
 */
export let packageConfig;
export let wcdAppMode;

export let projectName;
export let projectEtcFilesStoreKey;
export let projectDeclarationFilesStoreKey;

export let projectRootSourceDir;
export let projectPublicDir;
export let usrSourceDir;
export let appIndicesSourceDir;
export let etcSourceDir;
export let etcPagesSourceDir;
export let etcFlowsSourceDir;
export let etcTemplatesSourceDir;
export let etcSettingsSourceDir;
export let etcSettingsFile;
export let etcStateSourceDir;
export let etcStateFile;

export let appSchemaSourceDir;
export let appSchemaPagesFile;
export let appSchemaFlowsFile;
export let appSchemaRouterFile;

export let appIndicesProdSourceDir;
export let appSchemaProdSourceDir;
export let appSchemaProdPagesFile;
export let appSchemaProdFlowsFile;
export let appSchemaProdRouterFile;

export let appSettingsFile;

export let projectSettings;

export const initProjectPaths = (projectUrl) => {

  projectDirPath = 'DEMO';
  projectRootSourceDir = repairPath(path.join(projectDirPath, constants.DIR_NAME_SRC));

  usrSourceDir = repairPath(path.join(projectRootSourceDir, constants.DIR_NAME_USR));
  etcSourceDir = repairPath(path.join(projectRootSourceDir, constants.DIR_NAME_ETC));

  etcPagesSourceDir = repairPath(path.join(etcSourceDir, constants.DIR_NAME_PAGES));
  etcFlowsSourceDir = repairPath(path.join(etcSourceDir, constants.DIR_NAME_FLOWS));
  etcTemplatesSourceDir = repairPath(path.join(etcSourceDir, constants.DIR_NAME_TEMPLATES));
  etcSettingsSourceDir = repairPath(path.join(etcSourceDir, constants.DIR_NAME_SETTINGS));
  etcStateSourceDir = repairPath(path.join(etcSourceDir, constants.DIR_NAME_STATE));

  etcSettingsFile = repairPath(path.join(etcSettingsSourceDir, `${constants.FILE_NAME_SETTINGS_ETC}.json`));
  etcStateFile = repairPath(path.join(etcStateSourceDir, `${constants.FILE_NAME_STATE_ETC}.json`));

  projectName = projectUrl;
  projectEtcFilesStoreKey = `ETC_FILES_${projectName}`;
  projectDeclarationFilesStoreKey = `DECLARATION_FILES_${projectName}`;

  projectSettings = {
    appDemoUrl: projectUrl,
  };

};
