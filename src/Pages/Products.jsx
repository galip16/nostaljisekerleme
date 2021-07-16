import React from "react";
import { Container,Col,Card,Row } from "react-bootstrap";
import "../component/Product.css"

function Products() {
  return (
    <div>
       <Container fluid  >
            <Row className="m-5 justify-content-center">
                <Col lg={10}>
                    <Card  border="light"  >
                        <Card.Body >
                            <Card.Title className="mainHeader"> <h1> ÜRÜNLER</h1></Card.Title>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
           
            <Row className="m-5 m-md-2 mb-md-4 m-lg-5 justify-content-center">
                <Col xs={12} md={6} lg={6} className="" >
                    <Row className="m-auto h-100 w-100 " >
                        <Card className=""border="light" bg="light">
                            <Col md={12} lg={12} xl={9} className="" style={{margin:"auto"}} >
                                <Card.Body className="d-flex flex-column justify-content-center text-center text-md-left" style={{"height":"100%", width:"100%"}} >
                                  <Card.Title className="productTitle" > <h4>Pamuk Seker</h4></Card.Title>
                                  <Card.Text className="productDescribe ">Evimizin mutfağında tamamen steril ortamda doğal şeker kullanarak üretmekteyiz. Renklendirmeyi ise müşterilerimizin sağlığını düşünerek tamamen meyve ve sebzelerden yapmaktayız. Örneğin yeşil rengi verirken Kivi kullanmak gibi..
                                  </Card.Text>
                                </Card.Body>
                            </Col>
                        </Card>
                    </Row>
                </Col>    
                <Col xs={12} md={6} lg={6} >
                    <Row className="m-auto h-100 w-100 " >
                        <Card style={{"height":"100%", width:"100%"}}>   
                        <Card.Img src="https://images.pexels.com/photos/4714301/pexels-photo-4714301.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260" style={{"width":"100%", "height":"100%"}}/>
                        </Card>
                    </Row>
                </Col>    
            </Row> 
      
            <Row className="m-5 m-md-2 mb-md-4  m-lg-5  justify-content-center">
                <Col xs={12} md={6} lg={6}>
                    <Row className="m-auto h-100 w-100 " >
                        <Card className=""border="light" bg="light">
                            <Col md={12} lg={12} xl={9} className="" style={{margin:"auto"}} >
                                <Card.Body className="d-flex flex-column justify-content-center text-center text-md-left" style={{"height":"100%", width:"100%"}} >
                                  <Card.Title className="productTitle" > <h4>Osmanlı Macunu</h4></Card.Title>
                                  <Card.Text className="productDescribe ">Evimizin mutfağında tamamen steril ortamda doğal şeker kullanarak üretmekteyiz. Renklendirmeyi ise müşterilerimizin sağlığını düşünerek tamamen meyve ve sebzelerden yapmaktayız. Örneğin yeşil rengi verirken Kivi kullanmak gibi..
                                  </Card.Text>
                                </Card.Body>
                            </Col>
                        </Card>
                    </Row>
                </Col>    
                <Col xs={12} md={6} lg={6} >
                    <Row className="m-auto h-100 w-100 " >
                        <Card style={{"height":"100%", width:"100%"}}>   
                            <Card.Img src="https://images.pexels.com/photos/208006/pexels-photo-208006.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" style={{"width":"100%", "height":"100%"}}/>
                        </Card>
                    </Row>
                </Col>    
            </Row> 
       
            <Row className="m-5 m-md-2 mb-md-4  m-lg-5  justify-content-center">
                <Col xs={12} md={6} lg={6}>
                    <Row className="m-auto h-100 w-100 " >
                        <Card className=""border="light" bg="light">
                            <Col md={12} lg={12} xl={9} className="" style={{margin:"auto"}} >
                                <Card.Body className="d-flex flex-column justify-content-center text-center text-md-left" style={{"height":"100%", width:"100%"}} >
                                  <Card.Title className="productTitle" > <h4>Patlamis Misir</h4></Card.Title>
                                  <Card.Text className="productDescribe ">Halk arasında son zamanlarda Pop-Corn olarak tabir edilen bu ürünümüzü yine özel ürettiğimiz makineler ile yağ-tuz oranını sağlık standartları doğrultusunda ayarlayarak üretmekteyiz.
                                  </Card.Text>
                                </Card.Body>
                            </Col>
                        </Card>
                    </Row>
                </Col>    
                <Col xs={12} md={6} lg={6} >
                    <Row className="m-auto h-100 w-100 " >
                        <Card style={{"height":"100%", width:"100%"}}>   
                        <Card.Img src="https://images.pexels.com/photos/5633527/pexels-photo-5633527.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" style={{"width":"100%", "height":"100%"}}/>
                        </Card>
                    </Row>
                </Col>    
            </Row> 
   
            <Row className="m-5 m-md-2 mb-md-4 m-lg-5  justify-content-center">
                <Col xs={12} md={6} lg={6}>
                    <Row className="m-auto h-100 w-100 " >
                        <Card className=""border="light" bg="light">
                            <Col md={12} lg={12} xl={9} className="" style={{margin:"auto"}} >
                                <Card.Body className="d-flex flex-column justify-content-center text-center text-md-left" style={{"height":"100%", width:"100%"}} >
                                  <Card.Title className="productTitle" ><h4>Osmanli Serbeti</h4> </Card.Title>
                                  <Card.Text className="productDescribe">Geleneksel Osmanlı Mutfağı’nın en klasik meşrubatlarından olan Osmanlı Şerbeti’ni müşterilerimizin istekleri doğrultusunda doğal baharatlar katarak hizmetinize sunmaktayız.
                                  </Card.Text>
                                </Card.Body>
                            </Col>
                        </Card>
                    </Row>
                </Col>    
                <Col xs={12} md={6} lg={6}>
                    <Row className="m-auto h-100 w-100 " >
                        <Card style={{"height":"100%", width:"100%"}}>   
                        <Card.Img src="https://images.pexels.com/photos/2110927/pexels-photo-2110927.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" style={{"width":"100%", "height":"100%"}}/>
                        </Card>
                    </Row>
                </Col>    
            </Row> 
        </Container>  
    </div>
  );
}

export default Products;
