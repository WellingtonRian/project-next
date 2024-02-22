import Link from "next/link";
import { Nav,Navbar} from "reactstrap";


const Header = () =>{
    return(
        <Navbar container="md" color="dark" dark>
            <link href="/">
                <a className="navbar-brand">
                    Início
                </a>
            </link>
            <Nav className="flex-row" navbar>
                <link href="/products">
                    <a className="nav-link me-2">
                        Produtos
                    </a>
                </link>
                <link href="/cart">
                    <a className="nav-link">
                        Carrinho
                    </a>
                </link>
            </Nav>
        </Navbar>
    )
}

export default Header