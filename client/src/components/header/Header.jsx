
import { AppBar, Toolbar, styled } from "@mui/material";

import { Link } from "react-router-dom";
// header color 
const Component = styled(AppBar)`
    background: #FFFFFF;
    color: #000;
`
const Container = styled(Toolbar)`
    justify-content: center;
    & > a {
        padding: 20px;
        color: inherit;
        text-decoration: none; 
    }
`

const Header = () => {
    return (
        <Component>
            <Container>
                <Link to='/'>HOME</Link>
                <Link to='/about'>ABOUT</Link>
                <Link to='/contect'>CONTACT</Link>
                <Link to='/login'>LOGOUT</Link>
            </Container>
        </Component>
    )
}

export default Header;