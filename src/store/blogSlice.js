import { createSlice } from "@reduxjs/toolkit";


const initialState = {

    formData : {
        title : "",
        description : "",
        image : ""
    },

    blogs : [],
    currentEdit : null
}



const blogSlice  = createSlice({
    name : "blog",
    initialState,

    reducers : {

        // let cpyFormData = {...state.blogs}

        // const FindIdex =  cpyFormData.findIndex(blog => blog.id === state.currentEdit)
        // console.log(FindIdex , "FindIndex")
    
    
        // cpyFormData[FindIdex] = {
        //     ...cpyFormData[FindIdex] , 
        //     ...state.formData
    
        // }
    
    
        // state.blogs = cpyFormData
    
        // localStorage.setItem("blogs" , JSON.stringify(state.blogs))






        handleEditblog : (state , action) => {


            let cpy = [...state.blogs]


            const FindIndex = cpy.findIndex(blog => blog.id === state.currentEdit)


            cpy[FindIndex] = {
                ...cpy[FindIndex],
                ...state.formData
            }

            state.blogs = cpy


            localStorage.setItem("blogs" , JSON.stringify(cpy))



        }





        ,

        setCurrentEdit : (state , action) => {

        state.currentEdit = action.payload.currentEdit
            // console.log(action.payload)
            console.log(state.currentEdit , "state.cu")

                
                // state.currentEdit = action.payload
        }





        ,
        
        deletedBlog : (state , action) => {
                
            state.blogs = state.blogs.filter(blog => blog.id !== action.payload)

            localStorage.setItem("blogs" , JSON.stringify(state.blogs))

    },


        setblogs  : (state , action) => {

            state.blogs = action.payload.blogs

        },


        handleChangeInput  : (state , action) => {

            let cpy = {...state.formData}
      

            cpy = {
                ...cpy,
                ...action.payload
            }
            
            state.formData = cpy

            

        },

        addBlog : (state , action) => {

            state.blogs.push({
                id : new Date().getTime().toString(),
                ...state.formData
            })

            localStorage.setItem("blogs" , JSON.stringify(state.blogs))


        },


     


    }
})



export const {handleChangeInput ,  handleEditblog, addBlog , setblogs ,deletedBlog , setCurrentEdit} = blogSlice.actions


export default blogSlice.reducer