import React, { useState, useEffect } from "react";
import { Divider, FormLabel } from "@mui/material";
import { FormControl, FormControlLabel, Checkbox, FormGroup } from "@mui/material";
import SoftBox from "components/SoftBox";
import { Grid } from "@mui/material";
import PropTypes from "prop-types";

function MAFCheckboxes({ formData, formik, form, index }) {
  const { formField } = form;
  const { values } = formik;

  const {
    category1Check,
    category2Check,
    category3Check,
    category4Check,
    category5Check,
    category6Check,
    category7Check,
    category8Check,
    category9Check,
    category10Check,
    category11Check,
    category12Check,
    category13Check,
    category14Check,
    category15Check,
    category16Check,
    category17Check,
    category18Check,
    category19Check,
    category20Check,
  } = formField;

  const {
    category1Check: category1CheckV,
    category2Check: category2CheckV,
    category3Check: category3CheckV,
    category4Check: category4CheckV,
    category5Check: category5CheckV,
    category6Check: category6CheckV,
    category7Check: category7CheckV,
    category8Check: category8CheckV,
    category9Check: category9CheckV,
    category10Check: category10CheckV,
    category11Check: category11CheckV,
    category12Check: category12CheckV,
    category13Check: category13CheckV,
    category14Check: category14CheckV,
    category15Check: category15CheckV,
    category16Check: category16CheckV,
    category17Check: category17CheckV,
    category18Check: category18CheckV,
    category19Check: category19CheckV,
    category20Check: category20CheckV,
  } = values;

  const data = [
    {
      label: "Category I: Colon (Gastrointestinal dysfunction)",
      errorMsg: "",
      value: false,
    },
    {
      label: "Category II: Intestinal Barrier",
      errorMsg: "",
      value: false,
    },
    {
      label: "Category III: Chemical Tolerance",
      errorMsg: "",
      value: false,
    },
    {
      label: "Category IV: Stomach Hypochlorhydria",
      errorMsg: "",
      value: false,
    },
    {
      label: "Category V: Stomach (HYPERacidity)",
      errorMsg: "",
      value: false,
    },
    {
      label: "Category VI: Pancreas",
      errorMsg: "",
      value: false,
    },
    {
      label: "Category VII: Small Intestine",
      errorMsg: "",
      value: false,
    },
    {
      label: "Category VIII: Biliary",
      errorMsg: "",
      value: false,
    },
    {
      label: "Category IX: Hepatic Detoxification",
      errorMsg: "",
      value: false,
    },
    {
      label: "Category X: Sugar Metabolism (Hypoglycemia)",
      errorMsg: "",
      value: false,
    },
    {
      label: "Category XI: Peripheral Util. of Sugar (Insulin Resistance)",
      errorMsg: "",
      value: false,
    },
    {
      label: "Category XII: Adrenal (Hypofunction)",
      errorMsg: "",
      value: false,
    },
    {
      label: "Category XIII: Adrenal (HYPERfunction)",
      errorMsg: "",
      value: false,
    },
    {
      label: "Category XIV: Electrolyte and pH Balance",
      errorMsg: "",
      value: false,
    },
    {
      label: "Category XV: Thyroid (Hypofunction)",
      errorMsg: "",
      value: false,
    },
    {
      label: "Category XVI: Thyroid (HYPERfunction)",
      errorMsg: "",
      value: false,
    },
    {
      label: "Category XVII (Males): Prostate – Rule out prostate cancer.",
      errorMsg: "",
      value: false,
    },
    {
      label: "Category XVIII (Males): Andropause",
      errorMsg: "",
      value: false,
    },
    {
      label: "Category XIX (Menstruating Females)",
      errorMsg: "",
      value: false,
    },
    {
      label: "Category XX (Menopausal Females)",
      errorMsg: "",
      value: false,
    },
  ];
  const [menuItems, setChecked] = useState(data);
  console.log(menuItems, "dsdads");
  const handleCheck = (box, index) => {
    let abc = menuItems;
    abc[index].value = !box.value;
    console.log(abc[index].options);
    console.log(box.value);

    if (abc[index].options && !box.value) {
      abc[index].options = abc[index].options.map((item) => {
        item.value = false;
        console.log(abc[index].options && box.value);
        return item;
      });
    }
    setChecked([...abc]);
  };

  const innerBoxHandler = (outerIndex, innerIndex) => {
    let abc = menuItems;
    abc[outerIndex].options[innerIndex].value = !abc[outerIndex].options[innerIndex].value;
    setChecked([...abc]);
  };

  return (
    <SoftBox>
      <FormControlLabel
        style={{ marginRight: "auto", display: "flex" }}
        label="Category I: Colon (Gastrointestinal dysfunction)"
        control={
          <Checkbox
            name={category1Check.name}
            // checked={category1CheckV}
            // onChange={formik.handleChange}
            checked={formik.values?.eleventhPage[index]?.[category1Check.name]}
            onChange={(e) =>
              formik.setFieldValue(
                `eleventhPage[${index}].${category1Check.name}`,
                e.target.checked
              )
            }
          />
        }
      />
      <FormControlLabel
        style={{ marginRight: "auto", display: "flex" }}
        label="Category II: Intestinal Barrier"
        control={
          <Checkbox
            name={category2Check.name}
            // checked={category2CheckV}
            // onChange={formik.handleChange}
            checked={formik.values?.eleventhPage[index]?.[category2Check.name]}
            onChange={(e) =>
              formik.setFieldValue(
                `eleventhPage[${index}].${category2Check.name}`,
                e.target.checked
              )
            }
          />
        }
      />
      <FormControlLabel
        style={{ marginRight: "auto", display: "flex" }}
        label="Category III: Chemical Tolerance"
        control={
          <Checkbox
            name={category3Check.name}
            // checked={category3CheckV}
            // onChange={formik.handleChange}
            checked={formik.values?.eleventhPage[index]?.[category3Check.name]}
            onChange={(e) =>
              formik.setFieldValue(
                `eleventhPage[${index}].${category3Check.name}`,
                e.target.checked
              )
            }
          />
        }
      />
      <FormControlLabel
        style={{ marginRight: "auto", display: "flex" }}
        label="Category IV: Stomach Hypochlorhydria"
        control={
          <Checkbox
            name={category4Check.name}
            // checked={category4CheckV}
            // onChange={formik.handleChange}
            checked={formik.values?.eleventhPage[index]?.[category4Check.name]}
            onChange={(e) =>
              formik.setFieldValue(
                `eleventhPage[${index}].${category4Check.name}`,
                e.target.checked
              )
            }
          />
        }
      />
      <FormControlLabel
        style={{ marginRight: "auto", display: "flex" }}
        label="Category V: Stomach (HYPERacidity)"
        control={
          <Checkbox
            name={category5Check.name}
            // checked={category5CheckV}
            // onChange={formik.handleChange}
            checked={formik.values?.eleventhPage[index]?.[category5Check.name]}
            onChange={(e) =>
              formik.setFieldValue(
                `eleventhPage[${index}].${category5Check.name}`,
                e.target.checked
              )
            }
          />
        }
      />
      <FormControlLabel
        style={{ marginRight: "auto", display: "flex" }}
        label="Category VI: Pancreas"
        control={
          <Checkbox
            name={category6Check.name}
            // checked={category6CheckV}
            // onChange={formik.handleChange}
            checked={formik.values?.eleventhPage[index]?.[category6Check.name]}
            onChange={(e) =>
              formik.setFieldValue(
                `eleventhPage[${index}].${category6Check.name}`,
                e.target.checked
              )
            }
          />
        }
      />
      <FormControlLabel
        style={{ marginRight: "auto", display: "flex" }}
        label="Category VII: Small Intestine"
        control={
          <Checkbox
            name={category7Check.name}
            // checked={category7CheckV}
            // onChange={formik.handleChange}
            checked={formik.values?.eleventhPage[index]?.[category7Check.name]}
            onChange={(e) =>
              formik.setFieldValue(
                `eleventhPage[${index}].${category7Check.name}`,
                e.target.checked
              )
            }
          />
        }
      />
      <FormControlLabel
        style={{ marginRight: "auto", display: "flex" }}
        label="Category VIII: Biliary"
        control={
          <Checkbox
            name={category8Check.name}
            // checked={category8CheckV}
            // onChange={formik.handleChange}
            checked={formik.values?.eleventhPage[index]?.[category8Check.name]}
            onChange={(e) =>
              formik.setFieldValue(
                `eleventhPage[${index}].${category8Check.name}`,
                e.target.checked
              )
            }
          />
        }
      />
      <FormControlLabel
        style={{ marginRight: "auto", display: "flex" }}
        label="Category IX: Hepatic Detoxification"
        control={
          <Checkbox
            name={category9Check.name}
            // checked={category9CheckV}
            // onChange={formik.handleChange}
            checked={formik.values?.eleventhPage[index]?.[category9Check.name]}
            onChange={(e) =>
              formik.setFieldValue(
                `eleventhPage[${index}].${category9Check.name}`,
                e.target.checked
              )
            }
          />
        }
      />
      <FormControlLabel
        style={{ marginRight: "auto", display: "flex" }}
        label="Category X: Sugar Metabolism (Hypoglycemia)"
        control={
          <Checkbox
            name={category10Check.name}
            // checked={category10CheckV}
            // onChange={formik.handleChange}
            checked={formik.values?.eleventhPage[index]?.[category10Check.name]}
            onChange={(e) =>
              formik.setFieldValue(
                `eleventhPage[${index}].${category10Check.name}`,
                e.target.checked
              )
            }
          />
        }
      />
      <FormControlLabel
        style={{ marginRight: "auto", display: "flex" }}
        label="Category XI: Peripheral Util. of Sugar (Insulin Resistance)"
        control={
          <Checkbox
            name={category11Check.name}
            // checked={category11CheckV}
            // onChange={formik.handleChange}
            checked={formik.values?.eleventhPage[index]?.[category11Check.name]}
            onChange={(e) =>
              formik.setFieldValue(
                `eleventhPage[${index}].${category11Check.name}`,
                e.target.checked
              )
            }
          />
        }
      />
      <FormControlLabel
        style={{ marginRight: "auto", display: "flex" }}
        label="Category XII: Adrenal (Hypofunction)"
        control={
          <Checkbox
            name={category12Check.name}
            // checked={category12CheckV}
            // onChange={formik.handleChange}
            checked={formik.values?.eleventhPage[index]?.[category12Check.name]}
            onChange={(e) =>
              formik.setFieldValue(
                `eleventhPage[${index}].${category12Check.name}`,
                e.target.checked
              )
            }
          />
        }
      />
      <FormControlLabel
        style={{ marginRight: "auto", display: "flex" }}
        label="Category XIII: Adrenal (HYPERfunction)"
        control={
          <Checkbox
            name={category13Check.name}
            // checked={category13CheckV}
            // onChange={formik.handleChange}
            checked={formik.values?.eleventhPage[index]?.[category13Check.name]}
            onChange={(e) =>
              formik.setFieldValue(
                `eleventhPage[${index}].${category13Check.name}`,
                e.target.checked
              )
            }
          />
        }
      />
      <FormControlLabel
        style={{ marginRight: "auto", display: "flex" }}
        label="Category XIV: Electrolyte and pH Balance"
        control={
          <Checkbox
            name={category14Check.name}
            // checked={category14CheckV}
            // onChange={formik.handleChange}
            checked={formik.values?.eleventhPage[index]?.[category14Check.name]}
            onChange={(e) =>
              formik.setFieldValue(
                `eleventhPage[${index}].${category14Check.name}`,
                e.target.checked
              )
            }
          />
        }
      />
      <FormControlLabel
        style={{ marginRight: "auto", display: "flex" }}
        label="Category XV: Thyroid (Hypofunction)"
        control={
          <Checkbox
            name={category15Check.name}
            // checked={category15CheckV}
            // onChange={formik.handleChange}
            checked={formik.values?.eleventhPage[index]?.[category15Check.name]}
            onChange={(e) =>
              formik.setFieldValue(
                `eleventhPage[${index}].${category15Check.name}`,
                e.target.checked
              )
            }
          />
        }
      />
      <FormControlLabel
        style={{ marginRight: "auto", display: "flex" }}
        label="Category XVI: Thyroid (HYPERfunction)"
        control={
          <Checkbox
            name={category16Check.name}
            // checked={category16CheckV}
            // onChange={formik.handleChange}
            checked={formik.values?.eleventhPage[index]?.[category16Check.name]}
            onChange={(e) =>
              formik.setFieldValue(
                `eleventhPage[${index}].${category16Check.name}`,
                e.target.checked
              )
            }
          />
        }
      />
      <FormControlLabel
        style={{ marginRight: "auto", display: "flex" }}
        label="Category XVII (Males): Prostate – Rule out prostate cancer."
        control={
          <Checkbox
            name={category17Check.name}
            // checked={category17CheckV}
            // onChange={formik.handleChange}
            checked={formik.values?.eleventhPage[index]?.[category17Check.name]}
            onChange={(e) =>
              formik.setFieldValue(
                `eleventhPage[${index}].${category17Check.name}`,
                e.target.checked
              )
            }
          />
        }
      />
      <FormControlLabel
        style={{ marginRight: "auto", display: "flex" }}
        label="Category XVIII (Males): Andropause"
        control={
          <Checkbox
            name={category18Check.name}
            // checked={category18CheckV}
            // onChange={formik.handleChange}
            checked={formik.values?.eleventhPage[index]?.[category18Check.name]}
            onChange={(e) =>
              formik.setFieldValue(
                `eleventhPage[${index}].${category18Check.name}`,
                e.target.checked
              )
            }
          />
        }
      />
      <FormControlLabel
        style={{ marginRight: "auto", display: "flex" }}
        label="Category XIX (Menstruating Females)"
        control={
          <Checkbox
            name={category19Check.name}
            // checked={category19CheckV}
            // onChange={formik.handleChange}
            checked={formik.values?.eleventhPage[index]?.[category19Check.name]}
            onChange={(e) =>
              formik.setFieldValue(
                `eleventhPage[${index}].${category19Check.name}`,
                e.target.checked
              )
            }
          />
        }
      />
      <FormControlLabel
        style={{ marginRight: "auto", display: "flex" }}
        label="Category XX (Menopausal Females)"
        control={
          <Checkbox
            name={category20Check.name}
            // checked={category20CheckV}
            // onChange={formik.handleChange}
            checked={formik.values?.eleventhPage[index]?.[category20Check.name]}
            onChange={(e) =>
              formik.setFieldValue(
                `eleventhPage[${index}].${category20Check.name}`,
                e.target.checked
              )
            }
          />
        }
      />

      {/* <Grid container className="GridClass">
			<Grid item xs={12} style={{ display: "flex", marginBottom: "20px" }}>
				<input
					type={category1Check.type}
					name={category1Check.name}
					value={category1CheckV}
					onChange={formik.handleChange}
				/>
				<label className="VBAIlabel">Category I: Colon (Gastrointestinal dysfunction)</label>
			</Grid>
			<Grid item xs={12} style={{ display: "flex", marginBottom: "20px" }}>
				<input
					type={category2Check.type}
					name={category2Check.name}
					value={category2CheckV}
					onChange={formik.handleChange}
				/>
				<label className="VBAIlabel">Category II: Intestinal Barrier</label>
			</Grid>
			<Grid item xs={12} style={{ display: "flex", marginBottom: "20px" }}>
				<input
					type={category3Check.type}
					name={category3Check.name}
					value={category3CheckV}
					onChange={formik.handleChange}
				/>
				<label className="VBAIlabel">Category III: Chemical Tolerance</label>
			</Grid>
			<Grid item xs={12} style={{ display: "flex", marginBottom: "20px" }}>
				<input
					type={category4Check.type}
					name={category4Check.name}
					value={category4CheckV}
					onChange={formik.handleChange}
				/>
				<label className="VBAIlabel">Category IV: Stomach Hypochlorhydria</label>
			</Grid>
			<Grid item xs={12} style={{ display: "flex", marginBottom: "20px" }}>
				<input
					type={category5Check.type}
					name={category5Check.name}
					value={category5CheckV}
					onChange={formik.handleChange}
				/>
				<label className="VBAIlabel">Category V: Stomach (HYPERacidity)</label>
			</Grid>
			<Grid item xs={12} style={{ display: "flex", marginBottom: "20px" }}>
				<input
					type={category6Check.type}
					name={category6Check.name}
					value={category6CheckV}
					onChange={formik.handleChange}
				/>
				<label className="VBAIlabel">Category VI: Pancreas</label>
			</Grid>
			<Grid item xs={12} style={{ display: "flex", marginBottom: "20px" }}>
				<input
					type={category7Check.type}
					name={category7Check.name}
					value={category7CheckV}
					onChange={formik.handleChange}
				/>
				<label className="VBAIlabel">Category VII: Small Intestine</label>
			</Grid>
			<Grid item xs={12} style={{ display: "flex", marginBottom: "20px" }}>
				<input
					type={category8Check.type}
					name={category8Check.name}
					value={category8CheckV}
					onChange={formik.handleChange}
				/>
				<label className="VBAIlabel">Category VIII: Biliary</label>
			</Grid>
			<Grid item xs={12} style={{ display: "flex", marginBottom: "20px" }}>
				<input
					type={category9Check.type}
					name={category9Check.name}
					value={category9CheckV}
					onChange={formik.handleChange}
				/>
				<label className="VBAIlabel">Category IX: Hepatic Detoxification</label>
			</Grid>
			<Grid item xs={12} style={{ display: "flex", marginBottom: "20px" }}>
				<input
					type={category10Check.type}
					name={category10Check.name}
					value={category10CheckV}
					onChange={formik.handleChange}
				/>
				<label className="VBAIlabel">Category X: Sugar Metabolism (Hypoglycemia)</label>
			</Grid>
			<Grid item xs={12} style={{ display: "flex", marginBottom: "20px" }}>
				<input
					type={category11Check.type}
					name={category11Check.name}
					value={category11CheckV}
					onChange={formik.handleChange}
				/>
				<label className="VBAIlabel">Category XI: Peripheral Util. of Sugar (Insulin Resistance)</label>
			</Grid>
			<Grid item xs={12} style={{ display: "flex", marginBottom: "20px" }}>
				<input
					type={category12Check.type}
					name={category12Check.name}
					value={category12CheckV}
					onChange={formik.handleChange}
				/>
				<label className="VBAIlabel">Category XII: Adrenal (Hypofunction)</label>
			</Grid>
			<Grid item xs={12} style={{ display: "flex", marginBottom: "20px" }}>
				<input
					type={category13Check.type}
					name={category13Check.name}
					value={category13CheckV}
					onChange={formik.handleChange}
				/>
				<label className="VBAIlabel">Category XIII: Adrenal (HYPERfunction)</label>
			</Grid>
			<Grid item xs={12} style={{ display: "flex", marginBottom: "20px" }}>
				<input
					type={category14Check.type}
					name={category14Check.name}
					value={category14CheckV}
					onChange={formik.handleChange}
				/>
				<label className="VBAIlabel">Category XIV: Electrolyte and pH Balance</label>
			</Grid>
			<Grid item xs={12} style={{ display: "flex", marginBottom: "20px" }}>
				<input
					type={category15Check.type}
					name={category15Check.name}
					value={category15CheckV}
					onChange={formik.handleChange}
				/>
				<label className="VBAIlabel">Category XV: Thyroid (Hypofunction)</label>
			</Grid>
			<Grid item xs={12} style={{ display: "flex", marginBottom: "20px" }}>
				<input
					type={category16Check.type}
					name={category16Check.name}
					value={category16CheckV}
					onChange={formik.handleChange}
				/>
				<label className="VBAIlabel">Category XVI: Thyroid (HYPERfunction)</label>
			</Grid>
			<Grid item xs={12} style={{ display: "flex", marginBottom: "20px" }}>
				<input
					type={category17Check.type}
					name={category17Check.name}
					value={category17CheckV}
					onChange={formik.handleChange}
				/>
				<label className="VBAIlabel">Category XVII (Males): Prostate – Rule out prostate cancer.</label>
			</Grid>
			<Grid item xs={12} style={{ display: "flex", marginBottom: "20px" }}>
				<input
					type={category18Check.type}
					name={category18Check.name}
					value={category18CheckV}
					onChange={formik.handleChange}
				/>
				<label className="VBAIlabel">Category XVIII (Males): Andropause</label>
			</Grid>
			<Grid item xs={12} style={{ display: "flex", marginBottom: "20px" }}>
				<input
					type={category19Check.type}
					name={category19Check.name}
					value={category19CheckV}
					onChange={formik.handleChange}
				/>
				<label className="VBAIlabel">Category XIX (Menstruating Females)</label>
			</Grid>
			<Grid item xs={12} style={{ display: "flex", marginBottom: "20px" }}>
				<input
					type={category20Check.type}
					name={category20Check.name}
					value={category20CheckV}
					onChange={formik.handleChange}
				/>
				<label className="VBAIlabel">Category XX (Menopausal Females)</label>
			</Grid>
	</Grid> */}
    </SoftBox>
    // <div>
    //   <FormControl>
    //     {menuItems.map((box, index) => {
    //       console.log(index);
    //       return (
    //         <FormGroup key={index}  style={{display:'flex', flexDirection:'row', marginLeft:'10px'}}>
    //           <FormControlLabel
    //           style={{marginRight:'auto'}}
    //             label={box.label}
    //             control={
    //               <Checkbox
    //                 key={"main" + index}
    //                 onChange={(e) => handleCheck(box, index)}
    //                 checked={menuItems[index].value}
    //               />
    //             }
    //           />
    //           {box.options ? (
    //             box.options.map(({ value, label }, ind) => {
    //               return (
    //                 <FormControlLabel
    //                 style={{marginLeft:'10px'}}
    //                   key={"option" + index}
    //                   label={label}
    //                   control={
    //                     <Checkbox
    //                       key={"option" + ind}
    //                       disabled={!box.value}
    //                       onChange={(e) => innerBoxHandler(index, ind)}
    //                       checked={box.options[ind].value}
    //                     />
    //                   }
    //                 />
    //               );
    //             })
    //           ) : (
    //             <></>
    //           )}
    //         </FormGroup>
    //       );
    //     })}
    //   </FormControl>
    // </div>
  );
}
MAFCheckboxes.propTypes = {
  formData: PropTypes.oneOfType([PropTypes.object, PropTypes.func]).isRequired,
  formik: PropTypes.oneOfType([PropTypes.object, PropTypes.func]).isRequired,
  form: PropTypes.oneOfType([PropTypes.object, PropTypes.func]).isRequired,
  index: PropTypes.number,
};
export default MAFCheckboxes;
