import React from "react";
import "../style.css";
import { Checkbox, Grid } from "@mui/material";
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import PropTypes from "prop-types";

function index({ formik, form, index }) {
  const { values } = formik;

  // left
  const noradrenergic = [
    {
      name: "Remeron",
    },
    {
      name: "Norset",
    },
    {
      name: "Zispin",
    },
    {
      name: "Remergil",
    },
    {
      name: "Avanza",
    },
    {
      name: "Axit",
    },
  ];
  const tricyclic = [
    {
      name: "Elavil",
    },
    {
      name: "Prothiaden",
    },
    {
      name: "Endep",
    },
    {
      name: "Adapin",
    },
    {
      name: "Tryptanol",
    },
    {
      name: "Sinequan",
    },
    {
      name: "Trepiline",
    },
    {
      name: "Tofranil",
    },
    {
      name: "Asendin",
    },
    {
      name: "Janamine",
    },
    {
      name: "Asendis",
    },
    {
      name: "Gamanil",
    },
    {
      name: "Defanyl",
    },
    {
      name: "Aventyl",
    },
    {
      name: "Demolox",
    },
    {
      name: "Pamelor",
    },
    {
      name: "Moxadil",
    },
    {
      name: "Opipramol",
    },
    {
      name: "Anafranil",
    },
    {
      name: "Vivactil",
    },
    {
      name: "Norpramin",
    },
    {
      name: "Rhotrimine",
    },
    {
      name: "Pertofrane",
    },
    {
      name: "Surmontil",
    },
    {
      name: "Thaden",
    },
    {
      name: "Norpramin",
    },
  ];
  const serotonin = [
    {
      name: "Paxil",
    },
    {
      name: "Seromex",
    },
    {
      name: "Zoloft",
    },
    {
      name: "Seronil",
    },
    {
      name: "Prozac",
    },
    {
      name: "Sarafem",
    },
    {
      name: "Celexa",
    },
    {
      name: "Fluctin",
    },
    {
      name: "Lexapro",
    },
    {
      name: "Faverin",
    },
    {
      name: "Esertia",
    },
    {
      name: "Seroxat",
    },
    {
      name: "Luvox",
    },
    {
      name: "Aropax",
    },
    {
      name: "Cipramil",
    },
    {
      name: "Deroxat",
    },
    {
      name: "Emocal",
    },
    {
      name: "Rexetin",
    },
    {
      name: "Seropram",
    },
    {
      name: "Paroxat",
    },
    {
      name: "Cipralex",
    },
    {
      name: "Lustral",
    },
    {
      name: "Fontex",
    },
    {
      name: "Serlain",
    },
    {
      name: "Priligy",
    },
  ];
  const snris = [
    {
      name: "Effexor",
    },
    {
      name: "Pristiq",
    },
    {
      name: "Meridia",
    },
    {
      name: "Serzone",
    },
    {
      name: "Dalcipran",
    },
    {
      name: "Cymbalta",
    },
  ];
  const ssres = [
    {
      name: "Stablon",
    },
    {
      name: "Coaxil",
    },
    {
      name: "Tatinol",
    },
  ];
  //   middle
  const maois = [
    {
      name: "Marplan",
    },
    {
      name: "Marsilid",
    },
    {
      name: "Aurorix",
    },
    {
      name: "Iprozid",
    },
    {
      name: "Manerix",
    },
    {
      name: "Ipronid",
    },
    {
      name: "Moclodura",
    },
    {
      name: "Rivivol",
    },
    {
      name: "Nardil",
    },
    {
      name: "Propilniazida",
    },
    {
      name: "Adeline",
    },
    {
      name: "Zyvox",
    },
    {
      name: "Eldepryl",
    },
    {
      name: "Zyvoxid",
    },
    {
      name: "Azilect",
    },
  ];
  const dopamine = [
    {
      name: "Mirapex",
    },
    {
      name: "Sifrol",
    },
    {
      name: "Requip",
    },
  ];
  const ndris = [
    {
      name: "Wellbutrin XL",
    },
  ];
  const antipsychotics = [
    {
      name: "Thorazine",
    },
    {
      name: "Acuphase",
    },
    {
      name: "Prolixin",
    },
    {
      name: "Haldol",
    },
    {
      name: "Trilafon",
    },
    {
      name: "Orap",
    },
    {
      name: "Compazine",
    },
    {
      name: "Clozaril",
    },
    {
      name: "Mellaril",
    },
    {
      name: "Zyprexa",
    },
    {
      name: "Stelazine",
    },
    {
      name: "Zydis",
    },
    {
      name: "Vesprin",
    },
    {
      name: "Seroquel XR",
    },
    {
      name: "Nozinan",
    },
    {
      name: "Geodon",
    },
    {
      name: "Depixol",
    },
    {
      name: "Solian",
    },
    {
      name: "Navane",
    },
    {
      name: "Invega",
    },
    {
      name: "Fluanxol",
    },
    {
      name: "Abilify",
    },
    {
      name: "Clopixol",
    },
  ];
  const gaba = [
    {
      name: "Romazicon",
    },
  ];
  const benzodiazepines = [
    {
      name: "Xanax",
    },
    {
      name: "Dalmane",
    },
    {
      name: "Lexotanil",
    },
    {
      name: "Ativan",
    },
    {
      name: "Lexotan",
    },
    {
      name: "Loramet",
    },
    {
      name: "Librium",
    },
    {
      name: "Sedoxil",
    },
    {
      name: "Klonopin",
    },
    {
      name: "Dormicum",
    },
    {
      name: "Valium",
    },
    {
      name: "Serax",
    },
    {
      name: "Prosom",
    },
    {
      name: "Restoril",
    },
    {
      name: "Rohypnol",
    },
    {
      name: "Halcion",
    },
    {
      name: "Magadon",
    },
  ];

  //   last
  const nonbenzodiazepines = [
    {
      name: "Ambien CR",
    },
    {
      name: "Sonata",
    },
    {
      name: "Lunesta",
    },
    {
      name: "Imovane",
    },
  ];
  const acetylcholine = [
    {
      name: "Urecholine",
    },
    {
      name: "Isopto",
    },
    {
      name: "Evoxac",
    },
    {
      name: "Nicotone",
    },
    {
      name: "Salagen",
    },
  ];
  const antimuscarinic = [
    {
      name: "AtroPen",
    },
    {
      name: "Atrovent",
    },
    {
      name: "Scopace",
    },
    {
      name: "Spiriva",
    },
  ];
  const ganglionic = [
    {
      name: "Inversine",
    },
    {
      name: "Hexamethonium",
    },
    {
      name: "Nicotine (high doses)",
    },
    {
      name: "Arfonad",
    },
  ];
  const neuromuscular = [
    {
      name: "Tracrium",
    },
    {
      name: "Zemuron",
    },
    {
      name: "Nimbex",
    },
    {
      name: "Anectine",
    },
    {
      name: "Nuromax",
    },
    {
      name: "Tubocurarine",
    },
    {
      name: "Metubine",
    },
    {
      name: "Norcuron",
    },
    {
      name: "Mivacron",
    },
    {
      name: " Hemicholinium-3",
    },
    {
      name: "Pavulon",
    },
  ];
  const acetylcholinesterase = [
    {
      name: "Protopam",
    },
  ];
  const reversible = [
    {
      name: "Aricept",
    },
    {
      name: "Enlon",
    },
    {
      name: "Razadyne",
    },
    {
      name: "Prostigmin",
    },
    {
      name: "Exelon",
    },
    {
      name: "Antilirium",
    },
    {
      name: "Cognex",
    },
    {
      name: "Mestinon",
    },
    {
      name: "THC",
    },
    {
      name: "Carbamate insecticides",
    },
  ];
  const irreversible = [
    {
      name: "Echothiophate",
    },
    {
      name: "Isoflurophate",
    },
    {
      name: "Organophosphate insecticides",
    },
    {
      name: "Organophosphate-containing nerve agents",
    },
  ];

  return (
    <>
      <SoftBox>
        <Grid container>
          <Grid item lg={3.93} xs={12}>
            <SoftBox>
              <SoftTypography
                fontWeight="bold"
                fontSize="15px"
                marginTop="10px"
                className="maintitle-mediation"
              >
                <span style={{ textAlign: "center", display: "flex" }}>
                  Noradrenergic and Specific Serotonergic Antidepressants (NaSSAs)
                </span>
              </SoftTypography>
              <SoftBox className="meditation">
                {noradrenergic &&
                  noradrenergic.map((data, i) => {
                    return (
                      <>
                        <Grid container>
                          <Grid item lg={2}>
                            <Checkbox
                              style={{ marginLeft: "5px" }}
                              name={`page8[${index}].noradrenergic[${i}].noradrenergiccheck`}
                              checked={values?.page8[index]?.noradrenergic[i]?.noradrenergiccheck}
                              onChange={formik.handleChange}
                            />
                          </Grid>
                          <Grid item lg={10}>
                            <span style={{ fontSize: "15px", marginLeft: "7px" }}>
                              {data.name}
                              {i === i && <sup>®</sup>}
                            </span>
                          </Grid>
                        </Grid>
                      </>
                    );
                  })}
              </SoftBox>
            </SoftBox>
            <SoftBox>
              <SoftTypography
                fontWeight="bold"
                fontSize="15px"
                marginTop="10px"
                className="maintitle-mediation"
              >
                <span>Tricyclic Antidepressants (TCAs)</span>
              </SoftTypography>
              <SoftBox className="meditation">
                {tricyclic &&
                  tricyclic.map((data, i) => {
                    return (
                      <>
                        <Grid container>
                          <Grid lg={2}>
                            <Checkbox
                              style={{ marginLeft: "5px" }}
                              name={`page8[${index}].tricyclic[${i}].tricycliccheck`}
                              checked={values?.page8[index]?.tricyclic[i]?.tricycliccheck}
                              onChange={formik.handleChange}
                            />
                          </Grid>
                          <Grid lg={10}>
                            <span style={{ fontSize: "15px", marginLeft: "7px" }}>
                              {data.name}
                              {(i === 1 || i != 24) && <sup>®</sup>}
                              {i === 24 && <sup>TM</sup>}
                            </span>
                          </Grid>
                        </Grid>
                      </>
                    );
                  })}
              </SoftBox>
            </SoftBox>
            <SoftBox>
              <SoftTypography
                fontWeight="bold"
                fontSize="15px"
                marginTop="10px"
                className="maintitle-mediation"
              >
                <span>Selective Serotonin Reuptake Inhibitors (SSRIs)</span>
              </SoftTypography>
              <SoftBox className="meditation">
                {serotonin &&
                  serotonin.map((data, i) => {
                    return (
                      <>
                        <Grid container>
                          <Grid item lg={2}>
                            <Checkbox
                              style={{ marginLeft: "5px" }}
                              name={`page8[${index}].serotonin[${i}].serotonincheck`}
                              checked={values?.page8[index]?.serotonin[i]?.serotonincheck}
                              onChange={formik.handleChange}
                            />
                          </Grid>
                          <Grid item lg={10}>
                            <span style={{ fontSize: "15px", marginLeft: "7px" }}>
                              {data.name}
                              {i === i && <sup>®</sup>}
                            </span>
                          </Grid>
                        </Grid>
                      </>
                    );
                  })}
              </SoftBox>
            </SoftBox>
            <SoftBox>
              <SoftTypography
                fontWeight="bold"
                fontSize="15px"
                marginTop="10px"
                className="maintitle-mediation"
              >
                <span>Serotonin-Norepinephrine Reuptake Inhibitors (SNRIs)</span>
              </SoftTypography>
              <SoftBox className="meditation">
                {snris &&
                  snris.map((data, i) => {
                    return (
                      <>
                        <Grid container>
                          <Grid item lg={2}>
                            <Checkbox
                              style={{ marginLeft: "5px" }}
                              name={`page8[${index}].snris[${i}].snrischeck`}
                              checked={values?.page8[index]?.snris[i]?.snrischeck}
                              onChange={formik.handleChange}
                            />
                          </Grid>
                          <Grid item lg={10}>
                            <span style={{ fontSize: "15px", marginLeft: "7px" }}>
                              {data.name}
                              {i === i && <sup>®</sup>}
                            </span>
                          </Grid>
                        </Grid>
                      </>
                    );
                  })}
              </SoftBox>
            </SoftBox>
            <SoftBox>
              <SoftTypography
                fontWeight="bold"
                fontSize="15px"
                marginTop="10px"
                className="maintitle-mediation"
              >
                <span>Selective Serotonin Reuptake Enhancers (SSREs)</span>
              </SoftTypography>
              <SoftBox className="meditation">
                {ssres &&
                  ssres.map((data, i) => {
                    return (
                      <>
                        <Grid container>
                          <Grid item lg={2}>
                            <Checkbox
                              style={{ marginLeft: "5px" }}
                              name={`page8[${index}].ssres[${i}].ssrescheck`}
                              checked={values?.page8[index]?.ssres[i]?.ssrescheck}
                              onChange={formik.handleChange}
                            />
                          </Grid>
                          <Grid item lg={10}>
                            <span style={{ fontSize: "15px", marginLeft: "7px" }}>
                              {data.name}
                              {i === i && <sup>®</sup>}
                            </span>
                          </Grid>
                        </Grid>
                      </>
                    );
                  })}
              </SoftBox>
            </SoftBox>
          </Grid>
          <Grid lg={0.1}></Grid>
          <Grid item lg={3.93} xs={12}>
            <SoftBox>
              <SoftTypography
                fontWeight="bold"
                fontSize="15px"
                marginTop="10px"
                className="maintitle-mediation"
              >
                <span>Monoamine Oxidase Inhibitors (MAOIs)</span>
              </SoftTypography>
              <SoftBox className="meditation meditation-optional">
                {maois &&
                  maois.map((data, i) => {
                    return (
                      <>
                        <Grid container>
                          <Grid item lg={2}>
                            <Checkbox
                              style={{ marginLeft: "5px" }}
                              name={`page8[${index}].maois[${i}].maoischeck`}
                              checked={values?.page8[index]?.maois[i]?.maoischeck}
                              onChange={formik.handleChange}
                            />
                          </Grid>
                          <Grid item lg={10}>
                            <span style={{ fontSize: "15px", marginLeft: "7px" }}>
                              {data.name}
                              {i === i && <sup>®</sup>}
                            </span>
                          </Grid>
                        </Grid>
                      </>
                    );
                  })}
              </SoftBox>
            </SoftBox>
            <SoftBox>
              <SoftTypography
                fontWeight="bold"
                fontSize="15px"
                marginTop="10px"
                className="maintitle-mediation"
              >
                <span>Dopamine Receptor Agonists</span>
              </SoftTypography>
              <SoftBox className="meditation">
                {dopamine &&
                  dopamine.map((data, i) => {
                    return (
                      <>
                        <Grid container>
                          <Grid item lg={2}>
                            <Checkbox
                              style={{ marginLeft: "5px" }}
                              name={`page8[${index}].dopamine[${i}].dopaminecheck`}
                              checked={values?.page8[index]?.dopamine[i]?.dopaminecheck}
                              onChange={formik.handleChange}
                            />
                          </Grid>
                          <Grid item lg={10}>
                            <span style={{ fontSize: "15px", marginLeft: "7px" }}>
                              {data.name}
                              {i === i && <sup>®</sup>}
                            </span>
                          </Grid>
                        </Grid>
                      </>
                    );
                  })}
              </SoftBox>
            </SoftBox>
            <SoftBox>
              <SoftTypography
                fontWeight="bold"
                fontSize="15px"
                marginTop="10px"
                className="maintitle-mediation"
              >
                <span>Norepinephrine–Dopamine Reuptake Inhibitors (NDRIs)</span>
              </SoftTypography>
              <SoftBox className="meditation meditation-optional">
                {ndris &&
                  ndris.map((data, i) => {
                    return (
                      <>
                        <Grid container>
                          <Grid item lg={2}>
                            <Checkbox
                              style={{ marginLeft: "5px" }}
                              name={`page8[${index}].ndris[${i}].ndrischeck`}
                              checked={values?.page8[index]?.ndris[i]?.ndrischeck}
                              onChange={formik.handleChange}
                            />
                          </Grid>
                          <Grid item lg={10}>
                            <span style={{ fontSize: "15px", marginLeft: "7px" }}>
                              {data.name}
                              {i === i && <sup>®</sup>}
                            </span>
                          </Grid>
                        </Grid>
                      </>
                    );
                  })}
              </SoftBox>
            </SoftBox>
            <SoftBox>
              <SoftTypography
                fontWeight="bold"
                fontSize="15px"
                marginTop="10px"
                className="maintitle-mediation"
              >
                <span>D2 Dopamine Receptor Blockers (antipsychotics)</span>
              </SoftTypography>
              <SoftBox className="meditation meditation-optional">
                {antipsychotics &&
                  antipsychotics.map((data, i) => {
                    return (
                      <>
                        <Grid container>
                          <Grid item lg={2}>
                            <Checkbox
                              style={{ marginLeft: "5px" }}
                              name={`page8[${index}].antipsychotics[${i}].antipsychoticscheck`}
                              checked={values?.page8[index]?.antipsychotics[i]?.antipsychoticscheck}
                              onChange={formik.handleChange}
                            />
                          </Grid>
                          <Grid item lg={10}>
                            <span style={{ fontSize: "15px", marginLeft: "7px" }}>
                              {data.name}
                              {i === i && <sup>®</sup>}
                            </span>
                          </Grid>
                        </Grid>
                      </>
                    );
                  })}
              </SoftBox>
            </SoftBox>
            <SoftBox>
              <SoftTypography
                fontWeight="bold"
                fontSize="15px"
                marginTop="10px"
                marginLeft="1px"
                marginRight="1px"
                className="maintitle-mediation"
              >
                <span>GABA Antagonist Competitive Binder</span>
              </SoftTypography>
              <SoftBox className="meditation meditation-optional">
                {gaba &&
                  gaba.map((data, i) => {
                    return (
                      <>
                        <Grid container>
                          <Grid item lg={2}>
                            <Checkbox
                              style={{ marginLeft: "5px" }}
                              name={`page8[${index}].gaba[${i}].gabacheck`}
                              checked={values?.page8[index]?.gaba[i]?.gabacheck}
                              onChange={formik.handleChange}
                            />
                          </Grid>
                          <Grid item lg={10}>
                            <span style={{ fontSize: "15px", marginLeft: "7px" }}>
                              {data.name}
                              {i === i && <sup>®</sup>}
                            </span>
                          </Grid>
                        </Grid>
                      </>
                    );
                  })}
              </SoftBox>
            </SoftBox>
            <SoftBox>
              <SoftTypography
                fontWeight="bold"
                fontSize="15px"
                marginTop="10px"
                className="maintitle-mediation"
              >
                <span>Agonist Modulators of GABA Receptors (benzodiazepines)</span>
              </SoftTypography>
              <SoftBox className="meditation">
                {benzodiazepines &&
                  benzodiazepines.map((data, i) => {
                    return (
                      <>
                        <Grid container>
                          <Grid item lg={2}>
                            <Checkbox
                              style={{ marginLeft: "5px" }}
                              name={`page8[${index}].benzodiazepines[${i}].benzodiazepinescheck`}
                              checked={
                                values?.page8[index]?.benzodiazepines[i]?.benzodiazepinescheck
                              }
                              onChange={formik.handleChange}
                            />
                          </Grid>
                          <Grid item lg={10}>
                            <span style={{ fontSize: "15px", marginLeft: "7px" }}>
                              {data.name}
                              {i === i && <sup>®</sup>}
                            </span>
                          </Grid>
                        </Grid>
                      </>
                    );
                  })}
              </SoftBox>
            </SoftBox>
          </Grid>
          <Grid lg={0.1}></Grid>

          <Grid item lg={3.93} xs={12}>
            <SoftBox>
              <SoftTypography
                fontWeight="bold"
                fontSize="15px"
                marginTop="10px"
                className="maintitle-mediation"
              >
                <span>Agonist Modulators of GABA Receptors (non-benzodiazepines)</span>
              </SoftTypography>
              <SoftBox className="meditation">
                {nonbenzodiazepines &&
                  nonbenzodiazepines.map((data, i) => {
                    return (
                      <>
                        <Grid container>
                          <Grid item lg={2}>
                            <Checkbox
                              style={{ marginLeft: "5px" }}
                              name={`page8[${index}].nonbenzodiazepines[${i}].nonbenzodiazepinescheck`}
                              checked={
                                values?.page8[index]?.nonbenzodiazepines[i]?.nonbenzodiazepinescheck
                              }
                              onChange={formik.handleChange}
                            />
                          </Grid>
                          <Grid item lg={10}>
                            <span style={{ fontSize: "15px", marginLeft: "7px" }}>
                              {data.name}
                              {i === i && <sup>®</sup>}
                            </span>
                          </Grid>
                        </Grid>
                      </>
                    );
                  })}
              </SoftBox>
            </SoftBox>
            <SoftBox>
              <SoftTypography
                fontWeight="bold"
                fontSize="15px"
                marginTop="10px"
                className="maintitle-mediation"
              >
                <span>Acetylcholine Receptor Agonists</span>
              </SoftTypography>
              <SoftBox className="meditation">
                {acetylcholine &&
                  acetylcholine.map((data, i) => {
                    return (
                      <>
                        <Grid container>
                          <Grid item lg={2}>
                            <Checkbox
                              style={{ marginLeft: "5px" }}
                              name={`page8[${index}].acetylcholine[${i}].acetylcholinecheck`}
                              checked={values?.page8[index]?.acetylcholine[i]?.acetylcholinecheck}
                              onChange={formik.handleChange}
                            />
                          </Grid>
                          <Grid item lg={10}>
                            <span style={{ fontSize: "15px", marginLeft: "7px" }}>
                              {data.name}
                              {i === i && <sup>®</sup>}
                            </span>
                          </Grid>
                        </Grid>
                      </>
                    );
                  })}
              </SoftBox>
            </SoftBox>
            <SoftBox>
              <SoftTypography
                fontWeight="bold"
                fontSize="15px"
                marginTop="10px"
                className="maintitle-mediation"
              >
                <span>Acetylcholine Receptor Antagonists (antimuscarinic agents)</span>
              </SoftTypography>
              <SoftBox className="meditation">
                {antimuscarinic &&
                  antimuscarinic.map((data, i) => {
                    return (
                      <>
                        <Grid container>
                          <Grid item lg={2}>
                            <Checkbox
                              style={{ marginLeft: "5px" }}
                              name={`page8[${index}].antimuscarinic[${i}].antimuscariniccheck`}
                              checked={values?.page8[index]?.antimuscarinic[i]?.antimuscariniccheck}
                              onChange={formik.handleChange}
                            />
                          </Grid>
                          <Grid item lg={10}>
                            <span style={{ fontSize: "15px", marginLeft: "7px" }}>
                              {data.name}
                              {i === i && <sup>®</sup>}
                            </span>
                          </Grid>
                        </Grid>
                      </>
                    );
                  })}
              </SoftBox>
            </SoftBox>
            <SoftBox>
              <SoftTypography
                fontWeight="bold"
                fontSize="15px"
                marginTop="10px"
                className="maintitle-mediation"
              >
                <span>Acetylcholine Receptor Antagonists (ganglionic blockers)</span>
              </SoftTypography>
              <SoftBox className="meditation meditation-optional reversible">
                {ganglionic &&
                  ganglionic.map((data, i) => {
                    return (
                      <>
                        <Grid container>
                          <Grid item lg={2}>
                            <Checkbox
                              style={{ marginLeft: "5px" }}
                              name={`page8[${index}].ganglionic[${i}].ganglioniccheck`}
                              checked={values?.page8[index]?.ganglionic[i]?.ganglioniccheck}
                              onChange={formik.handleChange}
                            />
                          </Grid>
                          <Grid item lg={10}>
                            <span style={{ fontSize: "15px", marginLeft: "5px" }}>
                              {data.name}
                              {i === i && i != 1 && i != 2 && <sup>®</sup>}
                            </span>
                          </Grid>
                        </Grid>
                      </>
                    );
                  })}
              </SoftBox>
            </SoftBox>
            <SoftBox>
              <SoftTypography
                fontWeight="bold"
                fontSize="15px"
                marginTop="10px"
                className="maintitle-mediation"
              >
                <span>Acetylcholine Receptor Antagonists (neuromuscular blockers)</span>
              </SoftTypography>
              <SoftBox className="meditation meditation-optional">
                {neuromuscular &&
                  neuromuscular.map((data, i) => {
                    return (
                      <>
                        <Grid container>
                          <Grid item lg={2}>
                            <Checkbox
                              style={{ marginLeft: "5px" }}
                              name={`page8[${index}].neuromuscular[${i}].neuromuscularcheck`}
                              checked={values?.page8[index]?.neuromuscular[i]?.neuromuscularcheck}
                              onChange={formik.handleChange}
                            />
                          </Grid>
                          <Grid item lg={10}>
                            <span style={{ fontSize: "15px", marginLeft: "7px" }}>
                              {data.name}
                              {i === i && <sup>®</sup>}
                            </span>
                          </Grid>
                        </Grid>
                      </>
                    );
                  })}
              </SoftBox>
            </SoftBox>
            <SoftBox>
              <SoftTypography
                fontWeight="bold"
                fontSize="15px"
                marginTop="10px"
                className="maintitle-mediation"
              >
                <span>Acetylcholinesterase Reactivators</span>
              </SoftTypography>
              <SoftBox className="meditation">
                {acetylcholinesterase &&
                  acetylcholinesterase.map((data, i) => {
                    return (
                      <>
                        <Grid container>
                          <Grid item lg={2}>
                            <Checkbox
                              style={{ marginLeft: "5px" }}
                              name={`page8[${index}].acetylcholinesterase[${i}].acetylcholinesterasecheck`}
                              checked={
                                values?.page8[index]?.acetylcholinesterase[i]
                                  ?.acetylcholinesterasecheck
                              }
                              onChange={formik.handleChange}
                            />
                          </Grid>
                          <Grid item lg={10}>
                            <span style={{ fontSize: "15px", marginLeft: "7px" }}>
                              {data.name}
                              {i === i && <sup>®</sup>}
                            </span>
                          </Grid>
                        </Grid>
                      </>
                    );
                  })}
              </SoftBox>
            </SoftBox>
            <SoftBox>
              <SoftTypography
                fontWeight="bold"
                fontSize="15px"
                marginTop="10px"
                className="maintitle-mediation"
              >
                <span>Cholinesterase Inhibitors (reversible)</span>
              </SoftTypography>
              <SoftBox className="meditation meditation-optional reversible">
                {reversible &&
                  reversible.map((data, i) => {
                    return (
                      <>
                        <Grid container>
                          <Grid item lg={2}>
                            <Checkbox
                              style={{ marginLeft: "5px" }}
                              name={`page8[${index}].reversible[${i}].reversiblecheck`}
                              checked={values?.page8[index]?.reversible[i]?.reversiblecheck}
                              onChange={formik.handleChange}
                            />
                          </Grid>
                          <Grid item lg={10}>
                            <span style={{ fontSize: "15px", marginLeft: "7px" }}>
                              {data.name}
                              {i === i && i != 8 && i != 9 && <sup>®</sup>}
                            </span>
                          </Grid>
                        </Grid>
                      </>
                    );
                  })}
              </SoftBox>
            </SoftBox>
            <SoftBox>
              <SoftTypography
                fontWeight="bold"
                fontSize="15px"
                marginTop="10px"
                className="maintitle-mediation"
              >
                <span>Cholinesterase Inhibitors (irreversible)</span>
              </SoftTypography>
              <SoftBox className="meditation meditation-optional reversible">
                {irreversible &&
                  irreversible.map((data, i) => {
                    return (
                      <>
                        <Grid container>
                          <Grid item lg={2} xs={1}>
                            <Checkbox
                              style={{ marginLeft: "5px" }}
                              name={`page8[${index}].irreversible[${i}].irreversiblecheck`}
                              checked={values?.page8[index]?.irreversible[i]?.irreversiblecheck}
                              onChange={formik.handleChange}
                            />
                          </Grid>
                          <Grid item lg={10} xs={11}>
                            <span
                              style={{ fontSize: "15px", marginLeft: "7px" }}
                              className="mediationspan"
                            >
                              {data.name}
                            </span>
                          </Grid>
                        </Grid>
                      </>
                    );
                  })}
              </SoftBox>
            </SoftBox>
          </Grid>
        </Grid>
      </SoftBox>
    </>
  );
}
index.propTypes = {
  formik: PropTypes.oneOfType([PropTypes.object, PropTypes.func]).isRequired,
  form: PropTypes.oneOfType([PropTypes.object, PropTypes.func]).isRequired,
};
export default index;
