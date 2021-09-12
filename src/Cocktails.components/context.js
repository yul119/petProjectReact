import { useState, useCallback, useEffect, useContext, createContext } from "react";

const url = 'www.thecocktaildb.com/api/json/v1/1/search.php?s='

const CocktailContext = createContext()

const CocktailsProvider = ({children}) =>{
    const [isLoading, setLoading] = useState(false)
    const [cocktails, setCocktails] = useState([])
    const [character, setCharacter] = useState('a')

    const fetchData = useCallback(
        async() => {
            setLoading(true)
            try {
                const res = await fetch(`${url}${character}`)
                const data = await res.json()
                console.log(data)
            } catch (error) {
                console.log(error)
                setLoading(false)
            }
        },
        [character]
    ) 

    useEffect(()=>{
        fetchData()
    },[character, fetchData])

    const data={
        isLoading,
    }
    return <CocktailContext.Provider value={data}>
        {children}
    </CocktailContext.Provider>
}

const useGlobalCocktailsContext = () => useContext(CocktailContext)

export {CocktailsProvider, useGlobalCocktailsContext}