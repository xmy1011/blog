//  一个被观察者 
//  好多个观察者
//  被观察者 可以 添加 删除 观察者
//  被观察者可以 通知 观察者 此时观察者就会得到消息
// tips: 核心是 被观察者 执行 观察者的方法 
class Observer {
  constructor(name, subject) {
    this.name = name;
    //  第二个参数 subject 实现了观察者主动添加被观察者
    if(subject){
      subject.addObserver(this)
    }
  }

  notified(message) {
    //  当 Subject对象执行我的 notified 方法， 我就被通知了
    console.log(this.name, 'got message', message);
  }
}

class Subject {
  constructor() {
    this.observerList = [];
  }

  addObserver(observer) {
    this.observerList.push(observer)
  }

  removeObserver(observer) {
    const index = this.observerList.findIndex(o => o.name === observer.name);
    this.observerList.splice(index, 1);
  }

  notifyObservers(message) {
    const observers = this.observerList;
    observers.forEach(observer => observer.notified(message))
  }

}

//  实例一个被观察者
const subject = new Subject();
//  实例几个 观察者
const observerA = new Observer('observerA');
const observerB = new Observer('observerB');

subject.addObserver(observerA);
subject.addObserver(observerB);

subject.notifyObservers('hello from subject');

subject.removeObserver(observerA);
subject.notifyObservers('hello again')
// observerA got message hello from subject
// observerB got message hello from subject
// observerB got message hello again