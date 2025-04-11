import Dropdown from 'react-bootstrap/Dropdown';

function BasicExample1() {
    return (
        <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
                2024
            </Dropdown.Toggle>

            <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">2023</Dropdown.Item>
                <Dropdown.Item href="#/action-2">2022</Dropdown.Item>
                <Dropdown.Item href="#/action-3">2021</Dropdown.Item>
                <Dropdown.Item href="#/action-4">2020</Dropdown.Item>
                <Dropdown.Item href="#/action-5">2019</Dropdown.Item>
                <Dropdown.Item href="#/action-6">2018</Dropdown.Item>
                <Dropdown.Item href="#/action-7">2017</Dropdown.Item>
                <Dropdown.Item href="#/action-8">2016</Dropdown.Item>
                <Dropdown.Item href="#/action-9">2015</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    );
}

export default BasicExample1;