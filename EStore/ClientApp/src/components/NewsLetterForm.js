import React from 'react';
import './NewsLetterForm.css';



function NewsLetterForm() {
    return (

        <div className="newsletterform">
            <div className="subscribe">
                <h2>
                    SIGN UP FOR NEWSLETTER
                </h2>
                <h4>
                    Sign up now and get 10% discount on your next order
                </h4>
            </div>

            <form className="form-input">
                <input type="text" name="email" className="inputbox" placeholder="Enter your email..." />
                <button className="collbtn">SUBSCRIBE</button>
            </form>
        </div>
    )
}

export default NewsLetterForm