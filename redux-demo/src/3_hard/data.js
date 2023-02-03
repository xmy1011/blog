//  数据改变 --》 订阅该数据的函数执行 ---》 获取该数据
export const createData = function (init) {
  let deps = [];
  let data = init;

  function subscribe(handler) {
    deps.push(handler)
  }
  // 这里的改变数据： 直接赋值； 
  function changeData(newData) {
    data = newData;
    deps.forEach(fn => fn())
  }

  //  只有特定情况下才能改变数据
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
    hardSetData
  }
}

function mySetData(data, deal) {
  switch (deal.type) {
    case 'INCREMENT':
      return {
        ...data,
        count: data.count + 1,
      }
    case 'DECREMENT':
      return {
        ...data,
        count: data.count - 1,
      }
    default:
      return data;
  }
}