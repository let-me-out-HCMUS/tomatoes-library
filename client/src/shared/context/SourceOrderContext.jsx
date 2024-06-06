import { createContext, useState, useEffect } from "react";

export const SourceOrderContext = createContext();

export default function ({ children }){
    const [sourceOrder, setSourceOrder] = useState(['Truyện full', 'Tàng thư viện', 'Mê truyện chữ', 'Mê truyện']); // [{}]

    // TODO: get all sources here

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

    const value = {
        getSourceOrder,
        moveSourceUp,
        moveSourceDown
    };

    return <SourceOrderContext.Provider value={value}>{children}</SourceOrderContext.Provider>;
};