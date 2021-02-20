import React, { useState } from 'react'
import { Card, Col, Container, Modal, Row } from 'react-bootstrap'

function Character(props) {
    const { item } = props
    const [show, setShow] = useState(false)

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    let checkStatus = () => {
        return item.status === "Alive" ? "green" : (item.status === "Dead" ? "red" : "grey")
    }

    return (
        <div>
            <Container className="d-flex justify-content-center">
                <Card onClick={handleShow} className='card mt-4'>
                    <Card.Body className="d-flex">
                        <Col className="d-flex justify-content-around align-items-center">
                            <Card.Img src={item.image} id='card-image' />
                            <p>{item.name}</p>
                        </Col>
                        <Col className="d-flex justify-content-end align-items-center">
                            <p className='status' style={{ backgroundColor: checkStatus() }}></p>
                            <p className='ml-2'>{item.status} -</p>
                            <p className='ml-2'>{item.species}</p>
                        </Col>
                    </Card.Body>
                </Card>
            </Container>

            <Modal show={show} onHide={handleClose} centered>
                <Modal.Header closeButton>
                </Modal.Header>
                <Modal.Body>
                    <Container>
                        <Row>
                            <Col md={6}>
                                <Card.Img src={item.image} id='model-image' />
                            </Col>
                            <Col md={6} className='mt-3' >
                                <Row>
                                    <p className='title'>{item.name}</p>
                                </Row>
                                <Row className='d-flex align-items-center'>
                                    <p className='status' style={{ backgroundColor: checkStatus() }}></p>
                                    <p className='ml-2'>{item.status} -</p>
                                    <p className='ml-2'>{item.species}</p>
                                </Row>
                            </Col>
                        </Row>
                        <hr />
                        <Row>
                            <Col>
                                <i>Gender</i>
                                <p>{item.gender}</p>

                                <i>Species</i>
                                <p>{item.species}</p>
                            </Col>
                            <Col>
                                <i>Location</i>
                                <p>{item.location.name}</p>

                                <i>Origin</i>
                                <p>{item.origin.name}</p>
                            </Col>
                        </Row>
                    </Container>
                </Modal.Body>
            </Modal>

        </div>
    )
}

export default Character
