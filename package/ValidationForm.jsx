import React from 'react'
import { useState } from 'react';
import './index.css';
import { onSubmit } from './onSubmit';
import { createRef } from 'react';
import { createContext } from 'react';

export const ValidationFormContext = createContext();

export const ValidationForm = ({ onCompleted, label, className, ...props }) => {

   const inputs = createRef([]);
   inputs.current = [];

   const [error, setError] = useState("_");

   const formObject = {
      inputs,
      onCompleted,
      error: error,
      setError: setError,
   }

   return (
      <ValidationFormContext.Provider value={{
         formObject
      }}>
         <form className={className ? `${className} validation-form` : "validation-form"} onSubmit={e=> onSubmit(e, formObject)}>

            <div className="error-widget" style={{visibility: error !== "_" ? "visible" : "hidden"}}>
               <p>{error}</p>
            </div>

            {[props.children].map(child => child)}
            <input type="submit" value={label} />
         </form>
      </ValidationFormContext.Provider>
   )
}

export * from './ValidInput';
export * from './requirements';