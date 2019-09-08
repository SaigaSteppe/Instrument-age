import React from 'react'
import { Card, Statistic, Row, Col, Typography } from 'antd';
const { Text } = Typography;

function InstrumentCard(props) {
    return (
        <div style={{ paddingTop: `5%` }}>
            {
            <Card title={props.instrument.name} style={{ width: 300 }}>
            <p><b>Average starting age: </b>{props.instrument.average_start_age.toFixed(2)}</p>
            <p><b>Submissions: </b>{props.instrument.count}</p>

            <Text mark>{props.instrument.type}</Text>

          </Card>
            }

{/*Alternative
    
            <Card title={props.instrument.name} style={{ width: 300 }}>

                <Row gutter={16}>

                    <Col span={14}>
                        <Statistic title="Average starting age" value={props.instrument.average_start_age}/>
                    </Col>

                    <Col span={10}>
                        <Statistic title="Submissions" value={props.instrument.count} />
                    </Col>

                </Row>
                <br />
                <Text mark>{props.instrument.type}</Text>

</Card>*/}

            
        </div>
    )
}

export default InstrumentCard