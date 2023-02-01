import { HAVE_VALID_URL, MINIMUM_LENGTH_8, ValidationForm, ValidInput } from '@aleksasdev/validation-form';

function App() {

   const handleCompletion = (values) =>{
      console.log(values);
   }

   return (
      <ValidationForm onCompleted={handleCompletion} >
         <div>
            <ValidInput name="username" requirements={[MINIMUM_LENGTH_8]} />
            <ValidInput requirements={[MINIMUM_LENGTH_8, HAVE_VALID_URL]} />
         </div>
      </ValidationForm>
   )
}

export default App