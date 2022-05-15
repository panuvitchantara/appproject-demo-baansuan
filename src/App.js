import './app.scss'
import BlogGallery from './components/blog-gallery/blog-gallery.component';
import NavBar from './components/navigation/navigation.component';
import SlideShow from './components/slideshow/slide.component';
import Footer from './components/footer/footer.component'
import Paper from '@mui/material/Paper';

const App = () => {


  return (
    <div className="App">
      <NavBar />
      <SlideShow />

      <div className="activities-showcase-container">
        <div className="activities-showcase-header">
          <h1>กิจกรรมของเรา</h1>
        </div>
        <div className="activities-showcase-gallery-container">
          <Paper className="paper-container" elevation={3} >Test</Paper>
          <Paper elevation={3} >Test</Paper>
          <Paper elevation={3} >Test</Paper>
        </div>
      </div>

      <BlogGallery />

      <Footer />
    </div>
  );
}

export default App;
