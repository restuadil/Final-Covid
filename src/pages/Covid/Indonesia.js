/* eslint-disable react-hooks/exhaustive-deps */
import Card from "../../components/Card/Card";
import Hero from "../../components/Hero";
import Summary from "../../components/Summary/Summary";
import Subtitle from "../../components/Ui/Subtitle/Subtitle";
import Title from "../../components/Ui/Title";

function Indonesia() {
    return(
        <div>
            <Hero />
            <Title>Indonesia</Title>
            <Subtitle>Data Covid Berdasarkan Indonesia</Subtitle>
            <Card />
            <Summary />
        </div>
    )
};
export default Indonesia;