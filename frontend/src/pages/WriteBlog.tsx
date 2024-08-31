import { Topbar } from "../components/Topbar";


export function WriteBlog(){
    return (
        <div className="px-64">
            <div className="">
            <div className="py-3">
            
            <div className=" flex justify-between pb-2 ">
            <div className="flex ">
            <div className="text-3xl pl-2 font-semibold flex items-end">
                Medium
            </div>
            <div className="pl-4 flex items-end">
                <div>draft in authorname</div>
            </div>
            </div>

            <div className="flex">
                <div className="px-4 flex items-center ">
                    <button >
                    
                    <div className="flex">
                        <div className="rounded-xl bg-green-600 px-3 text-white text-sm "><button>publish</button></div>
                        <div className="pr-2 hover:text-slate-600 pl-3">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM18.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                        </svg>
                        </div>
                        <div className="pl-2 hover:text-slate-600">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0" />
                            </svg>  
                        </div>
                        
                    </div>
                </button>
                </div>
                <div className="pl- pr-9 flex items-center"><div className="bg-slate-200 rounded-full pl-4 pr-4 pt-2 pb-2 ">Y</div></div>
            </div>
            </div>

        </div>
            </div>

            <div className="pt-20 px-2">
                <div>
                    <div className="text-3xl pb-3">
                        Heading                        
                    </div>
                    <div>
                    <div className="text-wrap"><textarea className="border w-full h-32 "></textarea></div>
                    </div>
                </div>
                <div className="text-3xl pt-4 pb-2">Body</div>
                <div className="text-wrap"><textarea className="border w-full h-lvh "></textarea></div>
            </div>
        </div>
    )
}

