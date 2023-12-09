import React, { useReducer } from 'react'
import img from '../assets/image.jpg'

const initialstate={
  name:"",
  password:" ",
  isError:" ",
  isLogged:false,
  Invalid:" "

}

const Reducer=(state,action)=>{
     switch (action.type){
        case "name":
        return{
               ...state,
               name:action.payload,
              

            }
        case "password":
            return{
            ...state,
            password:action.payload,
          
        
        }
        case "logged":
          return {
            ...state,
            isLogged:true
          }
       case "Error":
          return{
            ...state,
            Invalid:"Invalid"
          }
        case "logout":
          return{
            ...state,
            isLogged:false
          }

}
}



const Form = () => {


const [state,dispatch]=useReducer(Reducer,initialstate)

const change=(e)=>{
   e.preventDefault()
   if(state.name==="aman" && state.password==="aman@1712"){
      dispatch({
        type:"logged"
      })
   }
   else{
    dispatch({type:"Error"})
   }
}

const logout=(e)=>{
    dispatch({type:'logout'})
}


  return (
    <>
  
    {state.isLogged ?
    
    <div class="card w-50" >
    <img src={img} class="card-img-top" alt="..."/>
    <div class="card-body">
    <button className="btn btn-primary mt-4" onClick={logout}>
            Log-out
        </button>
    </div>
  </div>

     

   : 



  
  

  
<div className="w-100  d-flex align-items-center justify-content-center flex-column">
<h1>{state.Invalid}</h1>
    
    <form className='w-75  d-flex justify-content-center flex-column align-items-center' action="" onSubmit={(e)=>{
     change(e)
    }} >
  <input type="text" className='form-control w-50 mt-3 ' placeholder='Enter Your Name ' 
  onChange={(e)=>{
    dispatch({type:"name" ,payload:e.target.value})
  }}/>
  <input type="text" className='form-control w-50 mt-3' placeholder='Enter Your Password'
  onChange={(e)=>{
      dispatch({type:"password", payload:e.target.value})
  }} />
  <button className="btn btn-dark mt-4">Log-in</button>
</form>
   
</div>
  
  

}
    
     



    </>
  )
}

export default Form
