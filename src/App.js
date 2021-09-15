import Panel from "./components/Panel/Panel";
import ContactForm from "./components/ContactForm/ContactForm";
import Container from "./components/Container/Container";
import ContactsList from "./components/ContactsList/ContactsList";
import Filter from "./components/Filter";

import "./index.css";

function App() {
  return (
    <>
      <header>
        <Container>
          <Panel title="Phonebook">
            <ContactForm />
          </Panel>
        </Container>
      </header>

      <section>
        <Container>
          <Filter />
          <ContactsList />
        </Container>
      </section>
    </>
  );
}

export default App;
