import "./style/header.css"
import React from "react";
function Acticle(props) {
    const {article_data} = props
    return (
        <>
            {
                article_data.length && article_data.map(item=>{
                    return (
                        <div className="main-article-list-item" key={item.id}>
                            <div className="main-article-list-item-top">
                                <div className="main-article-list-item-img">
                                    <img src="https://qiniu.chengzhigang.cn/jpg/ced19828a3016115e7c54b6fff2bf258.jpg" alt="" />
                                </div>
                                <div className="main-article-list-item-message">
                                    <h6>{item.title}</h6>
                                    <p>{item.describe}</p>
                                </div>
                            </div>
                            <div className="main-article-list-item-bottom">
                                <div className="main-article-list-item-bottom-left">
                                    <span>作者: {item.author}</span>
                                    <span>发布时间: {item.create_time}</span>
                                </div>
                                <div className="main-article-list-item-bottom-right">
                                    <span>浏览（{item.browse_num}）</span>
                                    <span>评论（{item.comments_num}）</span>
                                    <span>赞（{item.give_like}）</span>
                                    <span>踩（{item.step_on}）</span>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </>

    );
}
export default Acticle;