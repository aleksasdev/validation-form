import { HAVE_VALID_EMAIL, HAVE_VALID_URL, MINIMUM_AGE_13, MINIMUM_LENGTH_8, ValidationForm, ValidInput } from '@aleksasdev/validation-form';

function App() {

   const handleCompletion = (values) =>{
      console.log(values);
   }

   return (
      <ValidationForm onCompleted={handleCompletion} >
         <div>
            <ValidInput name="username" requirements={[HAVE_VALID_EMAIL]} />
         </div>
      </ValidationForm>
   )
}

export default App
