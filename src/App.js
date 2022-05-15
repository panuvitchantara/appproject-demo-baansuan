import './app.scss'
import BlogGallery from './components/blog-gallery/blog-gallery.component';
import NavBar from './components/navigation/navigation.component';
import SlideShow from './components/slideshow/slide.component';
import Footer from './components/footer/footer.component'
import ActivityShowcase from './components/activity-showcase/activity-showcase.component'

const App = () => {


  return (
    <div className="App">

      <div className="onScroll">
      <NavBar />
        <SlideShow />
        <ActivityShowcase />
        <BlogGallery />
      <Footer />
      </div>

    </div>
  );
}

export default App;
