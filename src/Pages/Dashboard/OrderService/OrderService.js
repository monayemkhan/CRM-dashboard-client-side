import React from 'react';
import axios from 'axios';
import { useForm } from 'react-hook-form';

const OrderService = () => {
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
                <div className=" w-75 mx-auto">
                    <div className="border rounded-3 border-danger shadow-lg">
                        <h4 className="text-uppercase fw-bold mb-3 py-2 w-100 bg-danger text-light">Add Review</h4>
                        <p>Please fill the form with all info</p>
                        <div>
                            <form className="p-3" onSubmit={handleSubmit(onSubmit)}>
                                <label for="" className="col-form-label d-flex align-items-center">Select a client
                                    <select class="form-select" aria-label="Default select example">
                                        <option selected>Open this select menu</option>
                                        <option value="1" >One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                    </select>
                                </label>
                                <label for="" className="col-form-label d-flex align-items-center">Select a client
                                    <select class="form-select" aria-label="Default select example">
                                        <option selected>Open this select menu</option>
                                        <option value="1" >One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                    </select>
                                </label>

                                <label for="" className="col-form-label d-flex align-items-center">Coupon Code
                                    <input className="form-control m-2" placeholder="" type="text" {...register("name", { required: true, maxLength: 40 })} />
                                </label>
                                <label for="floatingInput" className="col-form-label d-flex align-items-center">Upload image
                                    <input className="form-control m-2" type="file" {...register("profession")} />
                                </label>

                                <label for="floatingInput" className="col-form-label d-flex align-items-center">Comments
                                    <textarea className="form-control m-2" placeholder="Type Your Comments, max length 100 " {...register("review", { required: true, maxLength: 100 })} />

                                </label>
                                <input className="btn btn-danger mt-3" type="submit" />


                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OrderService;