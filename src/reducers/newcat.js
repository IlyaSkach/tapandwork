

const initialState = {
    category: [
        {
           id:1,
            name: "Избранное",
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
            name: "Категория 1",
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

const addBM = (state, payload) => {
    const {url, title, about, cat} = payload

    // use map method instead of filter
    const modifiedCategory = state.category.map(categoryItem => {
        if (categoryItem.name == cat) {
            let modifiedCategoryItem = {
                list: [...categoryItem.list, {url, title, about}]
            };
            return modifiedCategoryItem;
        } else {
            return categoryItem;
        }
    });

    return {
        ...state,
        category: modifiedCategory
    }   
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
        case 'ADD_BOOKMARK':
            return addBM(state, action.payload)
        default:
            return state;
    }
};


export default newcat;



