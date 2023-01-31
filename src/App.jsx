import { MINIMUM_LENGTH_8, ValidationForm, ValidInput } from '@aleksasdev/validation-form';

function App() {

   const handleCompletion = (values) =>{
      console.log(values);
   }

   return (
      <ValidationForm onCompleted={handleCompletion} >
         <div>
            <ValidInput name="username" requirements={[MINIMUM_LENGTH_8]} />
            <ValidInput requirements={[MINIMUM_LENGTH_8]} />
         </div>
      </ValidationForm>
   )
}

export default App
