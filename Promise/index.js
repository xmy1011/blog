const fetchData = () => {
  return new Promise((res, rej) => {
    setTimeout(() => {
      console.log('数据请求回来了');
      res({ data: '123' })
    }, 2000)
  })
}

class PromiseIm {
  //  默认返回 this 对象
  constructor(execute) {
    this.status = 'pending';
    this.value = undefined;
    this.reason = undefined;
    // 用来异步更改status 后 执行then方法里的俩函数 
    // 解决多次调用（注意不是链式调用）
    this.onFulfilledArray = [];
    this.onRejectedArray = [];
    //  箭头函数没有自己的this值，它是取上级作用域的this值作为自己的this值来使用
    //  当有then方法时，resolve 之后 执行 then 方法里的 onFulfilled
    let resolve = (value) => {
      queueMicrotask(() => {
        if (this.status === 'pending') {
          this.status = 'fulfilled';
          this.value = value;
          this.onFulfilledArray.forEach(item => item())
        }
      })

    }
    //  当有then方法时，reject 之后 执行 then 方法里的 onRejected 
    let reject = (err) => {
      queueMicrotask(() => {
        if (this.status === 'pending') {
          this.status = 'rejected';
          this.reason = err;
          this.onRejectedArray.forEach(item => item())
        }
      })

    }

    execute(resolve, reject)
  }

}

//  在原型上的方法，仅实例对象可调用，类不可。会去原型上查找该方法
//  then 方法应该返回一个 promise （链式调用）
PromiseIm.prototype.then = function (onFulfilled, onRejected) {
  //  俩参数必须是函数 否则应当忽略
  onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : data => data;
  onRejected = typeof onRejected === 'function' ? onRejected : reason => reason;
  //  调用 then 的时候，Promise 的实例 P 的status 已经从 pending 状态不可更改的变为了 fulfilled / rejected
  if (this.status === 'fulfilled') {
    return new PromiseIm((resolve, reject) => {
      try {
        const res = onFulfilled(this.value)
        resolve(res);
      } catch (error) {
        reject(error);
      }
    })
  };
  if (this.status === 'rejected') {
    return new PromiseIm((resolve, reject) => {
      try {
        const res = onRejected(this.reason)
        resolve(res);
      } catch (error) {
        reject(error);
      }
    })

  };
  /**
   * 2023年2月1日14:39:21 
   * 如果在构造函数 Promise内部执行异步操作，在一定时间后才会resolve(value) OR reject(reason)
   * 但是 如果又在实例后面执行 then 方法的话，此时 this.status 还未更改状态，因此会有问题.
   * **/
  /**
   * 构造函数 的 参数函数执行后 还没执行 resolve / reject 的时候，若 then方法执行： 
   * **/
  if (this.status === 'pending') {
    return new PromiseIm((resolve, reject) => {
      this.onFulfilledArray.push(() => {
        try {
          const res = onFulfilled(this.value);
          resolve(res)
        } catch (error) {
          reject(error)
        }
      })
      this.onRejectedArray.push(() => {
        try {
          const res = onRejected(this.reason);
          resolve(res)
        } catch (error) {
          reject(error)
        }
      })
    })
  }
}

const p = new PromiseIm((res, rej) => {
  setTimeout(() => {
    res({ data: 123 });// 执行 Promise类里的 resolve 方法 resolve函数时promise自己写的，但是这个函数需要外部给传进去value
  }, 2000)
  /**
   * value数据 从外部通过 resolve函数的参数 传给Promsie 的实例p， 在Promise内部就是this.value = value;
   * 如果同一个实例 再  then 的话 ，在 then 的内部是能 通过 this.value拿到最初 在外部调用 resolve 传进去的值
   * 总结： promise的 resolve 方法是为了获取外部的value值。用自身的方法去执行。
   * promise 的 then 方法，是为了获取外部传进去的函数， 把自己获取到的value或者reason当做参数去执行外部传进来的函数
   * **/
})
//  then 里面的函数，是外边传进去的，但是外面传进去的这个函数，可以拿到内部的resolve时的value 
//  then 是个微任务
p.then((res) => {
  console.log('res', res);
  console.log('rerere');
})
p.then((res) => {
  console.log('res111', res);
  console.log('rerere111');
})

const p2 = new PromiseIm((res, rej) => {
  rej('123') 
}).then(res1 => {
  return res1 + '456';
},(reason) => {
  return reason+ '789'
}).then(res2 => {

  
  console.log(res2);
})

// 第 132 行：
/**
 *  then  的 返回值 是 Promise resolve 的值m，m是前一个 then 里面 onFulfilled 返回的值，也就是132 的return值。
 *  但是  132行return 的值，可以是 Promise  function string number .... 需要进一步完善
 * 
 * **/ 