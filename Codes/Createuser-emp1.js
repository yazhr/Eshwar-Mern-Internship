import React, { useState } from 'react';
import axios from 'axios';

const Createuser1 = () => {
    const [id, setId] = useState('');
    const [name, setName] = useState('');
    const [salary, setSalary] = useState(0);
    const [contact, setContact] = useState(0);

    const Submit = (e) => {
        e.preventDefault();
        console.log(id,name,salary,contact);
        axios.post("http://localhost:3000/Createuser", { id,name,salary,contact })
            .then((response) => {
                console.log(response);
            })
            .catch(err => {
                console.log(err);
            });
    }
    return (
        <div id="createuser">
            <h1>Create User</h1>
            <form className="w-50 bg-white" onSubmit={Submit}>
    <label htmlFor="id">ID:</label>
    <input type="text" id="id" name="id" onChange={(e) => setId(e.target.value)} />
    
    <label htmlFor="name">Name:</label>
    <input type="text" id="name" name="name" onChange={(e) => setName(e.target.value)} />
    
    <label htmlFor="salary">Salary:</label>
    <input type="text" id="salary" name="salary" onChange={(e) => setSalary(e.target.value)} />
    
    <label htmlFor="contact">Contact:</label>
    <input type="text" id="contact" name="contact" onChange={(e) => setContact(e.target.value)} />
    
    <div>
        <button type="submit">SUBMIT</button>
    </div>
</form>

            <div>
                <p>ID: {id}</p>
                <p>Name: {name}</p>
                <p>Salary: {salary}</p>
                <p>Contact: {contact}</p>
            </div>
        </div>
    );
}

export default Createuser1;