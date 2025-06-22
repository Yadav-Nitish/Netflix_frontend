import React, { useRef,useEffect } from 'react'
import './TitleCards.css'
import cards_data from '../../assets/cards/Cards_data'
import { NavLink } from 'react-router-dom'

const TitleCards = ({title,category}) => {

 const cardsRef = useRef();

 const handleWheel = (event) =>{
      event.preventDefault();  //  stop scrolling vertical
      cardsRef.current.scrollLeft += event.deltaY
 }

 useEffect(()=>{
   cardsRef.current.addEventListener('wheel', handleWheel)
 },[])

  return (
    <div className='titleCards'>
        <h2>{title?title:"Popular on Netflix"} </h2>
        <div className="card-list" ref={cardsRef}>
          {cards_data.map((card,index)=>{
            return <div className='card' key={index}>
             <NavLink to='/player/:id'><img src={card.image} alt="" /></NavLink>  
              <p>{card.name}</p>
            </div>
          })}
        </div>
    </div>
  )
}

export default TitleCards