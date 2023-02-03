//  数据改变 --》 订阅该数据的函数执行 ---》 获取该数据
export const createData = function (init, mySetData) {
  let deps = [];
  let data = init;

  function subscribe(handler) {
    deps.push(handler)
  }
  // 2 这里的改变数据： 直接赋值； 
  function changeData(newData) {
    data = newData;
    deps.forEach(fn => fn())
  }

  //   只有特定情况下才能改变数据
  function hardSetData(deal) {
    data = mySetData(data, deal)
    //  感觉需要做个对比，若res === data 不需要执行订阅函数
    deps.forEach(fn => fn())
  }


  function getData() {
    return data;
  }

  return {
    subscribe,
    changeData,
    getData,
    hardSetData,
  }
}


//  current : 
// let mySetData = combination({
//   count: mySetCount,
//   info: mySetInfo
// }) //  3 只有特定情况下才能改变数据
// function hardSetData(deal) {
//   data = mySetData(data, deal)
//   //  感觉需要做个对比，若res === data 不需要执行订阅函数
//   deps.forEach(fn => fn())
// }
export const combination = function (reducers) {
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
