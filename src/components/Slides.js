
import { useState } from "react"
import { data } from "../utils/slideData"
import { useEffect } from "react"

// console.log(data.length);

const Slides = () =>{
    const [currentIndex, setCurrentIndex]=useState(0)

    const handlePrev = () =>{
        if(currentIndex===0){
            setCurrentIndex(data.length-1)
        }else
      setCurrentIndex(currentIndex-1)
    }

    const handleNext = ()=>{
        (currentIndex===data.length-1)?setCurrentIndex(0):setCurrentIndex(currentIndex+1)
    //    setCurrentIndex((currentIndex+1) % data.length)
    }

     /* useEffect(()=>{
        setTimeout(()=>{
            handleNext()
        },5000)
    },[currentIndex])  */
    return(
        <div className="flex justify-center">
            <button className="font-bold p-2 m-5" onClick={handlePrev}>prev</button>
            {
                data.map((url,i)=>{
                    return(
                     <img key={url} src={url}  className={`w-[500px] h-[500px] object-contain ${
                        currentIndex === i ? "block" : "hidden"
                      }`} alt="images"/>
                 ) })
            }
            <button className="font-bold p-2 m-5" onClick={handleNext} >next</button>
       </div>
    )
}
export default Slides