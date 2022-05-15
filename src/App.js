import './app.scss'
import BlogGallery from './components/blog-gallery/blog-gallery.component';
import NavBar from './components/navigation/navigation.component';
import SlideShow from './components/slideshow/slide.component';
import Footer from './components/footer/footer.component'

const App = () => {


  return (
    <div className="App">
      <NavBar />
      <SlideShow />
      <BlogGallery />
      <Footer />
      


    </div>
  );
}

export default App;
