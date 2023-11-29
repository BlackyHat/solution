import About from '../About/About';
import Cases from '../Cases/Cases';
import ContactUs from '../ContactUs/ContactUs';
import Elictricity from '../Elictricity/Elictricity';
import FrequentlyQuestions from '../FrequentlyQuestions/FrequentlyQuestions';
import Layout from '../Layout/Layout';
import Main from '../Main/Main';
import Separator from '../ui/Separator/Separator';

function App() {
  return (
    <Layout>
      <Main />
      <About />
      <Elictricity />
      <Cases />
      <FrequentlyQuestions />
      <ContactUs />
      <Separator />
    </Layout>
  );
}

export default App;
