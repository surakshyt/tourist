import React, { Component } from 'react';
import './mainpage.css';
import Navbar from '../navbar/navbar';
class Mainpage extends Component {
    state = {  }
    render() { 
        return ( <section id="mainpage" >

               
                <Navbar />
                <img src="../../../images/kathmandu.jpeg" alt=""/>
                <span>Kathmandu</span>  
                 <p>It is one of the most visited city in the world full of culture and history</p>

                

            </section> );
    }
}
 
export default Mainpage;