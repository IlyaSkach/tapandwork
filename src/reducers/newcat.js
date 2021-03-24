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
        },
        {
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

const newcat = (state = initialState, action) => {
    switch (action.type) {
      case "ADD_CATEGORY":
        const { color, title } = action.payload;
        return {
          ...state,
          category: [...state.category, { color, title, list: [] }]
        };
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