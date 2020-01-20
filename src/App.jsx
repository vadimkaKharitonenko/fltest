import React, { Component } from 'react'
import './App.css';

import Card from './components/card/Card';

export default class App extends Component {
  render() {
    return (
      <section className={`app`}>
        <div className={`app__grid`}>
          <Card 
            title={`Мы объявляем ценопад!`}
            description={'Невероятно низкие цены на самогонные аппараты только для своих!'}
            linkText={`Читать`} 
            date={`11.11.2019`} 
            tag={`акции`} 
          />
          <Card 
            title={`Мы объявляем ценопад!`}
            description={'Невероятно низкие цены на самогонные аппараты только для своих!'}
            linkText={`Читать`} 
            date={`11.11.2019`} 
            tag={`акции`}
          />
          <Card 
            bubbleColor={`is-purple`}
            title={`Мега обзор Малиновка Капитан PRO 20Л`}
            likes={15}
            company={`СамогонУрал`}
            linkText={`Смотреть`} 
            tag={`обзоры`}
          />
          <Card 
            bubbleColor={`is-purple`}
            title={`Мега обзор Малиновка Капитан PRO 20Л`}
            likes={15}
            company={`СамогонУрал`}
            linkText={`Смотреть`} 
            tag={`обзоры`}
          />
        </div>
      </section>
    )
  }
}
