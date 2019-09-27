import React from 'react';
import MenuItem from '../directory-item/directory-item.component';
import './directory.style.css';

class Directory extends React.Component {
    constructor() {
        super();

        this.state = {
            
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
        }
    }

    render(){
        return (
            <div className='directory-menu'>
                {
                    this.state.sections.map(({id, title, imageUrl}) => (
                        <MenuItem key={id} title={title} imageUrl={imageUrl}/>
                    ) )
                }
            </div>
        )
    }
}

export default Directory;