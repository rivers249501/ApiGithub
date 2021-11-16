import React from 'react'
import "./form.styles.css"
const Form = ({handlerValue, handlerSubmit}) => {
    return (
           <form onSubmit={(e)=>handlerSubmit(e)} className="m-4 flex justify-center" >
           <input class="rounded-l-lg p-4 border-t mr-0 border-b border-l text-gray-800 border-gray-200 bg-white"
           onChange={({target})=>handlerValue(target)}
           type="text" 
           placeholder="Search.." name="search" required={true}
           />
           <button type="submit"><i class="px-8 rounded-r-lg bg-gray-400  text-gray-800 font-bold p-8 uppercase border-gray-200 border-t border-b border-r fa fa-search"></i></button>
           </form>
            
        
    )
}

export default Form
