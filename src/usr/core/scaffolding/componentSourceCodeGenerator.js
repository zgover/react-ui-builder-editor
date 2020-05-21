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

import isNil from 'lodash/isNil';
import template from 'lodash/template';
import * as constants from '../../../commons/constants';
import { format, getParticleName } from '../utils/textUtils';

let keyCounter = 0;
const placeholderStyleString =
  "style={{ width: '100%', minHeight: '2em', height: '100%', borderRadius: '4px', border: '1px dashed #dddddd' }}";

export function createSampleObjectNextLine (node, parentType, level = 0) {
  let result = [];
  if (node) {
    const { type, props, children } = node;
    let propertyName;
    let propertyValue;
    let componentType;
    if (props) {
      const { componentName } = props;
      propertyName = props.propertyName;
      propertyValue = props.propertyValue;
      if (componentName) {
        componentType = getParticleName(componentName);
      }
    }
    if (type === constants.PAGE_COMPONENT_TYPE || type === constants.PAGE_NODE_TYPE) {
      if (propertyName) {
        if (parentType === constants.COMPONENT_PROPERTY_SHAPE_TYPE) {
          result.push(`${propertyName}: <${componentType}`);
        } else {
          result.push(`${propertyName}={<${componentType}`);
        }
        if (children && children.length > 0) {
          let innerResult = [];
          for (let i = 0; i < children.length; i++) {
            innerResult = innerResult.concat(createSampleObjectNextLine(children[i], type, level + 1));
          }
          if (innerResult.length > 0) {
            result = result.concat(innerResult);
          }
        }
        if (parentType === constants.COMPONENT_PROPERTY_SHAPE_TYPE) {
          result.push(`/>${ level > 0 ? ',' : ''}`);
        } else {
          result.push(`/>}`);
        }
      } else {
        result.push(`<${componentType}`);
        if (parentType === constants.COMPONENT_PROPERTY_ARRAY_OF_TYPE) {
          result.push(`key="item${++keyCounter}"`);
        }
        if (children && children.length > 0) {
          let innerResult = [];
          for (let i = 0; i < children.length; i++) {
            innerResult = innerResult.concat(createSampleObjectNextLine(children[i], type, level + 1));
          }
          if (innerResult.length > 0) {
            result = result.concat(innerResult);
          }
        }
        result.push(`/>${ level > 0 ? ',' : ''}`);
      }
    } else if (type === constants.COMPONENT_PROPERTY_ELEMENT_TYPE) {

      if (propertyName) {
        if (parentType === constants.COMPONENT_PROPERTY_SHAPE_TYPE) {
          result.push(`${propertyName}: <div ${placeholderStyleString}`);
        } else {
          result.push(`${propertyName}={<div ${placeholderStyleString}`);
        }
        if (parentType === constants.COMPONENT_PROPERTY_SHAPE_TYPE) {
          result.push(`/>${ level > 0 ? ',' : ''}`);
        } else {
          result.push(`/>}`);
        }
      } else {
        result.push(`<div`);
        if (parentType === constants.COMPONENT_PROPERTY_ARRAY_OF_TYPE) {
          result.push(`key="item${++keyCounter}"`);
        }
        result.push(`${placeholderStyleString}`);
        result.push(`/>${ level > 0 ? ',' : ''}`);
      }
    } else if (type === constants.COMPONENT_PROPERTY_SHAPE_TYPE) {
      if (propertyName) {
        if (children && children.length > 0) {
          let innerResult = [];
          for (let i = 0; i < children.length; i++) {
            innerResult = innerResult.concat(createSampleObjectNextLine(children[i], type, level + 1));
          }
          if (innerResult.length > 0) {
            if (parentType === constants.COMPONENT_PROPERTY_SHAPE_TYPE) {
              result.push(`${propertyName}: {`);
            } else {
              result.push(`${propertyName}= {{`);
            }
            result = result.concat(innerResult);
            if (parentType === constants.COMPONENT_PROPERTY_SHAPE_TYPE) {
              result.push(`},`);
            } else {
              result.push(`}}`);
            }
          }
        }
      } else {
        if (children && children.length > 0) {
          let innerResult = [];
          for (let i = 0; i < children.length; i++) {
            innerResult = innerResult.concat(createSampleObjectNextLine(children[i], type, level + 1));
          }
          if (innerResult.length > 0) {
            result.push('{');
            result = result.concat(innerResult);
            result.push(`},`);
          }
        }
      }
    } else if (type === constants.COMPONENT_PROPERTY_ARRAY_OF_TYPE) {
      if (propertyName) {
        if (children && children.length > 0) {
          let innerResult = [];
          for (let i = 0; i < children.length; i++) {
            innerResult = innerResult.concat(createSampleObjectNextLine(children[i], type, level + 1));
          }
          if (innerResult.length > 0) {
            if (parentType === constants.COMPONENT_PROPERTY_SHAPE_TYPE) {
              result.push(`${propertyName}: [`);
            } else {
              result.push(`${propertyName}={[`);
            }
            result = result.concat(innerResult);
            if (parentType === constants.COMPONENT_PROPERTY_SHAPE_TYPE) {
              result.push(`],`);
            } else {
              result.push(`]}`);
            }
          }
        }
      } else {
        if (children && children.length > 0) {
          let innerResult = [];
          for (let i = 0; i < children.length; i++) {
            innerResult = innerResult.concat(createSampleObjectNextLine(children[i], type, level + 1));
          }
          if (innerResult.length > 0) {
            result.push('[');
            result = result.concat(innerResult);
            result.push('],');
          }
        }
      }
    } else if (type === constants.COMPONENT_PROPERTY_STRING_TYPE) {
      if (!isNil(propertyValue)) {
        if (propertyName) {
          if (parentType === constants.COMPONENT_PROPERTY_SHAPE_TYPE) {
            result.push(`${propertyName}: "${propertyValue}",`);
          } else {
            result.push(`${propertyName}="${propertyValue}"`);
          }
        } else {
          result.push(`"${propertyValue}",`);
        }
      }
    } else if (type === constants.COMPONENT_PROPERTY_OBJECT_TYPE) {
      if (!isNil(propertyValue)) {
        if (propertyName) {
          if (parentType === constants.COMPONENT_PROPERTY_SHAPE_TYPE) {
            result.push(`${propertyName}: ${JSON.stringify(propertyValue)},`);
          } else {
            result.push(`${propertyName}= {${JSON.stringify(propertyValue)}}`);
          }
        } else {
          result.push(`${JSON.stringify(propertyValue)},`);
        }
      }
    } else if (type === constants.COMPONENT_PROPERTY_ONE_OF_TYPE) {
      if (!isNil(propertyValue)) {
        if (propertyName) {
          if (parentType === constants.COMPONENT_PROPERTY_SHAPE_TYPE) {
            result.push(`${propertyName}: "${propertyValue}",`);
          } else {
            result.push(`${propertyName}="${propertyValue}"`);
          }
        } else {
          result.push(`"${propertyValue}",`);
        }
      }
    } else if (type === constants.COMPONENT_PROPERTY_SYMBOL_TYPE) {
      if (!isNil(propertyValue)) {
        if (propertyName) {
          if (parentType === constants.COMPONENT_PROPERTY_SHAPE_TYPE) {
            result.push(`${propertyName}: "${propertyValue}",`);
          } else {
            result.push(`${propertyName}="${propertyValue}"`);
          }
        } else {
          result.push(`"${propertyValue}",`);
        }
      }
    } else if (type === constants.COMPONENT_PROPERTY_BOOL_TYPE) {
      if (!isNil(propertyValue)) {
        if (propertyName) {
          if (parentType === constants.COMPONENT_PROPERTY_SHAPE_TYPE) {
            result.push(`${propertyName}: ${propertyValue},`);
          } else {
            result.push(`${propertyName}={${propertyValue}}`);
          }
        } else {
          result.push(`${propertyValue},`);
        }
      }
    } else if (type === constants.COMPONENT_PROPERTY_ANY_TYPE) {
      if (!isNil(propertyValue)) {
        if (propertyName) {
          if (parentType === constants.COMPONENT_PROPERTY_SHAPE_TYPE) {
            result.push(`${propertyName}: ${JSON.stringify(propertyValue)},`);
          } else {
            result.push(`${propertyName}= {${JSON.stringify(propertyValue)}}`);
          }
        } else {
          result.push(`${JSON.stringify(propertyValue)},`);
        }
      }
    } else if (type === constants.COMPONENT_PROPERTY_ARRAY_TYPE) {
      if (!isNil(propertyValue)) {
        if (propertyName) {
          if (parentType === constants.COMPONENT_PROPERTY_SHAPE_TYPE) {
            result.push(`${propertyName}: ${JSON.stringify(propertyValue)},`);
          } else {
            result.push(`${propertyName}= {${JSON.stringify(propertyValue)}}`);
          }
        } else {
          result.push(`${JSON.stringify(propertyValue)},`);
        }
      }
    } else if (type === constants.COMPONENT_PROPERTY_NUMBER_TYPE) {
      if (!isNil(propertyValue)) {
        if (propertyName) {
          if (parentType === constants.COMPONENT_PROPERTY_SHAPE_TYPE) {
            result.push(`${propertyName}: ${propertyValue},`);
          } else {
            result.push(`${propertyName}={${propertyValue}}`);
          }
        } else {
          result.push(`${propertyValue},`);
        }
      }
    }
  }
  return result;
}

export function getImportsSet (node, importsSet) {
  if (node) {
    const { type, props, children } = node;
    if (type === constants.PAGE_COMPONENT_TYPE || type === constants.PAGE_NODE_TYPE) {
      if (props) {
        const { componentName } = props;
        if (componentName) {
          const importPath = `${componentName.replace(constants.RESOURCE_NAME_INVALID_SEPARATOR_REGEXP, constants.FILE_SEPARATOR)}.comp`;
          const componentType = getParticleName(componentName);
          // console.info('Add: ', `import ${componentType} from '${importPath}'`);
          importsSet.add(`import ${componentType} from '${importPath}'`);
        }
      }
    }
    if (children && children.length > 0) {
      for (let i = 0; i < children.length; i++) {
        getImportsSet(children[i], importsSet);
      }
    }
  }
}

const classFileBodyTemplate = template(`import React from 'react';
<%= importString %>

export interface <%= newComponentName %>Props {
} 

class <%= newComponentName %> extends React.Component<<%= newComponentName %>Props, any> {
  render(): JSX.Element {
    return (
      <%= renderBodyString %>
    );
  }
}

export default <%= newComponentName %>;

`);

const functionFileBodyTemplate = template(`import React from 'react';
<%= importString %>

export interface <%= newComponentName %>Props {
}

function <%= newComponentName %>(props: <%= newComponentName %>Props): JSX.Element {
    return (
      <%= renderBodyString %>
    );
}

export default <%= newComponentName %>;

`);

export function generateSourceCode(componentsTree, {newComponentName, componentType, prettierOptions}) {
  let result = "";
  let renderBodyString;
  let importString;
  keyCounter = 0;
  const objectArray = createSampleObjectNextLine(componentsTree);
  if (objectArray && objectArray.length > 0) {
    renderBodyString = objectArray.join(' ');
  }
  const importsSet = new Set();
  getImportsSet(componentsTree, importsSet);
  if (importsSet && importsSet.size > 0) {
    importString = "";
    importsSet.forEach(importItem => {
      importString += `${importItem}; `;
    });
  }
  if (renderBodyString && importString) {
    if (componentType === 'function') {
      result = functionFileBodyTemplate({importString, renderBodyString, newComponentName});
    } else {
      result = classFileBodyTemplate({importString, renderBodyString, newComponentName});
    }
    result = format(result, prettierOptions);
  }
  return result;
}
