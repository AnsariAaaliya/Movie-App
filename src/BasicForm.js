import React from "react";
import { useFormik } from "formik";
import * as yup from "yup";//yup is one library with the help of it we can directly execute the sum of validation.

const formValidationSchema = yup.object({
    email: yup
    .string()
    .min(5)
    .required()
    .matches
            (/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,"Invalid email address"),
    //    email: yup.string().min(5,"enter  bigger email") -> if u want custome msg then write like it,
    password: yup
    .string()
    .min(8)
    .required()
    .max(12),


})

export function BasicForm(){
const {handleSubmit,values,handleChange,handleBlur,touched,errors} //we doing destructure of formik thats why remove all formik and written all thw function here
 = useFormik({
    initialValues: {email: "", password: ""},
    validationSchema: formValidationSchema,
    onSubmit: (values)=>{
        console.log("onSubmit",values);


    }
});
//console.log("formik touched" , formik.touched)
return <form onSubmit={handleSubmit}>
    <input 
        id="email"
        name="email"
        type="email"
        placeholder="Enter email"
        value={values.email}
        onBlur={handleBlur}//when u click out side of form then it will be trigger ans also give u touched property
        onChange={handleChange}//after this function it can be allow you to type on email form
        />
    {touched.email && errors.email ? errors.email : ""}
        <input 
         id="password"
         name="password"
        type="password"
        placeholder="Enter password"
        value={values.password}
        onChange={handleChange}
        onBlur={handleBlur}



        />
        {touched.password && errors.password ? errors.password : ""}


        <button type="submit">submit</button>

</form>


}



//if validateForm passes then onSubmit will be call
/*const validateForm = (values) => {
        const errors = {};
        console.log("validateForm",values);
        if(values.email.length < 5){
            errors.email = "pleas enter a longer email";
        }else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)){
            errors.email = 'Invalid email address';

        }




        if(values.password.length < 8){
            errors.password = "pleas enter a longer password";
        } 
        else if(values.password.length >12){
            errors.password = "pleas enter a shorter password";
        }
        console.log(errors);
        return errors;
}

export function BasicForm(){
   const formik = useFormik({
        initialValues: {email: "", password: ""},
        validate: validateForm,
        onSubmit: (values)=>{
            console.log("onSubmit",values);


        }
    });
//console.log("formik touched" , formik.touched)
    return <form onSubmit={formik.handleSubmit}>
        <input 
            id="email"
            name="email"
            type="email"
            placeholder="Enter email"
            value={formik.values.email}
            onBlur={formik.handleBlur}//when u click out side of form then it will be trigger ans also give u touched property
            onChange={formik.handleChange}//after this function it can be allow you to type on email form
            />
            {formik.touched.email && formik.errors.email ? formik.errors.email : ""}
            <input 
             id="password"
             name="password"
            type="password"
            placeholder="Enter password"
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}



            />
            {formik.touched.password && formik.errors.password ? formik.errors.password : ""}


            <button type="submit">submit</button>
   
    </form>


  }*/