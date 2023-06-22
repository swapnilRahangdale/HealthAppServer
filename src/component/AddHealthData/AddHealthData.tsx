import { useContext, useState } from "react";
import mainContext from "../../Store/mainContext/mainContext";
import styless from "./AddHealthData.module.scss"
import UseFormValidation from "../../common/UseFormValidation/UseFormValidation";
import { Link, useNavigate } from "react-router-dom";
import MenuBar from "../../MenuBar/MenuBar";

const AddHealthData = () =>{

    const navigate = useNavigate();             // ok krne ke bad direct show data me leke jayega 
    const helthContext:any = useContext(mainContext);
    const {setHealthData, healthData} = helthContext;
   
    
     
    //const useInputUserFormValidation = UseFormValidation();
    const { 
      input: userInput,
      setInput: setUserInput,
      inputTouched: userIsTouched,
      setinputTouched: setUserIsTouched,
      inputIsEmpty: userIsEmpty
    }:any = UseFormValidation((userInput:any) =>userInput === '');

    //const [hr, setHR] = useState(0);
    
    const { 
      input: hrInput,
      setInput: setHrInput,
      inputTouched: hrIsTouched,
      setinputTouched: setHrIsTouched,
      inputIsEmpty: hrIsEmpty}:any = UseFormValidation((hrInput:any) => hrInput <= 0);

      const { 
        input: dbpInput,
        setInput: setDbpInput,
        inputTouched: dbpIsTouched,
        setinputTouched: setDbpIsTouched,
        inputIsEmpty: dbpIsEmpty}:any = UseFormValidation((dbpInput:any) => dbpInput <= 0);
        
        const { 
          input: sugarInput,
          setInput: setSugarInput,
          inputTouched: sugarIsTouched,
          setinputTouched: setSugarIsTouched,
          inputIsEmpty: sugarIsEmpty}:any = UseFormValidation((sugarInput:any) => sugarInput <= 0);
       
          const { 
            input: sbpInput,
            setInput: setSbpInput,
            inputTouched: sbpIsTouched,
            setinputTouched: setSbpIsTouched,
            inputIsEmpty: sbpIsEmpty}:any = UseFormValidation((sbpInput:any) => sbpInput <= 0);

            const { 
              input: calInput,
              setInput: setCalInput,
              inputTouched: calIsTouched,
              setinputTouched: setCalIsTouched,
              inputIsEmpty: calIsEmpty}:any = UseFormValidation((calInput:any) => calInput <= 0);

              const { 
                input: hemoglobinInput,
                setInput: setHemoglobinInput,
                inputTouched: hemoglobinIsTouched,
                setinputTouched: setHemoglobinIsTouched,
                inputIsEmpty: hemoglobinIsEmpty}: any = UseFormValidation((hemoglobinInput:any) => hemoglobinInput <= 0);

                const { 
                  input: spo2Input,
                  setInput: setSpo2Input,
                  inputTouched: spo2IsTouched,
                  setinputTouched: setSpo2IsTouched,
                  inputIsEmpty: spo2IsEmpty}: any = UseFormValidation((spo2IsEmpty:any) => spo2IsEmpty <= 0);
  
    const isFormValid = userIsEmpty || hrIsEmpty || dbpIsEmpty || sbpIsEmpty || calIsEmpty || hemoglobinIsEmpty || spo2IsEmpty; 

    const addNewHealthData = (e:any) =>{
          
      try {
        
        e.preventDefault();
          console.log('username', userIsEmpty);
          console.log('Hr', hrInput);
          
          

        const newHealthData = [
            ...healthData,
            {
        
        id: Math.random()*10,
        HR : hrInput,
        SBP: sbpInput,
        DBP:dbpInput,
        sugar:sugarInput,
        cal:calInput,
        hemoglobin:hemoglobinInput,
        spo2: spo2Input,
        name: userInput
        }];
        
        
        setHealthData (newHealthData);
        // const dialogObj = {
        //   msg: 'new data added',
        //   error:false
        //}
        alert('New Data Added')
        navigate('/showData')
      } catch (error) {

        alert(`there is an error in save data ${error}`, )
      }
    };
    //console.log('check user name inputIsEmpty ',userIsEmpty);
    
    // const changeUserName = (e:any) =>{
    //   if(e.target.value !== ''){  
    //     setuserNameIsEmpty(false)   
    //   }else {    
    //     setuserNameIsEmpty(true)
    //   }
    //   setUserName(e.target.value)
    // }

    
    
    return( 

            <>
             
            <div className={styless['body']}>
            
           <div className={styless['container']}>
           
             
            <span className= {styless['container-head']}> Paitient Details....</span>

            <form  onSubmit={(e) =>addNewHealthData(e)}>

    
                <div className= {styless['form-control']}>
                    <label htmlFor="username">UserName</label>
                    <input
                    type = "text"
                    placeholder="Enter Your Name"
                    id = "username"
                    value={userInput}
                    onBlur={() => setUserIsTouched(true)}
                    onChange  = {(e) => {setUserInput(e.target.value)}}
                    />
                    
                   {userIsTouched && userIsEmpty &&(
                   <span className={styless['errorclass']}>
                   User Name Can not be Empty {""}
                   </span>
                   )}
                   </div>

                   <div className= {styless['form-control']}>
                   <label htmlFor="hr">
                    Heart Rate
                   </label>
              
                    <input
                  type="number"
                  name="hr"
                  placeholder="HR"
                  id="hr"
                  value = {hrInput}
                  onBlur={() =>{setHrIsTouched(true)}}
                  onChange={e => setHrInput(parseFloat(e.target.value))}
                  
                />
                {hrIsTouched && hrIsEmpty &&(
                <span className={styless['errorclass']}>
                *Required{""}
                </span>
                )}
                </div>

                    <div className= {styless['form-control']}>
                      
                    <label htmlFor="dbp">Diastolic Blood Pressure</label>
                    <input
                    type = "number"
                    placeholder="DBP"
                    id = "dbp"
                    value={dbpInput}
                    onBlur={() => setDbpIsTouched(true)}
                    onChange  = {(e) => {setDbpInput(e.target.value)}}
                    />
                    
               
                {dbpIsTouched && dbpIsEmpty &&(
                <span className={styless['errorclass']}>
                   *Require {""}
                   </span>
                   )}
              
            </div>

            
                    <div className= {styless['form-control']}>
                      
                    <label htmlFor="dbp">Systolic Blood Pressure</label>
                    <input
                    type = "number"
                    placeholder="SBP"
                    id = "sbp"
                    value={sbpInput}
                    onBlur={() => setSbpIsTouched(true)}
                    onChange  = {(e) => {setSbpInput(e.target.value)}}
                    />
                    
                
                {sbpIsTouched && sbpIsEmpty &&(
                <span className={styless['errorclass']}>
                   *Require {""}
                   </span>
                   )}
        </div>
                       <div className= {styless['form-control']}>
                      
                      <label htmlFor="sugar">Sugar</label>
                      <input
                      type = "number"
                      placeholder="Sugar"
                      id = "sugar"
                      value={sugarInput}
                      onBlur={() => setSugarIsTouched(true)}
                      onChange  = {(e) => {setSugarInput(e.target.value)}}
                      />
                      
                  
                  {sugarIsTouched && sugarIsEmpty &&(
                  <span className={styless['errorclass']}>
                     *Require {""}
                     </span>
                     )}
              
         </div>
            
                      <div className= {styless['form-control']}>
                      
                      <label htmlFor="cal">Calorie</label>
                      <input
                      type = "number"
                      placeholder="Calorie"
                      id = "Calorie"
                      value={calInput}
                      onBlur={() => setCalIsTouched(true)}
                      onChange  = {(e) => {setCalInput(e.target.value)}}
                      />
                      
                  
                     {calIsTouched && calIsEmpty &&(
                     <span className={styless['errorclass']}>
                     *Require {""}
                     </span>
                     )}
              
                    </div>

                      <div className= {styless['form-control']}>
                      
                      <label htmlFor="hemoglobin">Hemoglobin</label>
                      <input
                      type = "number"
                      placeholder="Hemoglobin"
                      id = "Hemoglobin"
                      value={hemoglobinInput}
                      onBlur={() => setHemoglobinIsTouched(true)}
                      onChange  = {(e) => {setHemoglobinInput(e.target.value)}}
                      />
                      
                  
                  {hemoglobinIsTouched && hemoglobinIsEmpty &&(
                  <span className={styless['errorclass']}>
                     *Require {""}
                     </span>
                     )}
              
            </div>

            <div className= {styless['form-control']}>
                      
                      <label htmlFor="spo2">SpO2</label>
                      <input
                      type = "number"
                      placeholder="SpO2"
                      id = "spo2"
                      value={spo2Input}
                      onBlur={() => setSpo2IsTouched(true)}
                      onChange  = {(e) => {setSpo2Input(e.target.value)}}
                      />
                      
                  
                  {spo2IsTouched && spo2IsEmpty &&(
                  <span className={styless['errorclass']}>
                     *Require {""}
                     </span>
                     )}
              
            </div>

            <button className = {isFormValid ? styless['submit-bt-empty']: styless['submit-bt']} disabled = {isFormValid} type = "submit"> Add New Data  </button>
           

            </form>
            
            </div>
            </div>
            </>
    );
};

export default AddHealthData;