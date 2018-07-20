import * as Types from './action-types'

let actions = {
    add(amount){
        // return {type:Types.ADD,amount}
        return function (dispatch,getState){
            setTimeout(() => {
                dispatch({type:Types.ADD,amount})
            }, 3000);
        }
    },
    minus(amount){
        
        return {
            type:Types.MINUS,
            payload:new Promise((resolve,reject)=>{
                setTimeout(()=>{
                    if(Math.random()>0.5){
                        reject(1000)
                    }else{
                        resolve(2000)
                    }
                })
            })
        }

        // 这种方式不管失败
        // return new Promise((resolve,reject)=>{
        //     setTimeout(() => {
        //         resolve({type:Types.MINUS,amount})
        //     }, 1000);
        // })
    }
}
export default actions