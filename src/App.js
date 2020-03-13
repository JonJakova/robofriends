import React, { Fragment, Component } from 'react';
import CardArray from './CardList';
import { robots } from './robots';
import SearchBar from './SearchBar';

class App extends Component {
    constructor() {
        super();
        this.state = {
            robots: robots,
            searchfield: ''
        }
    }

    onSearchChange = (event) => {
        this.setState({ searchfield: event.target.value });
    }

    render() {
        const filterRobots = this.state.robots.filter(robot => {
            return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
        })

        return (
            <Fragment>
                <div className='tc'>
                    <h1>Robofriends</h1>
                    <SearchBar searchChange={this.onSearchChange} />
                    <CardArray robots={filterRobots} />
                </div>
            </Fragment>
        );
    }
}

export default App;