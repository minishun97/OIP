import Introduction from '../components/Introduction';
import StakeholderLessons from '../components/StakeholderLessons';
import HighFiPrototype from '../components/HighFiPrototype';
import Advantages from '../components/Advantages';
import CTASection from '../components/CTASection';
import Footer from '../components/Footer';
import PosterSection from '../components/PosterSection';
import Videodemo from '../components/Videodemo.jsx';
const Home = () => (
    <>
        <Introduction />
        <StakeholderLessons />
        <HighFiPrototype />
        <Videodemo />
        <Advantages />
        <PosterSection />
        <CTASection />
        <Footer />
    </>
);

export default Home;