import Hero from "../components/Hero";
import Card from "../components/Card/Card"
import Summary from "../components/Summary/Summary"; 
import Title from "../components/Ui/Title";
import Subtitle from "../components/Ui/Subtitle/Subtitle";


function Home() {
  return (
    <>
      <Hero />
      <Title>Global</Title>
      <Subtitle>Data Covid Berdasarkan Global</Subtitle>
      <Card />
      <Summary />
    </>
  );
}

export default Home;
