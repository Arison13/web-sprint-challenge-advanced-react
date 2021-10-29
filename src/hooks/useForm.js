// write your custom hook here to control your checkout form
import { useState } from "react";

//The initial value is passed in and set to to state using useState
const useForm = (initialValue) => {
    const [values, setValues] = useState(initialValue);

    //handlechanges function that will set the state of said input to be the value that is being typed in (e.target.value will be the argument)
    const handleChanges = (updatedValue) => {
        setValues(updatedValue);
      };

    //returning an array containing the "values" variable as well as the "setValues" and "handleChanges" functions
    return [values, setValues, handleChanges];
}

export default useForm;