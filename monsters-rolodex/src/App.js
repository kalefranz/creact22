import { Component } from 'react';
import './App.css';
import { CardList } from './components/card-list/card-list.component'
import { SearchBox } from './components/search-box/search-box.component'


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
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter(monster =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    )
    return (
      <div className="App">
        <SearchBox
          placeholder='search monsters'
          handleChange={e => this.setState({searchField: e.target.value})}
        />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}


export default App;
