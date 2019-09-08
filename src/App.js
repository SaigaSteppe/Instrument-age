import React from 'react';
import "antd/dist/antd.css";
import Home from './components/Home';
import SubmitForm from './components/SubmitForm';
import { Layout, Menu, Button } from 'antd';
import {BrowserRouter, Route, Link, Redirect} from 'react-router-dom';

const { Footer } = Layout;

function App() {
  return (
    <div>
      <BrowserRouter>

      <div >
        <Menu>
        <div style={{float:'center', textAlign:'center'}}>

          <Link to='/'>
          <Button
          style={{
            backgroundColor: 'transparent',
            border: 'none', /* Remove borders */
            color: 'black',
            fontSize: '50px', /* Set a font size */
            cursor: 'pointer', /* Mouse pointer on hover */
            height:`10%`,
            boxShadow:'none',
            marginBottom:15

          }}>
            Instrument Age
          </Button>
          </Link>
          </div>
         <br/>
          <p style={{textAlign:'center'}}>When did you learn to play an instrument?</p>

        <span style={{float:'right', marginBottom:5}}>
        <Link to='/submit'>
          <Button type="primary">Make a submission</Button>
        </Link>
        </span>

        </Menu>

        <hr style={{borderColor:'#1890ff' ,borderStyle: 'outset',borderWidth: '9px',margin: 0}}/>
  

      </div>
      <Layout >
    
      <Route exact path='/' component={Home}/>
      <Route path='/submit' component={SubmitForm}/>
      <Redirect from='/' to='/' />{/*redirect to home page for undefined urls*/} 


      <Footer style={{ textAlign: 'center', bottom: 5, width:`100%`}}>
        Developed by <a href='https://saigasteppe.github.io/' style={{color: 'inherit'}}>Saigasteppe</a>
        </Footer>
      </Layout>


     
      </BrowserRouter>
    </div>
  );
}

export default App;
