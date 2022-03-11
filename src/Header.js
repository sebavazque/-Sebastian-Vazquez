import CartWidget from "./CartWidget"


function Header(){
    return (
        <div id="root">
            <header >   
                <div  className="topNav">
                    <nav className="navHead">
                        <a href="#">Contacto</a>
                        <a href="#">Produtos</a>
                        <a href="#">Inicio</a>
                    </nav>
                    <CartWidget/>
                    <a href="#" className="logo"><h2>Oahu Store </h2> </a>
                </div>
            </header>
        </div> 
    )

}

export default Header
