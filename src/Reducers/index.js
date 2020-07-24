import { combineReducers } from "redux"

   //Reducers
   const quotes = (listQuotes = [
       {quote:"Cuanto más perfecto luzca uno por fuera, más demonios tiene dentro", author:"Sigmund Freud", note:"psicólogo judio"},
       {quote:"Cuanto más se eleva un hombre, más pequeño les parece a los que no saben volar", author:"Friedrich Nietzsche", note:"Así habló Zaratrusta"}
   ], action) => {
    let listQuotesCopy = listQuotes
    if(action.type === "CREATE_QUOTE"){
        return [...listQuotes, action.payload]
    }
    else if(action.type === "DELETE_QUOTE"){
        let newList = listQuotesCopy.filter((quote) => {
            return quote !== action.payload
        })
        return newList
    }
    else {
        return listQuotesCopy
    }
}


const quoteHistory = (listQuotes = [], action) => {
    switch(action.type){
        case "CREATE_CLAIM":
            return [...listQuotes, action.payload]
        default:
            return listQuotes
    }
}




const policies = (listPolicies = [], action) => {
    let listPoliciesCopy = listPolicies
    if(action.type === "CREATE_POLICY"){
        return [...listPolicies, action.payload.name]
        //return listPoliciesCopy.push(action.payload.name)
        //return listPoliciesCopy
    }
    else if(action.type === "DELETE_POLICY"){
        let newList = listPoliciesCopy.filter((name) => {
            return name !== action.payload
        })
        return newList
    }
    else {
        return listPoliciesCopy
    }
}

// const bank = (totalAmount = 0, action) => {
//     let value = 0
//     if(action.payload && action.payload.amount)
//         value = parseFloat(action.payload.amount)
//     switch(action.type){
//         case "CREATE_POLICY":
//             let newAmount = totalAmount + value
//             return newAmount
//         case "CREATE_CLAIM":
//             return totalAmount - value
//         default:
//             return totalAmount
//     }
// }

// const claimHistory = (listOfClaims = [], action) => {
//     switch(action.type){
//         case "CREATE_CLAIM":
//             return [...listOfClaims, action.payload]
//         default:
//             return listOfClaims
//     }
// }

// const departments = combineReducers({
//     listPolicies: policies,
//     totalAmount: bank,
//     listOfClaims: claimHistory
// })

// export default departments

// const userList = (list = [], action) => {
//     switch(action.type){
//         case "NEW_USER_LIST":
//             return action.payload
//         default:
//             return list
//     }
// }

const newQuote = (list = [], action) => {
    switch(action.type){
        case "NEW_QUOTE":
            return action.payload
        default:
            return list
    }
}
export default combineReducers({
    listQuotes: quotes,
    listPolicies: policies,
    newQuote: newQuote,
//    totalAmount: bank,
//    listOfClaims: claimHistory,
//    userList: userList
})