import React, { Fragment, Component } from 'react';
import {connect} from 'react-redux';
import CardArray from '../components/CardList';
import SearchBar from '../components/SearchBar';
import './App.css';
import Scroll from '../components/Scroll';
import ErrorBoundry from '../components/ErrorBoundry';
import {setSearchField, requestRobots} from '../action.js';

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
        onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
        onRequestRobots: () => dispatch(requestRobots())
    }
}

class App extends Component {

    componentDidMount() {
       this.props.onRequestRobots();
    }

    render() {
        const { searchField, onSearchChange, robots, isPending } = this.props; 
        const filterRobots = robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchField.toLowerCase());
        })
        if (isPending)
            return <h1 className='tc'>Loading!</h1>
        else {
            return (
                <Fragment>
                    <div className='tc'>
                        <h1 className='f1'>Robofriends</h1>
                        <SearchBar searchChange={onSearchChange} />
                        <Scroll>
                            <ErrorBoundry>
                                <CardArray robots={filterRobots} />
                            </ErrorBoundry>
                        </Scroll>
                    </div>
                </Fragment>
            );
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);