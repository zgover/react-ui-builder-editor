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

import * as parserManager from '../parser/parserManager';
import * as config from '../config/config';
import * as projectResourcesManager from './projectResourcesManager';
import * as projectGenerator from './projectGenerator';
import { getConsoleErrors } from '../../core/config/storage';
import { repairPath } from '../utils/fileUtils';
import globalStore from '../config/globalStore';
import DeclarationsInFile from '../parser/DeclarationsInFile';
import { excludeFields } from '../utils/fileUtils';

let appDemoDeclarationFiles;

export function initProjectConfiguration (projectUrl) {
  return config.initProjectPaths(projectUrl);
}

export async function checkEtcFilesInStore () {
  const etcFilesData = await globalStore.getEtcFiles();
  return !!etcFilesData;
}

export async function saveEtcFilesInStore (etcFiles) {
  await globalStore.saveEtcFiles(etcFiles);
}

export async function saveDeclarationFiles (declarationFiles) {
  appDemoDeclarationFiles = declarationFiles;
}

export function getProjectSettings () {
  return config.projectSettings;
}

export function openUrlInExternalBrowser (url) {
  window.open(url, '__blank').focus();
}

export async function getSyslog () {
  return getConsoleErrors();
}

export function generateFiles () {
  return projectGenerator.generateFiles();
}

export async function watchUsrSourceDir () {
  // Make resources trees by declarations in files
  // Init new resources graphs
  projectResourcesManager.initNewResourcesTrees();
  // generate all default files if they are missing
  // await projectGenerator.generateDefaultFiles();
  // read the entire usr directory after a while
  // await readResource(config.usrSourceDir);
  if (appDemoDeclarationFiles && appDemoDeclarationFiles.length > 0) {
    const declarationAdapters = [];
    for (let d = 0; d < appDemoDeclarationFiles.length; d++) {
      declarationAdapters.push(new DeclarationsInFile(
        appDemoDeclarationFiles[d].resourceType,
        appDemoDeclarationFiles[d].declarations,
        appDemoDeclarationFiles[d].filePath
      ));
    }
    appDemoDeclarationFiles = undefined;
    projectResourcesManager.updateResources(declarationAdapters);
  }
  const etcFiles = await globalStore.getEtcFiles();
  if (etcFiles) {
    // read the entire etc directory
    readResource(etcFiles);
    //
  }
}

export function readResource (etcFiles) {
  const declarationsInFiles = parserManager.parseMultipleResources(etcFiles);
  if (declarationsInFiles && declarationsInFiles.length > 0) {
    // Update resources in the graphs for updated files
    const { updatedResources, deletedResources, doUpdateAll } =
      projectResourcesManager.updateResources(declarationsInFiles);
    // try to generate all needed files
    // await projectGenerator.generateFiles();
    // tell there are updated resources
    return { updatedResources, deletedResources, doUpdateAll };
  }
  // tell there are no updated resources
  return {};
}

export function removeResource (resourcePath) {
  const validResourcePath = repairPath(resourcePath);
  // to remove all resources just create empty declarations and pass them to update the resource trees
  const emptyDeclarationsInFiles = parserManager.createEmptyResource(validResourcePath);
  // Update resource in the graphs
  const { updatedResources, deletedResources, doUpdateAll } =
    projectResourcesManager.updateResources(emptyDeclarationsInFiles, () => {
      return false;
    });
  // try to generate all needed files
  // await projectGenerator.generateFiles();
  return { updatedResources, deletedResources, doUpdateAll };

}

export function updateResource (etcFiles) {
  // optimistic update of the declarations in files
  const declarationsInFiles = parserManager.parseMultipleResources(etcFiles);
  if (declarationsInFiles && declarationsInFiles.length > 0) {
    // Update resource in the graphs
    const { updatedResources, deletedResources, doUpdateAll } =
      projectResourcesManager.updateResources(declarationsInFiles);
    // try to generate all needed files
    // await projectGenerator.generateFiles();
    return { updatedResources, deletedResources, doUpdateAll };
  }
  return {};
}

export async function checkResourceExists (resourcePath) {
  const validResourcePath = repairPath(resourcePath);
  try {
    const etcFiles = await globalStore.getEtcFiles();
    return etcFiles && etcFiles.indexOf(f => f.filePath === validResourcePath) >= 0;
  } catch (e) {
    return false;
  }
}

export async function writeEtcFiles (newEtcFiles) {
  if (newEtcFiles && newEtcFiles.length > 0) {
    const etcFiles = await globalStore.getEtcFiles();
    let foundFileObject;
    for (let f = 0; f < newEtcFiles.length; f++) {
      foundFileObject = etcFiles.find(i => i.filePath === newEtcFiles[f].filePath);
      if (
        newEtcFiles[f].filePath.indexOf(config.etcPagesSourceDir) === 0
        || newEtcFiles[f].filePath.indexOf(config.etcTemplatesSourceDir) === 0
      ) {
        // reduce the JSON in files
        try {
          newEtcFiles[f].fileData = JSON.stringify(excludeFields(JSON.parse(newEtcFiles[f].fileData), {
            defaultChildren: true,
            propertyComment: true,
            propertyValueVariants: true,
            propertyValue: true,
          }));
        } catch (e) {
          // what?
        }
      }
      if (foundFileObject) {
        foundFileObject.fileData = newEtcFiles[f].fileData;
      } else {
        etcFiles.push(newEtcFiles[f]);
      }
    }
    await globalStore.saveEtcFiles(etcFiles);
  }
}

export async function deleteEtcFile (filePath) {
  const etcFiles = await globalStore.getEtcFiles();
  const foundFileIndex = etcFiles.findIndex(f => f.filePath === filePath);
  if (foundFileIndex >=0) {
    etcFiles.splice(foundFileIndex, 1);
    await globalStore.saveEtcFiles(etcFiles);
  }
}
