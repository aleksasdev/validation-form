import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { createValues } from './createValues';
import { createInputs } from './createInputs';
import './index.css';
import { onSubmit } from './onSubmit';

export const ValidationForm = (props) => {

   const [values, setValues] = useState(null);
   const [inputs, setInputs] = useState(null);
   const [error, setError] = useState(null);

   const formObject = {
      children: [props.children],
      values: values,
      setValues: setValues,
      inputs: inputs,
      setInputs: setInputs,
      error: error,
      setError: setError,
      submitState: props.submitState
   }

   useEffect(()=>{
      createInputs(formObject);
   }, [values])

   useEffect(()=>{
      createValues(formObject);
   }, [])

   return (
      <form className="validation-form" onSubmit={e=> onSubmit(e, formObject)}>
         {inputs}
         <input type="submit" value={props.label} />

         <div className="error-widget" style={{visibility: error ? "visible" : "hidden"}}>
            <p>{error}</p>
         </div>
      </form>
   )
}
