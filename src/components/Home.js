import React, { Component } from 'react'
import InstrumentCard from './InstrumentCard'
import axios from 'axios'
import { Col, Row, Typography, Spin } from 'antd';

const { Title } = Typography;

class Home extends Component {

    state = {
        popularInstruments: [],
        loaded: false

    }

    //after first render, get popular instrument posts
    componentDidMount() {

        axios.get('https://instrumentageapi.tk/instrument_start_age')

            .then(response => { this.setState({ 
                popularInstruments: response.data ,
                loaded: true
            }) })

            .catch(function (err) {
                console.log(err)
            })
    }

    render() {

        return (

            <div 
            style={{ 
                justifyContent: 'center', 
                margin: 20 ,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center'
            }}>
            
            {!this.state.loaded && <Spin/>}
            
                <Row>
                {this.state.loaded && <Title level={2} style={{textAlign:'left'}}>Popular</Title>}

                    {this.state.popularInstruments.map(i =>
                    
                        <Col xs={{ span: 24}} sm={{span:12}} md= {{span: 9}} lg={{ span: 6}} key={i.instrument_id}>

                            <InstrumentCard
                                instrument={i} />

                        </Col>
                    )}

                </Row>

            </div>
        );
    }
}


export default Home;