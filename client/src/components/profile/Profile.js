import React from 'react';

const Profile = (props) =>{
  return(
    <div>
      <h3>{props.user.fName}</h3>
      <h3>{props.user.lName}</h3>
      <h3>{props.user.email}</h3>
      <img src={props.user.avatar} />
    </div>
  )
}
 export default Profile;
