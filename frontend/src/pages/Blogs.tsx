import { BlogCard } from "../components/BlogCard";
import { Topbar } from "../components/Topbar";

export function Blogs(){
    return (
        <div>
            <Topbar></Topbar>
            <div className="grid grid-cols-3 p-6 px-36 divide-x">
                <div className="col-span-2 ">
                    <div className="">
                    <BlogCard heading={"Lorem"} body={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis laboriosam qui expedita ad dolor numquam eaque animi reprehenderit quis repudiandae at itaque quae aliquid ut unde sunt saepe consequuntur, deleniti quidem magnam, distinctio temporibus? Sapiente non provident qui officia eos!"} authorName={"yuvraj"}
                    publishedDate={"24 nov 2013"} minutesRead={23}></BlogCard>
                    </div>
                    <div className="pt-16">
                    <BlogCard heading={"Lorem"} body={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis laboriosam qui expedita ad dolor numquam eaque animi reprehenderit quis repudiandae at itaque quae aliquid ut unde sunt saepe consequuntur, deleniti quidem magnam, distinctio temporibus? Sapiente non provident qui officia eos!"} authorName={"yuvraj"}
                    publishedDate={"24 nov 2013"} minutesRead={23}></BlogCard>
                    </div>    
                    <div className="pt-16">
                    <BlogCard heading={"Lorem"} body={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis laboriosam qui expedita ad dolor numquam eaque animi reprehenderit quis repudiandae at itaque quae aliquid ut unde sunt saepe consequuntur, deleniti quidem magnam, distinctio temporibus? Sapiente non provident qui officia eos!"} authorName={"yuvraj"}
                    publishedDate={"24 nov 2013"} minutesRead={23}></BlogCard>
                    </div> <div className="pt-16">
                    <BlogCard heading={"Lorem"} body={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis laboriosam qui expedita ad dolor numquam eaque animi reprehenderit quis repudiandae at itaque quae aliquid ut unde sunt saepe consequuntur, deleniti quidem magnam, distinctio temporibus? Sapiente non provident qui officia eos!"} authorName={"yuvraj"}
                    publishedDate={"24 nov 2013"} minutesRead={23}></BlogCard>
                    </div> <div className="pt-16">
                    <BlogCard heading={"Lorem"} body={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis laboriosam qui expedita ad dolor numquam eaque animi reprehenderit quis repudiandae at itaque quae aliquid ut unde sunt saepe consequuntur, deleniti quidem magnam, distinctio temporibus? Sapiente non provident qui officia eos!"} authorName={"yuvraj"}
                    publishedDate={"24 nov 2013"} minutesRead={23}></BlogCard>
                    </div> <div className="pt-16">
                    <BlogCard heading={"Lorem"} body={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis laboriosam qui expedita ad dolor numquam eaque animi reprehenderit quis repudiandae at itaque quae aliquid ut unde sunt saepe consequuntur, deleniti quidem magnam, distinctio temporibus? Sapiente non provident qui officia eos!"} authorName={"yuvraj"}
                    publishedDate={"24 nov 2013"} minutesRead={23}></BlogCard>
                    </div> 
                </div>
                <div className="divide-x">
                    <div className="h-full pl-10 ">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis laboriosam qui expedita ad dolor numquam eaque animi reprehenderit quis repudiandae at itaque quae aliquid ut unde sunt saepe consequuntur, deleniti quidem magnam, distinctio temporibus? Sapiente non provident qui officia eos! 
                </div>
                </div>
            </div>
        </div>
    )
}