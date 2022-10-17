import React, {useState} from 'react';
import {Button, Col, Form, Input, Row} from "reactstrap";
import {useNavigate} from "react-router";

export default function TitleSearch() {

    const [value, setValue] = useState('')
    const navigate = useNavigate()

    function handleChange(e: any) {
        setValue(e.target.value)
    }

    function handleSubmit() {
        navigate(`/titles/${value}`);
    }

    return (
        <div style={{display: "inline-block"}}>
            <Form onSubmit={handleSubmit}>
                <Row className="row-cols-lg-auto g-3 align-items-center">
                    <Col><Input type="text" value={value} onChange={handleChange}
                                placeholder="Enter a title number"/></Col>
                    <Col><Button color="primary" type="submit" value="Submit">Go</Button></Col>
                </Row>

            </Form>
        </div>
    );
}