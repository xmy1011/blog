import React from 'react'
import store from '../store'


store.subscribe(() => {
  console.log('5_redux 里的订阅store中的数据 的函数执行了......:' ,store.getState());
})

export default function Index() {
  return (
    <div>
      <button onClick={() => {
        store.dispatch({type: 'INCREMENT_INFO'})
      }}>++++</button>
    </div>
  )
}

