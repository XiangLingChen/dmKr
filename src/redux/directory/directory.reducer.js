const INITIAL_STATE = {
    sections: [
        {
            id: 0,
            title: '',
            imageUrl: 'https://imgur.com/EseQ8dW.jpg',
        },
        {
            id: 1,
            title: 'SKIN CARE',
            imageUrl: 'https://imgur.com/1rULjon.jpg',
        },
        {
            id: 2,
            title: 'CLEANSING',
            imageUrl: 'https://imgur.com/JGEa0Mu.jpg',
        },
        {
            id: 3,
            title: 'BODY CARE',
            imageUrl: 'https://imgur.com/6LdpfB7.jpg',
        },
        {
            id: 4,
            title: 'HAIR',
            imageUrl: 'https://imgur.com/1NxOG10.jpg',
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