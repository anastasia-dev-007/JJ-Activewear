import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { products } from '../../products.service';
import Button from 'react-bootstrap/Button';//for Modal
import Form from 'react-bootstrap/Form';//for Modal
import Modal from 'react-bootstrap/Modal';//for Modal
import Dropdown from 'react-bootstrap/Dropdown';//for DropDown on login
import DropdownButton from 'react-bootstrap/DropdownButton';//for DropDown on login
import { UserContext } from '../../contexts/user.context';
import { registerUser, login, logout, findUserByEmailAndPassword, saveUser } from '../../users.service';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import styles from "../NavBar/NavBar.module.css"

const LoginAndRegistration = () => {
    const [activeModal, setActiveModal] = useState(null);
    const [photo, setUserPhoto] = useState('');
    const [nameSurname, setNameSurname] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [birthDate, setBirthDate] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmedPassword, setConfirmedPassword] = useState('');

    const userContext = useContext(UserContext);

    const { user, users, setUsers, createUser, login, logout } = useContext(UserContext);

    const navigate = useNavigate();

    const [show, setShow] = useState(false); //for Modal

    const handleClose = () => {
        setShow(false)
        setActiveModal(null);
    };//for Modal
    const handleShow = () => setShow(true);//for Modal
    const handleModalButtonClick = (modalId) => {//for Modal
        setActiveModal(modalId);
    };

    const handleLoginButtonClick = () => {
        // Add your custom logic for the "Log in" button click
        // For example, you can call the loginUser function from the UserContext
        // and perform additional actions like closing the modal
        // userContext.login(/* pass necessary parameters */);
        handleClose(); // Close the modal after logging in
    };

    const handleLogoutButtonClick = () => {
        // Add your custom logic for the "Log out" button click
        // For example, you can call the setUser function from the UserContext
        // and perform additional actions like closing the modal
        // userContext.setUser(null);
        logout();
        // handleClose(); // Close the modal after logging out
    };

    // Function to handle changes in the email input
    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    // Function to handle changes in the password input
    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleNameSurnameChange = (e) => {
        setNameSurname(e.target.value);
    };

    const handlePhoneNumberChange = (e) => {
        setPhoneNumber(e.target.value);
    };

    const handleBirthDateChange = (e) => {
        setBirthDate(e.target.value);
    };

    const handleConfirmedPasswordChange = (e) => {
        setConfirmedPassword(e.target.value);
    };

    const handleRegister = () => {
        const user = {
            id: 1,
            surname: 'admin',
            phoneNumber: 37367890987,
            birthDate: new Date(),
            email: 'admins@admin.com',
            password: 'admin',
        };
        const registeredUser = saveUser(user);

        if (registeredUser) {
            login(user);//login vine din users.context
            alert('user created, you are logged in');
            handleClose();
            setNameSurname('');
            setEmail('');
            setPhoneNumber('');
            setBirthDate();
            setPassword('');
            setConfirmedPassword('');
        } else {
            alert('user with this email already exists');
        }
    };


    //Function created by Radu. To collect data introduced mannualy by user in form
    const handleLogin = () => {
        const user = findUserByEmailAndPassword(email, password);

        if (user) {
            login(user);//login vine din users.context
            alert('user exists, you are logged in');
            handleClose();
            setEmail('');
            setPassword('');
            navigate('/');
        } else {
            alert('wrong credentials');
        }
    };


    const handleLogout = () => {
        // logout(setUser);
    };

    return (
        <div>
            <DropdownButton id="dropdown-basic-button" className={styles.loginDropDownBtn} title={<i className="fa-regular fa-user"></i>}>
                <Link variant="" onClick={() => handleModalButtonClick('login')}>
                    {
                        userContext.user === null ? (
                            <Dropdown.Item href="#/action-1"
                                onClick={() => {
                                    handleLoginButtonClick()
                                    //userContext.setUser({
                                    // username: 'Jessica',
                                    //})
                                }}>Log in</Dropdown.Item>
                        ) : (
                            <Dropdown.Item href="#/action-1"
                                onClick={() => handleLogoutButtonClick()
                                    //userContext.setUser(null)
                                }
                            >Log out</Dropdown.Item>
                        )
                    }
                </Link>

                <Link variant="primary" onClick={() => handleModalButtonClick('createAccount')}>
                    <Dropdown.Item href="#/action-2">Create account</Dropdown.Item>
                </Link>
            </DropdownButton>

            {/* Modal for Login */}
            <Modal show={activeModal === 'login'} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Please log in to your account</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <FloatingLabel
                            controlId="floatingInput"
                            label="Username"
                            className="mb-3">
                            <Form.Control type="email"
                                placeholder="name@example.com"
                                value={email}
                                onChange={handleEmailChange} />
                        </FloatingLabel>
                        <FloatingLabel controlId="floatingPassword" label="Password">
                            <Form.Control type="password"
                                placeholder="Password"
                                value={password}
                                onChange={handlePasswordChange} />
                        </FloatingLabel>

                        <div>
                            <p><Link>Forgot your password?</Link></p>
                            <p onClick={() => handleModalButtonClick('createAccount')}><Link>Create account</Link></p>
                        </div>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleLogin}>
                        Log in
                    </Button>
                </Modal.Footer>
            </Modal>

            {/* Modal for create account */}
            <Modal show={activeModal === 'createAccount'} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Create your account</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Name Surname</Form.Label>
                            <Form.Control
                                type="text"
                                autoFocus
                                value={nameSurname}
                                onChange={handleNameSurnameChange}
                            />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Phone number</Form.Label>
                            <Form.Control
                                type="text"
                                autoFocus
                                value={phoneNumber}
                                onChange={handlePhoneNumberChange}
                            />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Birthday</Form.Label>
                            <Form.Control
                                type="date"
                                autoFocus
                                value={birthDate}
                                onChange={handleBirthDateChange}
                            />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control
                                type="email"
                                // placeholder="name@example.com"
                                autoFocus
                                value={email}
                                onChange={handleEmailChange}
                            />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                type="password"
                                autoFocus
                                value={password}
                                onChange={handlePasswordChange}
                            />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Confirm password</Form.Label>
                            <Form.Control
                                type="password"
                                autoFocus
                                value={confirmedPassword}
                                onChange={handleConfirmedPasswordChange}
                            />
                        </Form.Group>

                        <Form.Group controlId="formFile" className="mb-3">
                            <Form.Label>Upload your photo</Form.Label>
                            <Form.Control type="file" onClick={() => setUserPhoto()} />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleRegister}>
                        Create account
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}


export default LoginAndRegistration;
