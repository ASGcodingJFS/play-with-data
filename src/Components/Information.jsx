import React, { useContext } from 'react'
import { DataContext } from './DataContext'

const Information = () => {

    const {formData} = useContext(DataContext);
  return (
    <div>Information
{ formData && (
     <div>
        <p>First Name : {formData.firstName}</p>
        <p>Last Name : {formData.lastName}</p>
        <p>Address : </p>
        <p>House no : {formData.address1}</p>
        <p>Street : {formData.address2}</p>
        <p>City : {formData.city}</p>
        <p>State: {formData.state}</p>
        <p>PIN : {formData.zip}</p>
        <p>Country : {formData.country}</p>
     </div>   

)}
    </div>
  )
}

export default Information