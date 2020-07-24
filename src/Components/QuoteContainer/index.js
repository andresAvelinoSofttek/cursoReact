import React from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'

import { connect } from 'react-redux'
import {createQuote} from '../../Actions'
import {deleteQuote} from '../../Actions'

import QuoteList from '../QuoteList'



//import {createPolicy} from '../../Actions'
//import {deletePolicy} from '../../Actions'

//class PolizaContainer extends React.Component{
const QuoteContainer = (props) => {

    const quoteRef = React.createRef()
    const authortRef = React.createRef()
    const noteRef = React.createRef()

    const handlerCreate = () => {
        console.log('agregando frase')
        console.log('quoteRef',quoteRef.current.value)
        console.log('authortRef',authortRef.current.value)
        const frase = quoteRef.current.value
        const autor = authortRef.current.value
        const note = noteRef.current.value
        props.createQuote(frase, autor, note)
        console.log('props quotes', props.quotes)
    }

/*     const handleDelete = () => {
        console.log('Borrando frase')
        const frase = quoteRef.current.value
        props.deleteQuote(frase)
        console.log('props', props.quotes)
    } */

        return(
            <Container>
                <Row><h3>Agrega una frase</h3></Row>
                

                    <form>
                        {/* <FormGroup col-md-2> */}
                        <Row>
                        <Col>
                            <label htmlFor="nombre">Frase :</label>
                            <input type="text" className="form-control" id="Frase" ref={quoteRef}></input>
                            <small className = "form-text text-muted">Nombre del cliente</small>
                        </Col>
                        <Col>
                            <label htmlFor="monto">Autor :</label>
                            <input type="text" className="form-control" id="Autor" ref={authortRef}></input>
                            <small className = "form-text text-muted">Monto de la poliza</small>
                        </Col>
                        <Col>
                            <label htmlFor="note">Nota :</label>
                            <input type="text" className="form-control" id="note" ref={noteRef}></input>
                            <small className = "form-text text-muted">Notas sobre la frase</small>
                        </Col>
                        </Row>
                        {/* </FormGroup> */}
                    </form>

                
                
                <Row>
                    <Col>
                        <Button onClick={handlerCreate}>
                            Agregar Frase
                        </Button>
                    </Col>
                    <Col>
{/*                         <Button onClick={handleDelete}>
                            Borrar Frase
                        </Button> */}
                    </Col>
                </Row>
                <Row> </Row>
                <Row>
                    <Col>
                        <QuoteList/>
                    </Col>
                </Row>

            </Container>
        )
    

}

const mapStateToProps = (state) => {
    return {
        quotes: state.listQuotes
    }
}

// export default PolizaContainer
export default connect(mapStateToProps, {createQuote,deleteQuote})(QuoteContainer) 
