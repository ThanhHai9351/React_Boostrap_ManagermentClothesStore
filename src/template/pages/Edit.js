import React, { Fragment, useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from "axios";

function Edit() {
    const { id } = useParams(); 
    const [clother, setClother] = useState({
        name: "",
        size: "",
        material: "",
        description: "",
        image: ""
    });
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`http://localhost:8080/clothers?id=${id}`)
            .then(res => {
                const data = res.data[0];
                setClother({
                    name: data.name,
                    size: data.size,
                    material: data.material,
                    description: data.description,
                    image: data.image
                });
            })
            .catch(error => {
                console.error('Error fetching clothes:', error);
            });
    }, [id]);

    const handleChange = () => {
        axios.put(`http://localhost:8080/clothers/${id}`, clother)
            .then(res => {
                console.log('Clothes updated:', res.data);
                navigate('/');
            })
            .catch(error => {
                console.error('Error updating clothes:', error);
            });
    }

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setClother(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    return (
        <div>
            <div className="w-50 m-auto p-3 mt-5" style={{ border: '1px solid #cdcdcd', borderRadius: '15px' }}>
                <form className="row">
                    <h3 className="text-center" style={{ textShadow: '2px 2px #cdcdcd' }}>Edit clother</h3>
                    <div className="col-md-6">
                        <label className="form-label">Name</label>
                        <input type="text" className="form-control" name="name" value={clother.name} onChange={handleInputChange} placeholder="Enter name ..." />
                    </div>
                    <div className="col-md-6">
                        <label className="form-label">Size</label>
                        <input type="number" min="36" max="43" name="size" className="form-control" value={clother.size} onChange={handleInputChange} placeholder="Enter size ..." />
                    </div>
                    <div className="col-md-6">
                        <label className="form-label">Material</label>
                        <input type="text" className="form-control" name="material" value={clother.material} onChange={handleInputChange} placeholder="Enter material ..." />
                    </div>
                    <div className="col-md-6">
                        <label className="form-label">Description</label>
                        <input type="text" className="form-control" name="description" value={clother.description} onChange={handleInputChange} placeholder="Enter Desciption ..." />
                    </div>
                    <div className="col-md-6">
                        <label className="form-label">Image URL</label>
                        <input type="text" className="form-control" name="image" value={clother.image} onChange={handleInputChange} placeholder="Enter Image URL ..." />
                    </div>
                </form>
                <div className="mt-3">
                    <button className="btn btn-primary" onClick={handleChange}>Confirm changes</button>
                </div>
            </div>
        </div>
    );
}

export default Edit;
