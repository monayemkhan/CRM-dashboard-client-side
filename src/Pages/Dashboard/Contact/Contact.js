import React from 'react';
import axios from 'axios';
import { useForm } from 'react-hook-form';

const Contact = () => {

    const { register, handleSubmit, reset } = useForm();
    // const { isLoading } = useAuth();

    // handle review
    const onSubmit = data => {
        axios.post('https://fierce-castle-66914.herokuapp.com/reviews', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('Reviews Added Successfully');
                    reset();
                }
            })
    };

    return (
        <div>
            <div className="container my-5">
                <div className="row w-75 mx-auto">
                    <h2>Contact</h2>
                    <div>
                        <form className="p-3" onSubmit={handleSubmit(onSubmit)}>
                            <input className="form-control m-2" placeholder="Your Name*" type="text" {...register("name", { required: true, maxLength: 40 })} />
                            <input className="form-control m-2" placeholder="Email Address*" type="email" {...register("profession")} />
                            <select class="form-select" aria-label="Default select example">
                                <option selected>Open this select menu</option>
                                <option value="1" >One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </select>
                            <input className="form-control m-2" placeholder="Subject" type="text" {...register("profession")} />
                            <textarea className="form-control m-2" placeholder="Type Your message, max length 200 " {...register("review", { required: true, maxLength: 200 })} />
                            <input className="btn btn-danger mt-3" type="submit" />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;