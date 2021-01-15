import GlobalStyles, {Container} from "./globalStyles"
import {Accordion} from "./components"

function App() {
  return (
    <>
      <GlobalStyles />
      <Container>
        <Accordion />
        <Accordion />
        <Accordion />
      </Container>
    </>
  );
}

export default App;

// Might want to have a Accordion container to loop through an array and display each accordion card