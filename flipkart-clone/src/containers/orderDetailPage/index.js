import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useParams, useSearchParams } from "react-router-dom";
import { getOrder } from "../../actions";
import Layout from "../../components/Layout";
import Card from "../../components/UI/card";
import Price from "../../components/UI/Price";
import { generatePublicUrl } from "../../urlConfig";

import "./style.css";

const OrderDetailsPage = (props) => {
    const dispatch = useDispatch();
    const location = useLocation()
    const orderDetails = useSelector((state) => state.user.orderDetails);
    let { orderId } = useParams();
    useEffect(() => {
        const payload = {
            orderId: orderId,
        };
        dispatch(getOrder(payload));
    }, []);

    const formatDate = (date) => {
        if (date) {
            const d = new Date(date);
            return `${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate()}`;
        }
        return "";
    };

    const formatDate2 = (date) => {
        const month = [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "June",
            "July",
            "Aug",
            "Sep",
            "Oct",
            "Nov",
            "Dec",
        ];
        if (date) {
            const d = new Date(date);
            return `${month[d.getMonth()]} ${d.getDate()}, ${d.getFullYear()}`;
        }
    };

    if (!(orderDetails && orderDetails.address)) {
        return null;
    }

    return (
        <Layout>
            <div
                style={{
                    width: "1160px",
                    margin: "10px auto",
                }}
            >
                <Card
                    style={{
                        margin: "10px 0",
                    }}
                >
                    <div className="delAdrContainer">
                        <div className="delAdrDetails">
                            <div className="delTitle">Delivery Address</div>
                            <div className="delName">{orderDetails.address.name}</div>
                            <div className="delAddress">{orderDetails.address.address}</div>
                            <div className="delPhoneNumber">
                                Phone number {orderDetails.address.mobileNumber}
                            </div>
                        </div>
                        <div className="delMoreActionContainer">
                            <div className="delTitle">More Actions</div>
                            <div className="delName">Download Invoice</div>
                        </div>
                    </div>
                </Card>

                {orderDetails.items.map((item, index) => (
                    <Card
                        style={{ display: "flex", padding: "20px 0", margin: "10px 0" }}
                    >
                        <div className="flexRow">
                            <div className="delItemImgContainer">
                                <img src={generatePublicUrl(item.productId.productPictures[0].img)} alt="" />
                            </div>
                            <div style={{ width: "250px" }}>
                                <div className="delItemName">{item.productId.name}</div>
                                <Price value={item.payablePrice} />
                            </div>
                        </div>
                        <div style={{ padding: "25px 50px" }}>
                            <div className="orderTrack">
                                {orderDetails.orderStatus.map((status) => (
                                    <div
                                        className={`orderStatus ${status.isCompleted ? "active" : ""
                                            }`}
                                    >
                                        <div
                                            className={`point ${status.isCompleted ? "active" : ""}`}
                                        ></div>
                                        <div className="orderInfo">
                                            <div className="status">{status.type}</div>
                                            <div className="date">{formatDate(status.date)}</div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div style={{ fontWeight: "500", fontSize: 14 }}>
                            {orderDetails.orderStatus[3].isCompleted &&
                                `Delivered on ${formatDate2(orderDetails.orderStatus[3].date)}`}
                        </div>
                    </Card>
                ))}
            </div>
        </Layout>
    );
};

export default OrderDetailsPage;