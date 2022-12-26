import React, { useEffect, useState } from "react";
import { Container, Row, Form, Button, Card } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getProfileActions, editProfileActions } from "../../config/redux/actions/authActions";
import { Footer } from "../../components";
import Navbar from '../navbar/navbarafterlogin'

function profileComponent() {
  // Get Profile
  let {user} = useSelector(state => state.auth);

  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(getProfileActions())
  },[dispatch])
  if(user.profile){
  // console.log('cekuser', user.profile.email)
  }

  // Edit Profile
  const initalState = {
    // username: "",
    // password: "",
    email: user.profile ? user.profile.email : "",
  }
  const [formData, setFormData] = useState(initalState);

  const handleChange = (e) => {
    setFormData(prevFormData => {
        return {
            ...prevFormData,
            [e.target.name]: e.target.value
        }
    })
};
  // const { register, handleSubmit, formState: { errors, dirtyFields, isValid }, getValues } = useForm();
  const handleSubmit = (data) => {
    dispatch(editProfileActions(data));
  }

  const [onEdit, setOnEdit] = useState(false);

  const handleEdit = (event) => {
    event.preventDefault();
    setOnEdit((prev) => !prev);
  };

  return (
    <>
      <div id="profile">
        <Navbar/>
        <Container>
          <Row>
            <div class="col-xl-4">
              {/* <!-- Profile picture card--> */}
              <div class="card mb-4 mb-xl-0">
                <div class="card-header">Profile Picture</div>
                <div class="card-body text-center">
                  {/* <!-- Profile picture image--> */}
                  <img
                    class="img-account-profile rounded-circle mb-2"
                    src="http://bootdey.com/img/Content/avatar/avatar1.png"
                    alt=""
                  />
                  {/* <!-- Profile picture help block--> */}
                  <div class="small font-italic text-muted mb-4">
                    JPG or PNG no larger than 5 MB
                  </div>
                  {/* <!-- Profile picture upload button--> */}
                  <button class="btn btn-primary" type="button">
                    Upload new image
                  </button>
                </div>
              </div>
            </div>
            <div class="col-xl-8">
              {/* <!-- Account details card--> */}
              <div class="card mb-4">
                <div class="card-header">Account Details</div>
                <Button onClick={handleEdit} variant="outline-info" >
                    Edit
                </Button>
                <div class="card-body">
                  {onEdit ? (
                     <Form onSubmit={handleSubmit(formData)}>
                     {/* <!-- Form Group (username)--> */}
                     <div class="mb-3">
                       <label class="small mb-1" for="inputUsername">
                         Username (how your name will appear to other users on the
                         site)
                       </label>
                       <input class="form-control" id="inputUsername" type="text" placeholder="Enter your username" />
                     </div>
                     {/* <!-- Form Row--> */}
                     <div class="row gx-3 mb-3">
                       {/* <!-- Form Group (first name)--> */}
                       <div class="col-md-6">
                         <label class="small mb-1" for="inputFirstName">
                           First name
                         </label>
                         <input class="form-control" id="inputFirstName" type="text" placeholder="Enter your first name" />
                       </div>
                       {/* <!-- Form Group (last name)--> */}
                       <div class="col-md-6">
                         <label class="small mb-1" for="inputLastName">
                           Last name
                         </label>
                         <input class="form-control" id="inputLastName" type="text" placeholder="Enter your last name" />
                       </div>
                     </div>
                     {/* <!-- Form Row        --> */}
                     <div class="row gx-3 mb-3">
                       {/* <!-- Form Group (location)--> */}
                       <div class="col-md-6">
                         <label class="small mb-1" for="inputLocation">
                           Address
                         </label>
                         <input class="form-control" id="inputLocation" type="text" placeholder="Enter your location" />
                       </div>
                     </div>
                     {/* <!-- Form Group (email address)--> */}
                     <div class="mb-3">
                       <label class="small mb-1" for="inputEmailAddress">
                         Email address
                       </label>
                       <input class="form-control" name="email" onChange={handleChange} id="inputEmailAddress" type="email" placeholder="Enter your email address"  value= {formData.email} />
                     </div>
                     {/* <!-- Form Row--> */}
                     <div class="row gx-3 mb-3">
                       {/* <!-- Form Group (phone number)--> */}
                       <div class="col-md-6">
                         <label class="small mb-1" for="inputPhone">
                           Phone number
                         </label>
                         <input class="form-control" id="inputPhone" type="tel" placeholder="Enter your phone number" />
                       </div>
                     </div>
                     {/* <!-- Save changes button--> */}
                     <button class="btn btn-primary" type="button">
                       Save changes
                     </button>
                   </Form>
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
