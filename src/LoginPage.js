import React from 'react';

function LoginPage() {
  return (
    <div style={{ backgroundColor: '#D9D9D9', height: '100vh', fontFamily: 'Barlow' }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '20px' }}>
        <img src={require("./images/logo.png")} alt="Logos" style={{ height: '100px' }} />
        <div style={{ marginRight: '1700px', fontSize: '65px', fontWeight: 'ExtraBold', color: '#000000' }}>CHRONOS</div>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: 'calc(100vh - 100px)' }}>
        <div style={{ fontSize: '48px', marginBottom: '30px', color: '#ff5e8e', textAlign: 'center' }}>LOGIN</div>
        <form style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
          <input type="email" placeholder="Email" style={{ padding: '15px', borderRadius: '5px', border: 'none', marginBottom: '20px', width: '100%', maxWidth: '400px', fontSize: '24px' }} />
          <input type="password" placeholder="Password" style={{ padding: '15px', borderRadius: '5px', border: 'none', marginBottom: '20px', width: '100%', maxWidth: '400px', fontSize: '24px' }} />
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%', maxWidth: '400px', marginBottom: '20px' }}>
            <button type="button" onClick={event => window.location.href='/landing'} style={{ padding: '15px', borderRadius: '5px', backgroundColor: 'green', color: 'white', border: 'none', width: '50%', fontSize: '24px' }}>Login</button>
            <button type="button" style={{ padding: '15px', borderRadius: '5px', backgroundColor: '#D9D9D9', color: '#ff5e8e', border: 'none', width: '50%', fontSize: '24px' }}>Reset Password</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;