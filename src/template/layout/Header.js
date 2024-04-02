import { Link } from "react-router-dom";
import { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretUp, faMagnifyingGlass, faShoppingCart, faUser } from "@fortawesome/free-solid-svg-icons";
const $ = document.querySelector.bind(document);
// const $$ = document.querySelectorAll.bind(document);

function Header()
{
  useEffect(()=>{
    setInterval(()=>{
      setTimeout(()=>{
        $('.titleHeader').innerHTML = "Hotline mua hàng : 0384631254";
        $('.titleHeader').style.transition = "opacity 0.7s ease-in-out";
        $('.titleHeader').style.opacity = "0";
      },1000);
      setTimeout(()=>{
        $('.titleHeader').innerHTML = "Hỗ trợ bảo hành 7 ngày";
        $('.titleHeader').style.transition = "opacity 0.7s ease-in-out";
        $('.titleHeader').style.opacity = "1";
      },2000);
      setTimeout(()=>{
        $('.titleHeader').innerHTML = "Hỗ trợ bảo hành 7 ngày";
        $('.titleHeader').style.transition = "opacity 0.7s ease-in-out";
        $('.titleHeader').style.opacity = "0";
      },3000);
      setTimeout(()=>{
        $('.titleHeader').innerHTML = "Freeship toàn quốc!";
        $('.titleHeader').style.transition = "opacity 0.7s ease-in-out";
        $('.titleHeader').style.opacity = "1";
      },4000);
      setTimeout(()=>{
        $('.titleHeader').innerHTML = "Freeship toàn quốc!";
        $('.titleHeader').style.transition = "opacity 0.7s ease-in-out";
        $('.titleHeader').style.opacity = "0";
      },5000);
      setTimeout(()=>{
        $('.titleHeader').innerHTML = "Hotline mua hàng : 0384631254";
        $('.titleHeader').style.transition = "opacity 0.7s ease-in-out";
        $('.titleHeader').style.opacity = "1";
      },6000);
    },7000);
  },[]);

    return (
        <div>
          <div className="text-center" style={{backgroundColor:"black"}}>
            <p className="titleHeader text-white">Hotline mua hàng : 0384631254</p>
          </div>
          <div className="row mb-3" style={{marginLeft: "300px"}}>
            <div className="col-md-9 text-center">  
              <Link to="/">
              <img alt="Logo" src="https://file.hstatic.net/1000096703/file/logo_website__191___70_px__979fdef210f7474d8a09b42724033b5c.png" />
              </Link>
            </div>
            <div className="col-md-3">
              <div className="mt-3">
                <Link className="btn" to="/"><FontAwesomeIcon icon={faUser} /></Link> 
                <Link className="btn" to="/"><FontAwesomeIcon icon={faMagnifyingGlass} /></Link> 
                <Link className="btn" to="/"><FontAwesomeIcon icon={faShoppingCart} /></Link> 
              </div>
            </div>
          </div>
          <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav m-auto">
              <li className="nav-item item-menu">
                <Link className="nav-link fw-bold m-2" aria-current="page" to="/">Áo khoác <FontAwesomeIcon className="iconMenu" icon={faCaretUp} /></Link>
              </li>
              <li className="nav-item item-menu">
                <Link className="nav-link fw-bold m-2" to="/product">Áo thun <FontAwesomeIcon className="iconMenu" icon={faCaretUp} /></Link>
              </li>
              <li className="nav-item item-menu">
                <Link className="nav-link fw-bold m-2" to="/product">Sơ mi <FontAwesomeIcon className="iconMenu" icon={faCaretUp} /></Link> 
              </li>
              <li className="nav-item item-menu">
                <Link className="nav-link fw-bold m-2" to="/product">Quần dài <FontAwesomeIcon className="iconMenu" icon={faCaretUp} /></Link>
              </li>
              <li className="nav-item item-menu">
                <Link className="nav-link fw-bold m-2" to="/product">Quần short <FontAwesomeIcon className="iconMenu" icon={faCaretUp} /></Link>
              </li>
              <li className="nav-item item-menu">
                <Link className="nav-link fw-bold m-2" to="/product">Phụ kiên <FontAwesomeIcon className="iconMenu" icon={faCaretUp} /></Link>
              </li>
              <li className="nav-item item-menu">
                <Link className="nav-link fw-bold m-2" to="/product">All</Link>
              </li>
              <li className="nav-item item-menu">
                <Link className="nav-link fw-bold m-2" to="/product">SALE</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
        </div>
    )
}

export default Header;