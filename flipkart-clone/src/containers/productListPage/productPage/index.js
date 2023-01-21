import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useSearchParams } from 'react-router-dom';
import { getProductPage } from '../../../actions';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Card from '../../../components/UI/card';

export default function ProductPage(props) {
    const dispatch = useDispatch();
    const product = useSelector(state => state.product);
    const [searchParams] = useSearchParams();
    const params = {
        cid: searchParams.get('cid'),
        type: searchParams.get('type')
    };
    const { page } = product;
    console.log(product);

    useEffect(() => {
        const payload = {
            params
        }
        dispatch(getProductPage(payload));
    }, []);

    return (
        <div style={{ margin: '0 10px' }}>
            <h3>{page.title}</h3>
            <Carousel
                renderThumbs={() => { }}
            >
                {
                    page.banners && page.banners.map((banner, index) =>
                        <Link key={index} style={{ display: 'block' }} to={banner.navigateTo}>
                            <img src={banner.img} alt="" />
                        </Link>
                    )
                }
            </Carousel>
            <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', margin: '10px 0' }}>
                {
                    page.products && page.products.map((product, index) =>
                        <Card key={index} style={{ width: '400px', height: '200px', margin: '5px' }}>
                            <img src={product.img} style={{ width: '100%', height: '100%' }} />
                        </Card>

                    )
                }
            </div>
            {/* {JSON.stringify(product.page)} */}
        </div>
    )
}
