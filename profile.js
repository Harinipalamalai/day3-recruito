import React from 'react'
import './profile.css';
import './dashboard';
import './findjob';
import {Link} from 'react-router-dom';
function dashboard() {
  return (
    <div>
    <header>
	<div class="logosec">
		<div class="logoss">Recurito</div>
	</div>
</header>
¯<div class="main-container">
	<div class="navcontainer">
		<nav class="nav">
			<div class="nav-upper-options">
				<div class="nav-option option10">
					<img src=
"https://media.geeksforgeeks.org/wp-content/uploads/20221210182148/Untitled-design-(29).png"
						class="nav-img"
						alt="dashboard"></img>
					<Link to="/dashboard"><h3> Dashboard</h3></Link>
				</div>

				<div class="nav-option option5">
					<img src=
"https://media.geeksforgeeks.org/wp-content/uploads/20221210183323/10.png"
						class="nav-img"
						alt="blog"></img>
				 <h3> Profile</h3>
				</div>


				<div class="option2 nav-option">
					<img src=
"https://media.geeksforgeeks.org/wp-content/uploads/20221210183322/9.png"
						class="nav-img"
						alt="articles"></img>
					<Link to="/findjob"><h3 className="size"> Find Jobs</h3></Link>
				</div>
				<div class="nav-option logout">
					<img src=
"https://media.geeksforgeeks.org/wp-content/uploads/20221210183321/7.png"
						class="nav-img"
						alt="logout"></img>
					<Link to="/Login"><h3>Logout</h3></Link>
				</div>

			</div>
		</nav>
	</div>
            <div class="mainrt">
            <div class="">
<div class="row">
		<div class="col-12">
			<div class="my-5">
				<h3>My Profile</h3>
                <br>
                </br>
			</div>
			<form class="file-upload">
				<div class="row mb-5 gx-5">
					<div class="col-xxl-8 mb-5 mb-xxl-0">
						<div class="bg-secondary-soft px-4 py-5 rounded">
							<div class="row g-3">
								<h4 class="mb-41">Contact detail</h4>
                                <br></br>
                                <div className='hey'>
								<div class="col-md-6">
									<label class="form-label">First Name *</label>
                                    <br></br>
                                    <br></br>
									<input type="text" class="form-control" placeholder="" aria-label="First name" value="Scaralet"></input>
								</div>
								<br></br>
								<div class="col-md-6">
									<label class="form-label">Last Name *</label>
                                    <br></br>
                                    <br></br>
									<input type="text" class="form-control" placeholder="" aria-label="Last name" value="Doe"></input>
								</div>
                                <br></br>
								<div class="col-md-6">
									<label class="form-label">Phone number *</label>
                                    <br></br>
                                    <br></br>
									<input type="text" class="form-control" placeholder="" aria-label="Phone number" value="(333) 000 555"></input>
								</div>
                                <br></br>
								<div class="col-md-6">
									<label class="form-label">Mobile number *</label>
                                    <br></br>
                                    <br></br>
									<input type="text" class="form-control" placeholder="" aria-label="Phone number" value="+91 9852 8855 252"></input>
								</div>
                                <br></br>
								<div class="col-md-6">
									<label for="inputEmail4" class="form-label">Email *</label>
                                    <br></br>
                                    <br></br>
									<input type="email" class="form-control" id="inputEmail4" value="example@homerealty.com"></input>
								</div>
                                </div>
                                <br></br>
                                <div className='heys'>
							<div class="row g-3">
								<h4 class="my-4">Change Password</h4>
                                <br>
                                </br>
                                <br></br>
								<div class="col-md-6">
									<label for="exampleInputPassword1" class="form-label">Old password *</label>
                                    <br></br>
                                    <br></br>
									<input type="password" class="form-control" id="exampleInputPassword1"></input>
                                    <br></br>
								</div>
								<div class="col-md-6">
									<label for="exampleInputPassword2" class="form-label">New password *</label>
                                    <br></br>
                                    <br></br>
									<input type="password" class="form-control" id="exampleInputPassword2"></input>
                                    <br></br>
								</div>
								<div class="col-md-12">
									<label for="exampleInputPassword3" class="form-label">Confirm Password *</label>
                                    <br></br>
                                    <br></br>
									<input type="password" class="form-control" id="exampleInputPassword3"></input>
                                    <br></br>
								</div>
							</div>
						</div>
					</div>
                    <br></br>
                    <div class="text-center">
					<button type="button" class="lgr">Update profile</button>
				</div>
				</div> 
				</div>
				</div>
			</form> 	
        </div>
	</div>
	</div>
                    </div>
                </div>
            </div>
           
)
}
export default dashboard