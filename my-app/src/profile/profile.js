import React from 'react'
import PropTypes from "prop-types" ;
import '../App.css';
function Profile(props) {


    const handleClick = () => {
        alert (props.fullname)
    }


    return (
    <div className="cardprofile">
        <h1>fullName:{props.fullname} </h1>
        <h1>bio:{props.bio}</h1>
        <h1>profession:{props.profession}</h1>
        <img src={props.image}/>
    
        <button onClick={handleClick}>
            my name
        </button>
    </div>

    ) 
    
}
export default Profile ;