import React, { useEffect } from 'react'
import { Container, Row, Col, Button, Card} from 'react-bootstrap'
import { connect } from 'react-redux'
import {createQuote} from '../../Actions'
import {deleteQuote} from '../../Actions'
import {getDailyQuote} from '../../Actions'

import './dailyQuote.css';


const DailyQuote = (props) => {

    const quoteRef = React.createRef()
    const authortRef = React.createRef()
    const noteRef = React.createRef()
    const imageRef = React.createRef()

    useEffect(()=>{
        console.log('didmount')
        props.getDailyQuote()
        handlerDailyQuote()
    },[] )

    const handlerDailyQuote = () => {
        //props.getDailyQuote()
        console.log('Obteniendo la frase del día')
        console.log('elemnt 0: ',props.quotes)
        const myArray  = props.quotes
        let size = myArray.length
        let i = Math.floor(Math.random() * size)

        console.log('elemnt 0: ',myArray.length)
        
        console.log('elemnt 0: ',myArray[i].author)

        authortRef.current.innerText = myArray[i].author
        quoteRef.current.innerText = myArray[i].quote
        noteRef.current.innerText = myArray[i].note
        const myArray2 = props.newQuote
        console.log('Array 2: ',myArray2)
        size = myArray2.length
        console.log('Array 2 lengt: ',size)
        //if(myArray2 && myArray2.urls && myArray2.urls.thumb){
         if(size === 0){
            console.log('Aun no hay imagenes');
        }
        else{
            i = Math.floor(Math.random() * size+1)
            console.log('mmm' )
            imageRef.current.src = myArray2[i].urls.thumb 
            // if(myArray2[i].urls === undefined){
            // }else{
            //     imageRef.current.src = myArray2[i].urls.thumb 
            // }
            //imageRef.current.src = myArray2[i].urls.thumb           
        } 

    }



        return(
            <Container>
                <Row>   
                    <Col>
                        <h3>Frase del día </h3> 
                    </Col>
                    <Col>
{/*                         <img 
                            src={require('./get-a-quote.jpg')} 
                            className="logo-button" 
                            alt="get a new quote" 
                            onClick= "handlerDailyQuote()"

                        /> */}
                        <Button variant="secondary" onClick={handlerDailyQuote}>Get a quote</Button>
                    </Col>
                    
                </Row>
                <Row className="justify-content-md-center">

                        <Card className="mycard">
                            <Card.Body>
                                <Card.Img ref={imageRef} src="https://images.unsplash.com/photo-1494459940152-1e911caa8cc5?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&ixid=eyJhcHBfaWQiOjE0ODYzNH0" alt="Card image" />
                                <Card.ImgOverlay>
                                    <Card.Title ref={authortRef}>Ernest Hemingway</Card.Title>
                                    <Card.Subtitle ref={noteRef} className="mb-2 text-muted">Escritor Norteaméricano</Card.Subtitle>
                                    <Card.Text ref={quoteRef}>
                                        Jamás piensen que una guerra, por necesaria o justificada que parezca, deja de ser un crimen.
                                    </Card.Text>
                                </Card.ImgOverlay>
                            </Card.Body>
                        </Card>

                </Row>
            </Container>
        )
    

}

const mapStateToProps = (state) => {
    return {
        quotes: state.listQuotes,
        newQuote: state.newQuote
    }
}

export default connect(mapStateToProps, {createQuote,deleteQuote,getDailyQuote})(DailyQuote) 
