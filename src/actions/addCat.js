// export const addCat = (title, color) => ({

//         type: 'ADD_CATEGORY',
//         title,
//         color

// });

// export const fixCategore = () => {
//         return {type: 'FIX_CATEGORY'}
// };

export const addCat = (name, color) => ({
  type: "ADD_CATEGORY",
  payload: { name, color }
});


export const delCat = (id) => ({
  type: 'DEL_CATEGORY',
  payload: { id },
})
