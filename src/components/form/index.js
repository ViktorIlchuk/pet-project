import React from "react";
import Button from "../button";
import Input from "../input";
import './index.scss';

const Form = ({
    handleChange,
    handleSubmit,
    values,
    errors
}) => {
    return(
        <>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Name</label>
                    <Input
                        error={errors.name || ""}
                        className="input"
                        onChange={handleChange}
                        type="text"
                        name="name"
                        value={values.name}
                    />
                </div>
                <div>
                    <label>Email</label>
                    <div>
                        <Input
                            className="input"
                            onChange={handleChange}
                            type="text"
                            name="email"
                            value={values.email}
                        />
                    </div>
                </div>
                <div>
                    <label>Position</label>
                    <div>
                        <Input
                            className="input"
                            onChange={handleChange}
                            type="text"
                            name="position"
                            value={values.position}
                        />
                    </div>
                </div>
                <Button type="submit" text='Add Student' />
            </form>
        </>
    )
}

export default Form;