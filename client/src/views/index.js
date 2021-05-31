import React, { useState,useEffect } from 'react';
import {requestIndex} from "../api/http"
import Acticle from "../components/Acticle";
import { Pagination } from 'antd';
import "./style/index.css"
import Login from "../components/Login";
function  Home(){
    const [article_data, setArticleData] = useState([])
    const [current, setCurrent] = useState(1)
    const [pageSize,setPageSize] = useState(5)
    useEffect(() => {
        let obj={
            page:1,
            pagesize: pageSize
        }
        requestIndex(obj).then(res=>{
            setArticleData(res)
        })
    }, []);
    const onChangePage=(page,size)=>{
        let obj={
            page,
            pagesize:pageSize
        }
        requestIndex(obj).then(res=>{
            setArticleData(res)
            setCurrent(page)

        })
    }

    return (
        <div className="main">
            <div className="main-article">
                <h6 className="main-article-title">最新博文</h6>
                <div className="main-article-list">
                    {article_data.results && <Acticle article_data={article_data.results}  />}
                    <Pagination
                        current={current}
                        total={article_data.count}
                        pageSize={pageSize}
                        onChange={onChangePage.bind(this)}/>
                </div>
            </div>
        </div>
    )
}
export default Home;