import './app.scss'
import BlogGallery from './components/blog-gallery/blog-gallery.component';
import NavBar from './components/navigation/navigation.component';
import SlideShow from './components/slideshow/slide.component';
import Footer from './components/footer/footer.component'
import Paper from '@mui/material/Paper';

const App = () => {
  const ImageUrl = [
    "https://images.unsplash.com/photo-1528502668750-88ba58015b2f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    "https://images.unsplash.com/photo-1603354351226-d82bd4a635a3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    "https://images.unsplash.com/photo-1610500796385-3ffc1ae2f046?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  ]


  return (
    <div className="App">
      <NavBar />
      <SlideShow />

      <div className="activities-showcase-container">
        <div className="activities-showcase-header">
          <h1>กิจกรรมของเรา</h1>
        </div>
        <div className="activities-showcase-gallery-container">
          <Paper className="paper-container" elevation={3} 
          style={{
            background: `url(${ImageUrl[0]}), linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5))`,
          }}
          >
            <h2>กิจกรรมสะเต็มศึกษากับธรรมชาติในชุมชน</h2>
            <p>"lorem ipsum"</p>
          </Paper>

          <Paper className="paper-container" elevation={3} 
          style={{
            background: `url(${ImageUrl[1]}), linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5))`,
          }}
          >
            <h2>กิจกรรมสะเต็มศึกษากับธรรมชาติในชุมชน</h2>
            <p>"lorem ipsum"</p>
          </Paper>

          <Paper className="paper-container" elevation={3} 
          style={{
            background: `url(${ImageUrl[2]}), linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5))`,
          }}
          >
            <h2>กิจกรรมสะเต็มศึกษากับธรรมชาติในชุมชน</h2>
            <p>"lorem ipsum"</p>
          </Paper>
        </div>
      </div>

      <BlogGallery />

      <Footer />
    </div>
  );
}

export default App;
