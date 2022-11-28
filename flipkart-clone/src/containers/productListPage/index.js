import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getProductsBySlug } from '../../actions';
import Layout from '../../components/Layout'
import { generatePublicUrl } from '../../urlConfig';
import './style.css';

export default function ProductListPage() {
    const product = useSelector(state => state.product);
    // console.log(product);
    const [priceRange, setPriceRange] = useState({
        under5k: 5000,
        under10k: 10000,
        under15k: 15000,
        under20k: 20000,
        under30k: 30000
    })
    const { slug } = useParams();
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getProductsBySlug(slug));
    }, []);

    return (
        <Layout>
            {
                Object.keys(product.productsByPrice).map((key, index) => {
                    return (
                        <div className='card'>
                            <div className='cardHeader'>
                                <div>{slug} Mobile under {priceRange[key]}</div>
                                <button>view all</button>
                            </div>
                            <div style={{ display: 'flex' }}>
                                {
                                    product.productsByPrice[key].map(product =>
                                        <div className='productContainer'>
                                            <div className='productImgContainer'>
                                                <img src={generatePublicUrl(product.productPictures[0].img)} />
                                            </div>
                                            <div className='productInfo'>
                                                <div style={{ margin: '5px 0' }}>
                                                    {product.name}
                                                </div>
                                                <div>
                                                    <span>4.3</span>
                                                    <span>3344</span>
                                                </div>
                                                <div className='productPrice'>{product.price}</div>
                                            </div>
                                        </div>)
                                }

                            </div>
                        </div>);
                })
            }

        </Layout>
    )
}
