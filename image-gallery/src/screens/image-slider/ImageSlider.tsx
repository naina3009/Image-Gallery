
import { FC } from "react";
import Carousel from "react-material-ui-carousel";
import Images from "../../constants/Image";
import "./ImageSlider.css"


const ImageSlider : FC = ()=>{
    var items = [
        {
            name: "Random Name #1",
            description: "Probably the most random thing you have ever seen!",
            src : Images.pic1
        },
        {
            name: "Random Name #1",
            description: "Probably the most random thing you have ever seen!",
            src : Images.pic2
        },
        {
            name: "Random Name #1",
            description: "Probably the most random thing you have ever seen!",
            src : Images.pic3
        },
        {
            name: "Random Name #1",
            description: "Probably the most random thing you have ever seen!",
            src : Images.pic4
        },
        {
            name: "Random Name #2",
            description: "Hello World!",
            src : Images.pic5
        }
    ]
    return(
        <div className="slider">
            <h1 className="head"> Images Slider</h1>
            <Carousel>
                {
                    items.map( (item, i) => (
                        <img 
                            src={item.src}
                            alt={item.name}
                            width={"98%"}
                            height={"460px"}
                            key={item.name}
                        />
                    
                    ) )
                }
            </Carousel>
        </div>
    )
}
export default ImageSlider;