
export const createValues = (formObject) =>{
   const valuesArray = [];

   for(const child of formObject.children){
      const name = child?.props?.name;
      const requirements = child?.props?.requirements;

      valuesArray.push({
         name: name,
         requirements: requirements,
         value: ""
      })
   }

   formObject.setValues(valuesArray);
}

export const resetValues = (formObject)=>{
   const valuesArray = [];

   for(const object of formObject.values){
      object.value = "";
      valuesArray.push(object);
   }

   formObject.setValues(valuesArray);
}