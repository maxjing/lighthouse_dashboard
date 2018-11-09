/**
 * @license Copyright 2016 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0
 * Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.
 */
'use strict';

/* eslint-env jest */

const assert = require('assert');

const ComputedArtifact = require('../../../gather/computed/computed-artifact');

class TestComputedArtifact extends ComputedArtifact {
  constructor(...args) {
    super(...args);

    this.lastArguments = [];
    this.computeCounter = 0;
  }

  get name() {
    return 'TestComputedArtifact';
  }

  async compute_(...args) {
    this.lastArguments = args;
    return this.computeCounter++;
  }
}

describe('ComputedArtifact base class', () => {
  it('caches computed artifacts by strict equality', async () => {
    const computedArtifact = new TestComputedArtifact();

    let result = await computedArtifact.request({x: 1});
    assert.equal(result, 0);

    result = await computedArtifact.request({x: 2});
    assert.equal(result, 1);

    result = await computedArtifact.request({x: 1});
    assert.equal(result, 0);

    result = await computedArtifact.request({x: 2});
    assert.equal(result, 1);
    assert.equal(computedArtifact.computeCounter, 2);
  });
});
