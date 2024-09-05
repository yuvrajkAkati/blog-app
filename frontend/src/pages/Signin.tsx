import { Quote } from "../components/Quote"
import {useState, ChangeEvent } from "react"
import { Link, useNavigate } from "react-router-dom"
import axios from "axios"

export const Signin = ()=>{

    const [name,setName] =useState("") 
    const [password,setPassword] = useState("")
    const [email,setEmail] = useState("")

    const navigate = useNavigate()

    function goToDashboardPage(){
        navigate('/')
    }

    return (
        <div>
            <div>
    <div className="grid grid-cols-1 lg:grid-cols-2">
        <div className="">
        <div className="flex justify-center flex-col h-screen">
        <div className="flex justify-center">
            <div className="flex justify-center w-8/12">
                <div className="w-8/12">
                    <div className="text-center text-4xl font-bold py-2 text-wrap pb-7">
                        Log into your account
                    </div>
                    <div className="flex justify-center pb-3 ">
                        <div className="text-center text-slate-400 text-wrap">
                            Don't have an account? <Link to={'/signup'} className="underline">create an account</Link>
                        </div>
                    </div>
                    <div className="font-semibold py-3">
                        Email
                    </div>
                    <div>
                        <input type="text" className="w-full border-2 rounded h-8 pl-2 py-2" placeholder="Enter your email" onChange={(e : ChangeEvent<HTMLInputElement>)=>{
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
                        <button className="bg-black w-full rounded h-10 text-white" onClick={async()=>{
                            const response = await axios.post("http://127.0.0.1:8787/api/v1/signin",{
                                email : email,
                                password : password
                            })
                            if(response.data.token){
                                localStorage.setItem('token',response.data.token)
                                goToDashboardPage()
                            }
                        }}>
                            Sign In
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
        </div>
        <div className="invisible lg:visible">
            <Quote></Quote>
        </div>
    </div>
    </div>
        </div>
    )
}