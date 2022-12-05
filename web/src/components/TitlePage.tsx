import React, {useEffect, useState} from "react";
import {Button, Card, CardBody, Col, Form, Input, Row, Table} from "reactstrap";
import {useParams} from "react-router";

export function TitlePage() {

    let {titleNo} = useParams();
    const [data, setData] = useState<any>(undefined)
    const [ownerChangeValue, setOwnerChangeValue] = useState("")

    useEffect(() => {
        loadTitle();
    }, [])

    useEffect(() => {
        if (data && String(data.id) !== String(titleNo)) {
            loadTitle();
        }
    })

    function ownerNameHandleChange(event: any) {
        setOwnerChangeValue(event.target.value)
    }

    async function ownerNameHandleSubmit(event: any) {
        event.preventDefault();

        const res = await fetch(`/api/titles/${data.id}`,
            {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json",

                },
                body: JSON.stringify({ownerName: ownerChangeValue}),
            });
        setData(await res.json())
        setOwnerChangeValue('')

    }


    async function loadTitle() {
        const res = await fetch(`/api/titles/${titleNo}`);
        if (res.status === 200) {
            setData(await res.json())
        }
    }

    return (
        <div>
            <h3>Title #{titleNo}</h3>
            {data === undefined && <p>
                Loading...
            </p>}
            {data && <div>
                <Table>
                    <tbody>
                    <tr>
                        <th>Description</th>
                        <td>{data.description}</td>
                    </tr>
                    <tr>
                        <th>Current Owner</th>
                        <td>{data.ownerName}</td>
                    </tr>
                    </tbody>
                </Table>
                <Card color="light" style={{marginTop: "50px"}}>
                    <CardBody>
                        <h4>Change Owner</h4>
                        <p>As a registered conveyancing lawyer, you may record a change of ownership of this title.</p>
                        <Form inline onSubmit={ownerNameHandleSubmit}>
                            <Row className="row-cols-lg-auto g-3 align-items-center">
                                <Col>
                                    <Input type="text" value={ownerChangeValue} onChange={ownerNameHandleChange}
                                           placeholder="Enter the new owner name" style={{width: "400px"}}/>
                                </Col>
                                <Col><Button color="primary" type="submit" value="Submit">Save</Button></Col>
                            </Row>
                        </Form>
                    </CardBody>
                </Card>
            </div>}
        </div>
    );
}
