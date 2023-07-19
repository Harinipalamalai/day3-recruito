import React from 'react'
import './applynow.css';
import './findjob';
import {Link,useNavigate} from 'react-router-dom';
function dashboard() {
  return (
    <div>
		<header>
    
	<div class="logojsec">
<Link to="/findjob"><img src="https://cdn-icons-png.flaticon.com/128/93/93634.png"className='bello'></img></Link>
		<div class="logjo">Recurito</div>
	</div>
</header>
<div class="main-container">
      <div className="borderbox">
      <div class="mainx"> ̰
            <div class="">
<div class="row">
		<div class="col-12">
        <div class="my-5">
				<h3>Application Form</h3>
                <br>
                </br>
			</div>
			<form action="SEND ADDRESS" id="ft-form" method="POST" accept-charset="UTF-8" enctype="multipart/form-data">
  <fieldset>
    <legend>Job</legend>
    <label>
      Application for *
      <select name="Application for" required>
        <option>Job A</option>
        <option>Job B</option>
      </select>
    </label>
  </fieldset>
  <fieldset>
    <legend>Personal data</legend>
    <div class="two-cols">
      <label>
        First name *
        <input type="text" name="First name" required></input>
      </label>
      <label>
        Family name *
        <input type="text" name="Family name" required></input>
      </label>
    </div>
    <div class="two-cols">
      <label>
        Citizenship
        <input type="text" name="Citizenship"></input>
      </label>
      <label>
        Date of birth
        <input type="date" name="Date of birth"></input>
      </label>
    </div>
    <label>
      Address
      <input type="text" name="Address"></input>
    </label>
    <div class="two-cols">
      <label>
        ZIP Code
        <input type="text" name="ZIP"></input>
      </label>
      <label>
        City
        <input type="text" name="City"></input>
      </label>
    </div>
    <div class="two-cols">
      <label>
        Phone *
        <input type="tel" name="Phone" required></input>
      </label>
      <label>
        Email address *
        <input type="email" name="Email" required></input>
      </label>
    </div>
  </fieldset>
  <fieldset>
    <legend>Application documents</legend>
    <input type="hidden" name="MAX_FILE_SIZE" value="10485760"></input>
    <div class="two-cols">
      <label>
        Application letter
        <input type="file" name="Application letter" accept=".doc,.docx,.pdf"></input>
      </label>
      <label>
        Curriculum vitae
        <input type="file" name="Curriculum vitae" accept=".doc,.docx,.pdf"></input>
      </label>
    </div>
  </fieldset>
  <div class="btns">
    <input type="submit" value="Submit application"></input>
  </div>
  </form>
</div>
        </div>
	</div>
	</div>
      </div>
    
                    </div>
                    </div>
              

           
)
}
export default dashboard