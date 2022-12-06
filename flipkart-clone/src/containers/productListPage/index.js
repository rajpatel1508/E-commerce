import React from 'react'
import { useSearchParams } from 'react-router-dom';
import Layout from '../../components/Layout'
import ProductPage from './productPage';
import ProductStore from './productStore';
import './style.css';

export default function ProductListPage(props) {
    const [searchParams] = useSearchParams();
    const params = {
        cid: searchParams.get('cid'),
        type: searchParams.get('type')
    };
    let content = null;
    const renderProduct = () => {
        switch (params.type) {
            case 'store':
                content = <ProductStore {...props} />;
                break;
            case 'page':
                content = <ProductPage {...props} />
                break;
            default:
                content = null;
        }
        return content;
    }

    return (
        <Layout>
            {renderProduct()}
        </Layout>
    )
}
