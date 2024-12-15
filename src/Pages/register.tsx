import '../Styles/login-signup.css'
import { Container, FloatingLabel, Col, Button } from 'react-bootstrap';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import Form from 'react-bootstrap/Form';
import {useState} from 'react';
import {useNavigate } from 'react-router-dom';
import Swal from "sweetalert2";


function Register() {
    const navigate = useNavigate();
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [username, setUsername] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const onChangeName = (name: string) => {
        setName(name);
    }
    const onChangeUsername = (username: string) => {
        setUsername(username);
    }
    const onChangePassword = (password: string) => {
        setPassword(password);
    }
    const triggerKey = (event : any) => {
        if (event.key === 'Enter') {
            event.preventDefault();
            register();
        }
    };
    const register = () => {
        Swal.showLoading();
        if (password.length < 8) {
            Swal.fire({
                title: 'Something went wrong',
                text: 'Password Length Must Be 8 Or More',
                icon: 'error',
                confirmButtonText: 'Ok',
            }).then(() => {
                Swal.close();
            });
            return;
        }
        const existingUsers = JSON.parse(sessionStorage.getItem('users') as string) || [];
        if (existingUsers.some((user: { username: string; }) => user.username === username)) {
            Swal.fire({
                title: 'Something went wrong',
                text: 'This username is already registered!',
                icon: 'error',
                confirmButtonText: 'Ok',
            }).then(() => {
                Swal.close();
            });
            return;
        }

        const newUser = {
            username: username,
            password: password
        };
        existingUsers.push(newUser);
        sessionStorage.setItem('users', JSON.stringify(existingUsers));

        Swal.fire({
            title: 'Success',
            text: 'Registration successful!',
            icon: 'success',
            confirmButtonText: 'Ok'
        }).then(() => {
            Swal.close();
            navigate('/login');
        });
    };
    return (
        <body className='budi d-flex justify-content-center' style={{overflow: "hidden"}}>
        <Container className='bg-white m-5 p-0'>
            <div className="login d-flex text-center">
                <div className="col-6">
                    <img style={{height: 610}} src="..\src\Images\newspaper.jpg" alt="whatnewstoday" className="img"/>
                </div>

                <div className="col-6 p-5">
                    <h2>WhatNewsToday</h2>
                    <h5 className='m-5'>Register</h5>
                    <Col>
                        <Col className='mb-5'>

                            <FloatingLabel controlId="floatingInput" label="Name" className='mb-3'>
                                <Form.Control
                                    type="name"
                                    placeholder="Input Name"
                                    value={name}
                                    onChange={(e) => onChangeName(e.target.value)}/>
                            </FloatingLabel>
                            <FloatingLabel controlId="floatingInput" label="Username" className="mb-3">
                                <Form.Control
                                    type="username"
                                    placeholder="Input Username"
                                    value={username}
                                    onChange={(e) => onChangeUsername(e.target.value)}/>
                            </FloatingLabel>
                            <FloatingLabel controlId="floatingPassword" label="Password" className="position-relative">
                                <Form.Control
                                    type={showPassword ? "text" : "password"}
                                    placeholder="Input Password"
                                    value={password}
                                    onChange={(e) => onChangePassword(e.target.value)}
                                    onKeyDown={triggerKey}
                                />
                                <span
                                    onClick={togglePasswordVisibility}
                                    style={{
                                        position: 'absolute',
                                        right: '10px',
                                        top: '50%',
                                        transform: 'translateY(-50%)',
                                        cursor: 'pointer',
                                        color: '#6c757d'
                                    }}
                                >
                {showPassword ? <FaEyeSlash/> : <FaEye/>}
            </span>
                            </FloatingLabel>
                        </Col>

                        <Col className='d-flex align-items-center flex-column'>
                            <Button variant="transparent" className='border p-3 mb-3' style={{width: '100%'}}
                                    onClick={register}>Register</Button>
                            <a href="/login">Already Have Account? Log in here</a>
                        </Col>
                    </Col>

                </div>
            </div>
        </Container>
        </body>
    )
}

export default Register;
