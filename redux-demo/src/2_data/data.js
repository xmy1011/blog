//  数据改变 --》 订阅该数据的函数执行 ---》 获取该数据
export const createData = function(init) {
  let deps =[];
  let data =  init;

  function subscribe(handler){
    deps.push(handler)
  }

  function changeData(newData){
    data = newData;
    deps.forEach(fn => fn())
  }

  function getData(){
    return data;
  }

  return {
    subscribe,
    changeData,
    getData
  }
}
