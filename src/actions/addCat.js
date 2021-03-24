// export const addCat = (title, color) => ({
    
//         type: 'ADD_CATEGORY',
//         title,
//         color

// });

// export const fixCategore = () => {
//         return {type: 'FIX_CATEGORY'}
// };

export const addCat = (title, color) => ({
        type: "ADD_CATEGORY",
        payload: { title, color }
      });
      