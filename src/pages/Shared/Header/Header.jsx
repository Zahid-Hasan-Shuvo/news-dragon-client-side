
import logo from "../../../assets/logo.png";
import moment from "moment/moment";
import Marquee from "react-fast-marquee";
import { Button, Container } from "react-bootstrap";

const Header = () => {
  
  return (
    <Container>
      <div className="text-center">
        <img src={logo} alt="" />
        <p>
          <span className="text-secondary">
            Journalism without fair and Favour
          </span>
        </p>
        <p>{moment().format("dddd, MMMM D, YYYY,")}</p>
      </div>
      <div className="d-flex">
        <Button>Breaking</Button>
        <Marquee className="text-danger bg-light  " speed={100}>
          I can be a React component, multiple React components, or just some
          text...  I can be a React component, multiple React components, or just some
          text...
        </Marquee>
      </div>

     
    </Container>
  );
};

export default Header;
