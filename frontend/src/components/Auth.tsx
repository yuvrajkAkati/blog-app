import axios from "axios"
import { ChangeEvent, useState } from "react"
import { Link, useNavigate } from "react-router-dom"



export const Auth = ()=>{
    const [name,setName] =useState("") 
    const [password,setPassword] = useState("")
    const [email,setEmail] = useState("")
    
    const navigate = useNavigate()

    function goToDashboardPage(){
        navigate('/')
    }
    
    return (<div className="flex justify-center flex-col h-screen">
        <div className="flex justify-center">
            <div className="flex justify-center w-8/12">
                <div>
                    <div className="text-center text-4xl font-bold py-2">
                        Create an account
                    </div>
                    <div className="flex justify-center pb-3">
                        <div className="text-center text-slate-400">
                            Already have an account? 
                        </div>
                        <div className="text-center text-slate-400 pl-1">
                            <Link to={'/signin'} className="underline">login</Link>
                        </div>
                    </div>
                    <div className="font-semibold py-3">
                        Name
                    </div>
                    <div>
                        <input type="text" className="w-full border-2 rounded h-8 pl-2 py-2" placeholder="Enter your username" onChange={(e : ChangeEvent<HTMLInputElement>)=>{
                            setName(e.target.value)
                        }}/>
                    </div>
                    <div className="font-semibold py-3">
                        Email
                    </div>
                    <div>
                        <input type="text" className="w-full border-2 rounded h-8 pl-2 py-2" placeholder="Enter your email" onChange={(e)=>{
                            setEmail(e.target.value)
                        }}/>
                    </div>
                    <div className="font-semibold py-3">
                        Password
                    </div>
                    <div className="">
                        <input type="text" className="w-full border-2 rounded h-8 pl-2 py-2" placeholder="Enter your password" onChange={(e)=>{
                            setPassword(e.target.value)
                        }}/>
                    </div>
                    <div className="text-center pt-5 ">
                        <button className="bg-black w-full rounded h-10 text-white" onClick={async ()=>{
                            const response = await axios.post("http://127.0.0.1:8787/api/v1/signup",{
                                name : name,
                                email : email,
                                password : password
                            })
                            if(response.data.token){
                                localStorage.setItem('token',response.data.token)
                                goToDashboardPage()
                            }
                        }}>
                            Sign Up
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>)
}