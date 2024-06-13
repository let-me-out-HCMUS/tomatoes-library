import { createContext, useState, useEffect } from "react";
import { getSources } from "../../api/source";

export const SourceOrderContext = createContext();

const SOURCES_ORDER = 'say-gex-sources-order'

export default function ({ children }){
    const [sourceOrder, setSourceOrder] = useState([]); // [{}]

    useEffect(() => {
        (async function() {
            const response = await getSources()
            if (localStorage[SOURCES_ORDER]){
                if (response.status === "success") {
                    let data = response.data
                    if (data.length !== JSON.parse(localStorage[SOURCES_ORDER]).length) {
                        localStorage.setItem(SOURCES_ORDER, JSON.stringify(data))
                    }
                }
                setSourceOrder(JSON.parse(localStorage[SOURCES_ORDER]))
                return
            }

            try {
                const response = await getSources()
                if (response.status === "success") {
                    let data = response.data
                    localStorage.setItem(SOURCES_ORDER, JSON.stringify(data))
                    setSourceOrder(data)
                }
            } catch(error) {
                console.log(error)
            }
        })()
    }, [])

    const getSourceOrder = () => {
        return sourceOrder;
    };

    const moveSourceUp = (index) => {
        if (index === 0) return; // First source can't move up
    
        const newSourceOrder = [...sourceOrder];
        [newSourceOrder[index - 1], newSourceOrder[index]] = [newSourceOrder[index], newSourceOrder[index - 1]];
        setSourceOrder(newSourceOrder);
    };

    const moveSourceDown = (index) => {
        if (index === sourceOrder.length - 1) return; // Last source can't move down
    
        const newSourceOrder = [...sourceOrder];
        [newSourceOrder[index], newSourceOrder[index + 1]] = [newSourceOrder[index + 1], newSourceOrder[index]];
        setSourceOrder(newSourceOrder);
    };

    const submit = () => {
        localStorage.setItem(SOURCES_ORDER, JSON.stringify(sourceOrder))
        window.location.reload()
    }

    const value = {
        getSourceOrder,
        moveSourceUp,
        moveSourceDown,
        submit
    };

    return <SourceOrderContext.Provider value={value}>{children}</SourceOrderContext.Provider>;
};