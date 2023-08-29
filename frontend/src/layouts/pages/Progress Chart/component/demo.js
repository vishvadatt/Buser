import {useState} from 'react';
import { Bar, Line } from 'react-chartjs-2';
import {Chart as ChartJS, Title, Tooltip, LineElement, Legend, CategoryScale, LinearScale, PointElement, Filler} from 'chart.js';
import { Formik } from 'formik';
import SoftSelect from 'components/SoftSelect';
import { Grid } from 'antd';
ChartJS.register(
  Title, Tooltip, LineElement, Legend,
  CategoryScale, LinearScale, PointElement, Filler
)
function* yLabel() {
  yield* ['None', 'Low', 'Med', 'High'];
}
function Demo() {
  const optionData={
    Year: [
      { value: "currentyear", label: "Current Year" },
      { value: "previousyear", label: "Previous Year" },
    ],
  }
  var yLabels = {
    7 : 'DAILY',
    30 : 'weekly',
    365 : 'monthly',
   
}
  
  const [data, setData]= useState({
    labels:["January","February", "March", "April", "May", "June","July","August","September","October","November","December"],
    datasets:[
      {
        label:"frequnecy and duration",
        data:[365,5,10, 130, 35,28],
        backgroundColor:'yellow',
        borderColor:'blue',
        fill:true,
        pointStyle:'rect',
        pointBorderColor:'green',
        pointBackgroundColor:'#fff',
        showLine:true,
      }   
    ]
  })
  const legend = {
    display: true,
    position: "bottom",
    labels: {
      fontColor: "#323130",
      fontSize: 14
    }
  };
  
   const options = {
    responsive: true,
    interaction: {
      mode: 'index' ,
      intersect: false,
    },
    stacked: false,
    plugins: {
      title: {
        display: true,
        text: 'Chart.js Line Chart - Multi Axis',
      },
    },
    scales: {
      x: {
        title:{
          display:true,
          text:"Time in week",
          color:"red"
        }
        
      },
      y: {
        title:{
          display:true,
          text:"frequnecy and duration",
          color:"red"
        },
        type: 'linear' ,
        display: true,
        position: 'left',
        
        ticks:{
          callback: function(value, index, values) {
            console.log(value,index,values,"values")
            if (index==0) {
              return "Daily";
            } else if (index==1) {
             return "Weekly" ;
            } else  if(index==2) {
              return "Monthly";
            } 
        }
          }
      },   
    },
  };
  return (<>
   
   <Formik
            initialValues={{
              whichYear: "",
              toDate: "",
              fromDate: ""
            }}
            onSubmit={(values) => {
              console.log("values..", values);
             
            }}
          >
            {(formik, errors) => {
             return(<> 
            {/* <Grid container spacing={3} key={i} pt={3}> */}
            {/* <Grid item xs={12} sm={12} lg={6}> */}
          <SoftSelect
               placeholder="Please Select ..."
                 options={optionData.Year}
               onChange={(e) => formik.setFieldValue("whichYear", e.value)}
             />
             {/* </Grid>
            </Grid> */}
    <div className="App" style={{width:'800px', height:'800px'}}>
      <Line data={data}  options={options} formatYLabel={() => yLabelIterator.next().value}>Hello</Line>
    </div></>)}}
    </Formik>
  </> );
}

export default Demo;