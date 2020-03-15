import React from 'react';

export default class Footer extends React.Component {

    render() {
        let length = this.props.length;
        let selectLength = this.props.selectLength;
        let listShow = this.props.listState;
        let likeLength = this.props.likeLength;
        return (
            <footer style={{
                display: length ? "block" : "none"
            }}>
                <div className="info">
                    <span className="align-right"
                        style={{
                            display: selectLength ? "inline-block" : "none"
                        }}
                    >当前选中{selectLength}首歌曲</span>
                    <span>共{length}首歌曲</span>

                </div>
                <input
                    type="button"
                    value="删除选中歌曲"
                    style={{
                        display: selectLength ? "inline-block" : "none"
                    }}
                    onClick={() => {
                        this.props.removeSelect();
                    }}
                ></input>
                <input
                    type="button"
                    value="收藏选中歌曲"
                    style={{
                        display: selectLength ? "inline-block" : "none"
                    }}
                    onClick={() => {
                        this.props.likeSelect();
                    }}
                ></input>
                <input
                    type="button"
                    value="取消选中歌曲"
                    style={{
                        display: selectLength ? "inline-block" : "none"
                    }}
                    onClick={() => {
                        this.props.cancelLikeSelect();
                    }}
                ></input>
                <input
                    type="button"
                    value="查看收藏清单"
                    style={{
                        display: (listShow && likeLength) ? "inline-block" : "none"
                    }}
                    onClick={() => {
                        this.props.showLikeList(false);
                    }}
                ></input>
                <input
                    type="button"
                    value="查看所有清单"
                    style={{
                        display: !listShow ? "inline-block" : "none"
                    }}
                    onClick={() => {
                        this.props.showLikeList(true);
                    }}
                ></input>
            </footer>
        );
    }
}