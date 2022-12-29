import React from 'react'
import { useSearchParams } from 'react-router-dom';
import Layout from '../../components/Layout'
import ClothingAndAccessories from './ClothingAndAccessories';
import ProductPage from './productPage';
import ProductStore from './productStore';
import './style.css';

export default function ProductListPage(props) {
    const [searchParams] = useSearchParams();
    const params = {
        cid: searchParams.get('cid'),
        type: searchParams.get('type')
    };

    const renderProduct = () => {
        let content = null;
        switch (params.type) {
            case 'store':
                content = <ProductStore {...props} />;
                break;
            case 'page':
                content = <ProductPage {...props} />
                break;
            default:
                content = <ClothingAndAccessories {...props} />;
        }
        return content;
    }

    return (
        <Layout>
            {renderProduct()}
        </Layout>
    )
}
