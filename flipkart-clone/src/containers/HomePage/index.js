import React from 'react'
import Layout from '../../components/Layout'
import './style.css';

export default function HomePage() {
    return (
        <Layout>
            <div className="homebanner">
                <div className="bannerimg">
                    <video controlsList="nodownload" preload="true" playsInline autoPlay loop muted disablePictureInPicture poster="https://trioangleblog.s3-us-west-2.amazonaws.com/newtrioangle/images/amazon-clone/banner_video.webp?format=webp">
                        <source src="https://trioangleblog.s3-us-west-2.amazonaws.com/newtrioangle/images/amazon-clone/banner_video.mp4" type="video/mp4"/>
                    </video>
                </div>
                <div className="banner-text">
                    <h1>Flipkart Clone</h1>
                    <p className="my-3 my-xl-3">This project is a clone of the popular e-commerce platform Flipkart, developed using the MERN stack (MongoDB, Express.js, React.js, and Node.js).
                        It features a user-friendly interface and allows users to browse and purchase products, create and manage their own accounts and more.
                        The use of the MERN stack allows for efficient and scalable development, with MongoDB as the database, Express.js for the backend, React.js for the frontend, and Node.js as the runtime environment.
                        The project is aimed at providing a similar functionality as Flipkart and the users will be able to have a similar experience as Flipkart.</p>
                </div>

            </div>
            <div className="about">
                <div className="container">
                    <div className="aboutin text-sm-start text-center">
                        <h2 className="mt-3 mb-3">Why Flipkart Clone?</h2>
                        <p>Flipkart is one of the best and trending eCommerce sites with a presence throughout India. The online shopping website is for Buying and Selling products online within the network.</p>
                        <p>Flipkart Clone is to showcase FullStack skills of mine as it requires rigorous implementation of multiple complex functionalities.</p>
                    </div>
                </div>
            </div>
        </Layout>
    )
}
