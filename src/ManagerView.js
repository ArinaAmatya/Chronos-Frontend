import React from 'react';
import DataTable from 'react-data-table-component';
import { useState, useEffect } from 'react';

function ManagerView() {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [perPage, setPerPage] = useState(7);
//   const [selectedDate, setSelectedDate] = useState(null);
  const columns = [
    {
      name: "First Name",
      selector: (row) => row.first_name
    },
    {
      name: "Last Name",
      selector: (row) => row.Hlast_name
    },
    {
      name: "email",
      selector: (row) => row.email
    }
  ];

  useEffect(() => {
    fetchTableData();
  }, []);

  async function fetchTableData() {
    setLoading(true);
    const response = await fetch('http://127.0.0.1:8000/api/accounts/manager', {
      method: 'GET',
      headers: {
        'accept':'application/json', 'Authorization' : 'token ' + localStorage.getItem('token')
      }})
      .then(response => response.text())

    const jsonData = JSON.parse(response)
    console.log(jsonData.Response)
    setData(jsonData.Response);
    setLoading(false);
  }

//   function filterDataByDate(date) {
//     const filteredData = data.filter((item) => item.Date === date.toISOString().slice(0,10));
//     setFilteredData(filteredData);
//   }

  useEffect(() => {
    if (selectedDate) {
      filterDataBy(selectedDate);
    } else {
      setFilteredData(data);
    }
  }, [data, selectedDate]);

  return (
    <div style={{ backgroundColor: '#D9D9D9', height: '100vh', fontFamily: 'Barlow' }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '20px' }}>
        <img src={require("./images/logo.png")} alt="Logos" style={{ height: '50px' }} />
        <div style={{ marginRight: '1700px', fontSize: '40px', fontWeight: 'ExtraBold', color: '#000000' }}>CHRONOS</div>

      </div>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'space-between', height: 'calc(100vh - 300px)' }}>
        <div style={{ fontSize: '40px', marginBottom: '30px', color: 'black', textAlign: 'center' }}>View Employees</div>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%', maxWidth: 'calc(100vh - 100px)', marginBottom: '400px' }}>
          <DataTable
            columns={columns}
            data={data}
            progressPending={loading}
          />
        </div>
      </div>
    </div>
  );
}

export default managerViewEmployees;

