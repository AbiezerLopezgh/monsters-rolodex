import "./App.css";
import { CardList } from "./components/card-list/card-list.component";
import { Component } from "react";
import { SearchBox } from "./components/search-box/search-box.component";

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: "",
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => this.setState({ monsters: users }));
  }

  handleChange = (e) => {
    this.setState({ searchField: e.target.value });
  };

  render() {
    const { monsters, searchField } = this.state;
    // Equals to const monsters = this.state.monsters;
    // Equals to const searchField = this.state.searchField;
    const filteredMonsters = monsters.filter((monster) =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );

    return (
      <div className="App">
        <h1>Monsters Rolodex - Abiezer Lopez</h1>
        <SearchBox
          placeholder="search monster"
          handleChange={this.handleChange}
        ></SearchBox>

        <CardList monsters={filteredMonsters}></CardList>
      </div>
    );
  }
}

export default App;
