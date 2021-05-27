import React, { useState,useEffect } from 'react';
import {requestIndex} from "../api/http"
import Acticle from "../components/Acticle";
import "./style/index.css"
function  Home(){
    const [article_data, setArticleData] = useState([])
    useEffect(() => {
        requestIndex().then(res=>{
            setArticleData(res)
        })
    }, []);
    return (
        <div className="main">
            <div className="main-article">
                <h6 className="main-article-title">最新博文</h6>
                <div className="main-article-list">
                    <Acticle article_data={article_data}  />
                </div>
            </div>
        </div>
    )
}
export default Home;