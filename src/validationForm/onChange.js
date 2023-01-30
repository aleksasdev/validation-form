import { isError } from "./requirements";

export const onChange = (e, formObject)=>{

   const allValues = formObject.values;

   const currentValue = e.target.value;
   const requirements = e.target.getAttribute("requirements");
   const name = e.target.name;

   const modifiedValues = allValues.map(entry => {
      const isMatch = entry.name === name;
      if(!isMatch) return entry;

      entry.value=currentValue;
      return entry;
   })

   formObject.setValues(modifiedValues);

   if(!currentValue) {
      formObject.setError(null); 
      return;
   }
   
   if(!isError(formObject.setError, currentValue, requirements)){
      formObject.setError(null);
   }   
}