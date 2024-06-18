import CardContainer from "../Features/CardContainer";
import Footer from "../Features/Footer";
import Graph from "../Features/Graph/Graph";
import Navbar from "../Features/Navbar";

export default function Dashboard() {
  return (
    <div>
      <Navbar />
      <CardContainer />
      <Graph />
      <Footer />
    </div>
  )
}