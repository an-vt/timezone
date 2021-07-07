import React from 'react'
import { withRouter } from 'react-router-dom';

class EditProduct extends React.Component {
    constructor(props) {
        super(props)

        let { match } = this.props
        let { id } = match.params

        console.log("id ",id)

        this.state = {
            "id": id,
            "name": "",
            "quantity": "",
            "price": "",
            "image": "",
            "description": "",
            "idCategory": "",
            file: null,
            categories: [],
            search: ""
        }

    }

    componentDidMount() {
        console.log("5555")
        console.log(this.state.id)
        if (this.state.id) {
            this.loadCategory();
            this.loadProduct()
        }

    }

    setParams = (event) => {
        this.setState({ [event.target.name]: event.target.value })
    }

    setFile = (event) => {
        let file = event.target.files[0]
        if (file != null) {
            this.setState({ file })
        }
    }


    loadCategory = async () => {
        var myHeaders = new Headers();
        myHeaders.append("Authorization", "Bearer "+localStorage.getItem('accessToken'));
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({
          "search": this.state.search
        });
        
        var requestOptions = {
          method: 'POST',
          headers: myHeaders,
          body: raw,
          redirect: 'follow'
        };

        try {
            let response = await fetch("http://localhost:4000/api/admin/category/search", requestOptions)
            if (response.ok) {
                let result = await response.json()
                this.setState({
                    categories: result
                })
            }
        } catch (error) {
            console.log('error', error)
        }
    }

    loadProduct = async () => {
        console.log("load C")
        var myHeaders = new Headers();
        myHeaders.append("Authorization", "Bearer " + localStorage.getItem("accessToken"));

        var requestOptions = {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow'
        };

        try {
            let response = await fetch("http://localhost:4000/api/admin/product/"+this.state.id, requestOptions)
            if (response.ok) {
                let result = await response.json()
                console.log("load product ",result)
                this.setState({
                    "name": result.name,
                    "quantity": result.quantity,
                    "price": result.price,
                    "image": result.image,
                    "description": result.description,
                    "idCategory": result.category._id
                })
            }
        } catch (error) {
            console.log('error', error)
        }
    }

    editProduct = async () => {
        console.log(this.state)
        var myHeaders = new Headers();
        myHeaders.append("Authorization", "Bearer " + localStorage.getItem("accessToken"));


        var formdata = new FormData();
        formdata.append("id", this.state.id);
        formdata.append("name", this.state.name);
        formdata.append("quantity", this.state.quantity);
        formdata.append("price", this.state.price);
        formdata.append("image", this.state.image);
        formdata.append("description", this.state.description);
        formdata.append("idCategory", this.state.idCategory);
        if(this.state.file) {
            console.log('co update anh')
            formdata.append("file", this.state.file, this.state.file.name);
        }else {
            console.log('ko update anh')
        }


        var requestOptions = {
            method: 'PUT',
            headers: myHeaders,
            body: formdata,
            redirect: 'follow'
        };

        try {
            let response = await fetch("http://localhost:4000/api/admin/product/"+this.state.id, requestOptions)
            if (response.ok) {
                let result = await response.json()
                console.log(result)
                let { history } = this.props
                history.goBack()
            }
        } catch (error) {
            console.log(error)
            alert('Sản phẩm đã tồn tại')
        }


    }

    render() {
        return <>
            <span className="section">Thông tin sản phẩm</span>
            <div className="field item form-group">
                <label className="col-form-label col-md-3 col-sm-3  label-align">Tên sản phẩm<span className="required">*</span></label>
                <div className="col-md-6 col-sm-6">
                    <input onChange={this.setParams} value={this.state.name} className="form-control" name="name" required="required" />
                </div>
            </div>
            <div className="field item form-group">
                <label className="col-form-label col-md-3 col-sm-3  label-align">Số lượng<span className="required">*</span></label>
                <div className="col-md-6 col-sm-6">
                    <input onChange={this.setParams} value={this.state.quantity} className="form-control" name="quantity" type="text" />
                </div>
            </div>
            <div className="field item form-group">
                <label className="col-form-label col-md-3 col-sm-3  label-align">Giá<span className="required">*</span></label>
                <div className="col-md-6 col-sm-6">
                    <input onChange={this.setParams} value={this.state.price} className="form-control" name="price" required="required" type="text" />
                </div>
            </div>
            <div className="field item form-group">
                <label className="col-form-label col-md-3 col-sm-3  label-align">Mô tả<span className="required">*</span></label>
                <div className="col-md-6 col-sm-6">
                    <input onChange={this.setParams} value={this.state.description} className="form-control" type="text" name="description" />
                </div>
            </div>
            <div className="field item form-group">
                <label className="col-form-label col-md-3 col-sm-3  label-align">Ảnh sản phẩm<span className="required">*</span></label>
                <div className="col-md-6 col-sm-6">
                    <img style={{ width: "80px" }} src={"http://localhost:4000/api/download/"+this.state.image} />
                    <input onChange={this.setFile} className="form-control" type="file" name="file" accept="image/*" />
                </div>
            </div>
            <div className="field item form-group">
                <label className="col-form-label col-md-3 col-sm-3  label-align">Loại sản phẩm<span className="required">*</span></label>
                <div className="col-md-6 col-sm-6">
                    <select name="idCategory" value={this.state.idCategory} onChange={this.setParams}>
                        {this.state.categories.map(category => {
                            return <option key={category._id} value={category._id}>{category.name}</option>
                        })}
                    </select>
                </div>
            </div>
            <div className="ln_solid">
                <div className="form-group">
                    <div className="col-md-6 offset-md-3">
                        <button type="button" onClick={this.editProduct} className="btn btn-primary">Cập nhật sản phẩm</button>
                    </div>
                </div>
            </div>
        </>
    }

}

export default withRouter(EditProduct)
