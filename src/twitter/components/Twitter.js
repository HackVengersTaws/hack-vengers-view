import Navbar from '../../home/components/Navbar';
import React, { Component } from 'react';
import Mapa from './Mapa';
import Menu from './Menu';
import { Layout, Modal, Spin, Tabs } from 'antd';
import { BarChartOutlined, LineChartOutlined, PieChartOutlined } from '@ant-design/icons';
import axios from 'axios';
import { Bar, Line, Pie } from 'react-chartjs-2';
import ReactExport from "react-export-excel";
import '../css/Twitter.css';
const ExcelFile = ReactExport.ExcelFile;
const ExcelSheet = ReactExport.ExcelFile.ExcelSheet;
const ExcelColumn = ReactExport.ExcelFile.ExcelColumn;
const { TabPane } = Tabs;
class Twitter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      country: "",
      visible: false,
      cargando: true,
      keywords: [],
      hashtags: [],
      username: "",
      mencions: [],
      fecha_ini: "",
      fecha_fin: "",
      min_followers: 0,
      min_hashtags: 0,
      min_faves: 0,
      min_retweets: 0,
      min_replies: 0,
      labels1: [],
      data1: [],
      labels2: [],
      data2: [],
      labels3: [],
      data3: [],
      labels4: [],
      data4: [],
      labels5: [],
      data5: [],
      labels6: [],
      data6: [],
      tweets:[]
    }
  }

  handleClickModal = () => {
    this.setState({
      visible: true,
    })

    console.log({
      fecha_inicio: this.state.fecha_ini,
      fecha_fin: this.state.fecha_fin,
      hashtags: this.state.hashtags.join(),
      min_hashtags: this.state.min_hashtags,
      mencions: this.state.mencions.join(),
      keywords: this.state.keywords.join(),
      username: this.state.username,
      min_followers: this.state.min_followers,
      country: this.state.country,
      min_faves: this.state.min_faves,
      min_retweets: this.state.min_retweets,
      min_replies: this.state.min_replies,
    })
    axios.post(`http://127.0.0.1:8000/filtros/`,
      {
        fecha_inicio: this.state.fecha_ini,
        fecha_fin: this.state.fecha_fin,
        hashtags: this.state.hashtags.join(),
        min_hashtags: this.state.min_hashtags,
        mencions: this.state.mencions.join(),
        keywords: this.state.keywords.join(),
        username: this.state.username,
        min_followers: this.state.min_followers,
        country: this.state.country,
        min_faves: this.state.min_faves,
        min_retweets: this.state.min_retweets,
        min_replies: this.state.min_replies,
      })
      .then(res => {
        console.log(res)

        console.log(typeof (res.data))
        console.log(res.data)// [{tweets: , analsis:}]
        // console.log(res.data.length)
        if (res.data.length > 0) {
          var tweets =res.data[0].tweets
          var dataGeneral = res.data[0].analysis
          console.log(dataGeneral)

          //grafico 1 barras
          var dataG1 = dataGeneral.amount_count_per_year
          var keys1 = []
          var values1 = []
          for (var key in dataG1) {
            var value = dataG1[key];
            //console.log(key, value)
            keys1.push(key)
            values1.push(value)

          }
          // grafico 2 por dias
          var dataG2 = dataGeneral.mean_tweet_per_day
          var keys2 = []
          var values2 = []
          for (var key in dataG2) {
            var value = dataG2[key];
            //console.log(key, value)
            keys2.push(key)
            values2.push(value)

          }
          // grafico 3 por horas
          var dataG3 = dataGeneral.mean_tweet_per_hour
          var keys3 = []
          var values3 = []
          for (var key in dataG3) {
            var value = dataG3[key];
            //console.log(key, value)
            keys3.push(key)
            values3.push(value)

          }

          // grafico 4 por horas
          var dataG4 = dataGeneral.sentiments
          var keys4 = []
          var values4 = []
          for (var key in dataG4) {
            var value = dataG4[key];
            //console.log(key, value)
            keys4.push(key)
            values4.push(value)

          }

          // grafico 4 por horas
          var dataG5 = dataGeneral.top_hashtag
          var keys5 = []
          var values5 = []
          for (var key in dataG5) {
            var value = dataG5[key];
            //console.log(key, value)
            keys5.push(key)
            values5.push(value)

          }

          // grafico 4 por horas
          var dataG6 = dataGeneral.top_mencions
          var keys6 = []
          var values6 = []
          for (var key in dataG6) {
            var value = dataG6[key];
            //console.log(key, value)
            keys6.push(key)
            values6.push(value)

          }

          this.setState({
            cargando: false,
            labels1: keys1,
            data1: values1,
            labels2: keys2,
            data2: values2,
            labels3: keys3,
            data3: values3,
            labels4: keys4,
            data4: values4,
            labels5: keys5,
            data5: values5,
            labels6: keys6,
            data6: values6,
            tweets:tweets
          })
        } else {
          this.setState({
            cargando: false,
            visible: false,
            country: "",
            keywords: [],
            hashtags: [],
            username: "",
            mencions: [],
            fecha_ini: "",
            fecha_fin: "",
            min_followers: 0,
            min_hashtags: 0,
            min_faves: 0,
            min_retweets: 0,
            min_replies: 0,
            labels1: [],
            data1: [],
            labels2: [],
            data2: [],
            labels3: [],
            data3: [],
            labels4: [],
            data4: [],
          })
        }
      })




  }

  handleChangeMap = (value) => {
    console.log(value)
    this.setState({
      country: value.getAttribute("name")
    })
  }

  handleChangePalabras = (value) => {
    this.setState({
      keywords: value
    })
  }

  handleChangeHashtag = (value) => {
    this.setState({
      hashtags: value
    })
  }
  handleChangeUser = (e) => {
    console.log(e)
    this.setState({
      username: e.target.value
    })
  }
  handleChangeMenciones = (value) => {
    this.setState({
      mencions: value
    })
  }
  handleChangePais = (value) => {
    this.setState({
      country: value
    })

  }
  handleChangeDate = (value, str) => {
    this.setState({
      fecha_ini: str[0],
      fecha_fin: str[1]
    })
  }
  handleChangeMinSeg = (value) => {
    this.setState({
      min_followers: value
    })
  }
  handleChangeMinHash = (value) => {
    this.setState({
      min_hashtags: value
    })
  }
  handleChangeMinFav = (value) => {
    this.setState({
      min_faves: value
    })
  }
  handleChangeMinRet = (value) => {
    this.setState({
      min_retweets: value
    })
  }
  handleChangeMinRes = (value) => {
    this.setState({
      min_replies: value
    })
  }
  render() {
    console.log(this.state)
    return (
      <>
      <Navbar/>

      <Layout>
        <Menu
          handleClickModal={this.handleClickModal}
          handleChangePalabras={this.handleChangePalabras}
          handleChangeHashtag={this.handleChangeHashtag}
          handleChangeUser={this.handleChangeUser}
          username={this.state.username}
          handleChangeMenciones={this.handleChangeMenciones}
          handleChangePais={this.handleChangePais}
          country={this.state.country}
          handleChangeDate={this.handleChangeDate}
          handleChangeMinSeg={this.handleChangeMinSeg}
          handleChangeMinHash={this.handleChangeMinHash}
          handleChangeMinFav={this.handleChangeMinFav}
          handleChangeMinRet={this.handleChangeMinRet}
          handleChangeMinRes={this.handleChangeMinRes}
        />

        <Mapa
          handleChangeMap={this.handleChangeMap}
        />

        <Modal
          title={"Gráficos - " + this.state.country}
          centered
          footer={!this.state.cargando && [
             <ExcelFile>
                    <ExcelSheet data={this.state.tweets} name="tweets">
                      <ExcelColumn label="country" value="country" />
                      <ExcelColumn label="create_count" value="create_count" />
                      <ExcelColumn label="create_count_year" value="create_count_year" />
                      <ExcelColumn label="day" value="day" />
                      <ExcelColumn label="day_name" value="day_name" />
                      <ExcelColumn label="favorite_count" value="favorite_count" />
                      <ExcelColumn label="fecha" value="fecha" />
                      <ExcelColumn label="followers" value="followers" />
                      <ExcelColumn label="friends" value="friends" />
                      <ExcelColumn label="full_name_place" value="full_name_place" />
                      <ExcelColumn label="hashtags" value="hashtags" />
                      <ExcelColumn label="hora" value="hora" />
                      <ExcelColumn label="language" value="language" />
                      <ExcelColumn label="longuitud" value="longuitud" />
                      <ExcelColumn label="mencions" value="mencions" />
                      <ExcelColumn label="name_place" value="name_place" />
                      <ExcelColumn label="num_hashtags" value="num_hashtags" />
                      <ExcelColumn label="num_mencions" value="num_mencions" />
                      <ExcelColumn label="retweet_count" value="retweet_count" />
                      <ExcelColumn label="sentimiento" value="sentimiento" />
                      <ExcelColumn label="texto" value="texto" />
                      <ExcelColumn label="username" value="username" />
                    </ExcelSheet>
                  </ExcelFile>
          ]}
          visible={this.state.visible}
          onOk={() => {
            this.setState({ visible: false, cargando: true })
          }}
          onCancel={() => this.setState({ visible: false, cargando: true })}
          width={1000}
          cancelButtonProps={{ style: { display: 'none' } }}
          //okText="Descargar"
          okButtonProps={{ style: { display: 'none' } }}
        >
          <Spin tip="Cargando..." size="large" spinning={this.state.cargando} />
          {!this.state.cargando &&
            <Tabs defaultActiveKey="1" style={{ width: "100%" }}>
              <TabPane
                tab={
                  <span>
                    <BarChartOutlined />
                    Cantidad de cuentas por tweet según su creación
              </span>
                }
                key="1"
              >
                <Bar
                  data={{
                    labels: this.state.labels1,
                    datasets: [
                      {
                        label: "Cantidad de cuentas por tweet según su creación",
                        backgroundColor: '#36A2EB',
                        hoverBackgroundColor: '#36A2EB',
                        data: this.state.data1
                      }
                    ]
                  }}
                  width={100}
                  height={50}
                />
              </TabPane>
              <TabPane
                tab={
                  <span>
                    <BarChartOutlined />
                        Top 10 de los hashtags mas frecuentes
                  </span>
                }
                key="2"
              >
                <Bar
                  data={{
                    labels: this.state.labels5,
                    datasets: [
                      {
                        label: "Top 10 de los hashtags mas frecuentes",
                        backgroundColor: '#36A2EB',
                        hoverBackgroundColor: '#36A2EB',
                        data: this.state.data5
                      }
                    ]
                  }}
                  width={100}
                  height={50}
                />
              </TabPane>
              <TabPane
                tab={
                  <span>
                    <BarChartOutlined />
                        Top 10 de los menciones mas frecuentes
                  </span>
                }
                key="3"
              >
                <Bar
                  data={{
                    labels: this.state.labels6,
                    datasets: [
                      {
                        label: "Top 10 de los menciones mas frecuentes",
                        backgroundColor: '#36A2EB',
                        hoverBackgroundColor: '#36A2EB',
                        data: this.state.data6
                      }
                    ]
                  }}
                  width={100}
                  height={50}
                />
              </TabPane>
              <TabPane
                tab={
                  <span>
                    <LineChartOutlined />
                        Cantidad promedio de tweets por hora
                  </span>
                }
                key="4"
              >
                <Line
                  data={{
                    labels: this.state.labels3,
                    datasets: [
                      {
                        label: 'Cantidad promedio de tweets por hora',
                        fill: false,
                        lineTension: 0.1,
                        backgroundColor: 'rgba(75,192,192,0.4)',
                        borderColor: '#36A2EB',
                        borderCapStyle: 'butt',
                        borderDash: [],
                        borderDashOffset: 0.0,
                        borderJoinStyle: 'miter',
                        pointBorderColor: '#36A2EB',
                        pointBackgroundColor: '#fff',
                        pointBorderWidth: 1,
                        pointHoverRadius: 5,
                        pointHoverBackgroundColor: '#36A2EB',
                        pointHoverBorderColor: 'rgba(220,220,220,1)',
                        pointHoverBorderWidth: 2,
                        pointRadius: 1,
                        pointHitRadius: 10,
                        data: this.state.data3
                      }
                    ]
                  }}
                />
              </TabPane>
              <TabPane
                tab={
                  <span>
                    <BarChartOutlined />
                        Cantidad promedio de tweets por días
                  </span>
                }
                key="5"
              >
                <Bar
                  data={{
                    labels: this.state.labels2,
                    datasets: [
                      {
                        label: "Cantidad promedio de tweets por días",
                        backgroundColor: '#36A2EB',
                        hoverBackgroundColor: '#36A2EB',
                        data: this.state.data2
                      }
                    ]
                  }}
                  width={100}
                  height={50}

                />
              </TabPane>
              <TabPane
                tab={
                  <span>
                    <PieChartOutlined />
                        Analisís de sentimiemtos
                  </span>
                }
                key="6"
              >
                <Pie data={{
                  labels: this.state.labels4,
                  datasets: [{
                    data: this.state.data4,
                    backgroundColor: [
                      '#FF6384',
                      '#36A2EB',
                      '#FFCE56'
                    ],
                    hoverBackgroundColor: [
                      '#FF6384',
                      '#36A2EB',
                      '#FFCE56'
                    ]
                  }]
                }
                } />
              </TabPane>
            </Tabs>
          }
        </Modal>
      </Layout>
      </>
    );
  }
}

export default Twitter;