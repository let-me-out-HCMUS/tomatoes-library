export const getReadChap = (name) => {
    return JSON.parse(localStorage.getItem(name)) || []; 
}