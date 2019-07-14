import React, {useEffect} from 'react'
import moment from 'moment'
import {A ,B} from './testExport'

import C from './testExport'
import * as D from './testExport'

export default function () {
  useEffect(() => {
    // console.log(moment().seconds())
    // const M = moment().seconds(1000).valueOf()
    // console.log(M)
  }, [])
  // 当有多个的时候，就可以用export 但是需要保证 导出的名字 和 {}中的名字相同。
  // 当只有一个的时候，就可以用 export default 导出的名字就没有限制了
  console.log(A)
  console.log(B)
  console.log(C)
  console.log(D.A)
  console.log(D.B)
  console.log(D.default)
  console.log(D.mydefault)
  return <div>123</div>
}