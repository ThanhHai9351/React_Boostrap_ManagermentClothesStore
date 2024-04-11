import React, { useEffect,useState } from 'react';
import { Link, useParams,useNavigate } from 'react-router-dom';
import axios from "axios";


function Detail() {
    const { id } = useParams(); 
    const [clothers, setClothers] = useState([]);
    const navigate = useNavigate();

    const deleteClother = () =>{
        axios.delete(`http://localhost:8080/clothers/${id}`)
        .then((response) => {
            console.log(response.data);
        })
        .catch((error) => {
            console.error(error);
        });
       navigate('/')
    }

    useEffect(()=>{
        axios.get(`http://localhost:8080/clothers?id=${id}`)
            .then(res=>res.data)
            .then((data)=>{
                setClothers(data);
            })
    },[])

    console.log(clothers[0])


    return (
        <div className='p-3'>
            <h3 className='mx-5 mt-2'>Detail</h3>
            {
                clothers.length === 0 ? (<p>Loading...</p>) : (
                <div className='m-auto w-50 p-3' style={{border:' 1px solid #cdcdcd', borderRadius: 15}}>
                    <table className='table table-striped table-hover m-auto' >
                    <tr>
                        <th>Name</th>
                        <td>{clothers[0].name}</td>
                    </tr>
                    <tr>
                        <th>Image</th>
                        <td>
                            <img src={clothers[0].image} height={300}/>
                        </td>
                    </tr>
                    <tr>
                        <th>Description</th>
                        <td>{clothers[0].description}</td>
                    </tr>
                    <tr>
                        <th>Function</th>
                        <td>
                            <button className='btn btn-danger m-2' onClick={deleteClother}>Delete</button>
                            <Link className='btn btn-warning m-2' to={`/edit/${clothers[0].id}`}>Edit</Link>
                        </td>
                    </tr>
                </table>
                </div>
                )
            }
         
        </div>
    );
}

export default Detail;
