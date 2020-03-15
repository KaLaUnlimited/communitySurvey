import React, { useContext } from "react";
import { GlobalContext } from "../../context/GlobalState";
import "./rate.scss";

function Rate(props) {

  return (
    <div className="rrate-container">
       <div> <i class="far fa-heart fa-4x"></i>1 </div> 
       <div> <i class="far fa-heart fa-4x"></i>2</div> 
       <div> <i class="far fa-heart fa-4x"></i>3</div> 
       <div> <i class="far fa-heart fa-4x"></i>4</div> 
       <div> <i class="far fa-heart fa-4x"></i>5</div> 
       <div> <i class="far fa-heart fa-4x"></i>6</div> 
       <div> <i class="far fa-heart fa-4x"></i>7</div> 
       <div> <i class="far fa-heart fa-4x"></i>8</div> 
       <div> <i class="far fa-heart fa-4x"></i>9</div> 
       <div> <i class="far fa-heart fa-4x"></i>10</div> 
       {/* <div> <i class="fas fa-heart fa-4x"></i> </div>  filled in version */}


       </div>
  );
}
// Arrows.propTypes = {
//   previousQuestion: PropTypes.func.isRequired
// };

export default Rate;