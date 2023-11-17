import React from "react";
import { useState } from 'react';

const Form = () => {
  
  const [values, setValues] = useState({
    nombre: "",
    apellido: "",
    email: "",
    telefono: "",
    password: "",
    passwordConf: "",
  });


  const handleSubmit = (event) => {

    event.PrevemtDefault();

  }

  const handleChange = (event) => {

    const {target} = event;
    const {name, value} = target;

    const newValues = {
      ...values,
      [name]: value,
    };


    setValues(newValues);
    
  }


  return (
    <div  className="signupFrm">

    <form className="form" onSubmit = {handleSubmit} >
      <h1 className="title">Registro</h1>

      <div className="inputContainer">
        <input 
          id="nombre" 
          name="nombre" 
          className="input" 
          type="text" 
          value={values.nombre} 
          onChange={handleChange}
        />
        <label htmlFor="nombre" className="label">Nombre:</label>
      </div>

      <div className="inputContainer">
        <input 
          id = "apellido" 
          name = "apellido" 
          className = "input" 
          type = "text" 
          value ={values.apellido} 
          onChange={handleChange}
        />
        <label htmlFor="apellido" className="label">Apellido:</label>
      </div>

      <div className="inputContainer">
        <input 
          id = "email" 
          name = "email" 
          className = "input" 
          type = "email" 
          value = {values.email} 
          onChange={handleChange}
        />
        <label htmlFor="email" className="label">Email:</label>
      </div>

      <div className="inputContainer">
        <input 
          id="telefono" 
          name="telefono" 
          className="input" 
          type="tel" 
          value = {values.telefono} 
          onChange={handleChange}
        />
        <label htmlFor="telefono" className="label">Teléfono:</label>
      </div>

      <div className="inputContainer">
        <input 
          id="password" 
          name="password" 
          className="input" 
          type="password" 
          value={values.password} 
          onChange={handleChange}
        />
        <label htmlFor="password" className="label">Password:</label>
      </div>
      
     
      <div className="inputContainer">
        <input 
          id="passwordConf" 
          name="passwordConf" 
          className="input" 
          type="password" 
          value = {values.passwordConf} 
          onChange={handleChange}
        />
        <label htmlFor="passwordConf" className="label">Confirmar Password:</label>
      </div>
        
      <button type="submit" className="submitBtn">Validar</button>
    </form>
    </div>
  );
};

export default Form;
