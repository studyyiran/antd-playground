import React from 'react'
/**
 * @param {number} n
 * @return {number}
 */
var magicalString = function(n) {

};


function getStringByLength() {

  let left = [[1]]
  const arr = [1]
  let count = 0
  let right = []
  right = getRight(left, right)
  left = getLeft(left, right)
  for (let i = 0) {

  }
}

function getRight(left, right) {
  const leftLastIndex = left.length - 1
  right.push(left[leftLastIndex].length)
  return right
}

function getLeft(left, right) {
  const leftLastIndex = left.length - 1
  // 补位
  if (left[leftLastIndex].length !== right[leftLastIndex]) {
    left[leftLastIndex] = left[leftLastIndex].push([left[leftLastIndex]])
  }
  const next = left[leftLastIndex][0] === 1 ? 2 : 1
  // 下一步
  left.push([next])
  return left
}

export default function () {

}