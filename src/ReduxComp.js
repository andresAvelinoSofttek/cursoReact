import React from 'react'
import {combineReducers, createStore} from 'redux'

const ReduxComp = () => {
    
    //Crear una poliza nueva
    //Borrar una poliza
    //Crear reclamo

    //Action creator
    const createPolicy = (name, amount) => {
        //Action
        return {
            type: 'CREATE_POLICY',
            payload: {
                name: name,
                amount: amount
            }
        }
    }

    const deletePolicy = (name) => {
        return {
            type: 'DELETE_POLICY',
            payload: name
        }
    }

    const createClaim = (name, amount) => {
        return {
            type: 'CREATE_CLAIM',
            payload: {
                name: name,
                amount: amount
            }
        }
    }

    //Reducers
    const policies = (listPolicies = [], action) => {
        let listPoliciesCopy = listPolicies
        if(action.type == "CREATE_POLICY"){
            listPoliciesCopy.push(action.payload.name)
            return listPoliciesCopy
        }
        else if(action.type == "DELETE_POLICY"){
            let newList = listPoliciesCopy.filter((name) => {
                return name !== action.payload
            })
            return newList
        }
        else {
            return listPoliciesCopy
        }
    }

    const bank = (totalAmount = 0, action) => {
        switch(action.type){
            case "CREATE_POLICY":
                let newAmount = totalAmount + action.payload.amount
                return newAmount
            case "CREATE_CLAIM":
                return totalAmount - action.payload.amount
            default:
                return totalAmount
        }
    }

    const claimHistory = (listOfClaims = [], action) => {
        switch(action.type){
            case "CREATE_CLAIM":
                return [...listOfClaims, action.payload]
            default:
                return listOfClaims
        }
    }

    const departments = combineReducers({
        listPolicies: policies,
        totalAmount: bank,
        listOfClaims: claimHistory
    })

    const store = createStore(departments)

    let state = store.getState()
    debugger

    store.dispatch(createPolicy('Manuel', 100))
    store.dispatch(createPolicy('Andres', 200))

    state = store.getState()
    debugger

    
    return <div></div>
}

export default ReduxComp