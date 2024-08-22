import Exocard from "./Exocard";

export default function Skeleton(){
    return(
        <>  
            <div>
            <div className="flex gap-4">
                <div className="w-[6rem] h-10 bg-gray-200 mt-[70px] ml-[12rem] rounded-lg"></div>
                <div className="w-[30rem] h-10 bg-gray-200 mt-[70px] ml-[2rem] rounded-lg"></div>
            </div>        
            <div className="w-3/4 flex flex-wrap mt-4 ml-[160px]">
                <Exocard />
                <Exocard />
                <Exocard />
                <Exocard />
                <Exocard />
                <Exocard />
                <Exocard />
                <Exocard />
            </div>
            </div>            
        </>
        
    )
}