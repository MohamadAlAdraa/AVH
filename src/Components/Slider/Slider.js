// USED PACKAGES
import React, {useState, useEffect} from 'react';
import { useSwipeable } from 'react-swipeable';

// CSS IMPORTS
import './Slider.css';

// USED COMPONENTS
import Text from './Text';

// USED DATA
import dataSlider from './dataSlider';

const Slider = () => {

    const [slideIndex, setSlideIndex] = useState(1)
    
    const handlers = useSwipeable({
        onSwipedLeft: ()=>{
            if(slideIndex === 5){
                moveDot(slideIndex)
            }else{
                moveDot(slideIndex + 1)
            }
        },
        onSwipedRight: ()=>{
            if(slideIndex === 1){
                moveDot(slideIndex)
            }else{
                moveDot(slideIndex - 1)
            }
        },

      });

    const moveDot = index => {
        setSlideIndex(index)
    }

    useEffect(() => {
        const interval = setInterval(() => {
            if(slideIndex === 5){
                setSlideIndex(1)
            }else{
                moveDot(slideIndex+1)
            }
        }, 5000);
        return () => clearInterval(interval);
      }, [slideIndex]);

    const associatedText = {
        title: dataSlider[slideIndex-1].title,
        subTitle: dataSlider[slideIndex-1].subTitle,
        path: dataSlider[slideIndex-1].path
    }

    return (
        <div className="container-slider" {...handlers}>
            {dataSlider.map((obj, index) => {
                return (
                    <div
                    key={obj.id}
                    className={slideIndex === index + 1 ? "slide active-anim" : "slide"}
                    >
                        <img src={obj.imgSrc} alt="" className='Image' />
                        <div className='overlay'></div>
                    </div>
                )
            })}

            <div className="container-text">
               <Text title ={associatedText.title} subTitle ={associatedText.subTitle} />                        
            </div>
           

            <div className="container-dots">
                {Array.from({length: 5}).map((item, index) => (
                    <div 
                    key={index}
                    onClick={() => moveDot(index + 1)}
                    className={slideIndex === index + 1 ? "dot active" : "dot"}
                    ></div>
                ))}
            </div>
        </div>
    )
}

export default Slider;