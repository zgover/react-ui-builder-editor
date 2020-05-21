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

import * as config from '../config/config';
import constants from '../../../commons/constants';
import * as projectResourcesManager from './projectResourcesManager';
import * as pagesGeneratorManager from './generator/pagesGeneratorManager';
import * as flowsGeneratorManager from './generator/flowsGeneratorManager';
import * as settingsGeneratorManager from './generator/settingsGeneratorManager';

function generateSchema () {
  // generate schema index just for the sake it is missing
  // await schemaIndexGeneratorManager.generateSchemaIndex(config.appSchemaSourceDir, config.wcdAppMode); // development
  // await schemaIndexGeneratorManager.generateSchemaIndex(config.appSchemaProdSourceDir, config.wcdAppMode); // production

  const schema = {};

  // omit root keys
  const pagesStarterKey =
    config.etcPagesSourceDir.replace(`${config.projectRootSourceDir}${constants.FILE_SEPARATOR}`, '');
  // if we want to write pages files we have to write them into schema dir
  // but before we need to get rid of the etc dir in the import paths of the page resources
  const replacePagesDirName =
    `${constants.DIR_NAME_ETC}${constants.FILE_SEPARATOR}${constants.DIR_NAME_PAGES}`;

  /**
   * Development pages
   */
    // retrieve the pages models tree
  const pagesDev = projectResourcesManager.getPagesTree(pagesStarterKey);
  // write pages files
  schema.pages = pagesGeneratorManager.generateFiles(pagesDev, config.appSchemaPagesFile, replacePagesDirName);
  // write routes file
  schema.routes = pagesGeneratorManager.generateRoutesFile(pagesDev, config.appSchemaRouterFile);
  /**
   * Production pages
   */
  //   // retrieve the pages models tree
  // const pagesProd = projectResourcesManager.getPagesTreeProd(pagesStarterKey);
  // // write pages files
  // await pagesGeneratorManager.generateFiles(pagesProd, config.appSchemaProdPagesFile, replacePagesDirName);
  // // write routes file
  // await pagesGeneratorManager.generateRoutesFile(pagesProd, config.appSchemaProdRouterFile);

  // omit root keys
  const flowsStarterKey =
    config.etcFlowsSourceDir.replace(`${config.projectRootSourceDir}${constants.FILE_SEPARATOR}`, '');
  // if we want to write flows files we have to write them into schema dir
  // but before we need to get rid of the etc dir in the import paths of the flow resources
  const replaceFlowsDirName =
    `${constants.DIR_NAME_ETC}${constants.FILE_SEPARATOR}${constants.DIR_NAME_FLOWS}`;

  /**
   * Development flows
   */
  const flowsDev = projectResourcesManager.getFlowsTree(flowsStarterKey);
  // write flows files
  schema.flows = flowsGeneratorManager.generateFiles(flowsDev, config.appSchemaFlowsFile, replaceFlowsDirName);
  // /**
  //  * Production flows
  //  */
  // const flowsProd = projectResourcesManager.getFlowsTreeProd(flowsStarterKey);
  // // write flows files
  // await flowsGeneratorManager.generateFiles(flowsProd, config.appSchemaProdFlowsFile, replaceFlowsDirName);

  /**
   * Settings
   */
    // omit root keys
  const settingsStarterKey =
      config.etcSettingsSourceDir.replace(`${config.projectRootSourceDir}${constants.FILE_SEPARATOR}`, '');
  const settingsTree = projectResourcesManager.getSettingsTree(settingsStarterKey);
  const settings = settingsGeneratorManager.generateFiles(settingsTree, config.appSettingsFile);
  return { schema, settings };
}

export function generateFiles () {
  // generatingFilesRunCount += 1;
  // await generateIndices();
  // await generateSchema();
  return generateSchema();
  // console.info('TODO: generate schema in the memory and pass it to the iframe');
  // generatingFilesRunCount -= 1;
}
