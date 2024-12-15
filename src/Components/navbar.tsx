import { useNavigate } from 'react-router-dom';
import '../Styles/navbar-style.css'
import { Dropdown } from 'react-bootstrap';

function CustomNavbar() {
    const loginDataString = localStorage.getItem('login_data');
    const loginData = loginDataString ? JSON.parse(loginDataString) : null;
    const navigate = useNavigate();
    const logout = () => {
        localStorage.clear();
        navigate('/');
    }
    return (
        <div className="container-fluid main-container">
            <div className="row d-flex justify-content-between align-items-center text-center p-10">
                <div className="col-8">
                    <div className="row dp-flex align-items-center fw-bold">
                    </div>
                </div>
                <div className="col-4">
                    <div className="row dp-flex align-items-center">
                        <div className="col"></div>

                        {loginData && (<div className='d-flex align-items-center justify-content-between'>
                            <div className="col d-flex flex-row align-items-center justify-content-end">
                                <Dropdown>
                                    <Dropdown.Toggle
                                        style={{
                                            color: 'black',
                                            backgroundColor: "transparent",
                                            border: "none",
                                            boxShadow: "none",
                                        }}
                                    >
                                        {loginData['username']}
                                    </Dropdown.Toggle>

                                    <Dropdown.Menu
                                        style={{
                                            backgroundColor: "transparent",
                                            border: "none",
                                            width: '30%'
                                        }}
                                    >
                                        <Dropdown.Item href="#" onClick={logout}>
                                            Logout
                                        </Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </div>
                        </div>)}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CustomNavbar;
