const express = require("express");
const router = express.Router();
const Analytics = require("../models/analytics");

router.get("/getOrders", (req, res) => {
    Analytics.find({
            date: {
                $gte: (new Date(Date.now() - 11 * 24 * 60 * 60 * 1000) * 1000) / 1000,
            },
        })
        .then((order) => {
            const group1 = {};
            order.forEach((e) => {
                let o = (group1[e.couponCode] = group1[e.couponCode] || {
                    couponsCode: e.couponCode,
                    quantity: 0,
                });
                o.quantity += 1;
            });
            let resp1 = Object.values(group1);

            let allItems = [];
            const group = {};
            order.map((item) => allItems.push(...JSON.parse(item.order)));
            allItems.forEach((e) => {
                let o = (group[e._id] = group[e._id] || {...e, quantity: 0 });
                o.quantity += e.quantity;
            });
            let resp = Object.values(group);
            resp.sort((a, b) => b.quantity - a.quantity);
            res.status(200).json({ items: resp, coupon: resp1 });
        })
        .catch((err) => {
            res.status(400).send("Error while fetching items" + err);
        });
});

router.post("/addOrders", (req, res) => {
    let analytics = new Analytics(req.body);
    analytics
        .save()
        .then((order) => {
            res.status(200).send("Coupons added successfully");
            //console.log(user);
        })
        .catch((err) => {
            res.status(400).send("Cannot add coupons " + err);
        });
});

module.exports = router;