// Task.js
import React, { useState } from 'react';
import Sidebar from './Sidebar';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { deleteFormData } from '../redux/Action';
import '../style/task.css';

const Task = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteFormData(id));
  };

  const formData = useSelector((state) => state.formData);

  const inProgressCount = formData.filter((item) => item.status === 'In Progress').length;
  const doneCount = formData.filter((item) => item.status === 'Done').length;
  const totalTasksCount = inProgressCount + doneCount;
  const today = new Date();

  const options = { day: '2-digit', month: 'long', year: 'numeric' };
  const formattedDate = today.toLocaleDateString('en-US', options);

  const filteredFormData = formData.filter((data) =>
    data.title?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const tableStyle = {
    borderCollapse: 'collapse',
    border: '1px solid  #f1f1f1',
    borderRadius: '25px',
    width: '100%',
    paddingLeft: '5px',
    marginTop: '6vh',
  };

  const thTdStyle = {};

  const buttonStyle = {
    cursor: 'pointer',
    padding: '5px',
  };

  const middleCardStyle = {
    overflowY: 'auto',
    maxHeight: '120vh',
  };

  return (
    <>
      <Sidebar />
      <div style={{ marginTop: '-103vh', marginLeft: '1vh' }}>
        <div className="header">
          <input
            type="text"
            placeholder="Search..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <div className="date">
            <span>Date:</span>
            <span>{formattedDate}</span>
          </div>
        </div>
        <div className="middle" style={{ marginTop: '2vh', ...middleCardStyle }}>
          <div className="middle-first">
            <h1 style={{ fontSize: '6vh', fontWeight: '800' }}>Latest Tasks</h1>
            <p>
              <span style={{ fontSize: '3vh' }}>{totalTasksCount}</span> &nbsp;total, proceed to
              resolve them
            </p>
          </div>
          <div className="flex-div">
            <div className="middle-second">
              <p style={{ fontSize: '6vh', fontWeight: '800' }}>{doneCount}</p>
              <span>Done</span>
            </div>
            <div className="middle-third">
              <p style={{ fontSize: '6vh', fontWeight: '800' }}>{inProgressCount}</p>
              <span>In-progress</span>
            </div>
            <div className="button">
              <button>
                <Link to="/addform">Add task</Link>
              </button>
            </div>
          </div>
          <div>
            <hr className="hr" />
            <table style={tableStyle}>
              <thead style={{ padding: '5px' }}>
                <tr>
                  <th style={thTdStyle}>Title</th>
                  <th style={thTdStyle}>Description</th>
                  <th style={thTdStyle}>Price</th>
                  <th style={thTdStyle}>Status</th>
                  <th style={thTdStyle}>Action</th>
                </tr>
              </thead>
              <tbody style={{ padding: '5px' }}>
                {filteredFormData.map((data, index) => (
                  <React.Fragment key={data.id}>
                    <tr>
                      <td style={thTdStyle}>{data.title}</td>
                      <td style={thTdStyle}>{data.description}</td>
                      <td style={thTdStyle}>{data.price}</td>
                      <td style={thTdStyle}>{data.status}</td>
                      <td style={thTdStyle}>
                        <div>
                          <button
                            style={buttonStyle}
                            onClick={() => handleDelete(data.id)}
                          >
                            Delete
                          </button>
                          <Link to={`/addform/${data.id}`}>
                            <button style={buttonStyle}>Edit</button>
                          </Link>
                        </div>
                      </td>
                    </tr>
                    {index < filteredFormData.length - 1 && (
                      <tr>
                        <td colSpan={5} style={{ padding: '5px' }}>
                          <hr />
                        </td>
                      </tr>
                    )}
                  </React.Fragment>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default Task;
