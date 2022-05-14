import './app.scss'
import BlogGallery from './routes/blog-gallery/blog-gallery.component';
import NavBar from './routes/navigation/navigation.component';
import SlideShow from './routes/slideshow/slide.component';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';

const App = () => {


  return (
    <div className="App">
      <NavBar />
      <SlideShow />
      <BlogGallery />

      <div className="footnote-container">
        <div className="footnote-section">
          <div className="footnote-leftsection">
            <h2>เข้าถึงหน้าต่าง ๆ</h2>
            <a href="">หน้าแรก<br /></a>
            <a href="">ทำความรู้จัก<br /></a>
            <a href="">บทความ<br /></a>
            <a href="">ติดต่อ</a>
          </div>

          <div className="footnote-rightsection">
            <h2>เชื่อมต่อกับเรา</h2>
            <a href=""><FacebookIcon /><span>&ensp;</span></a>
            <a href=""><TwitterIcon /></a>

          </div>

          <p>©ลิขสิทธิ์ บ้านสวนอาจารย์พีท 2022 — สร้างโดย Vanthree Studio</p>
        </div>

      </div>


    </div>
  );
}

export default App;
