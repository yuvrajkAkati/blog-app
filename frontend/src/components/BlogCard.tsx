
interface BlogCard{
    authorName : string,
    publishedDate : string,
    heading : string,
    body : string,
    minutesRead : number
}

export function BlogCard({authorName , publishedDate , heading ,body , minutesRead}:BlogCard){
    return (
            <div className="">
                <div className=" w-full">
                
                <div className="">
                <div className="grid grid-cols-3 h-48">
        
                    <div className="col-span-2 ">
                    
                    <div className="flex pt-2">
                        <div className="bg-slate-200 rounded-full pl-2 pr-2">{authorName.toUpperCase().charAt(0)}</div>
                        <div className="pl-2">{authorName} . </div>
                        <div className="pl-2 text-slate-400">{publishedDate}</div>
                    </div>
        
                    <div className="pt-5 ">
                        <div className="font-bold text-3xl pb-3">{heading}</div>
                        <div className="text-lg text-slate-500 line-clamp-3">{body}</div>
                    </div>
        
                    <div className="flex  justify-between pt-7">
                        <div className="text-slate-400 text-sm">{minutesRead} minutes read</div>
                        <div className="pr-2 flex">
                            <div className="pr-3"><button><svg xmlns="http://www.w3.org/2000/svg" fill="none"   viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z" />
                                </svg>
                                </button></div>
                                        <div className="pr-3"><button ><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                        </svg>
                                        </button></div>
                                                <div><button className="pr-3"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 12.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 18.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5Z" />
                                                </svg>
                                    </button></div>
                                        </div>
                                    </div>
                                    </div>
                        
                    <ImageProvider></ImageProvider>
        
                    </div>
                </div>
        
            </div>
            </div>
        )
}

 function ImageProvider(){
    return (
        <div className=" w-64 grid place-items-center">
                    <div className="">
                        <img  className='h-32' src="data:image/jpeg;base64,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" alt="rust cohle" />
                    </div>
                </div>
    )
}




// (
//     <div className="p-6 pl-96   w-full">
        
//         <div className="">
//         <div className="grid grid-cols-3 h-48">

//             <div className="col-span-2 bg-red-50 ">
            
//             <div className="flex ">
//                 <div>{authorName}</div>
//                 <div>{publishedDate}</div>
//             </div>

//             <div>
//                 <div className="font-bold text-2xl ">{heading}</div>
//                 <div className="text-xl text-slate-500 line-clamp-3">{body}</div>
//             </div>

//             <div className="flex bg-red-500 justify-between">
//                 <div className="text-slate-400 text-sm">minutes read</div>
//                 <div className="">
//                     <button >bookmark</button>
//                     <button>icon</button>
//                     <button>icon</button>
//                 </div>
//             </div>
//             </div>

//             <ImageProvider></ImageProvider>

//             </div>
//         </div>

//     </div>
// )