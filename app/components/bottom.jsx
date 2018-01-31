
require('./bottom.css');
import React from 'react';

let Bottom = React.createClass({
    getInitialState: function () {
        return {
            tools: [
                { text: "首页", className: "icon-home", link: "https://github.com/moveondo/" },
                { text: "物流", className: "icon-deliver", link: "https://github.com/moveondo/" },
                { text: "购物车", className: "icon-cart", link: "https://github.com/moveondo/" },
                { text: "我的", className: "icon-my", link: "https://github.com/moveondo/" },
                { text: "更多", className: "icon-more", link: "https://github.com/moveondo/" }
            ]
        }
    },
    componentDidMount: function () {

      
    },
    render: function () {
        
        return (
            <div id="bottom-tool">             
                {
                    this.state.tools.map((tool) => {
                        return <div className="tool-item" key={"b" + tool.className}>
                            <a href={tool.link}>
                             <div className="text">{tool.text}</div>
                            </a>
                        </div>
                            
                     
                            
                        
                    })
                }             
           </div >
        );
    }
})

module.exports = Bottom;