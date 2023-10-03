const logger = (store)=>(next)=>(action)=>{

    const currentState = store.getState()
    
    console.log("current",currentState)
    console.log("action", action)
    console.log("updated", store.getState())
    
    next(action)

    console.log()
    
}

export default logger