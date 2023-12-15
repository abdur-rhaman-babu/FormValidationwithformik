import { useFormik } from "formik";
const FormikValidation = () => {

  const formik = useFormik ({
    initialValues:{
        username: '',
        email:'',
        password:''
    }, 

    onSubmit:(datas,{resetForm})=>{
      console.log(datas)
      resetForm({datas:''})
    }
    
  })

  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <label htmlFor="username">username:</label>
        <br />
        <input
          type="text"
          required
          autoFocus
          value={formik.values.username}
          onChange={formik.handleChange}
          name="username"
          id="username"
        />{" "}
        <br />
        <label htmlFor="email">Email:</label>
        <br />
        <input
          type="email"
          required
          value={formik.values.email}
          onChange={formik.handleChange}
          name="email"
          id="email"
        />{" "}
        <br />
        <label htmlFor="password">Password:</label>
        <br />
        <input
          type="password"
          required
          value={formik.values.password}
          onChange={formik.handleChange}
          name="password"
          id="password"
        />
        <br /> <br />

        <button type="submit">Sign up</button>

      </form>
    </div>
  );
};

export default FormikValidation;