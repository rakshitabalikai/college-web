import './Header.css'
import a1 from './images/aa.png'
function Header(){
    return (
        <div>
            <div className='rak'>
            <div className='m1'> 
              <h5>  08373-266343, 262075 </h5>
              </div>
              <div className='m2'>
                <h5> Fax:08373-266427</h5>
              </div>
                <div className='m3'>
                    <h5>CET CODE : E033 </h5>
                 </div>
            <div className='m4'> <h5>Research Program</h5>
            <h5 className='m5'>  Alumni</h5>
             </div>
            </div>
       
          <diV className='ab'>
            <img src={a1} className='a1'></img>
            <div className='ba'>
            <h2> Home</h2>
            </div>
            <div className='ac'>
            <h2>About </h2>
            </div>
            <div className='ad'>
                <h2> Admission</h2>
            </div>
            <div className='ae'>
                <h2> Departments</h2>
            </div>
            <div className='af'>
                <h2> Placement</h2>
            </div>
            <div className='ag'>
                <h2> Facilities</h2>
            </div>
            <div className='ah'>
               <h2> contact</h2>
            </div>
            </diV>
            
            
        </div>
        
    )
}

export default Header;