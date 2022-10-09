import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Layout from '../../components/layout'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Input from '../../components/UI/Input';

export default function Signup(props) {
    return (
        <Layout>
            <Container>
                <Row style={{ marginTop: '50px' }}>
                    <Col md={{ span: 6, offset: 3 }}>
                        <Form>
                            <Row>
                                <Col md={6}>
                                    <Input
                                        label="First Name"
                                        placeholder="First Name"
                                        value=""
                                        type="text"
                                        onChange={() => { }}
                                    />
                                </Col>
                                <Col md={6}>
                                    <Input
                                        label="Last Name"
                                        placeholder="Last Name"
                                        value=""
                                        type="text"
                                        onChange={() => { }}
                                    />
                                </Col>
                            </Row>
                            <Form.Group className="mb-3">
                                <Input
                                    label="E-Mail"
                                    placeholder="E-Mail"
                                    value=""
                                    type="email"
                                    onChange={() => { }}
                                />
                            </Form.Group>

                            <Form.Group className="mb-3" >
                                <Input
                                    label="Password"
                                    placeholder="Password"
                                    value=""
                                    type="password"
                                    onChange={() => { }}
                                />
                            </Form.Group>
                            <Button variant="primary" type="submit">
                                Submit
                            </Button>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </Layout>
    )
}
