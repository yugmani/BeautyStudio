import React from 'react'

function Contact() {
    return (
        <div className="wrapper">
           <h1 className="welcomepage">CONTACT US </h1>
            <form action="mail to:yugmani@yahoo.com" method="POST" enctype="text/plain">
                    <label for="fullname">Name</label>
                    <input type="text" name="fullname" placeholder="ex.John Smith" />
                    <label for="mail">Email</label>
                    <input type="email" name="mail" placeholder="ex. example@mail.com" />
                    <label for="message">Message</label>
                    <textarea name="message" rows="4" cols="80" placeholder="Type your message!" />
                    <input type="submit" value="Submit" />
            </form>
        </div>
    )
}

export default Contact
