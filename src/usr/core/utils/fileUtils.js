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

import isArray from 'lodash/isArray';
import isObject from 'lodash/isObject';
import constants from '../../../commons/constants';

const wrongWin32AbsolutePathPrefix = new RegExp(/^\/[A-Za-z]:(.*?)/);

export function repairPath (filePath) {
  if (filePath) {
    const newFilePath = filePath.replace(/\\/g, constants.FILE_SEPARATOR);
    const nameMatches = wrongWin32AbsolutePathPrefix.exec(newFilePath);
    if (!nameMatches) {
      return newFilePath;
    }
    // here we have a bug in the path-browserify
    // after the path resolving we get the leading slash --> /D://dir/dir
    // however there should not be any on the win32 platform --> D://dir/dir
    return newFilePath.substr(1);
  }
  return filePath;
}

export function excludeFields(obj2, fields) {
  let obj1 = null;
  if (isArray(obj2)) {
    obj1 = [];
    for (let i = 0; i < obj2.length; i++) {
      obj1.push(excludeFields(obj2[i], fields));
    }
  } else if (isObject(obj2)) {
    obj1 = {};
    for (let item in obj2) {
      if (obj2.hasOwnProperty(item) && !fields[item]) {
        obj1[item] = excludeFields(obj2[item], fields);
      }
    }
  } else {
    obj1 = obj2;
  }
  return obj1;
}
