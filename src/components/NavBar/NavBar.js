import CartWidget from "../CartWidget/CartWidget"

const NavBar = () => {
    return(
        <nav>
            <h3>Bikinis Sumiks</h3>
            <div>
                <button>Enterizas</button>
                <button>Bikinis</button>
                <button>Surf</button>
            </div>
            <CartWidget />
        </nav>
    )
}

export default NavBar