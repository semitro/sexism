import React from 'react';
import PropTypes from 'prop-types';
import {Panel, List, Button, Group, Div, Avatar, PanelHeader, Slider, Gallery} from '@vkontakte/vkui';

const Piska = ({id}) => (
    <Panel id={id}>
        <PanelHeader>Поздравляю, МУЖИКИ!!!</PanelHeader>
        <Gallery bullets={"light"} align={"center"}  style={{ height: 500 }}>
            <img height="100%" width="100%" style={{'object-fit': 'none'}}
                 src='https://bigpicture.ru/wp-content/uploads/2015/09/zah6.jpg'/>
            <img height="100%" width="100%" style={{'object-fit': 'none'}}
                 src='https://kaifolog.ru/uploads/posts/2014-05/1400645635_002.jpg'/>
            <img height="100%" width="100%" style={{'object-fit': 'none'}}
                 src='https://lh6.googleusercontent.com/proxy/0y8U-yzgss9auFuleJo-WZzUL_xap9RwzPhZR8opmo0wN917u-TagFM3rwJCwFfR7QXg76y9eXI1Uram1s7Up8vX9BdRzheySi6JiWwFXXVg955WnvIrO06yv6-aqy3bBImwUFYp'/>
            <img height="100%" width="100%" style={{'object-fit': 'none'}}
                 src='https://www.mk.ru/upload/entities/2019/08/02/17/photoreportsImages/detailPicture/4a/5e/96/8f/5452271_5142511.jpg'/>
            <img height="100%" width="100%" style={{'object-fit': 'none'}}
                 src='https://www.meme-arsenal.com/memes/459462afbd7dcf8cf69af3c32eab9bfb.jpg'/>
        </Gallery>
    </Panel>
);


export default Piska;
