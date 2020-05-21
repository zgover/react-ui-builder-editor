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

export default {
  type: '_div',
  props: {
    style: {
      padding: '4em'
    },
  },
  children: [
    {
      type: 'usr.components.dialogs.SourceCodePreviewDialog.SourceCodePreviewDialog',
      instance: 'sourceCodePreviewDialog1',
      props: {
        isOpen: true,
        componentsTree: {
          "key": "node2",
          "type": "PAGE_COMPONENT_TYPE",
          "props": {
            "componentName": "usr.layout.PageFrameWithActionButton",
            "componentInstance": "pageFrameWithActionButton1"
          },
          "index": 0,
          "children": [
            {
              "key": "node107",
              "type": "PAGE_COMPONENT_TYPE",
              "props": {
                "componentName": "usr.atom.ActionButton",
                "componentInstance": "actionButton1",
                "propertyName": "actionButtonContent",
                "isSelected": true,
                "propertyComment": "\n Set action button here. The `ActionButton` component instance should be used.\n"
              },
              "index": 0,
              "children": [
                {
                  "key": "node108",
                  "type": "COMPONENT_PROPERTY_ONE_OF_TYPE",
                  "props": {
                    "propertyName": "color",
                    "propertyComment": "\n The color of the component. It supports those theme colors that make sense for this component.\n",
                    "propertyValueVariants": [
                      {
                        "value": ""
                      },
                      {
                        "value": "default"
                      },
                      {
                        "value": "inherit"
                      },
                      {
                        "value": "primary"
                      },
                      {
                        "value": "secondary"
                      }
                    ]
                  },
                  "index": 0
                },
                {
                  "key": "node109",
                  "type": "COMPONENT_PROPERTY_BOOL_TYPE",
                  "props": {
                    "propertyName": "disabled",
                    "propertyComment": "\n If true, the button will be disabled.\n"
                  },
                  "index": 1
                },
                {
                  "key": "node116",
                  "type": "PAGE_NODE_TYPE",
                  "props": {
                    "componentName": "usr.atom.SvgIcon",
                    "componentInstance": "svgIcon1",
                    "propertyName": "icon",
                    "propertyComment": "\n An icon placed as a child of the button.\n"
                  },
                  "index": 2,
                  "children": [
                    {
                      "key": "node117",
                      "type": "COMPONENT_PROPERTY_ONE_OF_TYPE",
                      "props": {
                        "propertyName": "color",
                        "propertyComment": "The color of the component. It supports those theme colors that make sense for this component.",
                        "propertyValue": "inherit",
                        "propertyValueVariants": [
                          {
                            "value": ""
                          },
                          {
                            "value": "inherit"
                          },
                          {
                            "value": "primary"
                          },
                          {
                            "value": "secondary"
                          },
                          {
                            "value": "action"
                          },
                          {
                            "value": "error"
                          },
                          {
                            "value": "disabled"
                          }
                        ]
                      },
                      "index": 0
                    },
                    {
                      "key": "node118",
                      "type": "COMPONENT_PROPERTY_ONE_OF_TYPE",
                      "props": {
                        "propertyName": "fontSize",
                        "propertyComment": "The fontSize applied to the icon. Defaults to 24px, but can be configure to inherit font size.",
                        "propertyValue": "inherit",
                        "propertyValueVariants": [
                          {
                            "value": ""
                          },
                          {
                            "value": "inherit"
                          },
                          {
                            "value": "default"
                          },
                          {
                            "value": "small"
                          },
                          {
                            "value": "large"
                          }
                        ]
                      },
                      "index": 1
                    },
                    {
                      "key": "node119",
                      "type": "COMPONENT_PROPERTY_ARRAY_OF_TYPE",
                      "props": {
                        "propertyName": "paths",
                        "propertyComment": "\n The svg paths array. Each item is as path tag with d attribute as item value.\n",
                        "defaultChildren": [
                          {
                            "type": "COMPONENT_PROPERTY_SHAPE_TYPE",
                            "props": {},
                            "children": [
                              {
                                "type": "COMPONENT_PROPERTY_STRING_TYPE",
                                "props": {
                                  "propertyName": "d",
                                  "propertyComment": "\n d attribute in the path tag\n"
                                }
                              },
                              {
                                "type": "COMPONENT_PROPERTY_STRING_TYPE",
                                "props": {
                                  "propertyName": "fill",
                                  "propertyComment": "\n fill attribute in the path tag\n"
                                }
                              }
                            ]
                          }
                        ]
                      },
                      "index": 2,
                      "children": [
                        {
                          "key": "node120",
                          "type": "COMPONENT_PROPERTY_SHAPE_TYPE",
                          "props": {},
                          "index": 0,
                          "children": [
                            {
                              "key": "node121",
                              "type": "COMPONENT_PROPERTY_STRING_TYPE",
                              "props": {
                                "propertyName": "d",
                                "propertyComment": "\n d attribute in the path tag\n",
                                "propertyValue": "M20 12l-1.41-1.41L13 16.17V4h-2v12.17l-5.58-5.59L4 12l8 8 8-8z"
                              },
                              "index": 0
                            },
                            {
                              "key": "node122",
                              "type": "COMPONENT_PROPERTY_STRING_TYPE",
                              "props": {
                                "propertyName": "fill",
                                "propertyComment": "\n fill attribute in the path tag\n"
                              },
                              "index": 1
                            }
                          ]
                        }
                      ]
                    },
                    {
                      "key": "node123",
                      "type": "COMPONENT_PROPERTY_STRING_TYPE",
                      "props": {
                        "propertyName": "viewBox",
                        "propertyComment": "\n Allows you to redefine what the coordinates without units mean inside an SVG element.\n For example, if the SVG element is 500 (width) by 200 (height), and you pass viewBox=\"0 0 50 20\",\n this means that the coordinates inside the SVG will go\n from the top left corner (0,0) to bottom right (50,20) and each unit will be worth 10px.\n",
                        "propertyValue": "0 0 24 24"
                      },
                      "index": 3
                    }
                  ]
                },
                {
                  "key": "node124",
                  "type": "COMPONENT_PROPERTY_STRING_TYPE",
                  "props": {
                    "propertyName": "label",
                    "propertyComment": "\n Button label text\n"
                  },
                  "index": 3
                },
                {
                  "key": "node125",
                  "type": "COMPONENT_PROPERTY_BOOL_TYPE",
                  "props": {
                    "propertyName": "loading",
                    "propertyComment": "\n If true the circular progress is shown and button is disabled.\n"
                  },
                  "index": 4
                },
                {
                  "key": "node126",
                  "type": "COMPONENT_PROPERTY_FUNCTION_TYPE",
                  "props": {
                    "propertyName": "onClick",
                    "propertyComment": "\n Triggered when the user clicks on the button. No output arguments for coupled functions.\n"
                  },
                  "index": 5
                },
                {
                  "key": "node127",
                  "type": "COMPONENT_PROPERTY_ONE_OF_TYPE",
                  "props": {
                    "propertyName": "size",
                    "propertyComment": "\n The size of the button. `small` is equivalent to the dense button styling.\n",
                    "propertyValueVariants": [
                      {
                        "value": ""
                      },
                      {
                        "value": "small"
                      },
                      {
                        "value": "medium"
                      },
                      {
                        "value": "large"
                      }
                    ]
                  },
                  "index": 6
                },
                {
                  "key": "node128",
                  "type": "COMPONENT_PROPERTY_ONE_OF_TYPE",
                  "props": {
                    "propertyName": "variant",
                    "propertyComment": "\n The variant to use.\n",
                    "propertyValueVariants": [
                      {
                        "value": ""
                      },
                      {
                        "value": "round"
                      },
                      {
                        "value": "extended"
                      }
                    ]
                  },
                  "index": 7
                }
              ]
            },
            {
              "key": "node129",
              "type": "COMPONENT_PROPERTY_NODE_TYPE",
              "props": {
                "propertyName": "applicationBarContent",
                "componentName": "__PlaceHolder",
                "propertyComment": "\n The application bar wrapper. Rendered only when there is a component instance in this node.\n"
              },
              "index": 1
            },
            {
              "key": "node130",
              "type": "COMPONENT_PROPERTY_ONE_OF_TYPE",
              "props": {
                "propertyName": "applicationBarElevation",
                "propertyComment": "Shadow depth of the application bar. It accepts values between 0 and 24 inclusive.",
                "propertyValueVariants": [
                  {
                    "value": "0"
                  },
                  {
                    "value": "1"
                  },
                  {
                    "value": "2"
                  },
                  {
                    "value": "3"
                  },
                  {
                    "value": "4"
                  },
                  {
                    "value": "5"
                  },
                  {
                    "value": "6"
                  },
                  {
                    "value": "7"
                  },
                  {
                    "value": "8"
                  },
                  {
                    "value": "9"
                  },
                  {
                    "value": "10"
                  },
                  {
                    "value": "11"
                  },
                  {
                    "value": "12"
                  },
                  {
                    "value": "13"
                  },
                  {
                    "value": "14"
                  },
                  {
                    "value": "15"
                  },
                  {
                    "value": "16"
                  },
                  {
                    "value": "17"
                  },
                  {
                    "value": "18"
                  },
                  {
                    "value": "19"
                  },
                  {
                    "value": "20"
                  },
                  {
                    "value": "21"
                  },
                  {
                    "value": "22"
                  },
                  {
                    "value": "23"
                  },
                  {
                    "value": "24"
                  }
                ]
              },
              "index": 2
            },
            {
              "key": "node131",
              "type": "COMPONENT_PROPERTY_SHAPE_TYPE",
              "props": {
                "propertyName": "applicationBarPalette",
                "propertyComment": "\n Sets the custom color of the application bar\n"
              },
              "index": 3,
              "children": [
                {
                  "key": "node132",
                  "type": "COMPONENT_PROPERTY_SHAPE_TYPE",
                  "props": {
                    "propertyName": "backgroundColor",
                    "externalProperties": "usr.layout.props.color.ColorTypes"
                  },
                  "index": 0,
                  "children": [
                    {
                      "key": "node133",
                      "type": "COMPONENT_PROPERTY_ONE_OF_TYPE",
                      "props": {
                        "propertyName": "colorHue",
                        "propertyComment": "A value from the collection of colors, i.e. hues",
                        "propertyValueVariants": [
                          {
                            "value": ""
                          },
                          {
                            "value": "primary.main"
                          },
                          {
                            "value": "primary.light"
                          },
                          {
                            "value": "primary.dark"
                          },
                          {
                            "value": "primary.contrastText"
                          },
                          {
                            "value": "secondary.main"
                          },
                          {
                            "value": "secondary.light"
                          },
                          {
                            "value": "secondary.dark"
                          },
                          {
                            "value": "secondary.contrastText"
                          },
                          {
                            "value": "error.main"
                          },
                          {
                            "value": "text.primary"
                          },
                          {
                            "value": "text.secondary"
                          },
                          {
                            "value": "text.disabled"
                          },
                          {
                            "value": "text.hint"
                          },
                          {
                            "value": "white"
                          },
                          {
                            "value": "black"
                          },
                          {
                            "value": "red"
                          },
                          {
                            "value": "pink"
                          },
                          {
                            "value": "purple"
                          },
                          {
                            "value": "deepPurple"
                          },
                          {
                            "value": "indigo"
                          },
                          {
                            "value": "blue"
                          },
                          {
                            "value": "lightBlue"
                          },
                          {
                            "value": "cyan"
                          },
                          {
                            "value": "teal"
                          },
                          {
                            "value": "green"
                          },
                          {
                            "value": "lightGreen"
                          },
                          {
                            "value": "lime"
                          },
                          {
                            "value": "yellow"
                          },
                          {
                            "value": "amber"
                          },
                          {
                            "value": "orange"
                          },
                          {
                            "value": "deepOrange"
                          },
                          {
                            "value": "brown"
                          },
                          {
                            "value": "grey"
                          },
                          {
                            "value": "blueGrey"
                          }
                        ]
                      },
                      "index": 0
                    },
                    {
                      "key": "node134",
                      "type": "COMPONENT_PROPERTY_ONE_OF_TYPE",
                      "props": {
                        "propertyName": "colorShade",
                        "propertyComment": "A value from the collection of colors shades",
                        "propertyValueVariants": [
                          {
                            "value": ""
                          },
                          {
                            "value": "50"
                          },
                          {
                            "value": "100"
                          },
                          {
                            "value": "200"
                          },
                          {
                            "value": "300"
                          },
                          {
                            "value": "400"
                          },
                          {
                            "value": "500"
                          },
                          {
                            "value": "600"
                          },
                          {
                            "value": "700"
                          },
                          {
                            "value": "800"
                          },
                          {
                            "value": "900"
                          },
                          {
                            "value": "A100"
                          },
                          {
                            "value": "A200"
                          },
                          {
                            "value": "A400"
                          },
                          {
                            "value": "A700"
                          }
                        ]
                      },
                      "index": 1
                    }
                  ]
                },
                {
                  "key": "node135",
                  "type": "COMPONENT_PROPERTY_SHAPE_TYPE",
                  "props": {
                    "propertyName": "color",
                    "externalProperties": "usr.layout.props.color.ColorTypes"
                  },
                  "index": 1,
                  "children": [
                    {
                      "key": "node136",
                      "type": "COMPONENT_PROPERTY_ONE_OF_TYPE",
                      "props": {
                        "propertyName": "colorHue",
                        "propertyComment": "A value from the collection of colors, i.e. hues",
                        "propertyValueVariants": [
                          {
                            "value": ""
                          },
                          {
                            "value": "primary.main"
                          },
                          {
                            "value": "primary.light"
                          },
                          {
                            "value": "primary.dark"
                          },
                          {
                            "value": "primary.contrastText"
                          },
                          {
                            "value": "secondary.main"
                          },
                          {
                            "value": "secondary.light"
                          },
                          {
                            "value": "secondary.dark"
                          },
                          {
                            "value": "secondary.contrastText"
                          },
                          {
                            "value": "error.main"
                          },
                          {
                            "value": "text.primary"
                          },
                          {
                            "value": "text.secondary"
                          },
                          {
                            "value": "text.disabled"
                          },
                          {
                            "value": "text.hint"
                          },
                          {
                            "value": "white"
                          },
                          {
                            "value": "black"
                          },
                          {
                            "value": "red"
                          },
                          {
                            "value": "pink"
                          },
                          {
                            "value": "purple"
                          },
                          {
                            "value": "deepPurple"
                          },
                          {
                            "value": "indigo"
                          },
                          {
                            "value": "blue"
                          },
                          {
                            "value": "lightBlue"
                          },
                          {
                            "value": "cyan"
                          },
                          {
                            "value": "teal"
                          },
                          {
                            "value": "green"
                          },
                          {
                            "value": "lightGreen"
                          },
                          {
                            "value": "lime"
                          },
                          {
                            "value": "yellow"
                          },
                          {
                            "value": "amber"
                          },
                          {
                            "value": "orange"
                          },
                          {
                            "value": "deepOrange"
                          },
                          {
                            "value": "brown"
                          },
                          {
                            "value": "grey"
                          },
                          {
                            "value": "blueGrey"
                          }
                        ]
                      },
                      "index": 0
                    },
                    {
                      "key": "node137",
                      "type": "COMPONENT_PROPERTY_ONE_OF_TYPE",
                      "props": {
                        "propertyName": "colorShade",
                        "propertyComment": "A value from the collection of colors shades",
                        "propertyValueVariants": [
                          {
                            "value": ""
                          },
                          {
                            "value": "50"
                          },
                          {
                            "value": "100"
                          },
                          {
                            "value": "200"
                          },
                          {
                            "value": "300"
                          },
                          {
                            "value": "400"
                          },
                          {
                            "value": "500"
                          },
                          {
                            "value": "600"
                          },
                          {
                            "value": "700"
                          },
                          {
                            "value": "800"
                          },
                          {
                            "value": "900"
                          },
                          {
                            "value": "A100"
                          },
                          {
                            "value": "A200"
                          },
                          {
                            "value": "A400"
                          },
                          {
                            "value": "A700"
                          }
                        ]
                      },
                      "index": 1
                    }
                  ]
                }
              ]
            },
            {
              "key": "node138",
              "type": "COMPONENT_PROPERTY_ARRAY_OF_TYPE",
              "props": {
                "propertyName": "hiddenComponents",
                "propertyComment": "\n An array of the hidden components.\n",
                "defaultChildren": [
                  {
                    "type": "COMPONENT_PROPERTY_NODE_TYPE",
                    "props": {
                      "componentName": "__PlaceHolder"
                    }
                  }
                ]
              },
              "index": 4,
              "children": []
            },
            {
              "key": "node139",
              "type": "COMPONENT_PROPERTY_STRING_TYPE",
              "props": {
                "propertyName": "htmlPageTitle",
                "propertyComment": "\n The page title shown in the browser window.\n"
              },
              "index": 5
            },
            {
              "key": "node140",
              "type": "COMPONENT_PROPERTY_ARRAY_OF_TYPE",
              "props": {
                "propertyName": "mainAreaChildren",
                "propertyComment": "\n Children in the main area\n",
                "defaultChildren": [
                  {
                    "type": "COMPONENT_PROPERTY_ELEMENT_TYPE",
                    "props": {
                      "componentName": "__PlaceHolder"
                    }
                  }
                ]
              },
              "index": 6,
              "children": [
                {
                  "key": "node141",
                  "type": "PAGE_COMPONENT_TYPE",
                  "props": {
                    "componentName": "usr.layout.Container",
                    "componentInstance": "container1"
                  },
                  "index": 0,
                  "children": [
                    {
                      "key": "node142",
                      "type": "PAGE_COMPONENT_TYPE",
                      "props": {
                        "componentName": "usr.layout.Grid",
                        "componentInstance": "grid1",
                        "propertyName": "content",
                        "propertyComment": "\n The content of the container\n"
                      },
                      "index": 0,
                      "children": [
                        {
                          "key": "node143",
                          "type": "COMPONENT_PROPERTY_ARRAY_OF_TYPE",
                          "props": {
                            "propertyName": "cells",
                            "propertyComment": "\n Contents of the cells.\n",
                            "defaultChildren": [
                              {
                                "type": "COMPONENT_PROPERTY_ELEMENT_TYPE",
                                "props": {
                                  "componentName": "__PlaceHolder"
                                }
                              }
                            ]
                          },
                          "index": 0,
                          "children": [
                            {
                              "key": "node144",
                              "type": "COMPONENT_PROPERTY_ELEMENT_TYPE",
                              "props": {
                                "componentName": "__PlaceHolder"
                              },
                              "index": 0
                            },
                            {
                              "key": "node145",
                              "type": "PAGE_COMPONENT_TYPE",
                              "props": {
                                "componentName": "usr.layout.Paper",
                                "componentInstance": "paper1"
                              },
                              "index": 1,
                              "children": [
                                {
                                  "key": "node146",
                                  "type": "COMPONENT_PROPERTY_ARRAY_OF_TYPE",
                                  "props": {
                                    "propertyName": "children",
                                    "propertyComment": "\n Children components\n",
                                    "defaultChildren": [
                                      {
                                        "type": "COMPONENT_PROPERTY_ELEMENT_TYPE",
                                        "props": {
                                          "componentName": "__PlaceHolder"
                                        }
                                      }
                                    ]
                                  },
                                  "index": 0,
                                  "children": [
                                    {
                                      "key": "node147",
                                      "type": "PAGE_COMPONENT_TYPE",
                                      "props": {
                                        "componentName": "usr.atom.Typography",
                                        "componentInstance": "typography1"
                                      },
                                      "index": 0,
                                      "children": [
                                        {
                                          "key": "node148",
                                          "type": "COMPONENT_PROPERTY_ONE_OF_TYPE",
                                          "props": {
                                            "propertyName": "align",
                                            "propertyComment": "Set the text-align on the component.",
                                            "propertyValueVariants": [
                                              {
                                                "value": "inherit"
                                              },
                                              {
                                                "value": "left"
                                              },
                                              {
                                                "value": "center"
                                              },
                                              {
                                                "value": "right"
                                              },
                                              {
                                                "value": "justify"
                                              }
                                            ],
                                            "propertyValue": "center"
                                          },
                                          "index": 0
                                        },
                                        {
                                          "key": "node149",
                                          "type": "COMPONENT_PROPERTY_ONE_OF_TYPE",
                                          "props": {
                                            "propertyName": "color",
                                            "propertyComment": "\n The color of the component. It supports those theme colors that make sense for this component.\n",
                                            "propertyValueVariants": [
                                              {
                                                "value": "initial"
                                              },
                                              {
                                                "value": "inherit"
                                              },
                                              {
                                                "value": "primary"
                                              },
                                              {
                                                "value": "secondary"
                                              },
                                              {
                                                "value": "textPrimary"
                                              },
                                              {
                                                "value": "textSecondary"
                                              },
                                              {
                                                "value": "error"
                                              }
                                            ],
                                            "propertyValue": "initial"
                                          },
                                          "index": 1
                                        },
                                        {
                                          "key": "node150",
                                          "type": "COMPONENT_PROPERTY_ONE_OF_TYPE",
                                          "props": {
                                            "propertyName": "display",
                                            "propertyComment": "Controls the display type",
                                            "propertyValueVariants": [
                                              {
                                                "value": "initial"
                                              },
                                              {
                                                "value": "block"
                                              },
                                              {
                                                "value": "inline"
                                              }
                                            ],
                                            "propertyValue": "initial"
                                          },
                                          "index": 2
                                        },
                                        {
                                          "key": "node151",
                                          "type": "COMPONENT_PROPERTY_BOOL_TYPE",
                                          "props": {
                                            "propertyName": "gutterBottom",
                                            "propertyComment": "If true, the text will have a bottom margin.",
                                            "propertyValue": false
                                          },
                                          "index": 3
                                        },
                                        {
                                          "key": "node152",
                                          "type": "COMPONENT_PROPERTY_BOOL_TYPE",
                                          "props": {
                                            "propertyName": "noWrap",
                                            "propertyComment": "\n If true, the text will not wrap, but instead will truncate with a text overflow ellipsis.\n Note that text overflow can only happen with block or inline-block level elements\n (the element needs to have a width in order to overflow).\n",
                                            "propertyValue": false
                                          },
                                          "index": 4
                                        },
                                        {
                                          "key": "node153",
                                          "type": "COMPONENT_PROPERTY_BOOL_TYPE",
                                          "props": {
                                            "propertyName": "paragraph",
                                            "propertyComment": "If true, the text will have a bottom margin.",
                                            "propertyValue": false
                                          },
                                          "index": 5
                                        },
                                        {
                                          "key": "node154",
                                          "type": "COMPONENT_PROPERTY_STRING_TYPE",
                                          "props": {
                                            "propertyName": "text",
                                            "propertyComment": "The content of the component.",
                                            "propertyValue": "Hello !!"
                                          },
                                          "index": 6
                                        },
                                        {
                                          "key": "node155",
                                          "type": "COMPONENT_PROPERTY_ONE_OF_TYPE",
                                          "props": {
                                            "propertyName": "variant",
                                            "propertyComment": "Applies the theme typography styles.",
                                            "propertyValueVariants": [
                                              {
                                                "value": "h1"
                                              },
                                              {
                                                "value": "h2"
                                              },
                                              {
                                                "value": "h3"
                                              },
                                              {
                                                "value": "h4"
                                              },
                                              {
                                                "value": "h5"
                                              },
                                              {
                                                "value": "h6"
                                              },
                                              {
                                                "value": "subtitle1"
                                              },
                                              {
                                                "value": "subtitle2"
                                              },
                                              {
                                                "value": "body1"
                                              },
                                              {
                                                "value": "body2"
                                              },
                                              {
                                                "value": "caption"
                                              },
                                              {
                                                "value": "button"
                                              },
                                              {
                                                "value": "overline"
                                              },
                                              {
                                                "value": "srOnly"
                                              },
                                              {
                                                "value": "inherit"
                                              }
                                            ],
                                            "propertyValue": "h4"
                                          },
                                          "index": 7
                                        }
                                      ]
                                    }
                                  ]
                                },
                                {
                                  "key": "node156",
                                  "type": "COMPONENT_PROPERTY_ONE_OF_TYPE",
                                  "props": {
                                    "propertyName": "elevation",
                                    "propertyComment": "\n Shadow depth, corresponds to dp in the spec. It accepts values between 0 and 24 inclusive.\n",
                                    "propertyValueVariants": [
                                      {
                                        "value": "0"
                                      },
                                      {
                                        "value": "1"
                                      },
                                      {
                                        "value": "2"
                                      },
                                      {
                                        "value": "3"
                                      },
                                      {
                                        "value": "4"
                                      },
                                      {
                                        "value": "5"
                                      },
                                      {
                                        "value": "6"
                                      },
                                      {
                                        "value": "7"
                                      },
                                      {
                                        "value": "8"
                                      },
                                      {
                                        "value": "9"
                                      },
                                      {
                                        "value": "10"
                                      },
                                      {
                                        "value": "11"
                                      },
                                      {
                                        "value": "12"
                                      },
                                      {
                                        "value": "13"
                                      },
                                      {
                                        "value": "14"
                                      },
                                      {
                                        "value": "15"
                                      },
                                      {
                                        "value": "16"
                                      },
                                      {
                                        "value": "17"
                                      },
                                      {
                                        "value": "18"
                                      },
                                      {
                                        "value": "19"
                                      },
                                      {
                                        "value": "20"
                                      },
                                      {
                                        "value": "21"
                                      },
                                      {
                                        "value": "22"
                                      },
                                      {
                                        "value": "23"
                                      },
                                      {
                                        "value": "24"
                                      }
                                    ],
                                    "propertyValue": "1"
                                  },
                                  "index": 1
                                },
                                {
                                  "key": "node157",
                                  "type": "COMPONENT_PROPERTY_SHAPE_TYPE",
                                  "props": {
                                    "propertyName": "paddingSpacing",
                                    "externalProperties": "usr.layout.props.spacingByTheme.PaddingSpacingByThemeTypes",
                                    "propertyComment": "\n A group of the padding properties.\n"
                                  },
                                  "index": 2,
                                  "children": [
                                    {
                                      "key": "node158",
                                      "type": "COMPONENT_PROPERTY_ONE_OF_TYPE",
                                      "props": {
                                        "propertyName": "padding",
                                        "propertyComment": "\n The property sets the padding area on all four sides of an element. The property is multiplied by the theme spacing value.\n",
                                        "propertyValueVariants": [
                                          {
                                            "value": "0"
                                          },
                                          {
                                            "value": "1"
                                          },
                                          {
                                            "value": "2"
                                          },
                                          {
                                            "value": "3"
                                          },
                                          {
                                            "value": "4"
                                          },
                                          {
                                            "value": "5"
                                          },
                                          {
                                            "value": "6"
                                          },
                                          {
                                            "value": "7"
                                          },
                                          {
                                            "value": "8"
                                          },
                                          {
                                            "value": "9"
                                          },
                                          {
                                            "value": "10"
                                          }
                                        ],
                                        "propertyValue": "2"
                                      },
                                      "index": 0
                                    },
                                    {
                                      "key": "node159",
                                      "type": "COMPONENT_PROPERTY_ONE_OF_TYPE",
                                      "props": {
                                        "propertyName": "paddingBottom",
                                        "propertyComment": "\n The property sets the padding area on the bottom of an element. The property is multiplied by the theme spacing value.\n",
                                        "propertyValueVariants": [
                                          {
                                            "value": "0"
                                          },
                                          {
                                            "value": "1"
                                          },
                                          {
                                            "value": "2"
                                          },
                                          {
                                            "value": "3"
                                          },
                                          {
                                            "value": "4"
                                          },
                                          {
                                            "value": "5"
                                          },
                                          {
                                            "value": "6"
                                          },
                                          {
                                            "value": "7"
                                          },
                                          {
                                            "value": "8"
                                          },
                                          {
                                            "value": "9"
                                          },
                                          {
                                            "value": "10"
                                          }
                                        ]
                                      },
                                      "index": 1
                                    },
                                    {
                                      "key": "node160",
                                      "type": "COMPONENT_PROPERTY_ONE_OF_TYPE",
                                      "props": {
                                        "propertyName": "paddingLeft",
                                        "propertyComment": "\n The property sets the padding area on the left side of an element. The property is multiplied by the theme spacing value.\n",
                                        "propertyValueVariants": [
                                          {
                                            "value": "0"
                                          },
                                          {
                                            "value": "1"
                                          },
                                          {
                                            "value": "2"
                                          },
                                          {
                                            "value": "3"
                                          },
                                          {
                                            "value": "4"
                                          },
                                          {
                                            "value": "5"
                                          },
                                          {
                                            "value": "6"
                                          },
                                          {
                                            "value": "7"
                                          },
                                          {
                                            "value": "8"
                                          },
                                          {
                                            "value": "9"
                                          },
                                          {
                                            "value": "10"
                                          }
                                        ]
                                      },
                                      "index": 2
                                    },
                                    {
                                      "key": "node161",
                                      "type": "COMPONENT_PROPERTY_ONE_OF_TYPE",
                                      "props": {
                                        "propertyName": "paddingRight",
                                        "propertyComment": "\n The property sets the padding area on the right side of an element. The property is multiplied by the theme spacing value.\n",
                                        "propertyValueVariants": [
                                          {
                                            "value": "0"
                                          },
                                          {
                                            "value": "1"
                                          },
                                          {
                                            "value": "2"
                                          },
                                          {
                                            "value": "3"
                                          },
                                          {
                                            "value": "4"
                                          },
                                          {
                                            "value": "5"
                                          },
                                          {
                                            "value": "6"
                                          },
                                          {
                                            "value": "7"
                                          },
                                          {
                                            "value": "8"
                                          },
                                          {
                                            "value": "9"
                                          },
                                          {
                                            "value": "10"
                                          }
                                        ]
                                      },
                                      "index": 3
                                    },
                                    {
                                      "key": "node162",
                                      "type": "COMPONENT_PROPERTY_ONE_OF_TYPE",
                                      "props": {
                                        "propertyName": "paddingTop",
                                        "propertyComment": "\n The property sets the padding area on the top of an element. The property is multiplied by the theme spacing value.\n",
                                        "propertyValueVariants": [
                                          {
                                            "value": "0"
                                          },
                                          {
                                            "value": "1"
                                          },
                                          {
                                            "value": "2"
                                          },
                                          {
                                            "value": "3"
                                          },
                                          {
                                            "value": "4"
                                          },
                                          {
                                            "value": "5"
                                          },
                                          {
                                            "value": "6"
                                          },
                                          {
                                            "value": "7"
                                          },
                                          {
                                            "value": "8"
                                          },
                                          {
                                            "value": "9"
                                          },
                                          {
                                            "value": "10"
                                          }
                                        ]
                                      },
                                      "index": 4
                                    }
                                  ]
                                },
                                {
                                  "key": "node163",
                                  "type": "COMPONENT_PROPERTY_SHAPE_TYPE",
                                  "props": {
                                    "propertyName": "palette",
                                    "propertyComment": "Sets the color of the component"
                                  },
                                  "index": 3,
                                  "children": [
                                    {
                                      "key": "node164",
                                      "type": "COMPONENT_PROPERTY_SHAPE_TYPE",
                                      "props": {
                                        "propertyName": "backgroundColor",
                                        "externalProperties": "usr.layout.props.color.ColorTypes"
                                      },
                                      "index": 0,
                                      "children": [
                                        {
                                          "key": "node165",
                                          "type": "COMPONENT_PROPERTY_ONE_OF_TYPE",
                                          "props": {
                                            "propertyName": "colorHue",
                                            "propertyComment": "A value from the collection of colors, i.e. hues",
                                            "propertyValueVariants": [
                                              {
                                                "value": ""
                                              },
                                              {
                                                "value": "primary.main"
                                              },
                                              {
                                                "value": "primary.light"
                                              },
                                              {
                                                "value": "primary.dark"
                                              },
                                              {
                                                "value": "primary.contrastText"
                                              },
                                              {
                                                "value": "secondary.main"
                                              },
                                              {
                                                "value": "secondary.light"
                                              },
                                              {
                                                "value": "secondary.dark"
                                              },
                                              {
                                                "value": "secondary.contrastText"
                                              },
                                              {
                                                "value": "error.main"
                                              },
                                              {
                                                "value": "text.primary"
                                              },
                                              {
                                                "value": "text.secondary"
                                              },
                                              {
                                                "value": "text.disabled"
                                              },
                                              {
                                                "value": "text.hint"
                                              },
                                              {
                                                "value": "white"
                                              },
                                              {
                                                "value": "black"
                                              },
                                              {
                                                "value": "red"
                                              },
                                              {
                                                "value": "pink"
                                              },
                                              {
                                                "value": "purple"
                                              },
                                              {
                                                "value": "deepPurple"
                                              },
                                              {
                                                "value": "indigo"
                                              },
                                              {
                                                "value": "blue"
                                              },
                                              {
                                                "value": "lightBlue"
                                              },
                                              {
                                                "value": "cyan"
                                              },
                                              {
                                                "value": "teal"
                                              },
                                              {
                                                "value": "green"
                                              },
                                              {
                                                "value": "lightGreen"
                                              },
                                              {
                                                "value": "lime"
                                              },
                                              {
                                                "value": "yellow"
                                              },
                                              {
                                                "value": "amber"
                                              },
                                              {
                                                "value": "orange"
                                              },
                                              {
                                                "value": "deepOrange"
                                              },
                                              {
                                                "value": "brown"
                                              },
                                              {
                                                "value": "grey"
                                              },
                                              {
                                                "value": "blueGrey"
                                              }
                                            ]
                                          },
                                          "index": 0
                                        },
                                        {
                                          "key": "node166",
                                          "type": "COMPONENT_PROPERTY_ONE_OF_TYPE",
                                          "props": {
                                            "propertyName": "colorShade",
                                            "propertyComment": "A value from the collection of colors shades",
                                            "propertyValueVariants": [
                                              {
                                                "value": ""
                                              },
                                              {
                                                "value": "50"
                                              },
                                              {
                                                "value": "100"
                                              },
                                              {
                                                "value": "200"
                                              },
                                              {
                                                "value": "300"
                                              },
                                              {
                                                "value": "400"
                                              },
                                              {
                                                "value": "500"
                                              },
                                              {
                                                "value": "600"
                                              },
                                              {
                                                "value": "700"
                                              },
                                              {
                                                "value": "800"
                                              },
                                              {
                                                "value": "900"
                                              },
                                              {
                                                "value": "A100"
                                              },
                                              {
                                                "value": "A200"
                                              },
                                              {
                                                "value": "A400"
                                              },
                                              {
                                                "value": "A700"
                                              }
                                            ]
                                          },
                                          "index": 1
                                        }
                                      ]
                                    },
                                    {
                                      "key": "node167",
                                      "type": "COMPONENT_PROPERTY_SHAPE_TYPE",
                                      "props": {
                                        "propertyName": "color",
                                        "externalProperties": "usr.layout.props.color.ColorTypes"
                                      },
                                      "index": 1,
                                      "children": [
                                        {
                                          "key": "node168",
                                          "type": "COMPONENT_PROPERTY_ONE_OF_TYPE",
                                          "props": {
                                            "propertyName": "colorHue",
                                            "propertyComment": "A value from the collection of colors, i.e. hues",
                                            "propertyValueVariants": [
                                              {
                                                "value": ""
                                              },
                                              {
                                                "value": "primary.main"
                                              },
                                              {
                                                "value": "primary.light"
                                              },
                                              {
                                                "value": "primary.dark"
                                              },
                                              {
                                                "value": "primary.contrastText"
                                              },
                                              {
                                                "value": "secondary.main"
                                              },
                                              {
                                                "value": "secondary.light"
                                              },
                                              {
                                                "value": "secondary.dark"
                                              },
                                              {
                                                "value": "secondary.contrastText"
                                              },
                                              {
                                                "value": "error.main"
                                              },
                                              {
                                                "value": "text.primary"
                                              },
                                              {
                                                "value": "text.secondary"
                                              },
                                              {
                                                "value": "text.disabled"
                                              },
                                              {
                                                "value": "text.hint"
                                              },
                                              {
                                                "value": "white"
                                              },
                                              {
                                                "value": "black"
                                              },
                                              {
                                                "value": "red"
                                              },
                                              {
                                                "value": "pink"
                                              },
                                              {
                                                "value": "purple"
                                              },
                                              {
                                                "value": "deepPurple"
                                              },
                                              {
                                                "value": "indigo"
                                              },
                                              {
                                                "value": "blue"
                                              },
                                              {
                                                "value": "lightBlue"
                                              },
                                              {
                                                "value": "cyan"
                                              },
                                              {
                                                "value": "teal"
                                              },
                                              {
                                                "value": "green"
                                              },
                                              {
                                                "value": "lightGreen"
                                              },
                                              {
                                                "value": "lime"
                                              },
                                              {
                                                "value": "yellow"
                                              },
                                              {
                                                "value": "amber"
                                              },
                                              {
                                                "value": "orange"
                                              },
                                              {
                                                "value": "deepOrange"
                                              },
                                              {
                                                "value": "brown"
                                              },
                                              {
                                                "value": "grey"
                                              },
                                              {
                                                "value": "blueGrey"
                                              }
                                            ]
                                          },
                                          "index": 0
                                        },
                                        {
                                          "key": "node169",
                                          "type": "COMPONENT_PROPERTY_ONE_OF_TYPE",
                                          "props": {
                                            "propertyName": "colorShade",
                                            "propertyComment": "A value from the collection of colors shades",
                                            "propertyValueVariants": [
                                              {
                                                "value": ""
                                              },
                                              {
                                                "value": "50"
                                              },
                                              {
                                                "value": "100"
                                              },
                                              {
                                                "value": "200"
                                              },
                                              {
                                                "value": "300"
                                              },
                                              {
                                                "value": "400"
                                              },
                                              {
                                                "value": "500"
                                              },
                                              {
                                                "value": "600"
                                              },
                                              {
                                                "value": "700"
                                              },
                                              {
                                                "value": "800"
                                              },
                                              {
                                                "value": "900"
                                              },
                                              {
                                                "value": "A100"
                                              },
                                              {
                                                "value": "A200"
                                              },
                                              {
                                                "value": "A400"
                                              },
                                              {
                                                "value": "A700"
                                              }
                                            ]
                                          },
                                          "index": 1
                                        }
                                      ]
                                    }
                                  ]
                                },
                                {
                                  "key": "node170",
                                  "type": "COMPONENT_PROPERTY_BOOL_TYPE",
                                  "props": {
                                    "propertyName": "square",
                                    "propertyComment": "\n If true, rounded corners are disabled.\n",
                                    "propertyValue": false
                                  },
                                  "index": 4
                                },
                                {
                                  "key": "node171",
                                  "type": "COMPONENT_PROPERTY_ONE_OF_TYPE",
                                  "props": {
                                    "propertyName": "variant",
                                    "propertyComment": "\n The variant to use.\n",
                                    "propertyValueVariants": [
                                      {
                                        "value": "elevation"
                                      },
                                      {
                                        "value": "outlined"
                                      }
                                    ],
                                    "propertyValue": "elevation"
                                  },
                                  "index": 5
                                }
                              ]
                            },
                            {
                              "key": "node200",
                              "type": "PAGE_COMPONENT_TYPE",
                              "props": {
                                "componentName": "usr.layout.Paper",
                                "componentInstance": "paper1"
                              },
                              "index": 2,
                              "children": [
                                {
                                  "key": "node201",
                                  "type": "COMPONENT_PROPERTY_ARRAY_OF_TYPE",
                                  "props": {
                                    "propertyName": "children",
                                    "propertyComment": "\n Children components\n",
                                    "defaultChildren": [
                                      {
                                        "type": "COMPONENT_PROPERTY_ELEMENT_TYPE",
                                        "props": {
                                          "componentName": "__PlaceHolder"
                                        }
                                      }
                                    ]
                                  },
                                  "index": 0,
                                  "children": [
                                    {
                                      "key": "node219",
                                      "type": "PAGE_COMPONENT_TYPE",
                                      "props": {
                                        "componentName": "usr.todo.NewNoteForm",
                                        "componentInstance": "newNoteForm2"
                                      },
                                      "index": 0,
                                      "children": [
                                        {
                                          "key": "node220",
                                          "type": "COMPONENT_PROPERTY_STRING_TYPE",
                                          "props": {
                                            "propertyName": "helperText",
                                            "propertyComment": "\n A text placed under the input element. Used for a usage hint.\n",
                                            "propertyValue": "Enter a note text"
                                          },
                                          "index": 0
                                        },
                                        {
                                          "key": "node221",
                                          "type": "COMPONENT_PROPERTY_BOOL_TYPE",
                                          "props": {
                                            "propertyName": "isError",
                                            "propertyComment": "\n An indicator of the error. Set tru to show the error.\n",
                                            "propertyValue": false
                                          },
                                          "index": 1
                                        },
                                        {
                                          "key": "node222",
                                          "type": "COMPONENT_PROPERTY_STRING_TYPE",
                                          "props": {
                                            "propertyName": "label",
                                            "propertyComment": "\n Label of the input multi text field\n",
                                            "propertyValue": "Add Note"
                                          },
                                          "index": 2
                                        },
                                        {
                                          "key": "node223",
                                          "type": "COMPONENT_PROPERTY_FUNCTION_TYPE",
                                          "props": {
                                            "propertyName": "onCancel",
                                            "propertyComment": "\n Triggered when the user clicks `Cancel` button. No output arguments for coupled functions.\n"
                                          },
                                          "index": 3
                                        },
                                        {
                                          "key": "node224",
                                          "type": "COMPONENT_PROPERTY_FUNCTION_TYPE",
                                          "props": {
                                            "propertyName": "onSaveNote",
                                            "propertyComment": "\n Triggered when the user clicks `Save` button. Output argument: `textValue` {string}\n"
                                          },
                                          "index": 4
                                        },
                                        {
                                          "key": "node225",
                                          "type": "COMPONENT_PROPERTY_NUMBER_TYPE",
                                          "props": {
                                            "propertyName": "rowsNumber",
                                            "propertyComment": "\n Rows number in the text area element\n",
                                            "propertyValue": 4
                                          },
                                          "index": 5
                                        },
                                        {
                                          "key": "node226",
                                          "type": "COMPONENT_PROPERTY_ONE_OF_TYPE",
                                          "props": {
                                            "propertyName": "spacing",
                                            "propertyComment": "\n Defines the space between the cells.\n",
                                            "propertyValue": "1",
                                            "propertyValueVariants": [
                                              {
                                                "value": "0"
                                              },
                                              {
                                                "value": "1"
                                              },
                                              {
                                                "value": "2"
                                              },
                                              {
                                                "value": "3"
                                              },
                                              {
                                                "value": "4"
                                              },
                                              {
                                                "value": "5"
                                              },
                                              {
                                                "value": "6"
                                              },
                                              {
                                                "value": "7"
                                              },
                                              {
                                                "value": "8"
                                              },
                                              {
                                                "value": "9"
                                              },
                                              {
                                                "value": "10"
                                              }
                                            ]
                                          },
                                          "index": 6
                                        }
                                      ]
                                    }
                                  ]
                                },
                                {
                                  "key": "node227",
                                  "type": "COMPONENT_PROPERTY_ONE_OF_TYPE",
                                  "props": {
                                    "propertyName": "elevation",
                                    "propertyComment": "\n Shadow depth, corresponds to dp in the spec. It accepts values between 0 and 24 inclusive.\n",
                                    "propertyValue": "1",
                                    "propertyValueVariants": [
                                      {
                                        "value": "0"
                                      },
                                      {
                                        "value": "1"
                                      },
                                      {
                                        "value": "2"
                                      },
                                      {
                                        "value": "3"
                                      },
                                      {
                                        "value": "4"
                                      },
                                      {
                                        "value": "5"
                                      },
                                      {
                                        "value": "6"
                                      },
                                      {
                                        "value": "7"
                                      },
                                      {
                                        "value": "8"
                                      },
                                      {
                                        "value": "9"
                                      },
                                      {
                                        "value": "10"
                                      },
                                      {
                                        "value": "11"
                                      },
                                      {
                                        "value": "12"
                                      },
                                      {
                                        "value": "13"
                                      },
                                      {
                                        "value": "14"
                                      },
                                      {
                                        "value": "15"
                                      },
                                      {
                                        "value": "16"
                                      },
                                      {
                                        "value": "17"
                                      },
                                      {
                                        "value": "18"
                                      },
                                      {
                                        "value": "19"
                                      },
                                      {
                                        "value": "20"
                                      },
                                      {
                                        "value": "21"
                                      },
                                      {
                                        "value": "22"
                                      },
                                      {
                                        "value": "23"
                                      },
                                      {
                                        "value": "24"
                                      }
                                    ]
                                  },
                                  "index": 1
                                },
                                {
                                  "key": "node228",
                                  "type": "COMPONENT_PROPERTY_SHAPE_TYPE",
                                  "props": {
                                    "propertyName": "paddingSpacing",
                                    "propertyComment": "\n A group of the padding properties.\n",
                                    "externalProperties": "usr.layout.props.spacingByTheme.PaddingSpacingByThemeTypes"
                                  },
                                  "index": 2,
                                  "children": [
                                    {
                                      "key": "node229",
                                      "type": "COMPONENT_PROPERTY_ONE_OF_TYPE",
                                      "props": {
                                        "propertyName": "padding",
                                        "propertyComment": "\n The property sets the padding area on all four sides of an element. The property is multiplied by the theme spacing value.\n",
                                        "propertyValue": "2",
                                        "propertyValueVariants": [
                                          {
                                            "value": "0"
                                          },
                                          {
                                            "value": "1"
                                          },
                                          {
                                            "value": "2"
                                          },
                                          {
                                            "value": "3"
                                          },
                                          {
                                            "value": "4"
                                          },
                                          {
                                            "value": "5"
                                          },
                                          {
                                            "value": "6"
                                          },
                                          {
                                            "value": "7"
                                          },
                                          {
                                            "value": "8"
                                          },
                                          {
                                            "value": "9"
                                          },
                                          {
                                            "value": "10"
                                          }
                                        ]
                                      },
                                      "index": 0
                                    },
                                    {
                                      "key": "node230",
                                      "type": "COMPONENT_PROPERTY_ONE_OF_TYPE",
                                      "props": {
                                        "propertyName": "paddingBottom",
                                        "propertyComment": "\n The property sets the padding area on the bottom of an element. The property is multiplied by the theme spacing value.\n",
                                        "propertyValueVariants": [
                                          {
                                            "value": "0"
                                          },
                                          {
                                            "value": "1"
                                          },
                                          {
                                            "value": "2"
                                          },
                                          {
                                            "value": "3"
                                          },
                                          {
                                            "value": "4"
                                          },
                                          {
                                            "value": "5"
                                          },
                                          {
                                            "value": "6"
                                          },
                                          {
                                            "value": "7"
                                          },
                                          {
                                            "value": "8"
                                          },
                                          {
                                            "value": "9"
                                          },
                                          {
                                            "value": "10"
                                          }
                                        ]
                                      },
                                      "index": 1
                                    },
                                    {
                                      "key": "node231",
                                      "type": "COMPONENT_PROPERTY_ONE_OF_TYPE",
                                      "props": {
                                        "propertyName": "paddingLeft",
                                        "propertyComment": "\n The property sets the padding area on the left side of an element. The property is multiplied by the theme spacing value.\n",
                                        "propertyValueVariants": [
                                          {
                                            "value": "0"
                                          },
                                          {
                                            "value": "1"
                                          },
                                          {
                                            "value": "2"
                                          },
                                          {
                                            "value": "3"
                                          },
                                          {
                                            "value": "4"
                                          },
                                          {
                                            "value": "5"
                                          },
                                          {
                                            "value": "6"
                                          },
                                          {
                                            "value": "7"
                                          },
                                          {
                                            "value": "8"
                                          },
                                          {
                                            "value": "9"
                                          },
                                          {
                                            "value": "10"
                                          }
                                        ]
                                      },
                                      "index": 2
                                    },
                                    {
                                      "key": "node232",
                                      "type": "COMPONENT_PROPERTY_ONE_OF_TYPE",
                                      "props": {
                                        "propertyName": "paddingRight",
                                        "propertyComment": "\n The property sets the padding area on the right side of an element. The property is multiplied by the theme spacing value.\n",
                                        "propertyValueVariants": [
                                          {
                                            "value": "0"
                                          },
                                          {
                                            "value": "1"
                                          },
                                          {
                                            "value": "2"
                                          },
                                          {
                                            "value": "3"
                                          },
                                          {
                                            "value": "4"
                                          },
                                          {
                                            "value": "5"
                                          },
                                          {
                                            "value": "6"
                                          },
                                          {
                                            "value": "7"
                                          },
                                          {
                                            "value": "8"
                                          },
                                          {
                                            "value": "9"
                                          },
                                          {
                                            "value": "10"
                                          }
                                        ]
                                      },
                                      "index": 3
                                    },
                                    {
                                      "key": "node233",
                                      "type": "COMPONENT_PROPERTY_ONE_OF_TYPE",
                                      "props": {
                                        "propertyName": "paddingTop",
                                        "propertyComment": "\n The property sets the padding area on the top of an element. The property is multiplied by the theme spacing value.\n",
                                        "propertyValueVariants": [
                                          {
                                            "value": "0"
                                          },
                                          {
                                            "value": "1"
                                          },
                                          {
                                            "value": "2"
                                          },
                                          {
                                            "value": "3"
                                          },
                                          {
                                            "value": "4"
                                          },
                                          {
                                            "value": "5"
                                          },
                                          {
                                            "value": "6"
                                          },
                                          {
                                            "value": "7"
                                          },
                                          {
                                            "value": "8"
                                          },
                                          {
                                            "value": "9"
                                          },
                                          {
                                            "value": "10"
                                          }
                                        ]
                                      },
                                      "index": 4
                                    }
                                  ]
                                },
                                {
                                  "key": "node234",
                                  "type": "COMPONENT_PROPERTY_SHAPE_TYPE",
                                  "props": {
                                    "propertyName": "palette",
                                    "propertyComment": "Sets the color of the component"
                                  },
                                  "index": 3,
                                  "children": [
                                    {
                                      "key": "node235",
                                      "type": "COMPONENT_PROPERTY_SHAPE_TYPE",
                                      "props": {
                                        "propertyName": "backgroundColor",
                                        "externalProperties": "usr.layout.props.color.ColorTypes"
                                      },
                                      "index": 0,
                                      "children": [
                                        {
                                          "key": "node236",
                                          "type": "COMPONENT_PROPERTY_ONE_OF_TYPE",
                                          "props": {
                                            "propertyName": "colorHue",
                                            "propertyComment": "A value from the collection of colors, i.e. hues",
                                            "propertyValueVariants": [
                                              {
                                                "value": ""
                                              },
                                              {
                                                "value": "primary.main"
                                              },
                                              {
                                                "value": "primary.light"
                                              },
                                              {
                                                "value": "primary.dark"
                                              },
                                              {
                                                "value": "primary.contrastText"
                                              },
                                              {
                                                "value": "secondary.main"
                                              },
                                              {
                                                "value": "secondary.light"
                                              },
                                              {
                                                "value": "secondary.dark"
                                              },
                                              {
                                                "value": "secondary.contrastText"
                                              },
                                              {
                                                "value": "error.main"
                                              },
                                              {
                                                "value": "text.primary"
                                              },
                                              {
                                                "value": "text.secondary"
                                              },
                                              {
                                                "value": "text.disabled"
                                              },
                                              {
                                                "value": "text.hint"
                                              },
                                              {
                                                "value": "white"
                                              },
                                              {
                                                "value": "black"
                                              },
                                              {
                                                "value": "red"
                                              },
                                              {
                                                "value": "pink"
                                              },
                                              {
                                                "value": "purple"
                                              },
                                              {
                                                "value": "deepPurple"
                                              },
                                              {
                                                "value": "indigo"
                                              },
                                              {
                                                "value": "blue"
                                              },
                                              {
                                                "value": "lightBlue"
                                              },
                                              {
                                                "value": "cyan"
                                              },
                                              {
                                                "value": "teal"
                                              },
                                              {
                                                "value": "green"
                                              },
                                              {
                                                "value": "lightGreen"
                                              },
                                              {
                                                "value": "lime"
                                              },
                                              {
                                                "value": "yellow"
                                              },
                                              {
                                                "value": "amber"
                                              },
                                              {
                                                "value": "orange"
                                              },
                                              {
                                                "value": "deepOrange"
                                              },
                                              {
                                                "value": "brown"
                                              },
                                              {
                                                "value": "grey"
                                              },
                                              {
                                                "value": "blueGrey"
                                              }
                                            ]
                                          },
                                          "index": 0
                                        },
                                        {
                                          "key": "node237",
                                          "type": "COMPONENT_PROPERTY_ONE_OF_TYPE",
                                          "props": {
                                            "propertyName": "colorShade",
                                            "propertyComment": "A value from the collection of colors shades",
                                            "propertyValueVariants": [
                                              {
                                                "value": ""
                                              },
                                              {
                                                "value": "50"
                                              },
                                              {
                                                "value": "100"
                                              },
                                              {
                                                "value": "200"
                                              },
                                              {
                                                "value": "300"
                                              },
                                              {
                                                "value": "400"
                                              },
                                              {
                                                "value": "500"
                                              },
                                              {
                                                "value": "600"
                                              },
                                              {
                                                "value": "700"
                                              },
                                              {
                                                "value": "800"
                                              },
                                              {
                                                "value": "900"
                                              },
                                              {
                                                "value": "A100"
                                              },
                                              {
                                                "value": "A200"
                                              },
                                              {
                                                "value": "A400"
                                              },
                                              {
                                                "value": "A700"
                                              }
                                            ]
                                          },
                                          "index": 1
                                        }
                                      ]
                                    },
                                    {
                                      "key": "node238",
                                      "type": "COMPONENT_PROPERTY_SHAPE_TYPE",
                                      "props": {
                                        "propertyName": "color",
                                        "externalProperties": "usr.layout.props.color.ColorTypes"
                                      },
                                      "index": 1,
                                      "children": [
                                        {
                                          "key": "node239",
                                          "type": "COMPONENT_PROPERTY_ONE_OF_TYPE",
                                          "props": {
                                            "propertyName": "colorHue",
                                            "propertyComment": "A value from the collection of colors, i.e. hues",
                                            "propertyValueVariants": [
                                              {
                                                "value": ""
                                              },
                                              {
                                                "value": "primary.main"
                                              },
                                              {
                                                "value": "primary.light"
                                              },
                                              {
                                                "value": "primary.dark"
                                              },
                                              {
                                                "value": "primary.contrastText"
                                              },
                                              {
                                                "value": "secondary.main"
                                              },
                                              {
                                                "value": "secondary.light"
                                              },
                                              {
                                                "value": "secondary.dark"
                                              },
                                              {
                                                "value": "secondary.contrastText"
                                              },
                                              {
                                                "value": "error.main"
                                              },
                                              {
                                                "value": "text.primary"
                                              },
                                              {
                                                "value": "text.secondary"
                                              },
                                              {
                                                "value": "text.disabled"
                                              },
                                              {
                                                "value": "text.hint"
                                              },
                                              {
                                                "value": "white"
                                              },
                                              {
                                                "value": "black"
                                              },
                                              {
                                                "value": "red"
                                              },
                                              {
                                                "value": "pink"
                                              },
                                              {
                                                "value": "purple"
                                              },
                                              {
                                                "value": "deepPurple"
                                              },
                                              {
                                                "value": "indigo"
                                              },
                                              {
                                                "value": "blue"
                                              },
                                              {
                                                "value": "lightBlue"
                                              },
                                              {
                                                "value": "cyan"
                                              },
                                              {
                                                "value": "teal"
                                              },
                                              {
                                                "value": "green"
                                              },
                                              {
                                                "value": "lightGreen"
                                              },
                                              {
                                                "value": "lime"
                                              },
                                              {
                                                "value": "yellow"
                                              },
                                              {
                                                "value": "amber"
                                              },
                                              {
                                                "value": "orange"
                                              },
                                              {
                                                "value": "deepOrange"
                                              },
                                              {
                                                "value": "brown"
                                              },
                                              {
                                                "value": "grey"
                                              },
                                              {
                                                "value": "blueGrey"
                                              }
                                            ]
                                          },
                                          "index": 0
                                        },
                                        {
                                          "key": "node240",
                                          "type": "COMPONENT_PROPERTY_ONE_OF_TYPE",
                                          "props": {
                                            "propertyName": "colorShade",
                                            "propertyComment": "A value from the collection of colors shades",
                                            "propertyValueVariants": [
                                              {
                                                "value": ""
                                              },
                                              {
                                                "value": "50"
                                              },
                                              {
                                                "value": "100"
                                              },
                                              {
                                                "value": "200"
                                              },
                                              {
                                                "value": "300"
                                              },
                                              {
                                                "value": "400"
                                              },
                                              {
                                                "value": "500"
                                              },
                                              {
                                                "value": "600"
                                              },
                                              {
                                                "value": "700"
                                              },
                                              {
                                                "value": "800"
                                              },
                                              {
                                                "value": "900"
                                              },
                                              {
                                                "value": "A100"
                                              },
                                              {
                                                "value": "A200"
                                              },
                                              {
                                                "value": "A400"
                                              },
                                              {
                                                "value": "A700"
                                              }
                                            ]
                                          },
                                          "index": 1
                                        }
                                      ]
                                    }
                                  ]
                                },
                                {
                                  "key": "node241",
                                  "type": "COMPONENT_PROPERTY_BOOL_TYPE",
                                  "props": {
                                    "propertyName": "square",
                                    "propertyComment": "\n If true, rounded corners are disabled.\n",
                                    "propertyValue": false
                                  },
                                  "index": 4
                                },
                                {
                                  "key": "node242",
                                  "type": "COMPONENT_PROPERTY_ONE_OF_TYPE",
                                  "props": {
                                    "propertyName": "variant",
                                    "propertyComment": "\n The variant to use.\n",
                                    "propertyValue": "elevation",
                                    "propertyValueVariants": [
                                      {
                                        "value": "elevation"
                                      },
                                      {
                                        "value": "outlined"
                                      }
                                    ]
                                  },
                                  "index": 5
                                }
                              ]
                            }
                          ]
                        },
                        {
                          "key": "node243",
                          "type": "COMPONENT_PROPERTY_SHAPE_TYPE",
                          "props": {
                            "propertyName": "grid",
                            "externalProperties": "usr.layout.Grid.GridContainerTypes",
                            "propertyComment": "Common grid properties."
                          },
                          "index": 1,
                          "children": [
                            {
                              "key": "node244",
                              "type": "COMPONENT_PROPERTY_ONE_OF_TYPE",
                              "props": {
                                "propertyName": "direction",
                                "propertyComment": "Defines the direction of the cells in the grid",
                                "propertyValueVariants": [
                                  {
                                    "value": "row"
                                  },
                                  {
                                    "value": "column"
                                  }
                                ],
                                "propertyValue": "column"
                              },
                              "index": 0
                            },
                            {
                              "key": "node245",
                              "type": "COMPONENT_PROPERTY_ONE_OF_TYPE",
                              "props": {
                                "propertyName": "spacing",
                                "propertyComment": "\n Defines the space between the cells. The property is multiplied by the theme spacing value.\n",
                                "propertyValueVariants": [
                                  {
                                    "value": "0"
                                  },
                                  {
                                    "value": "1"
                                  },
                                  {
                                    "value": "2"
                                  },
                                  {
                                    "value": "3"
                                  },
                                  {
                                    "value": "4"
                                  },
                                  {
                                    "value": "5"
                                  },
                                  {
                                    "value": "6"
                                  },
                                  {
                                    "value": "7"
                                  },
                                  {
                                    "value": "8"
                                  },
                                  {
                                    "value": "9"
                                  },
                                  {
                                    "value": "10"
                                  }
                                ],
                                "propertyValue": "4"
                              },
                              "index": 1
                            }
                          ]
                        }
                      ]
                    },
                    {
                      "key": "node246",
                      "type": "COMPONENT_PROPERTY_BOOL_TYPE",
                      "props": {
                        "propertyName": "disableMaxWidth",
                        "propertyComment": "\n Set disableMaxWidth to true to disable maxWidth.\n",
                        "propertyValue": false
                      },
                      "index": 1
                    },
                    {
                      "key": "node247",
                      "type": "COMPONENT_PROPERTY_BOOL_TYPE",
                      "props": {
                        "propertyName": "fixed",
                        "propertyComment": "\n Set the max-width to match the min-width of the current breakpoint.\n This is useful if you'd prefer to design for a fixed set of sizes instead of trying to\n accommodate a fully fluid viewport.\n It's fluid by default.\n",
                        "propertyValue": false
                      },
                      "index": 2
                    },
                    {
                      "key": "node248",
                      "type": "COMPONENT_PROPERTY_ONE_OF_TYPE",
                      "props": {
                        "propertyName": "maxWidth",
                        "propertyComment": "\n Determine the max-width of the container.\n The container width grows with the size of the screen.\n Set disableMaxWidth to true to disable maxWidth.\n",
                        "propertyValueVariants": [
                          {
                            "value": "xs"
                          },
                          {
                            "value": "sm"
                          },
                          {
                            "value": "md"
                          },
                          {
                            "value": "lg"
                          },
                          {
                            "value": "xl"
                          }
                        ],
                        "propertyValue": "lg"
                      },
                      "index": 3
                    }
                  ]
                }
              ]
            },
            {
              "key": "node249",
              "type": "COMPONENT_PROPERTY_SHAPE_TYPE",
              "props": {
                "propertyName": "mainAreaPadding",
                "externalProperties": "usr.layout.props.padding.PaddingTypes",
                "propertyComment": "\n A group of the padding properties of the main area.\n"
              },
              "index": 7,
              "children": [
                {
                  "key": "node250",
                  "type": "COMPONENT_PROPERTY_STRING_TYPE",
                  "props": {
                    "propertyName": "padding",
                    "propertyComment": "\n The property sets the padding area on all four sides of an element.\n"
                  },
                  "index": 0
                },
                {
                  "key": "node251",
                  "type": "COMPONENT_PROPERTY_STRING_TYPE",
                  "props": {
                    "propertyName": "paddingBottom",
                    "propertyComment": "\n The property sets the padding area on the bottom of an element.\n"
                  },
                  "index": 1
                },
                {
                  "key": "node252",
                  "type": "COMPONENT_PROPERTY_STRING_TYPE",
                  "props": {
                    "propertyName": "paddingLeft",
                    "propertyComment": "\n The property sets the padding area on the left side of an element.\n"
                  },
                  "index": 2
                },
                {
                  "key": "node253",
                  "type": "COMPONENT_PROPERTY_STRING_TYPE",
                  "props": {
                    "propertyName": "paddingRight",
                    "propertyComment": "\n The property sets the padding area on the right side of an element.\n"
                  },
                  "index": 3
                },
                {
                  "key": "node254",
                  "type": "COMPONENT_PROPERTY_STRING_TYPE",
                  "props": {
                    "propertyName": "paddingTop",
                    "propertyComment": "\n The property sets the padding area on the top of an element.\n"
                  },
                  "index": 4
                }
              ]
            },
            {
              "key": "node255",
              "type": "COMPONENT_PROPERTY_SHAPE_TYPE",
              "props": {
                "propertyName": "mainAreaPalette",
                "propertyComment": "Sets the color of the component"
              },
              "index": 8,
              "children": [
                {
                  "key": "node256",
                  "type": "COMPONENT_PROPERTY_SHAPE_TYPE",
                  "props": {
                    "propertyName": "backgroundColor",
                    "externalProperties": "usr.layout.props.color.ColorTypes"
                  },
                  "index": 0,
                  "children": [
                    {
                      "key": "node257",
                      "type": "COMPONENT_PROPERTY_ONE_OF_TYPE",
                      "props": {
                        "propertyName": "colorHue",
                        "propertyComment": "A value from the collection of colors, i.e. hues",
                        "propertyValueVariants": [
                          {
                            "value": ""
                          },
                          {
                            "value": "primary.main"
                          },
                          {
                            "value": "primary.light"
                          },
                          {
                            "value": "primary.dark"
                          },
                          {
                            "value": "primary.contrastText"
                          },
                          {
                            "value": "secondary.main"
                          },
                          {
                            "value": "secondary.light"
                          },
                          {
                            "value": "secondary.dark"
                          },
                          {
                            "value": "secondary.contrastText"
                          },
                          {
                            "value": "error.main"
                          },
                          {
                            "value": "text.primary"
                          },
                          {
                            "value": "text.secondary"
                          },
                          {
                            "value": "text.disabled"
                          },
                          {
                            "value": "text.hint"
                          },
                          {
                            "value": "white"
                          },
                          {
                            "value": "black"
                          },
                          {
                            "value": "red"
                          },
                          {
                            "value": "pink"
                          },
                          {
                            "value": "purple"
                          },
                          {
                            "value": "deepPurple"
                          },
                          {
                            "value": "indigo"
                          },
                          {
                            "value": "blue"
                          },
                          {
                            "value": "lightBlue"
                          },
                          {
                            "value": "cyan"
                          },
                          {
                            "value": "teal"
                          },
                          {
                            "value": "green"
                          },
                          {
                            "value": "lightGreen"
                          },
                          {
                            "value": "lime"
                          },
                          {
                            "value": "yellow"
                          },
                          {
                            "value": "amber"
                          },
                          {
                            "value": "orange"
                          },
                          {
                            "value": "deepOrange"
                          },
                          {
                            "value": "brown"
                          },
                          {
                            "value": "grey"
                          },
                          {
                            "value": "blueGrey"
                          }
                        ]
                      },
                      "index": 0
                    },
                    {
                      "key": "node258",
                      "type": "COMPONENT_PROPERTY_ONE_OF_TYPE",
                      "props": {
                        "propertyName": "colorShade",
                        "propertyComment": "A value from the collection of colors shades",
                        "propertyValueVariants": [
                          {
                            "value": ""
                          },
                          {
                            "value": "50"
                          },
                          {
                            "value": "100"
                          },
                          {
                            "value": "200"
                          },
                          {
                            "value": "300"
                          },
                          {
                            "value": "400"
                          },
                          {
                            "value": "500"
                          },
                          {
                            "value": "600"
                          },
                          {
                            "value": "700"
                          },
                          {
                            "value": "800"
                          },
                          {
                            "value": "900"
                          },
                          {
                            "value": "A100"
                          },
                          {
                            "value": "A200"
                          },
                          {
                            "value": "A400"
                          },
                          {
                            "value": "A700"
                          }
                        ]
                      },
                      "index": 1
                    }
                  ]
                },
                {
                  "key": "node259",
                  "type": "COMPONENT_PROPERTY_SHAPE_TYPE",
                  "props": {
                    "propertyName": "color",
                    "externalProperties": "usr.layout.props.color.ColorTypes"
                  },
                  "index": 1,
                  "children": [
                    {
                      "key": "node260",
                      "type": "COMPONENT_PROPERTY_ONE_OF_TYPE",
                      "props": {
                        "propertyName": "colorHue",
                        "propertyComment": "A value from the collection of colors, i.e. hues",
                        "propertyValueVariants": [
                          {
                            "value": ""
                          },
                          {
                            "value": "primary.main"
                          },
                          {
                            "value": "primary.light"
                          },
                          {
                            "value": "primary.dark"
                          },
                          {
                            "value": "primary.contrastText"
                          },
                          {
                            "value": "secondary.main"
                          },
                          {
                            "value": "secondary.light"
                          },
                          {
                            "value": "secondary.dark"
                          },
                          {
                            "value": "secondary.contrastText"
                          },
                          {
                            "value": "error.main"
                          },
                          {
                            "value": "text.primary"
                          },
                          {
                            "value": "text.secondary"
                          },
                          {
                            "value": "text.disabled"
                          },
                          {
                            "value": "text.hint"
                          },
                          {
                            "value": "white"
                          },
                          {
                            "value": "black"
                          },
                          {
                            "value": "red"
                          },
                          {
                            "value": "pink"
                          },
                          {
                            "value": "purple"
                          },
                          {
                            "value": "deepPurple"
                          },
                          {
                            "value": "indigo"
                          },
                          {
                            "value": "blue"
                          },
                          {
                            "value": "lightBlue"
                          },
                          {
                            "value": "cyan"
                          },
                          {
                            "value": "teal"
                          },
                          {
                            "value": "green"
                          },
                          {
                            "value": "lightGreen"
                          },
                          {
                            "value": "lime"
                          },
                          {
                            "value": "yellow"
                          },
                          {
                            "value": "amber"
                          },
                          {
                            "value": "orange"
                          },
                          {
                            "value": "deepOrange"
                          },
                          {
                            "value": "brown"
                          },
                          {
                            "value": "grey"
                          },
                          {
                            "value": "blueGrey"
                          }
                        ]
                      },
                      "index": 0
                    },
                    {
                      "key": "node261",
                      "type": "COMPONENT_PROPERTY_ONE_OF_TYPE",
                      "props": {
                        "propertyName": "colorShade",
                        "propertyComment": "A value from the collection of colors shades",
                        "propertyValueVariants": [
                          {
                            "value": ""
                          },
                          {
                            "value": "50"
                          },
                          {
                            "value": "100"
                          },
                          {
                            "value": "200"
                          },
                          {
                            "value": "300"
                          },
                          {
                            "value": "400"
                          },
                          {
                            "value": "500"
                          },
                          {
                            "value": "600"
                          },
                          {
                            "value": "700"
                          },
                          {
                            "value": "800"
                          },
                          {
                            "value": "900"
                          },
                          {
                            "value": "A100"
                          },
                          {
                            "value": "A200"
                          },
                          {
                            "value": "A400"
                          },
                          {
                            "value": "A700"
                          }
                        ]
                      },
                      "index": 1
                    }
                  ]
                }
              ]
            }
          ]
        }
      }
    }
  ]
}