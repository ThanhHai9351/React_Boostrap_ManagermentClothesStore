import axios from "axios";
import React from "react"
import {useNavigate } from 'react-router-dom';
import $ from "jquery"

function Create()
{
    const navigate = useNavigate();
    const handleCreate = () =>{
        axios.post('http://localhost:8080/clothers', {
        name: $('#name').val(),
        size:  $('#size').val(),
        material:  $('#material').val(),
        description:  $('#description').val(),
        image:  $('#image').val()
    })
    .then(res => {
        console.log('Clothes created:', res.data);
        navigate('/')
    })
    .catch(error => {
        console.error('Error creating clothes:', error);
    });
    }
    return (
        <div className="w-50 m-auto p-3 mt-5" style={{border: '1px solid #cdcdcd', borderRadius: '15px'}}>
        <form className="row">
            <h3 className="text-center" style={{textShadow: '2px 2px #cdcdcd'}}>Create clother</h3>
            <div className="col-md-6">
            <label className="form-label">Name</label>
            <input type="text" className="form-control" id="name" placeholder="Enter name ..." />
            </div>
            <div className="col-md-6">
            <label className="form-label">Size</label>
            <input type="number" min="36" max="43" id="size"  className="form-control"  placeholder="Enter size ..." />
            </div>
            <div className="col-md-6">
            <label className="form-label">Material</label>
            <input type="text" className="form-control" id="material"  placeholder="Enter material ..." />
            </div>
            <div className="col-md-6">
            <label className="form-label">Description</label>
            <input type="text" className="form-control" id="description"  placeholder="Enter Desciption ..." />
            </div>
            <div className="col-md-6">
            <label className="form-label">Image URl</label>
            <input type="text" className="form-control" id="image"  placeholder="Enter Iamge Url ..." />
            </div>
        </form>
         <div className="mt-3">
         <button className="btn btn-primary" onClick={handleCreate}>Create</button>
     </div>
        </div>
    );
}

export default Create;