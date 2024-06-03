export const getReadChap = (name) => {
  return JSON.parse(localStorage.getItem(name)) || [];
};

export const getContinueChap = (name) => {
  let list = JSON.parse(localStorage.getItem(name)) || [];
  return list[list.length - 1] || 1;
};

export const addChapToLocalStorage = (slug, chapter) => {
  let list = JSON.parse(localStorage.getItem(slug)) || [];
  if (!list.includes(chapter)) {
    list.push(chapter);
    list.sort((a, b) => a - b);
    localStorage.setItem(`${slug}`, JSON.stringify(list));
  }
};
