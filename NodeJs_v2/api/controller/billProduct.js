const BillProduct = require('../model/billProduct')
const Bill = require('../model/bill')
const Product = require('../model/product')
const mongoose = require('mongoose')

exports.create_billProduct = async (req ,res) => {
    // var bill = await getBill(req.body.idBill);
    console.log(req.body)
    console.log('id bill' , req.body.idBill)
    var product = await getProduct(req.body.idProduct);
    const billProduct = new BillProduct({
        unitPrice: req.body.unitPrice,
        quantity: req.body.quantity,
        idBill: req.body.idBill,
        product
    })

    try {
        const savedBillProduct = await billProduct.save();
        res.send(savedBillProduct)
    } catch (error) {
        res.status(400).send(error)
    }
}

exports.delete_billProduct = (req ,res) => {
    BillProduct.findByIdAndDelete(req.params.id,(error,result) => {
        if(error) res.send(error)
        res.send("deleted succesful !")
    })
}


exports.get_billProduct_by_idBill = async (req ,res) => {
    let search = req.params.id;
    console.log("method search catename:" ,search)
    await BillProduct.find({ "idBill": {'$regex': search} },(err,result) => {
        if(err) res.send(err)
        res.send(result)
    })
}

// async function getBill(idB) {
//     var kq;
//     await Bill.find({_id: idB} ,(err ,result) => {
//         kq = result[0]
//     })
//     return kq;
// }

async function getProduct(idP) {
    var kq;
    await Product.find({_id: idP} ,(err ,result) => {
        kq = result[0]
    })
    return kq;
}