import { Formik } from 'formik';
import { useState } from 'react';

function App() {
  const [data, setData] = useState([

  ])

  console.log(data)
  return (

    <div style={{
      margin: "1rem"
    }}>
      <Formik
        initialValues={{
          name: '', email: '', sex: '', password: '', dob: '', mobile: '', idname: '',
          genderdetail: '', govtid: '', emgcontect: '', address: '', counter: '', pincode: '', outhrcounter: '',
          occupation: '', city: '', state: '', maritalstatus: '', religion: '', bloodgroup: '', guardianname: '', outhernationality: '',
        }}
        validate={values => {
          const errors = {};
          if (!values.name) {
            errors.name = 'Required';
          }
          else if (!values.dob) {
            errors.dob = 'Required';
          }
          else if (!values.mobile) {
            errors.mobile = 'Required';
          }
          else if (!values.idname) {
            errors.idname = 'Required';
          }
          else if (!values.govtid) {
            errors.govtid = 'Required';
          }
          else if (!values.genderdetail) {
            errors.genderdetail = 'Required';
          }
          else if (!values.guardianname) {
            errors.guardianname = 'Required';
          }
          else if (!values.email) {
            errors.email = 'Required';
          } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
            errors.email = 'Invalid email address';
          }

          else if (!values.emgcontect) {
            errors.emgcontect = 'Required';
          }
          else if (!values.address) {
            errors.address = 'Required';
          }
          else if (!values.state) {
            errors.state = 'Required';
          }
          else if (!values.city) {
            errors.city = 'Required';
          }
          else if (!values.counter) {
            errors.counter = 'Required';
          }
          else if (!values.pincode) {
            errors.pincode = 'Required';
          }


          else if (!values.occupation) {
            errors.occupation = 'Required';
          }
          else if (!values.religion) {
            errors.religion = 'Required';
          }
          else if (!values.maritalstatus) {
            errors.maritalstatus = 'Required';
          }
          else if (!values.bloodgroup) {
            errors.bloodgroup = 'Required';
          }
          else if (!values.outhernationality) {
            errors.outhernationality = 'Required';
          }
          return errors;
        }}
        onSubmit={(values => {

          setData([...data, {
            name: values.name, email: values.email, sex: values.sex, dob: values.dob, mobile: values.mobile, idname: values.idname,
            genderdetail: values.genderdetail, govtid: values.govtid, emgcontect: values.emgcontect, address: values.address, counter: values.counter, pincode: values.pincode, outhrcounter: values.outhrcounter,
            occupation: values.occupation, city: values.city, state: values.state, maritalstatus: values.maritalstatus, religion: values.religion, bloodgroup: values.bloodgroup, guardianname: values.guardianname, outhernationality: values.outhernationality,
          }])
        })}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          handleReset
          /* and other goodies */
        }) => (
          <form onSubmit={handleSubmit}>

            <div>
              <div>
                <div className='heading'>Personal Details</div>
                <div className='grid'>
                  <div className='flex'>
                    <label id='name'>Name</label>
                    <input
                      type="text"
                      name="name"
                      placeholder='Enter Name'
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.name}
                    />
                    {errors.name && touched.name && errors.name}
                  </div>
                  <div className='grid_inside'>

                    <div className='flex'>
                      <label id='dob'>Date of Birth</label>
                      <input
                        type="date"
                        name="dob"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.dob}
                      />
                      {errors.dob && touched.dob && errors.dob}
                    </div>
                    <div className='flex'>
                      <label id='sex'>Sex*</label>
                      <select
                        name="sex"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.sex}>
                            <option disabled selected value=""> -- select an option -- </option>

                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="outher">Outher</option>
                      </select>
                      {errors.sex && touched.sex && errors.sex}
                    </div>
                  </div>
                </div>
              </div>
              <div className='grid'>
                <div className='flex'>
                  <label id='mobile'>Mobile</label>
                  <input
                    type="number"
                    name="mobile"
                    placeholder='Mobile Number'
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.mobile}
                  />
                  {errors.mobile && touched.mobile && errors.mobile}
                </div>
                <div className='grid_inside'>
                  <div className='flex'>
                    <label id='idname'>Governmaet Issued Id</label>
                    <select
                      name="idname"
                      placeholder='ID Type'
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.idname}
                    >
                        <option disabled selected value=""> -- select an option -- </option>

                      <option value="aadher">Addher</option>
                      <option value="voterid">voter Id</option>
                    </select>
                    {errors.idname && touched.idname && errors.idname}
                  </div>
                  <div>
                    <input
                      type="text"
                      placeholder='Enter Govt ID'
                      name="govtid"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.govtid}
                    />
                    {errors.govtid && touched.govtid && errors.govtid}
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className='heading'>Contact Details</div>
              <div className='grid'>
                <div className='grid_inside'>
                  <div className='flex'>
                    <label id='name'>Guardian Details</label>
                    <select
                      name="genderdetail"
                      onChange={handleChange}
                      placeholder="Enter Label"
                      onBlur={handleBlur}
                      value={values.genderdetail}
                    >
                        <option disabled selected value=""> -- select an option -- </option>

                      <option value="male">Male</option>
                      <option value="female">Female</option>
                      <option value="outher">Outher</option>
                    </select>
                    {errors.genderdetail && touched.genderdetail && errors.genderdetail}
                  </div>
                  <div>
                    <input
                      type="text"
                      name="guardianname"
                      placeholder='Enter Guardian Name'
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.guardianname}
                    />
                    {errors.guardianname && touched.guardianname && errors.guardianname}
                  </div>
                </div>
                <div className='grid_inside'>
                  <div className='flex'>
                    <label id='name'>Email</label>
                    <input
                      type="text"
                      name="email"
                      placeholder='Enter Email'
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.email}
                    />
                    {errors.email && touched.email && errors.email}
                  </div>
                  <div className='flex'>
                    <label id='emgcontect'>Emergency Contect No.</label>
                    <input
                      type="number"
                      name="emgcontect"
                      placeholder='Emergency Contect No.'
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.emgcontect}
                    />
                    {errors.emgcontect && touched.emgcontect && errors.emgcontect}
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className='heading'>Adderss Detailes</div>
              <div className='grid'>
                <div className='flex'>
                  <label id='address'>Adderss</label>
                  <input
                    type="text"
                    name="address"
                    onChange={handleChange}
                    placeholder="Enter Adderss"
                    onBlur={handleBlur}
                    value={values.address}
                  />
                  {errors.address && touched.address && errors.address}
                </div>
                <div className='grid_inside'>

                  <div className='flex'>
                    <label id='state'>State</label>
                    <select
                      name="state"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="Enter State"
                      value={values.state}>
                          <option disabled selected value=""> -- select an option -- </option>

                      <option value="male">god</option>
                      <option value="female">delhi</option>
                      <option value="outher">mumbai</option>
                    </select>
                    {errors.state && touched.state && errors.state}
                  </div>
                  <div className='flex'>
                    <label id='name'>City</label>
                    <select
                      name="city"
                      onChange={handleChange}
                      placeholder="Enter City"
                      onBlur={handleBlur}
                      value={values.city}>
                          <option disabled selected value=""> -- select an option -- </option>

                      <option value="male">Ripur</option>
                      <option value="female">Bilaspur</option>
                      <option value="outher">Sarangarh</option>
                    </select>
                    {errors.city && touched.city && errors.city}
                  </div>
                </div>
              </div>
              <div className='grid'>

                <div className='flex'>
                  <label id='counter'>Country</label>
                  <input
                    type="text"
                    placeholder='Country'
                    name="counter"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.counter}
                  />
                  {errors.counter && touched.counter && errors.counter}
                </div>
                <div className='flex_start'>
                  <label id='pincode'>Pincode</label>
                  <span>
                    <input
                      type="number"
                      name="pincode"
                      placeholder='Enter Pincode'
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.pincode}
                    />
                  </span>
                  {errors.pincode && touched.pincode && errors.pincode}
                </div>
              </div>
            </div>
            <div>
              <div className='heading'>Other Details</div>
              <div className='grid_last'>
                <div className='flex'>
                  <label id='occupation'>Occupation</label>
                  <input
                    type="text"
                    placeholder='Enter Ocupation'
                    name="occupation"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.occupation}
                  />
                  {errors.occupation && touched.occupation && errors.occupation}
                </div>
                <div className='flex'>
                  <label id='religion'>Religion</label>
                  <select
                    name="religion"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.religion}>
                        <option disabled selected value=""> -- select an option -- </option>

                    <option value="male">Ripur</option>
                    <option value="female">Bilaspur</option>
                    <option value="outher">Sarangarh</option>
                  </select>
                  {errors.religion && touched.religion && errors.religion}
                </div>
                <div className='flex'>
                  <label id='maritalstatus'>Marital Status</label>
                  <select
                    name="maritalstatus"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.maritalstatus}>
                        <option disabled selected value=""> -- select an option -- </option>

                    <option value="male">married</option>
                    <option value="female">unmarried</option>
                    <option value="outher">Sarangarh</option>
                  </select>
                  {errors.maritalstatus && touched.maritalstatus && errors.maritalstatus}
                </div>
                <div className='flex'>
                  <label id='bloodgroup'>Blood Group</label>
                  <select
                    name="bloodgroup"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.bloodgroup}>
                        <option disabled selected value=""> -- select an option -- </option>

                    <option value="male">A+</option>
                    <option value="female">B+</option>
                    <option value="outher">o+</option>
                  </select>
                  {errors.bloodgroup && touched.bloodgroup && errors.bloodgroup}
                </div>

              </div>
              <div>
                <div className='flex_start'>
                  <label id='outhernationality'>Nationality</label>
                  <span >
                    <input
                      type="text"
                      placeholder='Nationality'
                      name="outhernationality"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.outhernationality}
                    />
                    {errors.outhernationality && touched.outhernationality && errors.outhernationality}

                  </span>
                </div>
              </div>
            </div>
            <div className='button'>
              <div>
                <button type="submit" onClick={handleReset}>
                  cancle
                </button>
                <button type="submit">
                  Submit
                </button>
              </div>
            </div>

          </form>
        )}


      </Formik>

      {
        data?.map((e, index) => (
          <div key={index} style={{
            border: "2px solid black",
            margin: "1rem 0rem"
          }}>
            <div>
              <div>
                <div className='heading'>Personal Details</div>
                <div className='grid'>
                  <div className='flex'>
                    <label id='name'>Name</label>
                    {e.name}
                  </div>
                  <div className='grid_inside'>

                    <div className='flex'>
                      <label id='dob'>Date of Birth</label>
                      {e.dob}
                    </div>
                    <div className='flex'>
                      <label id='sex'>Sex*</label>
                      {e.sex}
                    </div>
                  </div>
                </div>
              </div>
              <div className='grid'>
                <div className='flex'>
                  <label id='mobile'>Mobile</label>
                  {e.mobile}
                </div>
                <div className='grid_inside'>
                  <div className='flex'>
                    <label id='idname'>Governmaet Issued Id</label>
                    {e.idname}
                  </div>
                  <div>
                    {e.govtid}
                  </div>
                </div>
              </div>
            </div >
            <div>
              <div className='heading'>Contact Details</div>
              <div className='grid'>
                <div className='grid_inside'>
                  <div className='flex'>
                    <label id='name'>Guardian Details</label>
                    {e.genderdetail}
                  </div>
                  <div>
                    {e.guardianname}
                  </div>
                </div>
                <div className='grid_inside'>
                  <div className='flex'>
                    <label id='name'>Email</label>
                    {e.email}
                  </div>
                  <div className='flex'>
                    <label id='emgcontect'>Emergency Contect No.</label>
                    {e.emgcontect}
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className='heading'>Adderss Detailes</div>
              <div className='grid'>
                <div className='flex'>
                  <label id='address'>Adderss</label>
                  {e.address}
                </div>
                <div className='grid_inside'>

                  <div className='flex'>
                    <label id='state'>State</label>
                    {e.state}
                  </div>
                  <div className='flex'>
                    <label id='name'>City</label>
                    {e.city}
                  </div>
                </div>
              </div>
              <div className='grid'>

                <div className='flex'>
                  <label id='counter'>Country</label>
                  {e.counter}
                </div>
                <div className='flex_start'>
                  <label id='pincode'>Pincode</label>
                  {e.pincode}
                </div>
              </div>
            </div>
            <div>
              <div className='heading'>Other Details</div>
              <div className='grid_last'>
                <div className='flex'>
                  <label id='occupation'>Occupation</label>
                  {e.occupation}
                </div>
                <div className='flex'>
                  <label id='religion'>Religion</label>
                  {e.religion}
                </div>
                <div className='flex'>
                  <label id='maritalstatus'>Marital Status</label>
                  {e.maritalstatus}
                </div>
                <div className='flex'>
                  <label id='bloodgroup'>Blood Group</label>
                  {e.bloodgroup}
                </div>

              </div>
              <div>
                <div className='flex_start'>
                  <label id='outhernationality'>Nationality</label>
                  <span >
                    {e.outhernationality}

                  </span>
                </div>

              </div>
            </div>
          </div>


        ))
      }
    </div>
  );


}

export default App;


