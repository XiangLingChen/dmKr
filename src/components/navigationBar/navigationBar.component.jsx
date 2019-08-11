import React, {Component} from 'react';
import Toolbar from '../HOMEPAGE/res-nav/res-nav.component';
import SideDrawer from '../HOMEPAGE/sideDrawer/sideDrawer.component';
import BackDrop from '../HOMEPAGE/backdrop/backdrop.component';

class NavigationBar extends Component {
    state= {
        sideDrawerOpen: false
    };

    drawerToggleClickHandler = () => {
        this.setState( (prevState) =>{
            return {sideDrawerOpen: !prevState.sideDrawerOpen}
        });
    };

    backdropClickHandler = () => {
        this.setState(
            {sideDrawerOpen: false}
        );
    }
    

    render() {
        
        let backDrop;

        if(this.state.sideDrawerOpen){
            backDrop = <BackDrop click={this.backdropClickHandler}/>
        }
        return(
            <div>
                <Toolbar drawerClickHandler={this.drawerToggleClickHandler}/>
                <SideDrawer show={this.state.sideDrawerOpen} />
                {backDrop}
            </div>
        );
    }
}
    
        
 
        
    


export default NavigationBar;
