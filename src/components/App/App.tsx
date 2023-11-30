import Layout from '@components/Layout/Layout';
import Main from '@components/Main/Main';
import About from '@components/About/About';
import Cases from '@components/Cases/Cases';
import Elictricity from '@components/Elictricity/Elictricity';
import ContactUs from '@components/ContactUs/ContactUs';
import FAQs from '@components/FAQs/FAQs';

function App() {
  return (
    <Layout>
      <Main />
      <About />
      <Elictricity />
      <Cases />
      <FAQs />
      <ContactUs />
    </Layout>
  );
}

export default App;
