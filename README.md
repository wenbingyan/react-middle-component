## react-redux 中间件

### applyMiddleware
applyMiddleware是redux的方法，可以帮我们应用中间件
#### redux-logger
先安装中间件
```
npm install redux-logger
```
引入并在applyMiddleware中加入
```
import reduxLogger from 'redux-logger';
export default createStore(reducer,applyMiddleware(reduxLogger));
```
#### redux-thunk
- 可以让我们的actioncreator返回函数，而且函数的第一个参数是dispatch，第二个参数是getState
- 使用redux-thunk后 actions 可以返回函数，将函数执行并且将dispatch的权限交给你来处理
先安装中间件
```
npm install redux-thunk
```
引入并在applyMiddleware中加入
```
import reduxThunk from 'redux-thunk';
export default createStore(reducer,applyMiddleware(reduxLogger,reduxThunk));
```
actions.js
```
import * as Types from './action-types'

let actions = {
    add(amount){
        -// return {type:Types.ADD,amount}
        +return function (dispatch,getState){
        +    setTimeout(() => {
        +        dispatch({type:Types.ADD,amount})
        +    }, 3000);
        +}
    },
    minus(amount){
        return {type:Types.MINUS,amount}
    }
}
export default actions
```
#### redux-promise
- 可以在actionCreateor中返回一个promise对象。他会等待成功后将成功的结果派发出去
- 默认返回promise的写法是不管失败的。
先安装中间件
```
npm install redux-promise
```
引入并在applyMiddleware中加入
```
import reduxPromise from 'redux-promise';
export default createStore(reducer,applyMiddleware(reduxLogger,reduxThunk,reduxPromise));
```
actions.js
```
let actions = {
    minus(amount){
        -//return {type:Types.MINUS,amount}
        +return new Promise((resolve,reject)=>{
        +    setTimeout(() => {
        +        resolve({type:Types.MINUS,amount})
        +    }, 1000);
        +})
    }
}
```