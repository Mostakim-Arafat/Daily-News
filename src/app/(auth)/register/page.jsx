'use client'

import { FaEye } from "react-icons/fa";
import { useForm } from "react-hook-form"
import { authClient } from "@/lib/auth-client";
import { useState } from "react";

const RegisterPage = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()

    const [showpassword, setShowpassword] = useState(false)

    const handleRegister = async (data) => {


        const { name, email, password, ph_number } = data
        console.log(name, email, password, ph_number)
        const { data: res, error } = await authClient.signUp.email({
            name: name, // required
            email: email, // required
            password: password, // required
            phoneNumber: ph_number,
            callbackURL: '/',
        });
        console.log(res, error)
    }
    return (
        <div className="container mx-auto  mt-10 bg-slate-200 flex flex-col justify-center items-center">
            <form onSubmit={handleSubmit(handleRegister)}>
                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4 my-10">
                    <label className="label">Name</label>
                    <input type="text" className="input" placeholder=" Your Name" {...register("name", { required: 'name required' })} />
                    {errors.name && <p className="text-red-400">{errors.name.message}</p>}

                    <label className="label">Phone number</label>
                    <input type="number" className="input" placeholder="Phone number" {...register("ph_number", { required: 'phone number required' })} />
                    {errors.ph_number && <p className="text-red-400">{errors.ph_number.message}</p>}

                    <label className="label">Email</label>
                    <input type="email" className="input" placeholder="Email" {...register("email", { required: 'email required' })} />
                    {errors.email && <p className="text-red-400">{errors.email.message}</p>}

                    <label className="label">Password</label>
                    <div className="relative">
                        <input type={showpassword ? 'text' : "password"} className="input" placeholder="Password" {...register("password", { required: 'password required' })} />
                        <button className="absolute t-1 r-1" onClick={() => setShowpassword(!showpassword)}>
                            <FaEye />
                        </button>
                    </div>
                    {errors.password && <p className="text-red-400">{errors.password.message}</p>}

                    <button className="btn btn-neutral mt-4">Register</button>
                </fieldset>
            </form>
        </div>
    );
};

export default RegisterPage;