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
            data: [
                {
                    title: "空白格",
                    singer: "蔡健雅",
                    selected: false,
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
                    selected: false,
                    like: true
                }
                , {
                    title: "空白格444",
                    singer: "蔡健雅444",
                    selected: false,
                    like: false
                }
            ]
        }
    }
    render() {
        return (
            <div id="musicApp">
                <Header />
                <Main
                    data={this.state.data} />
                <Footer />
            </div>
        )
    }
}
ReactDOM.render(
    <App />,
    document.getElementById('root'));


