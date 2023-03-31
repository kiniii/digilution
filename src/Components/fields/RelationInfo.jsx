import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";

const Relation = () => {
    const navigate = useNavigate();

    const handleRelation = () => {
        navigate("/")
    }

    return(
        <>
            <div className='relation' onClick={handleRelation}>
                <div className='profile'>
                    <img className='profile-picture' src={companyLogo} alt="" />
                    <h1 className='profile-name'>{companyName}</h1>
                </div>
                <div className='relation-location'>
                    <p>{straat}</p>
                    <div className='location-placement'>
                        <p>{postcode}</p>
                        <p>{stad}</p>
                    </div>
                    <div className='relation-contact'>

                    </div>
                    <div className='status'>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Relation;