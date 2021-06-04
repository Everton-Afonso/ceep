import React, { Component } from 'react';
import NoteList from './components/notelist';
import RegistrationForm from './components/resdistrationform';
import './assets/App.css';
import './assets/index.css';

class App extends Component {

  constructor() {
    super();

    this.state = {
      notes:[]
    };
}

  createCard(title, text) {
    const newNote = {title, text};
    const newArrayNotes = [...this.state.notes,newNote]
    const newState = {
      notes:newArrayNotes
    }
    this.setState(newState)
  }

  render() {
    return (
      <section className="content">
        <RegistrationForm createCard={this.createCard.bind(this)}/>
        <NoteList notes={this.state.notes}/>
      </section>
    );
  }
}

export default App;
