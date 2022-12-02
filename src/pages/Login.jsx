import React from 'react';
import { Button, Card, Form } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Login = () => {

    const { register, handleSubmit } = useForm();

    const navigate = useNavigate();

    const submit = data => {
        axios.post('https://e-commerce-api.academlo.tech/api/v1/users/login', data)
            .then(res => {
                navigate("/")
                console.log(res)
                localStorage.setItem("token", res.data.data.token);

                
            })
            .catch(error => {
                if(error.response?.status === 404){
                        alert("incorrect credentials");
                } else {
                    console.log(error.response?.data);
                }
            })    
    }

    return (
        <div >
            <Card>
                <Form onSubmit={handleSubmit(submit)} style={{ maxWidth: 500, margin: "0 auto" }}>
                    <div><h1>Login</h1></div>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label className="icon-mail">Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" {...register("email")} />
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" {...register("password")} />
                        <Button variant="primary" type="submit">
                        Submit
                    </Button>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicsignup">
                        <Form.Label> Don't have an account? </Form.Label>
                        <Button type="button" onClick={() => navigate("/SignUp")}>
                            Sign up 
                        
                    </Button>
                    
                    </Form.Group>
                    
                </Form>
                
            </Card>
           
        </div>
    );
};

export default Login;