import React from 'react';
import { Form, Formik } from 'formik';
import * as yup from 'yup';
import Button from '../Button/Button';
import Input from '../Input/Input';


const Signup = ({loadUser, onRouteChange}) => {

    const signupSchema = yup.object().shape({
        name: yup.string().required('Name required'),
        username: yup.string().required('Username required'),
        password: yup.string().min(5).required('Password required'),
        confirm_password: yup.string().required('Confirm password !'), 
    });

    return (
        <div className={'mt-24 w-full lg:w-1/4 max-w-md mx-auto'}>
            <div className={'shadow p-4 flex flex-col justify-center'}>
                <div>
                    <Formik
                        initialValues={{
                            name: '',
                            username: '',
                            password: '',
                            confirm_password: '',
                        }}
                        validationSchema={signupSchema}
                        onSubmit={(values) => {
                            if (values.password === values.confirm_password){    
                                fetch('LINK_YOUR_SERVER', {
                                    method: 'post',
                                    headers: {'Content-Type': 'application/json'},
                                    body: JSON.stringify({
                                        username: values.username,
                                        password: values.password,
                                        name: values.name,
                                    })
                                    }).then(
                                        response => response.json()
                                    ).then(user => {
                                        if (typeof user === 'object') {
                                            loadUser(user);
                                            onRouteChange('home');
                                        }
                                        else{
                                            console.log(user);
                                            alert('unable to register');
                                        }
                                    })
                                    .catch(error => alert(error))
                                }
                            else{   
                                alert('passwords do not match');
                            }
                        }}
                    >
                        {() => (
                            <Form>
                                <div className={'flex flex-col gap-2'}>
                                    <div>
                                        <Input
                                            name={'name'}
                                            label={'name'}
                                            type={'text'}
                                            placeholder={'enter name'}
                                        />
                                    </div>

                                    <div>
                                        <Input
                                            name={'username'}
                                            label={'username'}
                                            type={'text'}
                                            placeholder={'enter username'}
                                        />
                                    </div>

                                    <div>
                                        <Input
                                            name={'password'}
                                            label={'password'}
                                            type={'password'}
                                            placeholder={'enter password'}
                                        />
                                    </div>

                                    <div>
                                        <Input
                                            name={'confirm_password'}
                                            label={'confirm password'}
                                            type={'password'}
                                            placeholder={'enter password'}
                                        />
                                    </div>
                                    
                                    <Button btn_name='Sign up' />
                                    
                                </div>
                            </Form>
                        )}
                    </Formik>
                </div>
                <div className={'flex justify-center'}>
                    <p 
                    style={{'fontFamily': 'Poppins'}}
                    className={'cursor-pointer mt-4 text-blue-600 font-bold'}
                        onClick={() => onRouteChange('signin')}
                    >
                        Already have an account?
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Signup;
