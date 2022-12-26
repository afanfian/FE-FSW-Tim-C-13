import React, { useEffect, useState } from "react";
import { Container, Row, Card} from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getProfileActions, editProfileActions } from "../../config/redux/actions/authActions";
import { Footer } from "../../components";
import Navbar from '../navbar/navbarafterlogin'
import './profile.css'

function profileComponent() {
  // Get Profile
  let {user} = useSelector(state => state.auth);

  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(getProfileActions())
  },[dispatch])

  const [onEdit, setOnEdit] = useState(false);

  const handleEdit = (event) => {
    event.preventDefault();
    setOnEdit((prev) => !prev);
  };

  const [firstName, setfirstName] = useState("");
  const [lastName, setlastName] = useState("");
  const [username, setusername] = useState("");
  const [phone_number, setphone_number] = useState("");
  const [address, setaddress] = useState("");
  const [photo, setphoto] = useState("photo")



  const handlefirstName = (event) =>{
    setfirstName(event.target.value)
  }

  const handlelastName = (event) =>{
    setlastName(event.target.value)
  }

  const handleusername = (event) =>{
    setusername(event.target.value)
  }

  const handlephone_number = (event) =>{
    setphone_number(event.target.value)
  }

  const handleaddress = (event) =>{
    setaddress(event.target.value)
  }

  const updateForm = async(event)=>{
    event.preventDefault()
    const form = {firstName, lastName, username, phone_number, address, image:photo}
    const formDataImage = new FormData();
    
    for (const key in form) { 
      formDataImage.append(key, form[key]); 
    } 

   await dispatch(editProfileActions(formDataImage))
    .then((response)=>({
      response
    }))
    .catch((error)=>({
      error
    }))
  }

  return (
    <>
      <div id="profile">
        <Navbar/>
        <Container>
          <Row>
            <div className="col-xl-4">
              {/* <!-- Profile picture card--> */}
              <div className="card mb-4 mb-xl-0">
                <div className="card-header">Profile Picture</div>
                <div className="card-body text-center">
                  {/* <!-- Profile picture image--> */}
                  <img
                    className="img-account-profile rounded-circle mb-2"
                    src={(user.profile)?(user.profile.photo):(null)}
                    alt="photouser"
                    width="200px"
                  />
                </div>
              </div>
            </div>
            <div className="col-xl-8">
              {/* <!-- Account details card--> */}
              <div className="card mb-4">
                <div className="card-header">
                  <p>Account Details</p>
                  <button onClick={handleEdit} className="btn-green w-25">
                      Edit
                  </button>
                </div>
                <div className="card-body">
                {onEdit ? (
                <form onSubmit={updateForm}>
                     {/* <!-- Form Group (username)--> */}
                     <div className="mb-3">
                       <label className="small mb-1" htmlFor="inputUsername">
                         Username (how your name will appear to other users on the
                         site)
                       </label>
                       <input className="form-control" onChange={handleusername} value={username} id="inputUsername" type="text" placeholder="Enter your username" />
                     </div>
                     {/* <!-- Form Row--> */}
                     <div className="row gx-3 mb-3">
                       {/* <!-- Form Group (first name)--> */}
                       <div className="col-md-6">
                         <label className="small mb-1" htmlFor="inputFirstName">
                           First name
                         </label>
                         <input className="form-control" onChange={handlefirstName} value={firstName} id="inputFirstName" type="text" placeholder="Enter your first name" />
                       </div>
                       {/* <!-- Form Group (last name)--> */}
                       <div className="col-md-6">
                         <label className="small mb-1" htmlFor="inputLastName">
                           Last name
                         </label>
                         <input className="form-control" onChange={handlelastName} value={lastName} id="inputLastName" type="text" placeholder="Enter your last name" />
                       </div>
                     </div>
                     {/* <!-- Form Row        --> */}
                     <div className="row gx-3 mb-3">
                       {/* <!-- Form Group (location)--> */}
                       <div className="col-md-6">
                         <label className="small mb-1" htmlFor="inputLocation">
                           Address
                         </label>
                         <input className="form-control" onChange={handleaddress} value={address} id="inputLocation" type="text" placeholder="Enter your location" />
                       </div>
                     </div>
                     {/* <!-- Form Row--> */}
                     <div className="row gx-3 mb-3">
                       {/* <!-- Form Group (phone number)--> */}
                       <div className="col-md-6">
                         <label className="small mb-1" htmlFor="inputPhone">
                           Phone number
                         </label>
                         <input className="form-control" onChange={handlephone_number} value={phone_number}id="inputPhone" type="text" placeholder="Enter your phone number" />
                       </div>
                     </div>
                     <div className="row gx-3 mb-3">
                          <div>
                            <label className="small mb-1" htmlFor="image">
                              Photo
                            </label>
                            <input className="form-control" type="file" onChange={(e) => setphoto(e.target.files[0])} />
                          </div>
                     </div>
                     {/* <!-- Save changes button--> */}
                     <button className="btn btn-primary" type="submit">
                       Save changes
                     </button>
                </form>
                 ) : (
                  <Card.Body>
                     <div className="mb-3">
                      <p className="fw-bold">Username</p>
                      <p>{(user.profile)?(user.profile.username):(null)}</p>
                    </div>
                    <div className="row gx-3 mb-3">
                      <div className="col-md-6">
                        <p className="fw-bold">Firstname</p>
                        <p>{(user.profile)?(user.profile.firstName):(null)}</p>
                      </div>
                      <div className="col-md-6">
                        <p className="fw-bold">Lastname</p>
                        <p>{(user.profile)?(user.profile.lastName):(null)}</p>
                      </div>
                    </div>
                    <div className="mb-3">
                      <p className="fw-bold">Address</p>
                      <p>{(user.profile)?(user.profile.address):(null)}</p>
                    </div>
                    <div className="mb-3">
                      <p className="fw-bold">Email</p>
                      <p>{(user.profile)?(user.profile.email):(null)}</p>
                    </div>
                    <div className="mb-3">
                      <p className="fw-bold">Phone</p>
                      <p>{(user.profile)?(user.profile.phone_number):(null)}</p>
                    </div>
                  </Card.Body>
                )}
                </div>
              </div>
            </div>
          </Row>
        </Container>
      </div>
      <div>
      <Footer />
      </div>
    </>
  );
}
export default profileComponent;
