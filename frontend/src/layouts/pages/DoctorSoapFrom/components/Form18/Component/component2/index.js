import React from 'react'
import PropTypes from "prop-types";
import { Grid } from '@mui/material';

export const DropdownComponents = (propsValue) => {
    return (
      <>
        <select className="dropDownInputComponent2" name={propsValue.name} value={propsValue.value} onChange={propsValue.formik.handleChange}>
          <option></option>
          <option value="+">+</option>
          <option value="-">-</option>
        </select>
      </>
    );
  };
const ComponentTwo = ({formik}) => {
    const {values} = formik;
    const arr1 = [0,1];
  return (
    <>
    <Grid container>
      <Grid lg={12} xs={12} sm={12} className="smallTable" style={{justifyContent: "center", display: "flex"}}>
    <table className='tableContainer1'>
        <tr>
            <th></th>
            <th>Left</th>
            <th>Right</th>
            <th></th>
        </tr>
        <tbody>
        {
          arr1 && arr1.map((data,i) => {
              return(
              <>
                  <tr>
                  <td style={{textAlign : "right"}}>{values?.array2[i]?.leftName}</td>
                  <td>
                      <DropdownComponents name={`array2[${i}].left`} value={values?.array2[i]?.left} formik={formik}/>
                  </td>
                  <td style={{textAlign : "left"}}>
                      <DropdownComponents name={`array2[${i}].right`} value={values?.array2[i]?.right} formik={formik}/>
                  </td>
                  <td>{values?.array2[i]?.rightName}</td>  
                  </tr>  
              </>
              )
          })
          }
        </tbody>
    </table>
    </Grid>
    </Grid>
    </>
  )
}
ComponentTwo.propTypes = {
    formik : PropTypes.oneOfType([PropTypes.object, PropTypes.func]).isRequired,
}
export default ComponentTwo;