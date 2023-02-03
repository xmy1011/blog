//  一个最简单的发布订阅
class actions {
  static  deps = {
    // 'send_data': () => {}
  };
  // 发布订阅模式
  
  //  订阅 别人发消息 我要能够响应
  on = (type, handler) => {
    actions.deps[type] = actions.deps[type] ? actions.deps[type] : [];
    //  添加订阅：，在发布某个type的时候，去执行我的订阅函数。
    actions.deps[type].push(handler);
  } 

  //  发布 （时） 执行type对应的订阅函数
  emit = (type, data) => {
    actions.deps[type] instanceof Array && actions.deps[type].forEach(fn => {
      fn(data);
    });
  }


}

export default  new actions();