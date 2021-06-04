import React, { Component } from 'react';
import './styles.css';

class RegistrationForm extends Component {
    constructor(props) {
        super(props);
        this.title = "";
        this.text = "";
    }

    _handlerTitleChange(e) {
        e.stopPropagation(); // previne que o evento de clique sejá publicado
        this.title = e.target.value;
    }

    _handlerTextChange(e) {
        e.stopPropagation(); // previne que o evento de clique sejá publicado
        this.text = e.target.value;
    }

    _createCard(e) {
        e.preventDefault(); // privine q a pagina seja carregada
        e.stopPropagation(); // previne que o evento de clique sejá publicado
        this.props.createCard( this.title, this.text);
    }
    render() {
        return (
            <form className="form-resgister" onSubmit={this._createCard.bind(this)}>
                <input 
                    type="text" 
                    placeholder="Titulo" 
                    className="form-register_input"
                    onChange={this._handlerTitleChange.bind(this)}
                />
                <textarea 
                    placeholder="Escreva sua nota..." 
                    rows={15} 
                    className="form-register_input"
                    onChange={this._handlerTextChange.bind(this)}
                >
                    </textarea>
                <button className="form-register_input form-register_submit">Criar Nota</button>
            </form>
        );
    }
}

export default RegistrationForm;