import { useState } from "react";
import axios from "axios";


function Gallery (props){

    const [imgData, setImgData] = useState([]);
    const api_call = async () => {
        const response = await axios.get('https://picsum.photos/v2/list?page=2&limit=35');
        setImgData(response.data);
        console.log(imgData);

    }
    var img_data = 'No data available.';
    if (imgData.length > 0) {
        img_data = imgData.map( function(data, idx){
            return <div id={idx} className="h-50 w-50 overflow-hidden relative">
                        <img src={data.download_url} className="h-full w-full object-cover" alt="No image available" />
                        <div className="absolute top-0 left-0 h-full w-full p-4 flex flex-col justify-between">
                            <h1 className="bg-violet-500 h-10 w-10 rounded-full text-2xl font-bold flex justify-center items-center">{idx+1}</h1>
                            <div className="bg-emerald-500 text-white flex justify-center rounded-full">{data.author}</div>
                        </div>
                    </div>
        });
    }

    return(
        <div className='m-5 flex flex-col gap-10'>
            <div>
                <button
                    onClick={api_call}
                    className='px-10 py-2 rounded-2xl bg-sky-300 text-white'
                >
                Make API Call
                </button>
            </div>
            <div className="flex flex-wrap gap-5">
                {img_data}
            </div>
        </div>
    )
}

export default Gallery