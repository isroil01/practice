import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory, useParams } from "react-router-dom";
import { toast } from "react-toastify";

const EditContact = () => {
    const [name,setName] = useState('');
    const [email,setEmail] = useState('');
    const [number,setNumber] = useState('');
  const { id } = useParams();

  const contact = useSelector((state) => state);
  const current = contact.find((item) => item.id === parseInt(id));
  const dispatch = useDispatch();
  const history = useHistory()

  useEffect(() =>{
      if(current){
          setName(current.name)
          setEmail(current.email)
          setNumber(current.number)
      }
  },[current])

  const editSubmit = (e) =>{
    e.preventDefault()
    const checlEmail = contact.find(contacts =>contacts.id !== parseInt(id) && contacts.email === email);
    const checlNumber = contact.find(contacts =>contacts.id !== parseInt(id) && contacts.number === number);
    const checlName = contact.find(contacts =>contacts.id !== parseInt(id) && contacts.name === name);
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
        id: parseInt(id),
        name,
        email,
        number
    }

    dispatch({type: 'Update',payload: data})
    toast.success('entered successfully')
    history.push('/');
    
}

  return (
    <div className="container">
      {current ? (
        <>
          {" "}
          <div className="row">
            <h1 className="display-3 text-center">Edit Student</h1>
            <div className="col-md-10 shadow mx-auto p-5">
              <form onSubmit={editSubmit}>
                <div className="input-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Name"
                    value={name}
                    onChange={e =>setName(e.target.value)}
                  />
                </div>
                <div className="input-group  my-3">
                  <input
                    type="email"
                    className="form-control "
                    placeholder="Email"
                    value={email}
                    onChange={e =>setEmail(e.target.value)}
                  />
                </div>
                <div className="input-group">
                  <input
                    type="number"
                    className="form-control"
                    placeholder="Number"
                    value={number}
                    onChange={e =>setNumber(e.target.value)}
                  />
                </div>
                <div className="input-group">
                  <input
                    type="submit"
                    value="Update Student"
                    className="btn btn-block btn-dark mt-3"
                  />
                  <Link to="/" className="btn btn-danger mt-3 mx-3">
                    Cancel
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </>
      ) : (
        <h1 className="display-3 my-5 text-center">
          Student contact with id ${id} not found
        </h1>
      )}
    </div>
  );
};

export default EditContact;
