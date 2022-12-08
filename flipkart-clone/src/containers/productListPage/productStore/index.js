import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams, useSearchParams } from 'react-router-dom';
import { getProductsBySlug } from '../../../actions';
import Card from '../../../components/UI/card';
import { generatePublicUrl } from '../../../urlConfig';


export default function ProductStore(props) {
    const { slug } = useParams();
    const product = useSelector(state => state.product);
    console.log(product);
    const [priceRange, setPriceRange] = useState({
        under5k: 5000,
        under10k: 10000,
        under15k: 15000,
        under20k: 20000,
        under30k: 30000
    })
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getProductsBySlug(slug));
    }, []);

    return (
        <>
            {
                Object.keys(product.productsByPrice).map((key, index) => {
                    return (
                        <Card
                            headerLeft={`${slug} Mobile under ${priceRange[key]}`}
                            headerRight={<button>view all</button>}
                            style={{ width: 'calc(100%-20px)', margin: '20px' }}
                        >
                            <div style={{ display: 'flex' }}>
                                {
                                    product.productsByPrice[key].map(product =>
                                        <Link
                                            to={`/${product.slug}/${product._id}/p`}
                                            style={{ display: 'block' }}
                                            className='productContainer'
                                        >
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
                                        </Link>
                                    )
                                }
                            </div>
                        </Card>);
                })
            }
        </>
    )
}
