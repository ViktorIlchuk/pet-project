import React from 'react';
import Button from '../button';
import Input from '../input';
import './index.scss';

const Form = ({
    handleChange,
    handleSubmit,
    values,
    errors
}) => {
    return(
        <div className='add-student-form-wrap'>
            <form
                className='add-student-form'
                onSubmit={handleSubmit}
            >
                <div>
                    <label>Name</label>
                    <Input
                        error={errors.name || ''}
                        className='input'
                        onChange={handleChange}
                        type='text'
                        name='name'
                        value={values.name}
                    />
                </div>
                <div>
                    <label>Email</label>
                    <div>
                        <Input
                            error={errors.email || ''}
                            className='input'
                            onChange={handleChange}
                            type='text'
                            name='email'
                            value={values.email}
                        />
                    </div>
                </div>
                <div>
                    <label>Position</label>
                    <div>
                        <Input
                            error={errors.position || ''}
                            className='input'
                            onChange={handleChange}
                            type='text'
                            name='position'
                            value={values.position}
                        />
                    </div>
                </div>
                <Button type='submit' text='Add Student' />
            </form>
        </div>
    )
}

export default Form;