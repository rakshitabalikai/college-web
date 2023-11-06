import './Title.css';
import a3 from './images/tt.jpg';
import a4 from './images/clg2.jpg';
import a5 from './images/sami.jpg';
import a6 from './images/clg3.jpg';
import a7 from './images/clg4.jpg';
import a8 from './images/clg5.jpg';
import a9 from './images/clg6.jpg';
import b1 from './images/sce.jpg';
function Title(){
    return(
        <div>
  
            <div className='title1'>
                <h2>WELCOME TO OUR jail</h2>
            </div>
            <div className='set'>
                <div>
                    <img src={a3} alt="clg3" className='mov1'></img>
                    <br></br>
                    <img src={a4} alt="clg2" className='mov1'></img>
                </div>
                <div>
                    <img src={a5} alt="clg1" className='mov2'></img>
                    <h4>Dr. Shivamurthy Shivacharya Mahaswamiji <br></br>President, <br></br>STJ Education Society</h4>
                </div>
                <div>
                    <img src={a6} className='mov3' alt="clg4"></img>
                    <br></br>
                    <img src={a7} alt="colle" className='mov3'></img>
                </div>
            </div>
            <div className='maa'>
                <div className='mov4'>
                    <h1>A Commitment to Technical Education </h1>
                </div>
              <div className='comit'>  
               <div className='mov5'>
                <p>The real catalyst, which plays important role in shaping the career of a student, is the place of study and its surroundings. Infrastructure of STJ Institute of Technology is at a serene environment on the outskirts of Ranebennur attracts one and all. The campus of the institute extends over an area of 52 acres of land, specially selected to keep the students away from the vitiated atmosphere of city life. Campus is extensively landscaped with green environment. Established in the year 1980. The college is affiliated to Visveswaraiah Technological University, Approved by All India Council for Technical Education and by the Government of Karnataka. Ranebennur is situated in Haveri District of Karnataka, on Poona Bangalore National Highway (NH-4). 295km from Bangalore and 100km from Dharwad. It can be easily reached either by Road or by Rail. Bus frequency from Bangalore to Ranebennur is very high. The Institute is situated at 3km from the Ranebennur Bus Station. The climate throughout the year is mild and salubrious
                </p>
                </div>
            <div>
                <img src={a8} alt="coll"></img>
            </div>
            </div>
            </div>
            <div className='mov6'>
                <h1> C.S.E Department</h1>
                </div>
            <div>
                <img src={a9} alt="clgphoto" className='mov7'></img>
            </div>
            <div className='row1'>            
                <div>
                <h1> Vision</h1>
                <h2>Aims at developing STJIT as a premier technical institution by excelling in every aspect of technical education. </h2>
            </div>
            <div>
                <h1>Mission </h1>
                <h2>Imparting technical education and training in response to the changing needs of industry and society, believing in quality, innovation, ethical and moral standards. </h2>
            </div>
            </div>
            <div className='row2'>
                <h1> Our Strength</h1>
                <h1>"Nothing can dim the light which shines from within"</h1>
                <h1>"Where there is no struggle ,there is no strength" </h1>
            </div>
            <diV className='event'>
                <h1> Latest Events and News</h1>
            </diV>
            <hr></hr>
            <div>
                <div className='secura'>
                <h2> secura 2k23: Sport & Extra curricular activites</h2>
                <img className='secimg' alt="SecuraPic" src={b1}></img>
                </div>
              <hr></hr>
            
            </div>  
            
            
    </div>
    );
}
export default Title;