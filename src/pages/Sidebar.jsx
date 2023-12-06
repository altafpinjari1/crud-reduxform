import React from 'react';
import { Link } from 'react-router-dom';
import ApiIcon from '@mui/icons-material/Api';
import TaskIcon from '@mui/icons-material/Task';
import DashboardIcon from '@mui/icons-material/Dashboard';
import '../style/sidebar.css';


const Sidebar = () => {
  return (
    <div style={{ display: 'flex',backgroundColor: '#f1f1f1',height:'105vh' }}>
    <div style={{ width: '20%', backgroundColor: '#fff', padding: '20px',height:'97vh',borderRadius:'2vh',marginTop:'2vh',marginLeft:'2vh'}}>
      <h1 style={{fontSize:'25px',fontWeight:'800'}}><ApiIcon style={{fontSize:'30px',marginTop:'-1vh'}}/>&nbsp;Bress</h1>
      <hr style={{marginTop:'2vh'}}/>
      <Link to="/" style={{ textDecoration: 'none', display: 'block',fontSize:'20px',marginTop:'4vh',fontWeight:'600'}}><TaskIcon /> &nbsp;&nbsp;Task</Link>
      <Link to="/addform" style={{ textDecoration: 'none', display: 'block',fontSize:'20px',marginTop:'4vh',fontWeight:'600'}}><DashboardIcon /> &nbsp;&nbsp;Form</Link>
    </div>
  </div>
  );
};

export default Sidebar;
