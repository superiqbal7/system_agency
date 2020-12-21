import React,{useState,useEffect} from 'react';

function Carousel({items}) {
    const [x ,setX] = useState(0);
    const shift =(index)=>{
        let carouselContainer = document.getElementById("imageContainer");
        if((items.length - 1) *500 > x ){
            carouselContainer.scroll({
                left:x+500,
                top: 0,
                behavior: 'smooth'
            });
            setX(x+500);
        }else{
            carouselContainer.scroll({
                right: (items.length - 1) * 500,
                top: 0,
                behavior: 'smooth'
            });
            setX(0);

        }

    }
    return (
        <div style={{ display: 'flex', marginTop: '10%', overflow: 'hidden'}} id="imageContainer" >
        {items.map((item,index)=>(
            <img style={{ objectFit: 'cover', height: '50vh', width: '33%' }} src={`https://api.systemagency.com${item}`} onMouseUp={()=>{shift(index)}} />              
        ))}
        </div>

    )
}

export default Carousel;
// <button id="goLeft" onClick={goLeft}>left</button>
//         <button id="goRight" on Click={goRight}>right</button>
        // <div>
        //     <ul style={{ display: 'flex', margin:0,padding:0,overflow:'hidden',marginTop:80,marginLeft:60,marginRight:60,transformStyle:'preserve-3d'}}>
        //     {items.map((item,index)=>(

        //         <li key={index} style={{display:'block',listStyle:'none'}}> <img  style={{height:800,width:500}} src={`https://api.systemagency.com${item}`} /> </li>
        //     ))}
        //     </ul>
        //     <button onClick={()=>{ show(-1) }} style={{ display:'flex',fontSize:32,alignItems:'center',justifyContent:'center',color:'#fff',backgroundColor:'#333', borderRadius:'50%',width:44 ,height:44,position:'absolute',left:0,top:'50%',marginLeft:60,marginRight:60 }}>&lt;</button>
        //     <button onClick={() => { show(-1) }} style={{ display: 'flex', fontSize: 32, alignItems: 'center', justifyContent: 'center', color: '#fff', backgroundColor: '#333', borderRadius: '50%', width: 44, height: 44, position: 'absolute', right: 0, top: '50%', marginLeft:60,marginRight:60  }}>&gt;</button>
        // </div>

        


// let liEls = document.querySelectorAll('ul li');
// let index = 0;

// function show(increase) {
//     index = index + increase;
//     index = Math.min(Math.max(index, 0), liEls.length - 1);
//     liEls[index].scrollIntoView({ behavior: 'smooth' });
//     console.log("called")
// }        


        // <div className="slider" onMouseUp={shift}>
        // {items.map((item,index)=>{
        //     return(
        //         <div key={index} className="slide" style={{transform:`translateX(${x}%)`}}>
        //             <img style={{objectFit:'cover',height:800,width:'max-content',position:'absolute'}} src={`https://api.systemagency.com${item}`} />
        //         </div>
        //     )
        // })}
        
        // </div>