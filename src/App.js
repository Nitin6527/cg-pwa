import React, { useState } from 'react';
import { RxHamburgerMenu } from "react-icons/rx";
import { TbMessageFilled } from "react-icons/tb";
import { FaRegUser } from "react-icons/fa";
import './App.css';

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  
  const [list] = useState([
    { name: 'Dr. John Doe', description: 'Cardiologist', time: '9:00 AM' },
    { name: 'Dr. Sarah Lee', description: 'Dermatologist', time: '10:30 AM' },
    { name: 'Dr. Michael Smith', description: 'Neurologist', time: '12:00 PM' },
    { name: 'Dr. Emily Davis', description: 'Pediatrician', time: '1:30 PM' },
    { name: 'Dr. David Johnson', description: 'Orthopedic Surgeon', time: '3:00 PM' },
    { name: 'Dr. Laura Wilson', description: 'Dentist', time: '4:30 PM' }
  ]);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredList = list.filter(item => 
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="App" style={{position:'relative',height:'100vh'}}>
      <div style={{
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center', 
        backgroundColor: '#F8F8F8', 
        height: '60px', 
        padding: '0 20px', 
        borderBottom: '1px solid #D3D3D3'
      }}>
        <RxHamburgerMenu size={30}/>
        <FaRegUser size={30}/>
      </div>

      <div style={{width: '100%', display: 'flex', justifyContent: 'center', marginTop: '20px'}}>
        <input
          style={{
            margin: '0 25px', 
            border: '1px solid #D3D3D3', 
            width: '100%', 
            borderRadius: '20px', 
            height: '45px',
            padding:'0 20px', 
            fontSize: '16px'
          }}
          type="text"
          placeholder="      Search"
          value={searchTerm}
          onChange={handleSearch}
        />
      </div>

      <div>
        {filteredList.map((item, index) => (
          <div 
            style={{
              marginTop: '20px', 
              display: 'flex', 
              justifyContent:'space-between', 
              alignItems: 'center',
              margin:'10px 20px',
              gap:'10px',
            }} 
            key={index}
          >
           <div    
              style={{
              marginTop: '20px', 
              display: 'flex', 
              justifyContent:'space-between', 
              alignItems: 'center',
              gap:'10px'
            }} >
            <img 
              style={{
                height: '50px', 
                width: '50px', 
                borderRadius: '50%', 
                border: '1px solid black', 
              }} 
              src="https://img.freepik.com/premium-photo/male-worker-wearing-green-yellow-color-kit-isolated-white-background_1029679-144270.jpg?size=626&ext=jpg&ga=GA1.1.1472061257.1723747564&semt=ais_hybrid" 
              alt="doctor-profile" 
            />
            <div style={{ display: 'flex', width:'150px',textAlign:'start', flexDirection: 'column'}}>
              <strong style={{fontWeight:400}}>{item.name}</strong>
              <span style={{fontSize:'10px'}}>{item.description}</span>
            </div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column',fontSize:'12px' }}>
              <span>{item.time}</span>
            </div>
          </div>
        ))}
      </div>
      <div style={{position:'absolute',bottom:'10px',right:'20px', display:'flex', justifyContent:'flex-end'}}>
      <TbMessageFilled size={40}/>
      </div>
    </div>
  );
}

export default App;
