import React from 'react'
import {plansData} from '../../data/plansData'
import whiteTick from '../../assets/whiteTick.png'
import './Plans.css'

const Plans = () => {
  return (
    <div className="plans-container">
        <div className="programs-header" style={{gap:"2rem" , margin:"-2rem 0 0 0"}}>
            <span className="stroke-text">ready to start</span>
            <span>your journey</span>
            <span className="stroke-text">now with us</span>
        </div>

        <div className="plans">
            <div className="blur blur-plan-1"></div>
            <div className="blur blur-plan-2"></div>
            {plansData.map((data,i)=>(
                <div className="plan" key={i}>
                    {data.icon}
                    <span>{data.name}</span>
                    <span>$ {data.price}</span>
                    <div className="features">
                        {data.features.map((feature,i)=>(
                            <div className="feature">
                                <img src={whiteTick} alt="" />
                                <span key={i}>{feature}</span>
                            </div>   
                        ))}
                    </div>
                    
                    
                    <div>
                        <span>See more benifits -&gt;</span>
                    </div>
                    <button className="btn">Join now</button>
                    
                </div>
            ))}
        </div>
    </div>
  )
}

export default Plans