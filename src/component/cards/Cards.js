import React, {Fragment} from "react";
import card1 from '../../assets/img/card1.jpg';
import card2 from '../../assets/img/card2.jpg';
import card3 from '../../assets/img/card3.jpg';
import card4 from '../../assets/img/card4.jpg';
import card5 from '../../assets/img/card5.jpg';


class Cards extends React.Component{
    render() {
        return (
            <Fragment>
                <div className="container mt-3">
                    <div className="row  animated zoomIn delay-1s">
                        <div className="col-md-3 ">
                            <div className="card">
                                <img src={card1} alt="" className="img-fluid" /  >
                                    <div className="card-body">
                                     
                                        <p className="card-text bg-success text-white">“Count your life by smiles, not tears. Count your age by friends, not years. Happy birthday!”</p>
                                        
                                    </div>  
                        </div>           
                            </div>
                            <div className="col-md-3">
                                <div className="card">
                                    <img src={card2} alt="" className="img-fluid"/>
                                    <div className="card-body">
                                       
                                    <p className="card-text bg-primary text-white">Happy birthday! I hope all your birthday wishes and dreams come true.</p>
                                       
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="card">
                                    <img src={card3} alt="" className="img-fluid"/>
                                    <div className="card-body">
                                      
                                    <p className="card-text bg-danger text-white">“May you be gifted with life’s biggest joys and never-ending bliss. After all, you yourself are a gift to earth, so you deserve the best. Happy birthday.”</p>
                                       
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="card">
                                    <img src={card4} alt="" className="img-fluid"/>
                                    <div className="card-body">
                                    <p className="card-text bg-dark text-white">Forget the past; look forward to the future, for the best things are yet to come.</p>
                                        
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="card">
                                    <img src={card5} alt="" className="img-fluid"/>
                                    <div className="card-body">
                                     
                                    <p className="card-text bg-success text-white">“Be happy! Today is the day you were brought into this world to be a blessing and inspiration to the people around you! You are a wonderful person! May you be given more birthdays to fulfill all of your dreams!”</p>
                                       
                                    </div>
                                </div>
                            </div>
                        
                        
                        
                    </div>

                </div>
            </Fragment>
        )
          
        
    }
}
export default Cards