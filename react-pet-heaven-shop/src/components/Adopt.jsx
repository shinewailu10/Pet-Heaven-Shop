import React from 'react';
import './Adopt.css';
import { useEffect, useState } from 'react';


function Adopt() {
    const pets = [
        {id:"1",name:"Dogs"},
        {id:"2",name:"Cats"},
        {id:"3",name:"Birds"},
        {id:"4",name:"Rabbits"},
        {id:"5",name:"Guinea Pigs"},
        {id:"6",name:"Hamster"}



      ];
    
      const names = [
        {id:"1",petId:"1",name:"Chicha"},
        {id:"2",petId:"1",name:"Goldie"},
        {id:"3",petId:"1",name:"Shin Shin"},
        {id:"4",petId:"1",name:"Mojo"},
        {id:"5",petId:"1",name:"Julie"},
        {id:"6",petId:"1",name:"Nigel"},
        {id:"7",petId:"1",name:"Jiji & Jaja"},
        {id:"8",petId:"1",name:"Johan"},
        {id:"9",petId:"1",name:"Pippa"},
        {id:"10",petId:"1",name:"Jessy"},
        {id:"11",petId:"1",name:"Shuyi"},
        {id:"12",petId:"1",name:"Coka"},
        {id:"13",petId:"2",name:"Ziggy"},
        {id:"14",petId:"2",name:"Popo & Soda"},
        {id:"15",petId:"2",name:"Poni"},
        {id:"16",petId:"2",name:"Suushi"},
        {id:"17",petId:"2",name:"Paw Paw"},
        {id:"18",petId:"2",name:"Moly"},
        {id:"19",petId:"2",name:"Borito"},
        {id:"20",petId:"2",name:"Par"},
        {id:"21",petId:"2",name:"Walter"},
        {id:"22",petId:"2",name:"Zat"},
        {id:"23",petId:"2",name:"Nana"},
        {id:"24",petId:"2",name:"Dan Dan"},
        {id:"25",petId:"3",name:"Fufu"},
        {id:"26",petId:"3",name:"Rafa"},
        {id:"27",petId:"3",name:"Sunny"},
        {id:"28",petId:"3",name:"Julo"},
        {id:"29",petId:"3",name:"Kiki & Vivi"},
        {id:"30",petId:"3",name:"Pepe"},
        {id:"31",petId:"3",name:"Gogo & Kiw"},
        {id:"32",petId:"4",name:"DeDee & Bebee"},
        {id:"33",petId:"4",name:"Bum Bum"},
        {id:"34",petId:"4",name:"Ben"},
        {id:"35",petId:"5",name:"Pou"},
        {id:"36",petId:"5",name:"Kon"},
        {id:"37",petId:"5",name:"Yaw Yaw"},
        {id:"38",petId:"6",name:"Harmony"},
        {id:"39",petId:"6",name:"Hammy"},
        {id:"40",petId:"6",name:"Caca"}

      ]
    
   
    
      const [ pet, setPet] = useState([]);
      const [ name, setName] = useState([]);
    
      useEffect(()=>{
        setPet(pets);
      },[])
    
      const handlePet = (id,event) => {
        const dt = names.filter(x => x.petId === id);
        setName(dt);
        console.log(dt);

        console.log(event)
        if (event.target.name === 'pet') {
    
          let copy = { ...formData }
    
          if (event.target.checked) {
            copy.pet.push(event.target.value)
          } else {
            copy.pet = copy.pet.filter(el => el !== event.target.value)
          }
    
          setFormData(copy)
    
        } else {
          setFormData(() => ({
            ...formData,
            [event.target.name]: event.target.value
          }))
        }
        
      }
    
      const [formData, setFormData] = useState({
        fullname: '',
        email: '',
        phone: '',
        petType:'',
        petid:'',
        date:'',

      })
    
      const onChangeHandler = (event) => {
    
        console.log(event)
        if (event.target.name === 'adopt') {
    
          let copy = { ...formData }
    
          if (event.target.checked) {
            copy.adopt.push(event.target.value)
          } else {
            copy.adopt = copy.adopt.filter(el => el !== event.target.value)
          }
    
          setFormData(copy)
    
        } else {
          setFormData(() => ({
            ...formData,
            [event.target.name]: event.target.value
          })
          )
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
        fetch('http://localhost:4234/send-adopt-email', {
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
            <div className="Adopt">
                <div className='aa'>
                <h1>Adoption Form</h1>
                <h5>make appointment to adopt</h5>
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
            <label htmlFor="pets" className="form-label">Pet Type</label>
            <select id="ddlPet" className='form-control select-class' name="petType" onChange={(e) => handlePet(e.target.value, e)} value={formData.petType}>
                <option value="0" name='type'>Select Pets</option>
              {
                pet && 
                pet !== undefined ?
                pet.map((ctr,index) => {
                    return(
                        <option key={index} value={ctr.id}>{ctr.name}</option>
                    )
                })
                :"No Pet"
        
              }
              </select>
              </div>
              <div className="form-group">
              <label htmlFor="petname" className="form-label">Pet Name</label>
              <select id="ddlName" className='form-control select-class' name="petid" onChange={onChangeHandler} value={formData.petid}>
                <option value="0">Select Name</option>
              {
                name && 
                name !== undefined ?
                name.map((ctr,index) => {
                    return(
                        <option key={index} value={ctr.name}>{ctr.name}</option>
                    )
                })
                :"No Name"
        
              }
              </select>
              </div>
              <div className="form-group">
              <label htmlFor="date" className="form-label">Appointment</label>
              <input className="form-control" placeholder='xx-xx-xxxx, xx:xx AM/PM' name="date" onChange={onChangeHandler} value={formData.date} />
            </div>
            <br></br>
              <div className="form-group">
              <button className="button" type="submit" >Submit</button>
            </div>
              </form>
            </div>
            </div>
        );
      }
export default Adopt;