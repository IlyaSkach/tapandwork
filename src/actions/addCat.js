
export const addCat = (name, color) => ({
  type: "ADD_CATEGORY",
  payload: { name, color }
});


export const delCat = (id) => ({
  type: 'DEL_CATEGORY',
  payload: { id },
})
