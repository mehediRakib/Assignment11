import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import Service from "./components/Service.jsx";
import Project from "./components/Project.jsx";
import Footer from "./components/Footer.jsx";


const App = () => {
    return (
        <div>
           <Header/>
            <Hero/>
            <About/>
            <Service/>
            <Project/>
            <Footer/>
        </div>
    );
};

export default App;