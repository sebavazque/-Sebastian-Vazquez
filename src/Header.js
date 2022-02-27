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
                </div>
            </header>
        </div> 
    )

}

export default Header
