import React,{useState,useEffect} from 'react'
import "../css/Timeline.css";
function Timeline({items}) {
    return (
        
    <div className="timelinecontainer">
        {items.map((item,index) => {  
            {console.log(item)} 
            if(index%2===0)
            return <div className="itemContainer" key={index}>
                    <img  className="timelineImage" src={`https://api.systemagency.com${item.img}`} />
                <div className="textContainer" style={{ left: '2%',marginTop:'50%',textAlign:'left'}}>
                    <strong> <b> {item.talentName}: </b> </strong>
                        <div> {item.clientName} </div>  
                        <div> Stylist : {item.Stylist === null ? 'No' : item.Stylist} </div> 
                        <div> Photographer : {item.Photographer === null ? 'No' : item.Photographer} </div>
                    </div>
                </div>
            return <div key={index} className="itemContainer">
                <div className="textContainer"  style={{right:'2%',marginTop:'50%',textAlign:'right'}}>
                    <strong> <b> {item.talentName} </b> </strong>
                <div> {item.clientName} </div> 
                <div> Stylist : {item.Stylist === null ? 'No' : item.Stylist} </div> 
                <div> Photographer : {item.Photographer === null ? 'No' : item.Photographer} </div> 
                </div>
                <img className="timelineImage" src={`https://api.systemagency.com${item.img}`} />
            </div>
        })}
    </div>
        
    )
}

export default Timeline
