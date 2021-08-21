import React from 'react';
import { CSSTransition } from 'react-transition-group';

import Form from './components/Form';
import ContactsList from './components/ContactsList';
import Filter from './components/Filter';

import styles from './App.module.scss';

const App = () => {
  return (
    <section className={styles.container}>
      <CSSTransition
        in={true}
        appear={true}
        timeout={500}
        classNames={{ ...styles }}
        unmountOnExit
      >
        <h1 className={styles.title}>Phonebook</h1>
      </CSSTransition>

      <Form></Form>
      <div className={styles.contacts_container}>
        <h2 className={styles.contact_title}>Contacts</h2>
        <Filter />
        <ContactsList />
      </div>
    </section>
  );
};
export default App;
