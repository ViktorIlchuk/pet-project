import React from 'react';
import Button from '../button';
import Input from '../input';
import './index.scss';

const Form = ({
    handleChange,
    handleSubmit,
    values,
    errors,
    targetStudentData,
    action
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
                        defaultValue={targetStudentData.name}
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
                            defaultValue={targetStudentData.email}
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
                            defaultValue={targetStudentData.position}
                        />
                    </div>
                </div>
                <Button type='submit' text={`${action} Student`} />
            </form>
        </div>
    )
}

export default Form;