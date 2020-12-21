import React,{useEffect,useState} from 'react';
import axios from "axios";
import Navigation from '../components/Navigation.jsx';
import Carousel from "../components/Carousel";
import Timeline from "../components/Timeline";
const url = 'https://api.systemagency.com/';
function Work() {
    const [carouselItems,setCarouselItems] = useState([]);
    const [timelineWork,setTimelineWork] = useState([]);
    const [pictureCount,setPictureCount] = useState(0);
    function filterCarouselItems(rows){
        const pictures = [];
        rows.forEach((row) => {
            if (row['main_component'] === 'carousel_main') {
                pictures.push(row['Resources'][0]['route'])
            }
        })
        return pictures;
    }
    function filterTimelineWork(rows) {
        const timelineWork = [];
        rows.forEach((row) => {
            if (row['main_component'] === 'timeline_work') {
                timelineWork.push({img:row['Resources'][0]['route'],talentName:row['talent_name'],clientName:row['client_name'],Photographer:row['photographer'],Stylist:row['stylist_name']})
            }
        })
        return timelineWork;
    }
    const fetchModelWorkDeatils = async (endpoint)=>{
        const response = await axios.get(url + endpoint);
        const rows = response.data.item.rows;        
        // console.log(response.data);
        setCarouselItems(filterCarouselItems(rows));
        setTimelineWork(filterTimelineWork(rows));
        setPictureCount(response.data.item.count);
    }
    useEffect(()=>{
        fetchModelWorkDeatils('work');
    },[])
    return (
        <div>
            <Navigation/>
            {pictureCount > 0 ? (
            <div>    
                <Carousel items={carouselItems} />
                <Timeline items = {timelineWork}/>
            </div>    
            ):(<div></div>)}

        </div>
    )
}

export default Work;