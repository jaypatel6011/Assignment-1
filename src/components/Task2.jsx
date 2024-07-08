import React, { useEffect, useState } from 'react'
import Loader from './Loader';

function Task2() {
    const [datas, setDatas] = useState([]);
    const [loading, setLoading] = useState(false)


    const url = `https://inshortsapi.vercel.app/news?category=sports`;

    const fetchData = async () => {
        setLoading(true)

        try {
            const response = await fetch(`${url}`);
            const result = await response.json();
            setDatas(result.data)
            console.log(result.data);

        } catch (error) {
            console.log(error);
        }
        setLoading(false)
    }


    useEffect(() => {
        fetchData();
    }, [])

    console.log(datas)


    return (



        <div className='w-full '>
            <div className='w-full h-[300px] flex items-center justify-center text-5xl font-bold mb-16 text-white bg-black'>Task 2</div>

            <div className='md:w-10/12 mx-auto max-w-[100%]'>
            {
                        loading ?
                            (<Loader />) :
               ( <table className='w-full'>
                    <thead className='bg-black mx-auto '>
                        <tr className='text-white font-semibold'>
                            <td className='py-3 md:px-8 px-2'>
                                SR NO
                            </td>
                            <td className='py-3 md:px-8'>
                                NEWS TITLE
                            </td>
                            {/* <td>
                            STATE-PROVINCE

                        </td> */}
                            <td className='py-3 md:px-8'>
                                AUTHOR
                            </td>
                            <td className='py-3 md:px-8'>
                                DATE & TIME
                            </td>
                        </tr>
                    </thead>
                   
                            <tbody className=''>
                                {
                                    datas.map((data, index) =>
                                    (
                                        <tr key={index} className={`${index % 2 ? "bg-slate-300" : "bg-white"}`}>
                                            <td className='py-3 md:px-8 px-2'>{index + 1}</td>
                                            <td className='py-3 md:px-8'>{data.title}</td>
                                            <td className='py-3 md:px-8'>{data.author}</td>
                                            <td className='py-3 md:px-8'>{data.date}, {data.time}</td>
                                        </tr>
                                    )


                                    )
                                }
                            </tbody>
                    
                </table>)}
            </div>

        </div>
    )
}


export default Task2