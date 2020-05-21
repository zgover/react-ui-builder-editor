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

export const showErrorNotification = (error) => (dispatch) => {
  const message = error && error.message;
  if (message && message.length > 0) {
    dispatch({notification: {message, options: {variant: 'error', autoHideDuration: 5000}}})
  }
};

export const showMultipleErrorsNotification = (errors) => (dispatch) => {
  if (errors && errors.length > 0) {
    errors.forEach(error => {
      const message = error && error.message;
      if (message && message.length > 0) {
        dispatch({notification: {message, options: {variant: 'error', autoHideDuration: 5000}}})
      }
    });
  }
};

export const showSuccessNotification = (message) => (dispatch) => {
  if (message && message.length > 0) {
    dispatch({notification: {message, options: {variant: 'success', autoHideDuration: 4000}}})
  }
};

export const showInformationNotification = (message) => (dispatch) => {
  if (message && message.length > 0) {
    dispatch({notification: {message, options: {variant: 'info', autoHideDuration: 4000}}})
  }
};
