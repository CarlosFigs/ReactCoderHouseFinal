import React from 'react'
import "./checkout.css"

const FormCheckout = ({dataForm, handleOnChangeInputs, handleSubmitForm}) => {
  return (
    <form onSubmit={handleSubmitForm}>
    <label>Nombre Completo</label>
    <input type="text" value={dataForm.fullname} name="fullname" onChange={handleOnChangeInputs}/>
    <label>Numero de telefono</label>
    <input type="number" value={dataForm.phone} name="phone" onChange={handleOnChangeInputs}/>
    <label>Email</label>
    <input type="email" value={dataForm.email} name="email" onChange={handleOnChangeInputs}/>
    <label>Confirme el email</label>
    <input type="email" value={dataForm.email2} name="email2" onChange={handleOnChangeInputs}/>
    <button id="formButton"type='submit'>Enviar orden</button>
</form>
  )
}

export default FormCheckout