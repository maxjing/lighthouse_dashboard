/**
 * @license Copyright 2016 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0
 * Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.
 */
'use strict';

/* eslint-env jest */

const ThemeColorGather = require('../../../gather/gatherers/theme-color');
const assert = require('assert');
let themeColorGather;

describe('Theme Color gatherer', () => {
  // Reset the Gatherer before each test.
  beforeEach(() => {
    themeColorGather = new ThemeColorGather();
  });

  it('returns the correct URL from options', () => {
    return themeColorGather.afterPass({
      driver: {
        querySelector() {
          return Promise.resolve({
            getAttribute() {
              return '#288A76';
            },
          });
        },
      },
    }).then(artifact => {
      assert.equal(artifact, '#288A76');
    });
  });
});
