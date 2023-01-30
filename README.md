Create a:
```
   <ValidationForm>
   </ValidationForm>
```
Inside put children such as 
```
<p>, <label>
```
and if you want to create a validation input, use this component:

```
<ValidationForm>
   <ValidInput />
</ValidationForm>
 ```

In
```
<ValidInput>
```
component you have to provide name attribute and requirements attribute.

This would be an example:
```
   <ValidationForm>
      <ValidInput name="username" requirements={[MIN_8_LENGTH]}/>
   </ValidationForm>]
```

You have to provide an array into the requirements atrribute, and the way you know which requirements you can put there, is by checking requirements.js file.

Finally you have to provide a callback into the 
```
<ValidationForm>
```
component, it takes an attribute called "onCompleted".

Here's a final example:
```
   const handleCompletion = (values) =>{
      const [username] = values;
   } 

   <ValidationForm onCompleted={handleCompletion}>
      <p>Username:</p>
      <ValidInput name="username" requirements={[MIN_8_LENGTH]}/>
   </ValidationForm>
```
You'll get "values" array in your callback, which you can destructurize and use.
