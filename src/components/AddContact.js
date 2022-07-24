import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";

const AddContact = () => {
    const [name,setName] = useState('');
    const [email,setEmail] = useState('');
    const [number,setNumber] = useState('');

    const contact = useSelector((state) =>state)
    const dispatch = useDispatch();
    const history = useHistory();

    const handleSubmit = (e) =>{
        e.preventDefault()
        const checlEmail = contact.find(contacts =>contacts.email === email && contacts);
        const checlNumber = contact.find(contacts =>contacts.number === number && contacts);
        const checlName = contact.find(contacts =>contacts.name === name && contacts);
        if(!email || !number || !email){
            return toast.warning('please fill all inputs')
        }
        if(checlEmail){
            return toast.error('email already exsist')
        }
        if(checlName){
            return toast.error('name already exsist')
        } if(checlNumber){
            return toast.error('number already exsist')
        }
        const data = {
            id: Math.random(10000).toFixed(3).toString(),
            name,
            email,
            number
        }

        dispatch({type: 'Add',payload: data})
        toast.success('entered successfully')
        history.push('/');
        
    }
  return (
    <div className="container">
      <div className="row">
        <h1 className="display-3 text-center">Add Contact</h1>
        <div className="col-md-10 shadow mx-auto p-5">
          <form onSubmit={handleSubmit}>
              <div className="input-group">
                  <input type='text' className="form-control" placeholder="Name" value={name} onChange={e =>setName(e.target.value)} />
              </div>
              <div className="input-group  my-3">
                  <input type='email' className="form-control " placeholder="Email" value={email} onChange={e =>setEmail(e.target.value)} />
              </div>
              <div className="input-group">
                  <input type='number' className="form-control" placeholder="Number" value={number} onChange={e =>setNumber(e.target.value)} />
              </div>
              <div className="input-group">
                  <input type='submit' value='Add Student' className='btn btn-block btn-dark mt-3' />
              </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddContact;
