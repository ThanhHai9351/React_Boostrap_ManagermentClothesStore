import { Link } from "react-router-dom";
import { useEffect } from "react";
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
          <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">Navbar</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/product">Product</Link>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"></input>
              <button className="btn btn-outline-success" type="submit">Search</button>
            </form>
          </div>
        </div>
      </nav>
        </div>
    )
}

export default Header;