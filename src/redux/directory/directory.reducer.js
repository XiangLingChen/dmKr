const INITIAL_STATE = {
    sections: [
        {
            id: 0,
            title: '',
            imageUrl: 'https://imgur.com/CuHhzM8.jpg'
        },
        {
            id: 1,
            title: 'SKINCARE',
            imageUrl: 'https://imgur.com/1rULjon.jpg',
            linkUrl: 'shopall/beautyEffect'
        },
        {
            id: 2,
            title: 'CLEANSING',
            imageUrl: 'https://imgur.com/JGEa0Mu.jpg',
            linkUrl: 'shopall/makeupRemover'
        },
        {
            id: 3,
            title: 'BODY CARE',
            imageUrl: 'https://imgur.com/6LdpfB7.jpg',
            linkUrl: 'shopall/bodyMilk'
        },
        {
            id: 4,
            title: 'HAIR',
            imageUrl: 'https://imgur.com/1NxOG10.jpg',
            linkUrl: 'shopall/shampoo'
        }

    ]
};

const directoryReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        default:
            return state;
    }
};

export default directoryReducer;