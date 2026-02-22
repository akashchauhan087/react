import { useState } from "react";
import axios from "axios";


function Gallery (props){

    const [imgData, setImgData] = useState([]);
    const api_call = async () => {
        const response = await axios.get('https://picsum.photos/v2/list');
        setImgData(response.data);
        console.log(imgData);
        
    }
    var img_data = 'No data available.';
    if (imgData.length > 0) {
        img_data = imgData.map( function(data, idx){
            return <div id={idx} className="flex flex-wrap h-50 w-50 overflow-hidden">
                        <div className="bg-pink-300 text-white h-6 w-6 rounded-full items-centre">{idx+1}</div>
                        <img src={data.download_url} className="h-40 w-40" alt="No image available" />
                        <div>{data.author}</div>
                    </div>
        });
    }
    

    return(
        <div className='m-5 flex flex-col gap-10 bg-pink-100'>
            <div>
                <button 
                    onClick={api_call}
                    className='px-10 py-2 rounded-2xl bg-sky-300 text-white'
                >
                Make API Call
                </button>
            </div>
            <div className="flex flex-wrap gap-5 ">
                {img_data}
            </div>
        </div>
    )
}

export default Gallery