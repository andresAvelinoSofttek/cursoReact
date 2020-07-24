import React from 'react';
import { Container, Row, Col } from 'react-bootstrap'
import {BrowserRouter, Route, Link} from 'react-router-dom'
import QuoteContainer from '../QuoteContainer'
import DailyQuote from '../DailyQuote'
//import PolizaContainer from '../PolizaContainer'
//import ClaimContainer from '../ClaimContainer'
//import NamesList from '../NamesList'
//import TotalAmount from '../TotalAmount'
//import ClaimList from '../ClaimList'
//import UserList from '../UserList'

import './app.css'

class App extends React.Component{
 
    render(){
        return(
            <Container>

                <BrowserRouter>
                <Row className="justify-content-md-center" >
{/*                         <h2 >
                             <Badge variant="primary">Frases Célebres</Badge>{' '}
                        </h2> */}
                        <img 
                            src={require('./inspiracio.jpg')} 
                            alt="Frases célebres" 

                        /> 
                </Row>
                <Row>

                    <Col>
                        <Link to="/"><button className="btn btn-outline-secondary">La frase del día</button></Link>
                        <Link to="/Daily"><button className="btn btn-outline-secondary">Lista de Frases</button></Link> 
                        <Route path="/" exact component={DailyQuote}></Route>
                        <Route path="/Daily" component={QuoteContainer}></Route>
                    </Col>
{/*                     <Col>
                        <Row>
                            <NamesList/>
                        </Row>
                        <Row>
                            <TotalAmount/>
                        </Row>
                        <Row>
                            <ClaimList/>
                        </Row>
                    </Col> */}
                </Row>
                </BrowserRouter>

            </Container>
        )
    }

}
export default App
