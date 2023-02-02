import React from 'react'
import { useState } from 'react';
import './index.css';
import { onSubmit } from './onSubmit';
import { createRef } from 'react';
import { createContext } from 'react';

export const ValidationFormContext = createContext();
var setErrorState;

export const ValidationForm = ({ onCompleted, label, className, ...props }) => {

   const inputs = createRef([]);
   inputs.current = [];

   const [error, setError] = useState("_");

   if(!setErrorState) setErrorState = setError;

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

export function makeCustomError(errorMessage){
   console.log("Setting custom error");
   setErrorState(errorMessage);
}

export function clearCustomError(){
   console.log("Clearing custom error");
   setErrorState("_");
}

export * from './ValidInput';
export * from './requirements';