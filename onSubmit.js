
import { resetValues } from './createValues';
import { isInputValid } from './helper';
import { isError } from './requirements';

export function onSubmit(e, formObject){
   e.preventDefault();

   if(!formObject.submitState){
      formObject.setError("You're missing 'submitState' attribute");
      return;
   }

   const inputValues = [];
   for(const input of formObject.inputs){
      if(!isInputValid(input)) continue;
      if(!input.props.requirements) continue;

      const currentValue = input.props.value;
      const requirements = input.props.requirements;

      if(isError(formObject.setError, currentValue, requirements)){
         formObject.setError(`You have an error with ${input.props.name}`)
         return;
      }
      inputValues.push(currentValue);
   }


   resetValues(formObject);
   formObject.submitState(inputValues);
}