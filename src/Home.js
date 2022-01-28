import Header from './Header';
import Mainpic from './Mainpic';
import Latest from './Latest';
import Art from './Art';
import pic from './pic.jpg';
import Bollywood from './Bollywood';
function Home() {
  return (
    <>
      <Header/>
      <Mainpic/>
      <h2>The Latest</h2>
      <div className='late'>
        <Latest/>
        <Latest/>
        <Latest/>
      </div>
      <h2>Latest Articles</h2>
      <div className='latestt'>
        <div className='arrt'>
          <Art/>
          <Art/>
          <Art/>
          <Art/>
        </div>
        <div className='add'>Advertisement</div>
        <div className='back'><h2>Title of vertical gallery</h2><p>Travel / August 21 2017</p></div>
        <div className='top'>
          <h2>Top Stories</h2>
          <img src={pic}/>
          <h2>Catch waves with adventure guide</h2>
          <p>Gujarat is vastly underrated and it's a mysetery to us why the region isn't more well</p>
        </div>
      </div>
    </>
  );
}
export default Home;