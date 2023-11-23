
import { Button, ListGroup, ListGroupItem } from 'react-bootstrap';
import {  FaFacebook, FaGithub, FaGoogle, FaLinkedin, FaLinkedinIn, FaTwitter } from 'react-icons/fa';
import QZone from '../QZone/QZone';
import bg from  '../../../assets/bg.png'
const RightNav = () => {
    return (
        <div>
           
           <h4 className='mb-4'>Log in With</h4>
         <div>
         <Button variant="outline-primary" className='mb-2 '> <FaGoogle /> Login with Google</Button>
      <Button variant="outline-secondary"> <FaGithub /> Login with Github</Button>
         </div>
         <div >
            <h4 className='mt-4 mb-2'>Find Us on</h4>
            <ListGroup>
      <ListGroup.Item><FaFacebook /> Login with Github</ListGroup.Item>
      <ListGroup.Item><FaTwitter />  Login with Twitter</ListGroup.Item>
      <ListGroup.Item><FaLinkedinIn /> Login with Linked in</ListGroup.Item>
      
    </ListGroup>
        </div>

        <div>
            <QZone></QZone>
            <div>

            </div>
        </div>
        <div className='position-relative '>

       
<img className='rounded-2 ' src={bg} alt="" />
<div className='position-absolute top-0 mt-5 text-white mx-auto  bottom-100  '>
<h3 className='ms-5 mb-3  '>Creating an amazing newspaper</h3>
<p>If you need to design a newspaper, you have come to the right place. We have hundreds of templates that can be customized in our Cloud Designer. a newspaper, you have come to the right place. We have hundreds of templates that can be customized in our Cloud Designer</p>
</div>
</div>
        </div>
    );
};

export default RightNav;