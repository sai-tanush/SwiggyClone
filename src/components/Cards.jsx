export default function Cards({image, name, rating, tod, cuisines, location, cost}){
    return (
        <>
            <div className="m-5 flex flex-wrap">
                <div className="h-[20rem] w-[15rem] mt-1 ml-2 bg-gray-200 flexflex-col justify-center rounded-2xl">
                    <div className="w-full h-2/4  border-2 rounded-xl">
                        <img className="object-cover h-full w-full rounded-2xl" src={image} alt={name} />
                    </div>
                    <div className="w-auto h-2 mt-2 ml-4 rounded-full  font-bold">{name}</div>
                    <div className="flex justify-between mr-7">
                        <div className="w-auto h-2  mt-4 ml-4 rounded-full text-sm">{rating}</div>
                        <div className="w-auto h-3  mt-4 ml-4 rounded-full text-sm">{tod} mins</div>
                    </div>                    
                    <div className="w-11/12 h-auto mt-4 ml-4 rounded-full text-sm">{cuisines}</div>
                    <div className="flex justify-between">
                        <div className="w-auto h-3 mt-4 ml-4 rounded-full text-md font-semibold">{location}</div>
                        <div className="w-auto h-3 mt-4 mr-2 rounded-full text-sm">{cost}</div>
                    </div>
                    
                </div>
            </div> 
        </>
    )
}