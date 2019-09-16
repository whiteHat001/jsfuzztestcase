// Copyright (C) 2015 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
es6id: 23.1.3.5
description: >
  If a thisArg is not provided, undefined will be used as the this value for
  each invocation of callbackfn.
info: |
  Map.prototype.forEach ( callbackfn [ , thisArg ] )

  ...
  5. If thisArg was supplied, let T be thisArg; else let T be undefined.
  6. Let entries be the List that is the value of M’s [[MapData]] internal slot.
  7. Repeat for each Record {[[key]], [[value]]} e that is an element of
  entries, in original key insertion order
    a. If e.[[key]] is not empty, then
      i. Let funcResult be Call(callbackfn, T, «e.[[value]], e.[[key]], M»).
  ...
flags: [noStrict]
---*/

var _this = [];
var map = new Map();

map.set(0, 0);
map.set(1, 1);
map.set(2, 2);

map.forEach(function() {
  _this.push(this);
});

assert.sameValue(_this[0], this);
assert.sameValue(_this[1], this);
assert.sameValue(_this[2], this);
