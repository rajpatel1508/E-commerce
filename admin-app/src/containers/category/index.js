import React, { useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { addCategory } from '../../actions';
import Layout from '../../components/layout'
import Input from '../../components/UI/Input';
import NewModal from '../../components/UI/Modal';

export default function Category() {
    const category = useSelector(state => state.category);
    const [categoryName, setcategoryName] = useState('');
    const [parentCategoryId, setparentCategoryId] = useState('');
    const [categoryImage, setcategoryImage] = useState('');
    const dispatch = useDispatch();

    const [show, setShow] = useState(false);
    const handleClose = () => {
        const form = new FormData();
        form.append('name', categoryName);
        form.append('parentId', parentCategoryId);
        form.append('categoryImage', categoryImage);
        dispatch(addCategory(form));
        setcategoryName('');
        setparentCategoryId('');
        setShow(false);
    }
    const handleShow = () => setShow(true);
    const renderCategories = (categories) => {
        let mycategories = [];
        for (let category of categories) {
            mycategories.push(
                <li key={category.name}>
                    {category.name}
                    {category.children.length > 0 ? (<ul>{renderCategories(category.children)} </ul>) : null}
                </li>
            );
        }
        return mycategories;
    }
    const createCategoryList = (categories, option = []) => {
        for (let category of categories) {
            option.push({ value: category._id, name: category.name });
            if (category.children.length > 0) {
                createCategoryList(category.children, option)
            }
        }
        return option;
    }
    const handleCategoryImage = (e) => {
        setcategoryImage(e.target.files[0]);
    }
    return (
        <Layout sidebar>
            <Container>
                <Row>
                    <Col md={12}>
                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                            <h1>Category</h1>
                            <button onClick={handleShow}>Add</button>
                        </div>

                    </Col>
                </Row>
                <Row>
                    <Col md={12}>
                        <ul>
                            {renderCategories(category.categories)}
                            {/* {JSON.stringify(createCategoryList(category.categories))} */}
                        </ul>
                    </Col>
                </Row>
            </Container>
            <NewModal
                show={show}
                handleClose={handleClose}
                modaltitle={'Add new category'}
            >
                <Input
                    value={categoryName}
                    placeholder={'Category Name'}
                    onChange={(e) => setcategoryName(e.target.value)}
                />
                <select className='form-control' value={parentCategoryId} onChange={(e) => setparentCategoryId(e.target.value)}>
                    <option>
                        Select
                    </option>
                    {
                        createCategoryList(category.categories).map(option =>
                            <option key={option.value} value={option.value}>{option.name}</option>)
                    }
                </select>
                <input type="file" name="categoryImage" onChange={handleCategoryImage} />
            </NewModal>
        </Layout>
    )
}
