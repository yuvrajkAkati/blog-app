

export function Topbar(){
    return (
        <div className="py-3">
            
            <div className="shadow flex justify-between pb-2 ">
            <div className="flex ">
            <div className="text-3xl pl-2 font-semibold flex items-center">
                Medium
            </div>
            <div className="pl-4 flex items-center">
                <input type="text" placeholder="Search..." className="bg-slate-100 rounded-lg px-2 py-2" />
            </div>
            </div>

            <div className="flex">
                <div className="px-4 flex items-center ">
                    <button >
                    
                    <div className="flex">
                        <div className="pr-2 hover:text-slate-600">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
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
    )
}



function Inputbox(){
    
}