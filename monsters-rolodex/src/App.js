import { Component } from 'react';
import './App.css';
import { CardList } from './components/card-list/card-list.component'


class App extends Component {

  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: '',
    };
  }

  getUsers = async () => {
    const usersResponse = await fetch('https://jsonplaceholder.typicode.com/users')
    const users = await usersResponse.json();
    this.setState({ monsters: users })
  }

  componentDidMount() {
    this.getUsers();
  }
  
  render() {
    return (
      <div className="App">
        <input
          type='search'
          placeholder='search monsters'
          onChange={e => this.setState({searchField: e.target.value})}
        />
        <CardList monsters={this.state.monsters} />
      </div>
    );
  }
}


export default App;
