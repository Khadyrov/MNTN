import MainContent from "../components/mainContent/mainContent"
import Header from "../components/header/header"
import './home.scss'
import FixedItems from "../components/fixedItems/fixedItems"
import Content from "../components/content/content"

const Home = () => {
  return (
    <div className="container">
      <Header />
      <MainContent />
      <FixedItems />
      <Content />
    </div>
  )
}

export default Home