import { isInputValid } from './helper';
import { onChange } from './onChange';

export const createInputs = (formObject) =>{
   if(!formObject.values) return;

   const parsedInputsArray = [];
   let index = 0;
   for(const child of formObject.children){

      let parsedInput = (
         <input 
         requirements={child.props.requirements}
         name={child.props.name}
         value={formObject.values[index].value}
         onChange={e=> onChange(e, formObject)}
         />
      )

      if(!isInputValid(child)) parsedInput = child;

      index++;
      parsedInputsArray.push(parsedInput);
   }

   formObject.setInputs(parsedInputsArray);
}