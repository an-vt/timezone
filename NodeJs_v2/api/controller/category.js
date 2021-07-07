const Category = require('../model/category')

exports.create_category = async (req ,res) => {
    console.log('add category')
    console.log("body " ,req.body)
    const exist = await Category.findOne({
        name : req.body.name
    })
    if(exist) {
        return res.send('Name already exist')
    }
    Category.create({
        name: req.body.name
    },(err,result) => {
        if(err) res.send(err)
        res.send(result)
    })
}

exports.update_category = async (req ,res) => {
    const category = await Category.findOne({
        name : req.body.name
    })
    if(category && !((category._id).equals(req.params.id)) ) {
        return res.send('Name already exist')
    }
    Category.findByIdAndUpdate(req.params.id,{
        name: req.body.name
    },(err,result) => {
        if(err) res.send(err)
        res.send(result)
    })
}

exports.delete_category = (req ,res) => {
    Category.findByIdAndDelete(req.params.id,(error,result) => {
        if(error) res.send(err)
        res.status(200).send('Delete successful')
    })
}

exports.search_category = async (req ,res) => {
    let search = req.body.search;
    console.log("method search catename:" ,search)
    await Category.find({ "name": {'$regex': search} },(err,result) => {
        if(err) res.send(err)
        res.send(result)
    })
}

exports.get_a_category = (req ,res) => {
    console.log(typeof req.params.id)
    Category.findById(req.params.id ,(err ,result) => {
        if(err) res.send(err)
        res.send(result)
    })
}
