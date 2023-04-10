import React from 'react';

function LandingPage(){
    return  (
        <div style={{ backgroundColor: '#D9D9D9', height: '100vh', fontFamily: 'Barlow' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '20px' }}>
          <img src={require("./images/logo.png")} alt="Logos" style={{ height: '60px' }} />
          <div style={{ marginRight: '1700px', fontSize: '40px', fontWeight: 'ExtraBold', color: '#000000' }}>CHRONOS</div>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: 'calc(100vh - 300px)' }}> 
          <div style={{ fontSize: '48px', marginBottom: '30px', color: 'black', textAlign: 'center' }}>Welcome Employee Name </div> 
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%', maxWidth: 'calc(100vh - 100px)', marginBottom: '20px' }}>
              <button type="button" onClick={event => window.location.href='/punchin'} style={{ padding: '15px', borderRadius: '5px', backgroundColor: 'green', color: 'white', border: 'none', width: '50%', fontSize: '24px' }}>Punch In/Out</button> &nbsp;&nbsp;&nbsp;
              <button type="button" style={{ padding: '15px', borderRadius: '5px', backgroundColor: 'green', color: 'white', border: 'none', width: '50%', fontSize: '24px' }}>Enter Timesheet</button>
             
            </div>
        </div>
      </div>
    );
    
}
export default LandingPage;
//space-between
//calc(100vh - 100px)
//pink: #ff5e8e
// <button type="button" style={{ padding: '15px', borderRadius: '5px', backgroundColor: 'blue', color: '#ff5e8e', border: 'none', width: '50%', fontSize: '24px' }}> Enter Timesheet</button>