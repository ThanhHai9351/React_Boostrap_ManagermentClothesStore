import { Link } from "react-router-dom";
import { useEffect,useState } from "react";
import { Routes,Route } from 'react-router-dom';
import axios from "axios";
import React from "react"

function Dashboard()
{
    const [clothers, setClothers] = useState([]);

    useEffect(()=>{
        axios.get('http://localhost:8080/clothers?_start=0&_end=4')
            .then(res=>res.data)
            .then((data)=>{
                setClothers(data);
            })
            .catch(function (error) {
                console.log(error);
            })
    },[])

    return (
            <div className="main">
                <h1 className="p-3" style={{textShadow: '2px 2px #cdcdcd'}}>Dashboard</h1>
                <div className="row m-3">
                    {clothers.map(clother => (
                        <div key={clother.id} className="card col-md-3 m-3" style={{width: 300}}>
                        <img src={clother.image} className="card-img-top" alt="..." height={300}  />
                        <div className="card-body">
                        <h5 className="card-title">
                            <Link className="text-decoration-none text-dark" to={`/detail/${clother.id}`}>{clother.name}</Link>
                        </h5>
                        <p className="card-text">{clother.description}</p>
                        <a href="#" className="btn btn-danger">Buy Now</a>
                        </div>
                    </div>
                    ))}
                </div>
            </div>
    )
}

export default Dashboard;