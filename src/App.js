import React, { Component } from 'react';
import shortid from 'shortid';
import ContactForm from './components/ContactForm/ContactForm';

import ContactList from './components/ContactList/ContactList';



import Filter from './components/Filter/Filter';


class App extends Component {

  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: ''
  };

  addTodo = (name, number) => {
    const existingName = this.state.contacts.map(contact => contact.name).includes(name);
  
    if (existingName) {
      alert(`${name} is already in contacts`);
    } else {
      const contacts = {
        id: shortid.generate(),
        name: name,
        number: number,
      }
      //обновляем состояние от предыдущего добавляем элемент, а стейте арр идет обновление
      this.setState(prevState => ({
        contacts: [...prevState.contacts, contacts],
      })
      );
    }
  };
   
 

//убираем елемент , чей id совпадает
   deleteTodo = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };
  
   
  //получаем пропы с формы
     formSubmitHandler = data => {
      console.log(data)
     }
  
   changeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
   };
  
  getVisibleTodos = () => {
    const { filter, contacts } = this.state;
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter),
    );
  };
  
    render() {
      const { filter } = this.state
      const visibleTodos = this.getVisibleTodos();
      
      return (
        <div>
         <h1>Phonebook</h1>
          <ContactForm onSubmit={this.addTodo} />
          <h2>Contacts</h2>
          <Filter filter={filter} onChange={ this.changeFilter}/>
          <ContactList contacts={visibleTodos} onDeleteTodo={this.deleteTodo} />
        </div>
      );
    }
}


export default App;