1) Create a:
```
   <ValidationForm>
   </ValidationForm>
```
2) Inside put children such as <p>, <label> and if you want to create a validation input, use this component:

3) 
```
<ValidationForm>
   <ValidInput />
</ValidationForm>
 ```

4) In ```<ValidInput>``` component you have to provide name attribute and requirements attribute.

5) This would be an example:
```
   <ValidationForm>
      <ValidInput name="username" requirements={[MIN_8_LENGTH]}/>
   </ValidationForm>]
```

6) You have to provide an array into the requirements atrribute, and the way you know which requirements you can put there, is by checking requirements.js file.

7) Finally you have to provide a callback into the ```<ValidationForm>``` component, it takes an attribute called "onCompleted".

8) Here's a final example:
```
   const handleCompletion = (values) =>{
      const [username] = values;
   } 

   <ValidationForm onCompleted={handleCompletion}>
      <p>Username:</p>
      <ValidInput name="username" requirements={[MIN_8_LENGTH]}/>
   </ValidationForm>
```
9) You'll get "values" array in your callback, which you can destructurize and use.
