import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import './App.css'

const RegistrationForm = () => {
    const { control, handleSubmit, formState: { errors }, watch } = useForm();

    const password = watch("password", "");

    const onSubmit = data => {
        console.log(data);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <h1 className="form_h1">Register with</h1>
            <div className="form_block">
                <div className="form_input">
                    <label className="label" htmlFor="name">Name</label>
                    <Controller
                        name="name"
                        control={control}
                        defaultValue=""
                        render={({ field }) => <input {...field} />}
                    />
                    {errors.name && <p>{errors.name.message}</p>}
                </div>
                <div className="form_input">
                    <label className="label" htmlFor="email">Email</label>
                    <Controller
                        name="email"
                        control={control}
                        defaultValue=""
                        render={({ field }) => <input {...field} />}
                    />
                    {errors.email && <p>{errors.email.message}</p>}
                </div>
                <div className="form_input">
                    <label className="label" htmlFor="password">Password</label>
                    <Controller
                        name="password"
                        control={control}
                        defaultValue=""
                        render={({ field }) => <input type="password" {...field} />}
                    />
                    {errors.password && <p>{errors.password.message}</p>}
                </div>
                <div className="form_input">
                    <label className="label" htmlFor="rePassword">Re-enter password</label>
                    <Controller
                        name="rePassword"
                        control={control}
                        defaultValue=""
                        render={({ field }) => <input type="password" {...field} />}
                    />
                    {errors.rePassword && <p>{errors.rePassword.message}</p>}
                </div>
            </div>

            {password && password !== "" && password !== watch("rePassword") && <p>Passwords do not match</p>}
            <button className="btn" type="submit">CONTINUE</button>
        </form>
    );
};

export default RegistrationForm;
