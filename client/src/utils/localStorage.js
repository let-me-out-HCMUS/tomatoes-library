export const getReadChap = (name) => {
    return JSON.parse(localStorage.getItem(name)) || []; 
}

export const getContinueChap = (name) => {
    let list = JSON.parse(localStorage.getItem(name)) || [];
    return list[list.length - 1] || 1;
}