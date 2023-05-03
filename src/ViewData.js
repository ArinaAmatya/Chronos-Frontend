import React from 'react';
import DataTable from 'react-data-table-component';
import {useState, useEffect} from 'react';
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css" 
function ViewData (){
    const [date, setDate] = useState([])
    const [fromDate, setFromDate] = useState([])
    const [toDate, setToDate] = useState([])
    const [loading, setLoading] = useState(false)
    // const [perPage, setperPage] = useState(7)
    const columns = [
        {
            name: "Date",
            selector: (row) =>row.date
        }, 
        {
            name: "Punch-In Time",
            selector: (row) =>row.Punch
        }, 
        {
            name: "Hours Worked",
            selector: (row) =>row.hoursWorked
        }
    ]
    
//coment up
    useEffect(() => {
        fetchTableData()
    }, []) 

    async function fetchTableData (){
        setLoading(true)
        const URL = "http://127.0.0.1:8000/api/accounts/hoursWorked"
        const response = await fetch(URL)
        const date =  response.json()
        console.log(date)
        setDate(date)
        setLoading(false)
    }
    // // const handleSubmit = async e => {
   
    //     e.preventDefault();
    //     setTimeOnSubmit(date.toLocaleTimeString())
    //     setIsChecked(e.target[0].checked)
    //     setShowClockInClockOut(true)
    //     console.log(isChecked)
    //     console.log(timeOnSubmit)
        
        // const b = localStorage.getItem('token')
    
        // const test = await fetch('http://127.0.0.1:8000/api/accounts/me', {headers: {'accept': 'application/json', 'Authorization' : "token " + b}}).then(response => response.text()).then((body) => console.log(body))
        // console.log(test)
    
        
    
    const [selectedDate, setSelectedDate]= useState (null)
     
    return  (
                <div style={{ backgroundColor: '#D9D9D9', height: '100vh', fontFamily: 'Barlow' }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '20px' }}>
                  <img src={require("./images/logo.png")} alt="Logos" style={{ height: '50px' }} />
                  <div style={{ marginRight: '1700px', fontSize: '40px', fontWeight: 'ExtraBold', color: '#000000' }}>CHRONOS</div>
                   
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'space-between', height: 'calc(100vh - 300px)' }}> 
                  <div style={{ fontSize: '40px', marginBottom: '30px', color: 'black', textAlign: 'center' }}>View Hours</div> 
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%', maxWidth: '140px', marginBottom: '250px' }}>
                    {/* <div>{handleSubmit()}</div> */}
                    <DatePicker 
                        selected = {selectedDate} 
                        onChange ={ date => setSelectedDate(date)} 
                        maxDate = {new Date()}   
                        showYearDropdown
                        scrollableMonthYearDropdown
                    />
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%', maxWidth: 'calc(100vh - 100px)', marginBottom: '400px' }}>
                    <DataTable
                            columns = {columns}
                            data = {date}    
                        />
                    </div>
                </div>
              </div>
            );
}
export default ViewData; 

// import axios from 'axios';
// import {useEffect} from 'react'; 
// import {DataTable} from 'react-data-table-component'; 

// function ViewData(){
    // const columns = [
    //     {
    //         name: "Date"
    //     }, 
    //     {
    //         name: "Time"
    //     }, 
    //     {
    //         name: "Number of Hours"
    //     }, 
    //     {
    //         name: "Date"
    //     }
    // ] 

//         useEfect(() => {
//             const fetchData = async () =>  {
//                 axios.get('')
//                 .then(res => console.log(res)) 
//                 .catch(err => console.log(err)); 
//             }
//         },[])
//     return  (
//         <div style={{ backgroundColor: '#D9D9D9', height: '100vh', fontFamily: 'Barlow' }}>
//         <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '20px' }}>
//           <img src={require("./images/logo.png")} alt="Logos" style={{ height: '60px' }} />
//           <div style={{ marginRight: '1700px', fontSize: '40px', fontWeight: 'ExtraBold', color: '#000000' }}>CHRONOS</div>
//         </div>
//         <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'space-between', height: 'calc(100vh - 300px)' }}> 
//           <div style={{ fontSize: '40px', marginBottom: '30px', color: 'black', textAlign: 'center' }}>View Hours</div> 
//             <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%', maxWidth: 'calc(100vh - 100px)', marginBottom: '20px' }}>
//               <button type="button" onClick={event => window.location.href='/punchin'} style={{ padding: '15px', borderRadius: '5px', backgroundColor: 'green', color: 'white', border: 'none', width: '50%', fontSize: '24px' }}>Punch In/Out</button> &nbsp;&nbsp;&nbsp;
//               <button type="button" style={{ padding: '15px', borderRadius: '5px', backgroundColor: 'green', color: 'white', border: 'none', width: '50%', fontSize: '24px' }}>Enter Timesheet</button>
             
//             </div>
//         </div>
//       </div>
//     );
    
// }
// export default ViewData;
// //space-between
// //calc(100vh - 100px)
// //pink: #ff5e8e
// // <button type="button" style={{ padding: '15px', borderRadius: '5px', backgroundColor: 'blue', color: '#ff5e8e', border: 'none', width: '50%', fontSize: '24px' }}> Enter Timesheet</button>