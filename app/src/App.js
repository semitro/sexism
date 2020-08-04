import React from 'react';
import connect from '@vkontakte/vkui-connect';
import {PanelSpinner, ScreenSpinner, View} from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';

import Home from './panels/Home';
import Piska from './panels/Piska';
import Persik from './panels/Persik';
import Vagina from "./panels/Vagina";

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            activePanel: 'spinner',
            fetchedUser: null,
        };
    }

    componentDidMount() {
        connect.subscribe((e) => {
            switch (e.detail.type) {
                case 'VKWebAppGetUserInfoResult':
                    console.log(e);
                    this.setState({
                            fetchedUser: e.detail.data,
                            activePanel: e.detail.data.sex === 2 ? "piska" : "vagina"
                        }
                    );
                    console.log(this.state);
                    break;
                default:
                    console.log('Got type ' + e.detail.type);
            }
        });
        connect.send('VKWebAppGetUserInfo', {});
    }

    go = (e) => {
        this.setState({activePanel: e.currentTarget.dataset.to})
    };

    render() {
        return (
            <View activePanel={this.state.activePanel}>
                <Piska id="piska"></Piska>
                <Vagina id="vagina"></Vagina>
                <PanelSpinner id="spinner"></PanelSpinner>
            </View>
        );
    }

}

export default App;
