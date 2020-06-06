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

// Set this to your tracking ID: UA-XXXXXXXX-Y
const trackingId = 'UA-XXXXXXXX-Y';

const sendAnalyticsEvent = (eventAction, eventCategory) => {

  console.log('Sending analytics event: ' + eventCategory + '/' + eventAction);

  if (!trackingId) {
    console.error('You need your tracking ID in analytics-helper.js');
    console.error('Add this code:\nconst trackingId = \'UA-XXXXXXXX-X\';');
    // We want this to be a safe method, so avoid throwing unless absolutely necessary.
    return Promise.resolve();
  }

  if (!eventAction && !eventCategory) {
    console.warn('sendAnalyticsEvent() called with no eventAction or ' +
      'eventCategory.');
    // We want this to be a safe method, so avoid throwing unless absolutely necessary.
    return Promise.resolve();
  }

  return self.registration.pushManager.getSubscription()
    .then(subscription => {
      if (subscription === null) {
        throw new Error('No subscription currently available.');
      }

      // Create hit data
      const payloadData = {
        // Version Number
        v: 1,
        // Client ID
        cid: subscription.endpoint,
        // Tracking ID
        tid: trackingId,
        // Hit Type
        t: 'event',
        // Event Category
        ec: eventCategory,
        // Event Action
        ea: eventAction,
        // Event Label
        el: 'serviceworker'
      };

      // Format hit data into URI
      const payloadString = Object.keys(payloadData)
        .filter(analyticsKey => {
          return payloadData[analyticsKey];
        })
        .map(analyticsKey => {
          return analyticsKey + '=' + encodeURIComponent(payloadData[analyticsKey]);
        })
        .join('&');

      // Post to Google Analytics endpoint
      return fetch('https://www.google-analytics.com/collect', {
        method: 'post',
        body: payloadString
      });
    })
    .then(response => {
      if (!response.ok) {
        return response.text()
          .then(responseText => {
            throw new Error(
              'Bad response from Google Analytics:\n' + response.status
            );
          });
      } else {
        console.log(eventCategory + '/' + eventAction +
          ' hit sent, check the Analytics dashboard');
      }
    })
    .catch(function(err) {
      console.warn('Unable to send the analytics event', err);
    });
};
