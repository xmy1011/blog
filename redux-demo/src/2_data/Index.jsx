import React from 'react'
import { createData } from './data'

let initData = {
  count: 1,
  info: {
    name: 'xmy'
  }
}

const res = createData(initData);


export default function Index() {
//  在数据改变时执行订阅函数 和 promise在resolve/ reject 之后执行then里的函数 大体相同
//  收集订阅函数，在数据改变之后依次执行他们
res.subscribe(() => {console.log('change 的订阅函数执行了:currentData is',res.getData()) })

  return (
    <div>
      <button onClick={() => {
        res.changeData({
          ...res.getData(),
          count: 'change1'
        })
      }}>change1</button>
      <button 
        onClick={() => {
        res.changeData({
          ...res.getData(),
          info: {
            name: 'change2'
          }
        })
      }}
      >change2</button>

    </div>
  )
}
