// import { fixCategore } from "../actions/addCat";

// const initialState = {
//         category: [
//             {
//                 title: "Name",
//                 color: "AB14C3",
//             }
//         ],
//         fixCategore: false   
// }

const initialState = {
    category: [
        {
                id:1,
            name: "Изброное",
            color: "#5236C1",
            list: [
                {
                    title: "Яндекс.Почта",
                    about: "Сервис с бесплатными иконками на любой вкус и цвет и есть немного платных. Но норм.",
                    imgLink: 'https://www.google.com/s2/favicons?domain=https://mail.yandex.ru/',
                    url: 'https://www.yandex.ru'
                },
                {
                    title: "Google",
                    about: "Сервис с бесплатными иконками на любой вкус и цвет и есть немного платных. Но норм.",
                    imgLink: 'https://www.google.com/s2/favicons?domain=google.com',
                    url: 'https://www.google.ru'
                },
                {
                    title: "Google Диск",
                    about: "Сервис с бесплатными иконками на любой вкус и цвет и есть немного платных. Но норм.",
                    imgLink: 'https://www.google.com/s2/favicons?domain=google.com/intl/ru_tj/drive/',
                    url: ''
                },
                {
                    title: "Яндекс.Диск",
                    about: "Сервис с бесплатными иконками на любой вкус и цвет и есть немного платных. Но норм.",
                    imgLink: 'https://www.google.com/s2/favicons?domain=https://disk.yandex.ru/client/disk',
                    url: ''
                },
                {
                    title: "Gmail",
                    about: "Сервис с бесплатными иконками на любой вкус и цвет и есть немного платных. Но норм.",
                    imgLink: 'https://www.google.com/s2/favicons?domain=https://www.google.com/intl/ru/gmail/about/',
                    url: ''
                },
            ]
        },
        {
          id:2,
            name: "Name",
            color: "#5236C1",
            list: [
                {
                    title: "Яндекс.Почта",
                    about: "Сервис с бесплатными иконками на любой вкус и цвет и есть немного платных. Но норм.",
                    imgLink: 'https://www.google.com/s2/favicons?domain=https://mail.yandex.ru/',
                    url: 'https://www.yandex.ru'
                },
                {
                    title: "Google",
                    about: "Сервис с бесплатными иконками на любой вкус и цвет и есть немного платных. Но норм.",
                    imgLink: 'https://www.google.com/s2/favicons?domain=google.com',
                    url: 'https://www.google.ru'
                },
                {
                    title: "Google Диск",
                    about: "Сервис с бесплатными иконками на любой вкус и цвет и есть немного платных. Но норм.",
                    imgLink: 'https://www.google.com/s2/favicons?domain=google.com/intl/ru_tj/drive/',
                    url: ''
                },
                {
                    title: "Яндекс.Диск",
                    about: "Сервис с бесплатными иконками на любой вкус и цвет и есть немного платных. Но норм.",
                    imgLink: 'https://www.google.com/s2/favicons?domain=https://disk.yandex.ru/client/disk',
                    url: ''
                },
                {
                    title: "Gmail",
                    about: "Сервис с бесплатными иконками на любой вкус и цвет и есть немного платных. Но норм.",
                    imgLink: 'https://www.google.com/s2/favicons?domain=https://www.google.com/intl/ru/gmail/about/',
                    url: ''
                },

            ]
        }
    ]
};

const delCat = (state, payload) => {
    const { id } = payload
    const idx = state.category.findIndex((el) => el.id === id)
    let pastState = state.category.slice(0, idx)
    let futureState = state.category.slice(idx + 1)
    let newState = [...pastState, ...futureState]
    return {
        ...state,
        category: newState,
    }
}

const newcat = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_CATEGORY":
            const { color, name } = action.payload;
            return {
                ...state,           
                category: [...state.category, {color, name, list: [{ title: null }] }]
            };
        case 'DEL_CATEGORY':
            return delCat(state, action.payload)
        default:
            return state;
    }
};


export default newcat;



// const newcat = (state = [], action) => {
//     switch (action.type) {
//         case 'ADD_CATEGORY':
//             console.log('add cat work');
//             console.log(state);
//             return [
//                 ...state,
//                 {
//                     title: action.title,
//                     color: action.color
//                 }
//             ]
//         case 'FIX_CATEGORY':
//             return {
//                 ...state,

//                 fixCategore: true

//             }


//         default:
//             return state;
//     }
// }
// export default newcat;