import React, {useState} from 'react';
import {Button, Form, Input} from "reactstrap";
import {withRouter} from "react-router-dom";

function TitleSearch(props) {

    const [value, setValue] = useState('')

    function handleChange(e) {
        setValue(e.target.value)
    }

    function handleSubmit () {
        props.history.push(`/titles/${value}`);
    }

    return (
        <div style={{display: "inline-block"}}>
            <Form inline onSubmit={handleSubmit}>
                <Input type="text" value={value} onChange={handleChange} placeholder="Enter a title number" />
                &nbsp;
                <Button color="primary" type="submit" value="Submit">Go</Button>
            </Form>
        </div>
    );
}

export default withRouter(TitleSearch);