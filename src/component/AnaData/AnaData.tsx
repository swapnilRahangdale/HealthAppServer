import { useContext, useEffect } from "react";
import mainContext from "../../Store/mainContext/mainContext";
import HealthProjection from "../../common/HealthProjection/HealthProjection";
     
     
const AnaData = () =>{
    
    const healthContext: any = useContext(mainContext);
    const { healthData, tHead, mainState } = healthContext;
    console.log('mainState', mainState);
    

    console.log("healthData", healthData);

      

    return(
        <div>
            <HealthProjection tHead={tHead}  healthData={healthData}/>
        </div>
    )
};

export default AnaData