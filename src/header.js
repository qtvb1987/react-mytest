import React from 'react';

export default class Header extends React.Component {
    constructor() {
        super(...arguments);
        this.state = {
            title: "",
            singer: ""
        }
    }
    render() {
        return (
            <header>
                <h2 className="title">播放列表</h2>
                <input
                    type="text"
                    placeholder="输入歌曲名字"
                    value={this.state.title}
                    onChange={(e) => {
                        this.setState({
                            title: e.target.value
                        })
                    }}
                ></input>
                <input
                    type="text"
                    placeholder="输入歌手名字"
                    value={this.state.singer}
                    onChange={(e) => {
                        this.setState({
                            singer: e.target.value
                        })
                    }}
                ></input>
                <input
                    type="button"
                    value="添加音乐"
                    onClick={() => {
                        console.log(this.state)
                        this.props.add(this.state.title, this.state.singer)
                    }}
                ></input>
            </header>
        );
    }
}