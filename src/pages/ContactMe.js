import React, { useState } from 'react';
import { send } from 'emailjs-com';

const ContactMe = () => {
	const [alert, setAlert] = useState('');
	const [toSend, setToSend] = useState({
		fname: '',
		lname: '',
		email: '',
		message: '',
	  });


	  const onSubmit = (e) => {
		e.preventDefault();
		send(
		  'service_mq1zepr',
		  'template_yaovnbb',
		  toSend,
		  'user_nsqczudrJgvlRzEmOqfCl',
		  setToSend({
			fname: '',
			lname: '',
			email: '',
			message: '',
		  })
		)
		  .then((response) => {
			setAlert("Form has been submitted successfully");
		  })
		  .catch((err) => {
			console.log('FAILED...', err);
		  });
	  };

	  const handleChange = (e) => {
		setToSend({ ...toSend, [e.target.name]: e.target.value });
	  };

    return (
        <div className='contact-layout'>
          	<div className="row">
		<div className="col-md-3">
			<div className="contact-info">
				<h2>Contact Us</h2>
				<h4>We would love to hear from you !</h4>
			</div>
		</div>
		<div className="col-md-9">
			<form className="contact-form" onSubmit={onSubmit}>
				<div className="form-group">
					<h1 className="alert-form">{alert}</h1>
				  <label className="control-label col-sm-2" for="fname"></label>
				  <div className="col-sm-10">          
					<input 
					type="text"
					className="form-control"
					id="fname" 
					placeholder="Enter First Name"
					name="fname"
					value={toSend.fname}
					onChange={handleChange}
					required
					/>
				  </div>
				</div>
				<div className="form-group">
				  <label className="control-label col-sm-2" for="lname"></label>
				  <div className="col-sm-10">          
					<input 
					type="text"
					className="form-control"
					id="lname"
					placeholder="Enter Last Name"
					name="lname"
					value={toSend.lname}
    				onChange={handleChange}
					required
					/>
				  </div>
				</div>
				<div className="form-group">
				  <label className="control-label col-sm-2" for="email"></label>
				  <div className="col-sm-10">
					<input 
					type="email"
					className="form-control"
					id="email"
					placeholder="Enter email"
					name="email"
					value={toSend.email}
    				onChange={handleChange}
					required
					/>
				  </div>
				</div>
				<div className="form-group">
				  <label className="control-label col-sm-2" for="comment"></label>
				  <div className="col-sm-10">
					<textarea 
					className="form-control" 
					rows="5"
					name='message'
					id="comment"
					value={toSend.message}
    				onChange={handleChange}
					required
					></textarea>
				  </div>
				</div>
				<div className="form-group">        
				  <div className="col-sm-offset-2 col-sm-10">
					<button type="submit" className="btn btn-default">Submit</button>
				  </div>
				</div>
			</form>
		</div>
	</div>
        </div>
    )
}

export default ContactMe
