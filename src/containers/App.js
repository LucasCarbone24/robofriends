import React, {Component} from "react";
import { connect } from "react-redux";
import CardList  from "../components/CardList";
import Searchbox from '../components/SearchBox';
import Scroll from '../components/Scroll.js'
import '../containers/App.css'

import{requestRobots, setSearchfield} from '../actions'

const mapStateToProps = state => {
    return {
        searchField: state.searchRobots.searchField,
        robots: state.requestRobots.robots,
        isPending: state.requestRobots.isPending,
        error: state.requestRobots.error
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onSearchChange: (event) => dispatch(setSearchfield(event.target.value)),
        onRequestRobots: () => dispatch(requestRobots())
    }    
}

class App extends Component  {

    

    componentDidMount() {
             this.props.onRequestRobots();
        
    }

   

    render() {

            const {searchField, onSearchChange,robots, isPending} = this.props;
            const filteredRobots = robots.filter(robot =>{
            return robot.name.toLowerCase().includes(searchField.toLowerCase());
        })
        return isPending ? <h1 className = 'tc'>Loading</h1>:
        (
                <div className='tc'>
                    <h1 className ='f2'>RoboFriends</h1>
                    <Searchbox searchChange={onSearchChange} />
                    <Scroll>
                        <CardList robots={filteredRobots}/> 
                    </Scroll>
                </div> 
            );
        }
    }
export default connect(mapStateToProps, mapDispatchToProps)(App);