import React from "react";
import { useNavigate } from "react-router-dom";
import { TextField } from "@mui/material";
import {Button} from "@mui/material";
import { useFormik } from "formik";
import * as yup from "yup";

const movieValidationSchema = yup.object({
  name: yup
  .string()
  .min(2)
  .required(),

  poster: yup
  .string()
  .min(2)
  .required(),

  summary: yup
  .string()
  .min(20)
  .required(),

  trailer: yup
  .string()  
  .min(5)
  .required(),
})


export  function AddMovie(){
    
    /*const [name, setName] = useState("");
    const [poster, setPoster] = useState("");
    const [summary, setSummary] = useState("");
    const [trailer, setTrailer] = useState(""); -> we remove it beacuse we add validation and the code is now according to validation*/
    const navigate = useNavigate();

    const {handleSubmit,values,handleChange,handleBlur,touched,errors} //we doing destructure of formik thats why remove all formik and written all thw function here
 = useFormik({

    initialValues: {name: "", poster: "", summary: "", trailer: ""},
    validationSchema: movieValidationSchema,
    onSubmit: (newMovie)=>{
        console.log("onSubmit",newMovie);
        addmovie(newMovie)


    }
});

    const addmovie =(newMovie)=>{
     /*const newMovie={
      name,
      poster,
      summary,
      trailer,
    }; -> we remove it beacuse we add validation and the code is now according to validation*/
    
      fetch("https://64f1c1040e1e60602d243b0e.mockapi.io/movies",{
        method:"POST",
        body: JSON.stringify(newMovie),
        headers :{"Content-Type": "application/json"},
  
      })
      .then((data)=>data.json())
      .then(()=>navigate("/movies"));
    
   
    
    //1.post method
    //2.body data & data in JSON format
    //3. header JSON data
    };

    return   <form onSubmit={handleSubmit} className='add-movie-form container mx-5 my-5'>
    <TextField 
     id="name"
     name="name"
     onBlur={handleBlur}
     value={values.name}
     onChange={handleChange}
     label='Enter name'
     variant='standard'
     error={touched.name && errors.name }
     helperText={touched.name && errors.name ? errors.name : ""}

    
    />

 
 <TextField 
      id="poster"
      name="poster"
      onBlur={handleBlur}
      value={values.poster}
      onChange={handleChange}
     label='Enter poster link'
     variant='standard'
     error={touched.poster && errors.poster }
     helperText={touched.poster && errors.poster ? errors.poster : ""}

    />

 
 <TextField 
       id="summary"
       name="summary"
       onBlur={handleBlur}
       value={values.summary}
       onChange={handleChange}
     label='Enter summary'
     variant='standard'
     error={touched.summary && errors.summary }
     helperText={touched.summary && errors.summary ? errors.summary : ""}


    />

     <TextField 
      id="trailer"
      name="trailer"
      onBlur={handleBlur}
      value={values.trailer}
      onChange={handleChange}
     label='Enter trailer'
     variant='standard'
     error={touched.trailer && errors.trailer }
     helperText={touched.trailer && errors.trailer ? errors.trailer : ""}


    />

   
    <Button type="submit" variant="outlined">Add Movie</Button>
    {/*<Button type="submit" onClick={addmovie} variant="outlined">Add Movie</Button> -> at upper line we remove onClick and use type="submit
                  because the type submit it triggred directly onSubmit function 
                  it only execute whenever tha validation is correct and anothor side 
                  the onClick is trigger without chacking the validation is correct or not or 
                  the validation is complete or not.*/}

    
        
    </form>
  }