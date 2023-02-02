import { HAVE_VALID_URL, MINIMUM_AGE_13, MINIMUM_LENGTH_8, ValidationForm, ValidInput } from '@aleksasdev/validation-form';

function App() {

   const handleCompletion = (values) =>{
      console.log(values);
   }

   return (
      <ValidationForm onCompleted={handleCompletion} >
         <div>
            <ValidInput name="username" requirements={[MINIMUM_AGE_13]} />
         </div>
      </ValidationForm>
   )
}

export default App
