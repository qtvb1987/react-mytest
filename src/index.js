import React from 'react';
import ReactDOM from 'react-dom';
import Header from './header';
import Main from './main';
import Footer from './footer'
/* 
  header
  main
  footer
*/

/* 
    [
        {
        title："空白格",
        singer:"蔡健雅",
        selected:false,
        like:false
        }
    ]
*/
class App extends React.Component {
    constructor() {
        super(...arguments);
        this.state = {
            listState: true,
            data: [
                {
                    title: "空白格",
                    singer: "蔡健雅",
                    selected: true,
                    like: false
                },
                {
                    title: "空白格222",
                    singer: "蔡健雅222",
                    selected: true,
                    like: false
                }
                , {
                    title: "空白格333",
                    singer: "蔡健雅33",
                    selected: true,
                    like: true
                }
                , {
                    title: "空白格444",
                    singer: "蔡健雅444",
                    selected: true,
                    like: false
                }
            ]
        };
        this.add = this.add.bind(this);
        // this.isCheckAll = this.isCheckAll.bind(this);
        this.setCheckAll = this.setCheckAll.bind(this);
        this.setCheck = this.setCheck.bind(this);
        this.setLike = this.setLike.bind(this);
        this.remove = this.remove.bind(this);

    }
    add(title, singer) {
        let data = this.state.data;
        data.push({
            title: title,
            singer: singer,
            selected: false,
            like: false
        });
        this.setState({
            data
        })

    }
    isCheckAll() {
        let data = this.state.data;
        for (var i = 0; i < data.length; i++) {
            if (!data[i].selected) {
                return false;
            }
        }
        return true;
    }
    setCheckAll(checked) {
        let data = this.state.data.map((val) => {
            val.selected = checked;
            return val;
        });
        this.setState({
            data
        })
    }
    setCheck(index, checked) {
        let data = this.state.data;
        data[index].selected = checked;
        this.setState({
            data
        })
    }
    setLike(index, checked) {
        let data = this.state.data;
        data[index].like = checked;
        this.setState({
            data
        })
    }
    remove(index) {
        let data = this.state.data.filter((v, i) => i !== index);

        this.setState({
            data
        })
    }
    render() {
        let data = this.state.data;
        let selectData = data.filter((val) => val.selected);
        let likeData = data.filter((val) => val.like);
        return (
            <div id="musicApp">
                <Header
                    add={this.add}
                />
                <Main
                    data={data}
                    isCheckAll={this.isCheckAll()}
                    checkAll={this.setCheckAll}
                    setCheck={this.setCheck}
                    setLike={this.setLike}
                    remove={this.remove}
                />
                <Footer
                    length={data.length}
                    selectLength={selectData.length}
                    listState={this.state.listState}
                    likeLength={likeData.length}
                />
            </div>
        )
    }
}
ReactDOM.render(
    <App />,
    document.getElementById('root'));


