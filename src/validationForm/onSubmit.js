
import { isInputValid } from './helper';
import { isError } from './requirements';

export function onSubmit(e, formObject){
   e.preventDefault();

   if(!formObject.onCompleted){
      formObject.setError("You're missing 'onCompleted' attribute, provide a callback");
      return;
   }

   const inputValues = [];
   for(const input of formObject.inputs.current){

      const currentValue = input?.value;
      const requirements = input?.getAttribute('requirements');

      if(!requirements || currentValue === undefined) continue;

      if(isError(formObject.setError, currentValue, requirements)){
         formObject.setError(`You have an error with ${input?.name}`)
         return;
      }
      inputValues.push(currentValue);
   }

   formObject.onCompleted(inputValues);
}