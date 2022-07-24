import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Home = () => {
  const contacts = useSelector((state) => state);
  const dispatch = useDispatch();
  const clickHandle = (id) => {
    dispatch({ type: "Delete", id });
  };
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12 my-5 d-flex justify-content-end">
          <Link to="/add" className="btn btn-outline-dark ">
            Add Contact
          </Link>
        </div>
        <div className="col-md-10 mx-auto">
          <table className="table table-hover">
            <thead className="text-white bg-dark text-center">
              <tr>
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">Email</th>
                <th scope="col">Number</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody className="text-center">
              {contacts.length > 0 ? (
                <>
                  {contacts.map((item, index) => (
                    <tr key={index}>
                      <td>{index + 1}</td>
                      <td>{item.name}</td>
                      <td>{item.email}</td>
                      <td>{item.number}</td>
                      <td>
                        <Link
                          to={`/edit/${item.id}`}
                          className="btn btn-sm btn-primary"
                        >
                          Edit
                        </Link>
                        <button
                          type="button"
                          className="btn btn-sm btn-danger mx-2"
                          onClick={() => clickHandle(item.id)}
                        >
                          delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </>
              ) : (
                <h1 className="text-center">There is no info</h1>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Home;
