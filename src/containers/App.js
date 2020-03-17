import React, { Fragment, Component } from 'react';
import CardArray from '../components/CardList';
import SearchBar from '../components/SearchBar';
import './App.css';
import Scroll from '../components/Scroll';
import ErrorBoundry from '../components/ErrorBoundry';

class App extends Component {
    constructor() {
        super();
        this.state = {
            robots: [],
            searchfield: ''
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then((response) => response.json())
            .then((user) => { this.setState({ robots: user }) })
    }

    onSearchChange = (event) => {
        this.setState({ searchfield: event.target.value });
    }

    render() {
        const { robots, searchfield } = this.state;
        const filterRobots = robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchfield.toLowerCase());
        })
        if (robots.length === 0)
            return <h1 className='tc'>Loading!</h1>
        else {
            return (
                <Fragment>
                    <div className='tc'>
                        <h1 className='f1'>Robofriends</h1>
                        <SearchBar searchChange={this.onSearchChange} />
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

export default App;