import React from 'react';
import { Form, Formik } from 'formik';
import Button from '../Button/Button';
import * as yup from 'yup';
import Input from '../Input/Input';


const Login = ({loadUser, onRouteChange}) => {
    const loginSchema = yup.object().shape({
        username: yup.string().required('Username required'),
        password: yup.string().required('Password required'),
    });

    return (
        <div className={'mt-24 w-full lg:w-1/4 max-w-md mx-auto'}>
            <div className={'shadow p-4 flex flex-col justify-center'}>
                <div>
                    <Formik
                        initialValues={{
                            username: '',
                            password: '',
                        }}
                        validationSchema={loginSchema}
                        onSubmit={(values) => {
                            console.log('logged in');
                            fetch('https://boiling-depths-83144.herokuapp.com/signin',{
                                method: 'post',
                                headers: {'Content-Type': 'application/json'},
                                body: JSON.stringify({
                                    username: values.username,
                                    password: values.password
                                })
                            }).then(
                                response => response.json()
                            ).then(user => {
                                if (user.id) {
                                    loadUser(user);
                                    onRouteChange('home');
                                }
                                else{
                                    alert('Invalid credentials');
                                }
                            })
                            .catch(error => console.log('not found: ', error))

                        }}
                    >
                        {() => (
                            <Form>
                                <div className={'flex flex-col gap-2'}>
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

                                    <Button btn_name='Login' />

                                </div>
                            </Form>
                        )}
                    </Formik>
                </div>
            </div>

            <div className={'flex justify-center'}>
                    <p 
                    style={{'fontFamily': 'Poppins'}}
                    className={'cursor-pointer mt-4 font-bold text-blue-600'}
                    onClick={() => onRouteChange('register')}
                    >
                        Don't have an account?
                    </p>
            </div>
        </div>
    );
};

export default Login;
