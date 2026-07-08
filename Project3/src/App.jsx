import Header from "./components/Header";
import Intro from "./components/Intro";
import EnemySortBy from "./components/EnemySortBy";
import AllySortBy from "./components/AllySortBy";
import EnemyCardList from "./components/EnemyCardList";
import AllyCardList from "./components/AllyCardList";
import EnemyForm from "./components/EnemyAddForm";
import AllyForm from "./components/AllyAddForm";
import Stats from "./components/Stats";
import Footer from "./components/Footer";

function App() {
  return (
    <>
        <Header />
        <main>
            <Intro />
            <EnemySortBy />
            <AllySortBy />
            <EnemyCardList />
            <AllyCardList />
            <EnemyForm />
            <AllyForm />
            <Stats />
        </main>
        <Footer />
    </>
  );
}

export default App;