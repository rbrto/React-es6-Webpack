import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    // coloca el input del buscador vacio inicialmente
    this.state = { term: '' };
  }

  onInputChange(term) {
    console.log('term componente SearchBar: '+term);
    this.setState({term});
    this.props.onSearchTermChange(term);
  }

  render() {
    // al cambiar el input se llama al metodo onInputChange que llamara al metodo onSearchTermChange
    // del componente App
    return (
      <div className="search-bar">
        <input value={this.state.term} onChange={event => this.onInputChange(event.target.value)} />
      </div>
    );
  }
}

export default SearchBar;
