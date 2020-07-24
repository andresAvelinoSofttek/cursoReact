import React from 'react'
import { Container } from 'react-bootstrap'
import {connect} from 'react-redux'
import './quoteLit.css'

const QuoteList = (props) => {

    return (
        <Container>
            {
                props.list.map((quote) => {
                    return (

                        <div className='contenedor' key = {quote.note} >
                            <div className='frase'>
                                {quote.quote}
                            </div>

                            <div className='autor'>
                                {quote.author}
                            </div>


                            <div className='nota'>
                                {quote.note}
                            </div>

                        </div>
                    
                    )
                })
            }
        </Container>
    )
}

const mapStateToProps = (state) => {
    return {
        list: state.listQuotes
    }
}

export default connect(mapStateToProps)(QuoteList)