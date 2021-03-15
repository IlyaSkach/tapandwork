
const newcat = (state = [], action) => {
    switch (action.type) {
        case 'ADD_CATEGORY':
            console.log('add cat work');
            console.log(state);
            return [
                ...state,
                {
                title: action.title,
                color: action.color
                }
            ]
    
        default:
            return  state;
            
    
    }
}
export default newcat;