

export function Topbar(){
    return (
        <div className="py-3">
            
            <div className="shadow flex justify-between pb-2 ">
            <div className="flex ">
            <div className="text-3xl pl-2 font-semibold flex items-center">
                Medium
            </div>
            <div className="pl-4 flex items-center">
                <input type="text" placeholder="icon search" className="bg-slate-100 rounded-lg px-2 py-2" />
            </div>
            </div>

            <div className="flex">
                <div className="px-4 flex items-center"><button >write icon</button></div>
                <div className="px-4 flex items-center"><button>write icon</button></div>
                <div className="pl-4 pr-9 flex items-center">Y</div>
            </div>
            </div>

        </div>
    )
}