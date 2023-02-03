import React, {useContext, useState, useEffect} from 'react'

import ReduxContext from './context';


export const connect = (mapStateToProps, mapDispatchToProps) => Component => {
  //  Component 高阶组件
  function Connect(props) {
    const store = useContext(ReduxContext);

    const [count,setCount] = useState(true);

    const forceUpdate = () => setCount(val => !val );
    // 在页面mounted 的时候加个订阅，以实现页面的更新，因为store中的数据每次更新后会执行订阅函数
    useEffect(() => store.subscribe(forceUpdate), [])
    return (
      <ReduxContext.Consumer>
        {
          store => <>
            <Component
              {...props}
              {...mapStateToProps(store.getState())}
              {...mapDispatchToProps(store.dispatch)}
            >

            </Component>
          </>
        }
      </ReduxContext.Consumer>
    )
  }

  return Connect;
}

