import React, { useState, useEffect } from "react";
import { Divider, FormLabel, Checkbox } from "@mui/material";
import { FormControl, FormControlLabel, FormGroup } from "@mui/material";
import PropTypes from "prop-types";
import SoftBox from "components/SoftBox";
import { Grid } from "@mui/material";

function BrainLocalCheckboxes({ formData, formik, form, index }) {
  const { formField } = form;
  const { values } = formik;

  const {
    OrbitofrontalCheck,
    PrecentralCheck,
    BrocaCheck,
    SomatosensoryCheck,
    InferiorCheck,
    AuditoryCheck,
    AssociationCheck,
    HippocampusCheck,
    OccipitalCheck,
    SpinocerebellumCheck,
    CerebrocerebellumCheck,
    VestibulocerebellumCheck,
    DirectCheck,
    IndirectCheck,
    ParasympatheticCheck,
    SympatheticCheck,
    EpileptiformCheck,
  } = formField;

  const {
    OrbitofrontalCheck: OrbitofrontalCheckV,
    PrecentralCheck: PrecentralCheckV,
    BrocaCheck: BrocaCheckV,
    SomatosensoryCheck: SomatosensoryCheckV,
    InferiorCheck: InferiorCheckV,
    AuditoryCheck: AuditoryCheckV,
    AssociationCheck: AssociationCheckV,
    HippocampusCheck: HippocampusCheckV,
    OccipitalCheck: OccipitalCheckV,
    SpinocerebellumCheck: SpinocerebellumCheckV,
    CerebrocerebellumCheck: CerebrocerebellumCheckV,
    VestibulocerebellumCheck: VestibulocerebellumCheckV,
    DirectCheck: DirectCheckV,
    IndirectCheck: IndirectCheckV,
    ParasympatheticCheck: ParasympatheticCheckV,
    SympatheticCheck: SympatheticCheckV,
    EpileptiformCheck: EpileptiformCheckV,
  } = values;

  const data = [
    {
      label: "Frontal Lobe Prefrontal, Dorsolateral and Orbitofrontal",
      errorMsg: "",
      value: false,
    },
    {
      label: "Frontal Lobe Precentral and Supplementary Motor Areas",
      errorMsg: "",
      value: false,
    },
    {
      label: "Frontal Lobe Broca’s Motor Speech Area",
      errorMsg: "",
      value: false,
    },
    {
      label: "Parietal Somatosensory Area and Parietal Superior Lobule",
      errorMsg: "",
      value: false,
    },
    {
      label: "Parietal Inferior Lobule",
      errorMsg: "",
      value: false,
    },
    {
      label: "Temporal Lobe Auditory Cortex",
      errorMsg: "",
      value: false,
    },
    {
      label: "Temporal Lobe Auditory Association Cortex",
      errorMsg: "",
      value: false,
    },
    {
      label: "Medial Temporal Lobe and Hippocampus",
      errorMsg: "",
      value: false,
    },
    {
      label: "Occipital Lobe",
      errorMsg: "",
      value: false,
    },
    {
      label: "Cerebellum - Spinocerebellum",
      errorMsg: "",
      value: false,
    },
    {
      label: "Cerebellum - Cerebrocerebellum",
      errorMsg: "",
      value: false,
    },
    {
      label: "Cerebellum - Vestibulocerebellum",
      errorMsg: "",
      value: false,
    },
    {
      label: "Basal Ganglia Direct Pathway",
      errorMsg: "",
      value: false,
    },
    {
      label: "Basal Ganglia Indirect Pathway",
      errorMsg: "",
      value: false,
    },
    {
      label: "Autonomic Reduced Parasympathetic Activity",
      errorMsg: "",
      value: false,
    },
    {
      label: "Autonomic Increased Sympathetic Activity",
      errorMsg: "",
      value: false,
    },
    {
      label: "Epileptiform Activity",
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
      <div>
        <FormControlLabel
          style={{ marginRight: "auto", display: "flex" }}
          label="Frontal Lobe Prefrontal, Dorsolateral and Orbitofrontal"
          control={
            <Checkbox
              name={OrbitofrontalCheck.name}
              //   checked={OrbitofrontalCheckV}
              //   onChange={formik.handleChange}
              checked={formik.values?.eleventhPage[index]?.[OrbitofrontalCheck.name]}
              onChange={(e) =>
                formik.setFieldValue(
                  `eleventhPage[${index}].${OrbitofrontalCheck.name}`,
                  e.target.checked
                )
              }
            />
          }
        />
        <FormControlLabel
          style={{ marginRight: "auto", display: "flex" }}
          label="Frontal Lobe Precentral and Supplementary Motor Areas"
          control={
            <Checkbox
              name={PrecentralCheck.name}
              //   checked={PrecentralCheckV}
              //   onChange={formik.handleChange}
              checked={formik.values?.eleventhPage[index]?.[PrecentralCheck.name]}
              onChange={(e) =>
                formik.setFieldValue(
                  `eleventhPage[${index}].${PrecentralCheck.name}`,
                  e.target.checked
                )
              }
            />
          }
        />
        <FormControlLabel
          style={{ marginRight: "auto", display: "flex" }}
          label="Frontal Lobe Broca’s Motor Speech Area"
          control={
            <Checkbox
              name={BrocaCheck.name}
              //   checked={BrocaCheckV}
              //   onChange={formik.handleChange} />
              checked={formik.values?.eleventhPage[index]?.[BrocaCheck.name]}
              onChange={(e) =>
                formik.setFieldValue(`eleventhPage[${index}].${BrocaCheck.name}`, e.target.checked)
              }
            />
          }
        />
        <FormControlLabel
          style={{ marginRight: "auto", display: "flex" }}
          label="Parietal Somatosensory Area and Parietal Superior Lobule"
          control={
            <Checkbox
              name={SomatosensoryCheck.name}
              //   checked={SomatosensoryCheckV}
              //   onChange={formik.handleChange}
              checked={formik.values?.eleventhPage[index]?.[SomatosensoryCheck.name]}
              onChange={(e) =>
                formik.setFieldValue(
                  `eleventhPage[${index}].${SomatosensoryCheck.name}`,
                  e.target.checked
                )
              }
            />
          }
        />
        <FormControlLabel
          style={{ marginRight: "auto", display: "flex" }}
          label="Parietal Inferior Lobule"
          control={
            <Checkbox
              name={InferiorCheck.name}
              //   checked={InferiorCheckV}
              //   onChange={formik.handleChange}
              checked={formik.values?.eleventhPage[index]?.[InferiorCheck.name]}
              onChange={(e) =>
                formik.setFieldValue(
                  `eleventhPage[${index}].${InferiorCheck.name}`,
                  e.target.checked
                )
              }
            />
          }
        />
        <FormControlLabel
          style={{ marginRight: "auto", display: "flex" }}
          label="Temporal Lobe Auditory Cortex"
          control={
            <Checkbox
              name={AuditoryCheck.name}
              //   checked={AuditoryCheckV}
              //   onChange={formik.handleChange}
              checked={formik.values?.eleventhPage[index]?.[AuditoryCheck.name]}
              onChange={(e) =>
                formik.setFieldValue(
                  `eleventhPage[${index}].${AuditoryCheck.name}`,
                  e.target.checked
                )
              }
            />
          }
        />
        <FormControlLabel
          style={{ marginRight: "auto", display: "flex" }}
          label="Temporal Lobe Auditory Association Cortex"
          control={
            <Checkbox
              name={AssociationCheck.name}
              //   checked={AssociationCheckV}
              //   onChange={formik.handleChange}
              checked={formik.values?.eleventhPage[index]?.[AssociationCheck.name]}
              onChange={(e) =>
                formik.setFieldValue(
                  `eleventhPage[${index}].${AssociationCheck.name}`,
                  e.target.checked
                )
              }
            />
          }
        />
        <FormControlLabel
          style={{ marginRight: "auto", display: "flex" }}
          label="Medial Temporal Lobe and Hippocampus"
          control={
            <Checkbox
              name={HippocampusCheck.name}
              //   checked={HippocampusCheckV}
              //   onChange={formik.handleChange}
              checked={formik.values?.eleventhPage[index]?.[HippocampusCheck.name]}
              onChange={(e) =>
                formik.setFieldValue(
                  `eleventhPage[${index}].${HippocampusCheck.name}`,
                  e.target.checked
                )
              }
            />
          }
        />
        <FormControlLabel
          style={{ marginRight: "auto", display: "flex" }}
          label="Occipital Lobe"
          control={
            <Checkbox
              name={OccipitalCheck.name}
              //   checked={OccipitalCheckV}
              //   onChange={formik.handleChange}
              checked={formik.values?.eleventhPage[index]?.[OccipitalCheck.name]}
              onChange={(e) =>
                formik.setFieldValue(
                  `eleventhPage[${index}].${OccipitalCheck.name}`,
                  e.target.checked
                )
              }
            />
          }
        />
        <FormControlLabel
          style={{ marginRight: "auto", display: "flex" }}
          label="Cerebellum - Spinocerebellum"
          control={
            <Checkbox
              name={SpinocerebellumCheck.name}
              //   checked={SpinocerebellumCheckV}
              //   onChange={formik.handleChange}
              checked={formik.values?.eleventhPage[index]?.[SpinocerebellumCheck.name]}
              onChange={(e) =>
                formik.setFieldValue(
                  `eleventhPage[${index}].${SpinocerebellumCheck.name}`,
                  e.target.checked
                )
              }
            />
          }
        />
        <FormControlLabel
          style={{ marginRight: "auto", display: "flex" }}
          label="Cerebellum - Cerebrocerebellum"
          control={
            <Checkbox
              name={CerebrocerebellumCheck.name}
              //   checked={CerebrocerebellumCheckV}
              //   onChange={formik.handleChange}
              checked={formik.values?.eleventhPage[index]?.[CerebrocerebellumCheck.name]}
              onChange={(e) =>
                formik.setFieldValue(
                  `eleventhPage[${index}].${CerebrocerebellumCheck.name}`,
                  e.target.checked
                )
              }
            />
          }
        />
        <FormControlLabel
          style={{ marginRight: "auto", display: "flex" }}
          label="Cerebellum - Vestibulocerebellum"
          control={
            <Checkbox
              name={VestibulocerebellumCheck.name}
              //   checked={VestibulocerebellumCheckV}
              //   onChange={formik.handleChange}
              checked={formik.values?.eleventhPage[index]?.[VestibulocerebellumCheck.name]}
              onChange={(e) =>
                formik.setFieldValue(
                  `eleventhPage[${index}].${VestibulocerebellumCheck.name}`,
                  e.target.checked
                )
              }
            />
          }
        />
        <FormControlLabel
          style={{ marginRight: "auto", display: "flex" }}
          label="Basal Ganglia Direct Pathway"
          control={
            <Checkbox
              name={DirectCheck.name}
              //   checked={DirectCheckV}
              //   onChange={formik.handleChange}
              checked={formik.values?.eleventhPage[index]?.[DirectCheck.name]}
              onChange={(e) =>
                formik.setFieldValue(`eleventhPage[${index}].${DirectCheck.name}`, e.target.checked)
              }
            />
          }
        />

        <FormControlLabel
          style={{ marginRight: "auto", display: "flex" }}
          label="Basal Ganglia Indirect Pathway"
          control={
            <Checkbox
              name={IndirectCheck.name}
              //   checked={IndirectCheckV}
              //   onChange={formik.handleChange}
              checked={formik.values?.eleventhPage[index]?.[IndirectCheck.name]}
              onChange={(e) =>
                formik.setFieldValue(
                  `eleventhPage[${index}].${IndirectCheck.name}`,
                  e.target.checked
                )
              }
            />
          }
        />
        <FormControlLabel
          style={{ marginRight: "auto", display: "flex" }}
          label="Autonomic Reduced Parasympathetic Activity"
          control={
            <Checkbox
              name={ParasympatheticCheck.name}
              //   checked={ParasympatheticCheckV}
              //   onChange={formik.handleChange}
              checked={formik.values?.eleventhPage[index]?.[ParasympatheticCheck.name]}
              onChange={(e) =>
                formik.setFieldValue(
                  `eleventhPage[${index}].${ParasympatheticCheck.name}`,
                  e.target.checked
                )
              }
            />
          }
        />
        <FormControlLabel
          style={{ marginRight: "auto", display: "flex" }}
          label="Autonomic Increased Sympathetic Activity"
          control={
            <Checkbox
              name={SympatheticCheck.name}
              //   checked={SympatheticCheckV}
              //   onChange={formik.handleChange}
              checked={formik.values?.eleventhPage[index]?.[SympatheticCheck.name]}
              onChange={(e) =>
                formik.setFieldValue(
                  `eleventhPage[${index}].${SympatheticCheck.name}`,
                  e.target.checked
                )
              }
            />
          }
        />

        <FormControlLabel
          style={{ marginRight: "auto", display: "flex" }}
          label="Epileptiform Activity"
          control={
            <Checkbox
              name={EpileptiformCheck.name}
              //   checked={EpileptiformCheckV}
              //   onChange={formik.handleChange}
              checked={formik.values?.eleventhPage[index]?.[EpileptiformCheck.name]}
              onChange={(e) =>
                formik.setFieldValue(
                  `eleventhPage[${index}].${EpileptiformCheck.name}`,
                  e.target.checked
                )
              }
            />
          }
        />
      </div>

      {/* <Grid container className="GridClass">
		<Grid item xs={12} style={{ display: "flex", marginBottom: "20px" }}>
		<input
			type={OrbitofrontalCheck.type}
			name={OrbitofrontalCheck.name}
			value={OrbitofrontalCheckV}
			onChange={formik.handleChange}
			className="checkboxClass"
		/>
		<label className="VBAIlabel">Frontal Lobe Prefrontal, Dorsolateral and Orbitofrontal</label>

		</Grid>
		<Grid item xs={12} style={{ display: "flex", marginBottom: "20px" }}>
		<input
			type={PrecentralCheck.type}
			name={PrecentralCheck.name}
			value={PrecentralCheckV}
			onChange={formik.handleChange}
			className="checkboxClass"
		/>
		<label className="VBAIlabel">Frontal Lobe Precentral and Supplementary Motor Areas</label>

		</Grid>
		<Grid item xs={12} style={{ display: "flex", marginBottom: "20px" }}>
		<input
			type={BrocaCheck.type}
			name={BrocaCheck.name}
			value={BrocaCheckV}
			onChange={formik.handleChange}
			className="checkboxClass"
		/>
		<label className="VBAIlabel">Frontal Lobe Broca’s Motor Speech Area</label>

		</Grid>
		<Grid item xs={12} style={{ display: "flex", marginBottom: "20px" }}>
		<input
			type={SomatosensoryCheck.type}
			name={SomatosensoryCheck.name}
			value={SomatosensoryCheckV}
			onChange={formik.handleChange}
			className="checkboxClass"
		/>
		<label className="VBAIlabel">Parietal Somatosensory Area and Parietal Superior Lobule</label>

		</Grid>
		<Grid item xs={12} style={{ display: "flex", marginBottom: "20px" }}>
		<input
			type={InferiorCheck.type}
			name={InferiorCheck.name}
			value={InferiorCheckV}
			onChange={formik.handleChange}
			className="checkboxClass"
		/>
		<label className="VBAIlabel">Parietal Inferior Lobule</label>

		</Grid>
		<Grid item xs={12} style={{ display: "flex", marginBottom: "20px" }}>
		<input
			type={AuditoryCheck.type}
			name={AuditoryCheck.name}
			value={AuditoryCheckV}
			onChange={formik.handleChange}
			className="checkboxClass"
		/>
		<label className="VBAIlabel">Temporal Lobe Auditory Cortex</label>

		</Grid>
		<Grid item xs={12} style={{ display: "flex", marginBottom: "20px" }}>
		<input
			type={AssociationCheck.type}
			name={AssociationCheck.name}
			value={AssociationCheckV}
			onChange={formik.handleChange}
			className="checkboxClass"
		/>
		<label className="VBAIlabel">Temporal Lobe Auditory Association Cortex</label>

		</Grid>
		<Grid item xs={12} style={{ display: "flex", marginBottom: "20px" }}>
		<input
			type={HippocampusCheck.type}
			name={HippocampusCheck.name}
			value={HippocampusCheckV}
			onChange={formik.handleChange}
			className="checkboxClass"
		/>
		<label className="VBAIlabel">Medial Temporal Lobe and Hippocampus</label>

		</Grid>
		<Grid item xs={12} style={{ display: "flex", marginBottom: "20px" }}>
		<input
			type={OccipitalCheck.type}
			name={OccipitalCheck.name}
			value={OccipitalCheckV}
			onChange={formik.handleChange}
			className="checkboxClass"
		/>
		<label className="VBAIlabel">Occipital Lobe</label>

		</Grid>
		<Grid item xs={12} style={{ display: "flex", marginBottom: "20px" }}>
		<input
			type={SpinocerebellumCheck.type}
			name={SpinocerebellumCheck.name}
			value={SpinocerebellumCheckV}
			onChange={formik.handleChange}
			className="checkboxClass"
		/>
		<label className="VBAIlabel">Cerebellum - Spinocerebellum</label>

		</Grid>
		<Grid item xs={12} style={{ display: "flex", marginBottom: "20px" }}>
		<input
			type={CerebrocerebellumCheck.type}
			name={CerebrocerebellumCheck.name}
			value={CerebrocerebellumCheckV}
			onChange={formik.handleChange}
			className="checkboxClass"
		/>
		<label className="VBAIlabel">Cerebellum - Cerebrocerebellum</label>

		</Grid>
		<Grid item xs={12} style={{ display: "flex", marginBottom: "20px" }}>
		<input
			type={VestibulocerebellumCheck.type}
			name={VestibulocerebellumCheck.name}
			value={VestibulocerebellumCheckV}
			onChange={formik.handleChange}
			className="checkboxClass"
		/>
		<label className="VBAIlabel">Cerebellum - Vestibulocerebellum</label>

		</Grid>
		<Grid item xs={12} style={{ display: "flex", marginBottom: "20px" }}>
		<input
			type={DirectCheck.type}
			name={DirectCheck.name}
			value={DirectCheckV}
			onChange={formik.handleChange}
			className="checkboxClass"
		/>
		<label className="VBAIlabel">Basal Ganglia Direct Pathway</label>

		</Grid>
		<Grid item xs={12} style={{ display: "flex", marginBottom: "20px" }}>
		<input
			type={IndirectCheck.type}
			name={IndirectCheck.name}
			value={IndirectCheckV}
			onChange={formik.handleChange}
			className="checkboxClass"
		/>
		<label className="VBAIlabel">Basal Ganglia Indirect Pathway</label>

		</Grid>
		<Grid item xs={12} style={{ display: "flex", marginBottom: "20px" }}>
		<input
			type={ParasympatheticCheck.type}
			name={ParasympatheticCheck.name}
			value={ParasympatheticCheckV}
			onChange={formik.handleChange}
			className="checkboxClass"
		/>
		<label className="VBAIlabel">Autonomic Reduced Parasympathetic Activity</label>

		</Grid>

		<Grid item xs={12} style={{ display: "flex", marginBottom: "20px" }}>
		<input
			type={SympatheticCheck.type}
			name={SympatheticCheck.name}
			value={SympatheticCheckV}
			onChange={formik.handleChange}
			className="checkboxClass"
		/>
		<label className="VBAIlabel">Autonomic Increased Sympathetic Activity</label>

		</Grid>
		<Grid item xs={12} style={{ display: "flex", marginBottom: "20px" }}>
		<input
			type={EpileptiformCheck.type}
			name={EpileptiformCheck.name}
			value={EpileptiformCheckV}
			onChange={formik.handleChange}
			className="checkboxClass"
		/>
		<label className="VBAIlabel">Epileptiform Activity</label>

		</Grid> */}

      {/* </Grid> */}
    </SoftBox>
    // <div>

    //   <FormControl>
    //     {menuItems.map((box, index) => {
    //       console.log(index);
    //       return (
    //         <FormGroup
    //           key={index}
    //           style={{ display: "flex", flexDirection: "row", marginLeft: "10px" }}
    //         >
    //           <FormControlLabel
    //             style={{ marginRight: "auto" }}
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
    //                   style={{ marginLeft: "10px" }}
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
BrainLocalCheckboxes.propTypes = {
  formData: PropTypes.oneOfType([PropTypes.object, PropTypes.func]).isRequired,
  formik: PropTypes.oneOfType([PropTypes.object, PropTypes.func]).isRequired,
  form: PropTypes.oneOfType([PropTypes.object, PropTypes.func]).isRequired,
  index: PropTypes.number,
};

export default BrainLocalCheckboxes;
