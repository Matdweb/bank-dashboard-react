import { createContext } from "react";
import { useState } from "react";

export const AccountContext = createContext()   

export function AccountContextProvider(props){
    
    const [ currentCreditCard, setCurrentCreditCard ] = useState({
        nameId: "NameL",
        account: "3283-02-009-76275-1",
        number: "3890 2345 3283",
        date: "03/24",
        name: "Name LastName",
        ica: "123",
        balance: "$2.000",
        client: "US2864254-6658-508043",
        type: "visa",
        styles: ""
    })

    const ChangeCurrentCreditCard = (data) =>{
        console.log(`Changing to the ${data.number.slice(-4)} credit card`)
        setCurrentCreditCard(data)
        console.log("ready")
    }

    return(
        <AccountContext.Provider value={{
            currentCreditCard,
            ChangeCurrentCreditCard
        }}>
            {props.children}
        </AccountContext.Provider>
    )
}