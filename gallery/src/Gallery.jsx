import { useEffect, useState } from "react";
import axios from "axios";


function Gallery (props){
    const [index, setIndex] = useState(1);
    const [imgData, setImgData] = useState([]);
    const api_call = async () => {
        const response = await axios.get(`https://picsum.photos/v2/list?page=${index}&limit=10`);
        setImgData(response.data) ;
        // console.log(imgData);
    }
    useEffect(function(){
        api_call();
    }, [index])
    var img_data = <h2 className="text-gray-400 text-s">No data available.</h2>;
    if (imgData.length > 0) {
        img_data = imgData.map( function(data, idx){
            return <div id={idx} className="h-50 w-60 overflow-hidden relative rounded-4xl">
                        <a href={data.url} target="_blank">
                            <img src={data.download_url} className="h-full w-full object-cover" alt="No image available" />
                            <div className="absolute top-0 left-0 h-full w-full p-4 flex flex-col justify-between">
                                <h1 className="bg-white h-10 w-10 rounded-full text-2xl font-bold flex justify-center items-center">{idx+1}</h1>
                                <div className="bg-emerald-500 text-white flex justify-center rounded-full">{data.author}</div>
                            </div>
                        </a>
                    </div>
        });
    }

    return(
        <div className='p-5 flex flex-col items-center gap-6'>
            {/* <div>
                <button
                    onClick={api_call}
                    className='px-10 py-2 rounded-2xl bg-sky-300 text-white active:scale-80'
                >
                Make API Call
                </button>
            </div> */}
            <div className="flex flex-wrap gap-5">
                {img_data}
            </div>
            <div className="flex items-center gap-4 text-l">
                <button className="bg-sky-300 text-sm cursor-pointer active:scale-90 text-black, rounded-3xl px-6 py-2 font-semibold"
                    onClick={() => {
                        if (index > 1) {
                            setIndex(index-5);
                        }
                    }}
                >Prev 5</button>
                <button className="bg-sky-300 text-sm cursor-pointer active:scale-90 text-black, rounded-3xl px-6 py-2 font-semibold"
                    onClick={() => {
                        if (index > 1) {
                            setIndex(index-1);
                        }
                    }}
                >Prev</button>
                <h3> Page {index}</h3>
                <button className="bg-sky-300 text-sm cursor-pointer active:scale-90 text-black, rounded-3xl px-6 py-2 font-semibold"
                    onClick={() => {
                        setIndex(index+1);
                    }}
                >Next</button>
                <button className="bg-sky-300 text-sm cursor-pointer active:scale-90 text-black, rounded-3xl px-6 py-2 font-semibold"
                    onClick={() => {
                        setIndex(index+5);
                    }}
                >Next 5</button>
            </div>
        </div>
    )
}

export default Gallery