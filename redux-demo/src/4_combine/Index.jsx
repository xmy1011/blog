import React from 'react'
import { createData, combination } from './data'

let initData = {
  count: {
    num: 0,
  } ,
  info: {
    age: 25
  }
}

function mySetCount(data, deal) {
  switch (deal.type) {
    case 'INCREMENT_COUNT':
      return {
        ...data,
        num: data.num + 1,
      }
    case 'DECREMENT_COUNT':
      return {
        ...data,
        num: data.num - 1,
      }
    default:
      return data;
  }
}

function mySetInfo(data, deal){
switch (deal.type) {
    case 'INCREMENT_INFO':
      return {
        ...data,
        age: data.age + 1,
      }
    case 'DECREMENT_INFO':
      return {
        ...data,
        age: data.age - 1,
      }
    default:
      return data;
  }
}


let mySetData = combination({
  count: mySetCount,
  info: mySetInfo
})

const res = createData(initData, mySetData);


export default function Index() {
//  在数据改变时执行订阅函数 和 promise在resolve/ reject 之后执行then里的函数 大体相同
//  收集订阅函数，在数据改变之后依次执行他们
res.subscribe(() => {console.log('change 的订阅函数执行了:currentData is',res.getData()) })

  return (
    <div>
      <button onClick={() => {
       res.hardSetData({type: 'INCREMENT_COUNT'})
      }}>change1</button>
      <button 
        onClick={() => {
        res.hardSetData({type: 'DECREMENT_INFO'})
      }}
      >change2</button>
    </div>
  )
}
