import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect
} from "react-router-dom";

export default class Comment extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            comments : [],
            search: ""
        }
    }

    componentDidMount() {
        this.loadComment()
        console.log("1111")
    }

    loadComment = async () => {
        var myHeaders = new Headers();
        myHeaders.append("Authorization", "Bearer "+localStorage.getItem("accessToken"));
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
            let response = await fetch("http://localhost:4000/api/admin/comment/search", requestOptions)
            if (response.ok) {
                let result = await response.json()
                console.log(result)
                let listComments = this.state.comments.concat(result);
                this.setState({
                    comments: listComments
                })
            }
        } catch (error) {
            console.log('error', error)
        }
    }

    selectedId = (id) => {
        this.setState({
            selectedId: id
        })
    }

    reset = () => {
        this.setState({
            comments: [],
            search: ""
        }, this.loadComment)
    }

    deleleComment = async (id) => {
        if (window.confirm('Bạn có chắc chắn muốn xóa không ?')) {
            console.log("delete "+id)
            var myHeaders = new Headers();
            myHeaders.append("Authorization", "Bearer "+localStorage.getItem("accessToken"));
    
            var requestOptions = {
                method: 'DELETE',
                headers: myHeaders,
                redirect: 'follow'
            };
    
            try {
                let response = await fetch("http://localhost:4000/api/admin/comment/"+id, requestOptions)
                if(response.ok) {
                    console.log("delete successful")
                    this.reset()
                }
            } catch (error) {
                console.log("error "+error)
            }
        } else {
            console.log('không xóa.');
        }
        
    }

    search = (e) => {
        let value = e.target.value
        this.setState({ search: value ,comments: [] }, this.loadComment)
    }

    render() {
        return (
            <>  
                <div className="page-title">
                    <div className="title_left">
                        <h3>DANH SÁCH BÌNH LUẬN</h3>
                    </div>

                    <SearchComment search={this.search} />
                </div>

                <div className="clearfix"></div>

                <div className="row" >
                    <div className="col-md-12 col-sm-12 ">
                        <div className="x_panel">
                            <div className="x_title">
                                <div className="clearfix"></div>
                            </div>
                            <div className="x_content">
                                <div className="row">
                                    <div className="col-sm-12">
                                        <div className="card-box table-responsive">
                                            <TableComment data={this.state.comments} deleteId={this.deleleComment}/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

class TableComment extends React.Component {
    render() {
        return <table className="table table-striped table-bordered">
            <thead>
                <tr>
                    <td>Id</td>
                    <td>Nội dung</td>
                    <td>Ngày tạo</td>
                    <td>Người tạo</td>
                    <td>Sản phẩm</td>
                    <td>Lựa chọn</td>
                </tr>
            </thead>
            <tbody>
            {
                this.props.data.map(item => {
                    return <tr key={item._id}>
                        <td>{item._id}</td>
                        <td>{item.content}</td>
                        <td>{item.created}</td>
                        <td>{item.user.name}</td>
                        <td>{item.product.name}</td>
                        <td>
                            <button onClick={() => this.props.deleteId(item._id)}>Xóa</button>
                        </td>
                    </tr>
                })
            }
            </tbody>
        </table>
    }
}


class SearchComment extends React.Component {
    render() {
        return <>
            <div className="title_right">
                <div className="col-md-5 csol-sm-5 col-xs-12 form-group pull-right top_search">
                    <form className="input-group">
                        <input type="text" name="search" className="form-control" placeholder="Tìm kiếm" onChange={this.props.search}/>
                        {/* <span className="input-group-btn">
                            <button className="btn btn-secondary" type="submit">Tìm kiếm</button>
                        </span> */}
                    </form>
                </div>
            </div>
        </>
    }
} 