import React, { useState , useEffect } from 'react'

export const DateTime = () => {

    var [date, setDate] = useState(new Date());

    useEffect(() => {
        var timer = setInterval(() =>setDate(new Date()), 1000)
        return function cleanup() {
            clearInterval(timer)
        }
    });

    return(
        <div>
             <div style={{ fontSize: '80px', marginTop: '30px', color: '#ff5e8e', textAlign: 'center' }}>{date.toLocaleTimeString()}</div>
        </div>
    )
}

export default DateTime