import React from 'react';
import './Release.css';
import {useState, useEffect } from 'react';


function Release() {
    
      const [formData, setFormData] = useState({
        fullname: '',
        email: '',
        phone: '',
        petType: '',
        petName:'',
        gender: '',
        reason:'',
        date:''


      })
    
      const onChangeHandler = (event) => {
    
        console.log(event)
        if (event.target.name === 'release') {
    
          let copy = { ...formData }
    
          if (event.target.checked) {
            copy.release.push(event.target.value)
          } else {
            copy.release = copy.languages.filter(el => el !== event.target.value)
          }
    
          setFormData(copy)
    
        } else {
          setFormData(() => ({
            ...formData,
            [event.target.name]: event.target.value
          }))
        }
      }
    
    //   const onSubmitHandler = (event) => {
    //     event.preventDefault()
    //     console.log(formData)
      
    //     fetch('http://localhost:3000/send-release-email', {
    //         method: 'POST',
    //         headers: {
    //           "accept" : "text/plain",
    //           "Content-Type" : "application/json",
    //           "Access-Control-Allow-Origin" : "*"
    //         },
    //         body : JSON.stringify(formData)
    //       })
    //       .then[res => {
    //         console.log(res.JSON());
    //         console.log("Email as been sent to administrator.");
    //       }]
    //     }
    
    const onSubmitHandler = (event) => {
        event.preventDefault();
        console.log(formData);
        fetch('http://localhost:4234/send-release-email', {
            method: 'POST',
            headers: {
                "accept": "text/plain",
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "*"
            },
            body: JSON.stringify(formData)
        })
        .then(data => {
            console.log(data);
            console.log("Email has been sent to administrator.");
        })
        .catch(error => {
            console.error('Error:', error);
        });
    }
      

      return (
        <div className="Release">
            <div className='bb'>
                <h1>Releasing Form</h1>
                <h5>make appointment to release</h5>
            <form onSubmit={onSubmitHandler}>
            <div className="form-group">
          <label htmlFor="fullname" className="form-label">Fullname</label>
          <input className="form-control" placeholder='Fullname' name="fullname" onChange={onChangeHandler} value={formData.username} />
        </div>
        <div className="form-group">
          <label htmlFor="email" className="form-label">Email</label>
          <input className="form-control" placeholder='xxxxxxx@gmail.com' name="email" onChange={onChangeHandler}type="email" value={formData.email} />
        </div>
            <div className="form-group">
          <label htmlFor="phone" className="form-label">Phone Number</label>
          <input className="form-control" placeholder='xxxxxxxx' name="phone" onChange={onChangeHandler} value={formData.phone} />
        </div>
        <div className="form-group">
          <label htmlFor="petType" className="form-label">Pet Type</label>
          <input className="form-control" placeholder='dog/cat/etc...' name="petType" onChange={onChangeHandler} value={formData.username} />
        </div>
        <div className="form-group">
          <label htmlFor="petname" className="form-label">Pet Name</label>
          <input className="form-control" placeholder='Pet Name' name="petName" onChange={onChangeHandler} value={formData.username} />
        </div>
        
        <div className="form-group">
          <label htmlFor="gender" className="form-label">Gender</label>
          <div>
            <div>
              <input type="radio" name="gender" value="male" onChange={onChangeHandler} checked={formData.gender === 'male'} />
              <label htmlFor="male">Male</label>
            </div>
            <div>
              <input type="radio" name="gender" value="female" onChange={onChangeHandler} checked={formData.gender === 'female'} />
              <label htmlFor="female">Female</label>
            </div>
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="reason" className="form-label">Releasing Reason</label>
          <input className="form-control" placeholder='have to move other country/etc...' name="reason" onChange={onChangeHandler} value={formData.reason} />
        </div>
        <label htmlFor="date" className="form-label">Appointment</label>
          <input className="form-control" placeholder='xx-xx-xxxx, xx:xx AM/PM' name="date" onChange={onChangeHandler} value={formData.date} />
          <br></br>
          <div className="form-group">
          <button className="button" type="submit" >Submit</button>
        </div>
          </form>
        </div>
        </div>
    );
}
export default Release;