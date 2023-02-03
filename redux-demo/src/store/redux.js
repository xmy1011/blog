//  数据改变 --》 订阅该数据的函数执行 ---》 获取该数据
export const createStore = function (reducer, initState ) {
  let listener = [];
  let state = initState;

  function subscribe(handler) {
    listener.push(handler)
  }

  //   只有特定情况下才能改变数据
  function dispatch(action) {
    const  newState = reducer(state, action)
    state = newState;
    //  感觉需要做个对比，若res === data 不需要执行订阅函数
    listener.forEach(fn => fn())
  }

  // why dispatch ? https://blog.csdn.net/qq_36376434/article/details/101443753
  dispatch({type:Symbol()})

  function getState() {
    return state;
  }

  return {
    subscribe,
    getState,
    dispatch,
  }
}

export const combineReducers = function (reducers) {
  // setKeys 在内存中始终保留，因为 是闭包中用到了，且闭包被返回为一个值，且该值在生命周期内始终存在（myself understand）
  const keys = Object.keys(reducers);
  //  该函数参数为（state,action） 在redux-persist 中的persistReducer中可用
  return function (state = {}, action) {
    const newState = {};
    keys.forEach((key) => {
      // 获取到 key对应的 处理state的函数 比如 key 为 count； setData 为 mySetCount 函数
      const reducer = reducers[key]
      // data 是第48行传进来的参数 data ，是一个完整的state， 由于我们只需要处理当前key对应的数据，所以要先获取数据。
      const prevKeyState = state[key]
      //  获取到执行完之后的数据。 一一 对应。
      newState[key] = reducer(prevKeyState, action)
    })
    return newState;
  }
}