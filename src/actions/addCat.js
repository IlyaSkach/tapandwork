
export const addCat = (name, color) => ({
  type: "ADD_CATEGORY",
  payload: { name, color }
});


export const delCat = (id) => ({
  type: 'DEL_CATEGORY',
  payload: { id },
})


export const addBookMark = (url, title, about, cat) => ({
  type: "ADD_BOOKMARK",
  payload: {url, title, about, cat }
});