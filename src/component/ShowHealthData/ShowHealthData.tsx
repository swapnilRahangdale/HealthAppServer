import { useContext, useEffect, useState } from "react";
import mainContext from "../../Store/mainContext/mainContext";
import HealthTable from "../../common/HealthTable/HealthTable";
import axios from 'axios';

const ShowHealthData = () => {

   const [HeaderValue, setHeaderValue] = useState("Show Health Value")

   useEffect(() => {
        
    axios.get('http://localhost:3001/allhealth')
  
    .then( (response) => {
      // handle success
      console.log('response', response);
    })

    .catch( (error) => {
      // handle error
      console.log('error',error);
    });

   },[HeaderValue])

  
  
  const healthContext: any = useContext(mainContext);
  const { healthData } = healthContext;
  

  const tHead = [
    'id',
    'name',
    'DBP',
    'HR',
    'SBP',
    'cal',
    'hemoglobin',
    'spo2',
    'sugar'

    
  ];
  //console.log("healthContext", healthData);

  return (
    <div>
      <p>{HeaderValue} <button onClick = {() =>setHeaderValue('ARC Health Data')}> Change</button></p>
      <br/>

      <HealthTable tHead={tHead}  healthData={healthData} />
    </div>
  );
};
export default ShowHealthData;
