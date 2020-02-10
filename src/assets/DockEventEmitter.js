class DockEventEmitter {
    constructor() {
      this.events = []
    }
   
    bind(event, fn) {
      if(typeof fn !== 'function') {
        throw new Error('fn must be a function')
      }
      (this.events.hasOwnProperty(event)? this.events[event] : this.events[event]=[]).push(fn)
    }
    
    fire(event,...args) {
      if(event in this.events) {
        for( let fn of this.events[event] ){  
          fn(...args)
        }
      }else {
        throw new Error('I can not find this event')
      }
    }
    
    off(event, fn) {
      if(typeof fn !== 'function') {
        throw new Error('fn must be a function')
      }
      
      if(event in this.events) {
        let index = this.events[event].indexOf(fn) // 一个函数多次监听事件，只删除一次
        this.events[event].splice(index,1)
      }else {
        throw new Error('I can not find this event')
      }
    }
}
export const demt = new DockEventEmitter();