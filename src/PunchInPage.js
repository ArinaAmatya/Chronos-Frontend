import React from 'react';
import DateTime from './components/DateTime';

function PunchInPage(){
    return  (
        <div style={{ backgroundColor: '#D9D9D9', height: '100vh', fontFamily: 'Barlow' }}>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: 'calc(100vh - 300px)' }}> 
          <DateTime></DateTime>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', height: 'calc(100vh - 100px)'}}>
                <input type="checkbox" style={{ width: '200px', height: '200px' }} />
            </div>
            <button type="submit" style={{ padding: '15px', borderRadius: '5px', backgroundColor: 'green', color: 'white', border: 'none', width: '20%', fontSize: '24px', padding: '10px 20px'}}>Submit</button> &nbsp;&nbsp;&nbsp;
        </div>
      </div>
    );
    
}
export default PunchInPage;
//space-between
//calc(100vh - 100px)
//pink: #ff5e8e
// <button type="button" style={{ padding: '15px', borderRadius: '5px', backgroundColor: 'blue', color: '#ff5e8e', border: 'none', width: '50%', fontSize: '24px' }}> Enter Timesheet</button>