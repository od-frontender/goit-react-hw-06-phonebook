import Form from './components/Form';
import ContactList from './components/ContactList';
import Filter from './components/Filter';
import Container from './components/Container';

function App() {
  return (
    <Container>
      <h2>Phonebook</h2>
      <Form />
      <h2>Contacts</h2>
      <Filter />
      <ContactList />
    </Container>
  );
}
export default App;
