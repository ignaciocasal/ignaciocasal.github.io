import React, {useState} from "react";

const Contact = (props) => {
    const templateId = 'template_ewii9fr';
    const serviceId = 'service_f8ec5sl';

    const [data, setData] = useState({
        name: '',
        email: '',
        contact: '',
        subject: '',
        message: ''
    })

    if (!props.data) return null;

    const handleInputChange = (event) => {
        setData({
            ...data,
            [event.target.name]: event.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (isValidForm()){
            sendFeedback({
                    from_name: data.name,
                    reply_to: data.email,
                    message: data.message,
                    subject: data.subject
                }
            )
        } else {
            document.getElementById('message-required').style.display = 'block';
        }
    }

    const isValidForm = () => {
        return !(!data.name || !data.email || !data.message);
    }

//Custom EmailJS method
    const sendFeedback = (data) => {
        window.emailjs.send(serviceId, templateId, data)
            .then(res => {
                document.getElementById('message-success').style.display = 'block';
            })
            .catch(err => {
                console.error('Email Error:', err)
                document.getElementById('message-warning').style.display = 'block';
            })
    }

    return (
        <section id="contact">
            <div className="section-head">
                <div className="text-center header-col">
                    <h1>
                        Get In Touch.
                    </h1>
                </div>
            </div>

            <div className="row">
                <div className="six centered columns">
                    <form onSubmit={handleSubmit} id="contactForm" name="contactForm">
                        <fieldset>
                            <div>
                                <label htmlFor="name">
                                    Name <span className="required">*</span>
                                </label>
                                <input
                                    type="text"
                                    size="35"
                                    id="name"
                                    name="name"
                                    onChange={handleInputChange}
                                />
                            </div>

                            <div>
                                <label htmlFor="email">
                                    Email <span className="required">*</span>
                                </label>
                                <input
                                    type="text"
                                    size="35"
                                    id="email"
                                    name="email"
                                    onChange={handleInputChange}
                                />
                            </div>

                            <div>
                                <label htmlFor="subject">Subject</label>
                                <input
                                    type="text"
                                    size="35"
                                    id="subject"
                                    name="subject"
                                    onChange={handleInputChange}
                                />
                            </div>

                            <div>
                                <label htmlFor="message">
                                    Message <span className="required">*</span>
                                </label>
                                <textarea
                                    rows="10"
                                    id="message"
                                    name="message"
                                    onChange={handleInputChange}>
                                </textarea>
                            </div>

                            <div className="align-center">
                                <button type="submit" className="submit">Submit</button>
                                <span id="image-loader">
                                    <img alt="" src="images/loader.gif"/>
                                </span>
                            </div>
                        </fieldset>
                    </form>

                    <div id="message-warning"> Something went wrong. Try again.</div>
                    <div id="message-required"> Please, complete the required fields.</div>
                    <div id="message-success">
                        <i className="fa fa-check"/> Your message was sent, thank you!
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
