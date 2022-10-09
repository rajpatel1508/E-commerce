import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Layout from '../../components/layout'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Input from '../../components/UI/Input';

export default function Signin() {
    return (
        <Layout>
            <Container>
                <Row style={{marginTop:'50px'}}>
                    <Col md={{ span: 6, offset: 3 }}>
                        <Form>
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
