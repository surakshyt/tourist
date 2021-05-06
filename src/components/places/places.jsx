import React, { Component } from 'react';
import PlacesBlock from '../places-block/places-block';
import './places.css';

class Places extends Component {
    state = {  }
    render() { 
        return (<section id="places">
                
                <h1>Places to visit in Kathmandu</h1>


                <div className="places-list">
                <PlacesBlock heading="PashupatiNath" src="../../../Images/pashupati.jpg" title= " View Offline Map" link="https://cutt.ly/tbvNvHb" />
               <PlacesBlock heading="kritipur" src ="../../../Images/kritipur.jpg" title= " View Offline Map"link="https://cutt.ly/HbvNRBU"/>
               <PlacesBlock heading="Swayambhunath" src ="../../../Images/swayambhu.jpeg" title= " View Offline Map"link="https://cutt.ly/YbvNATP" />
               <PlacesBlock heading="Bhaktapur Durbar" src ="../../../Images/bds.jpg" title= " View Offline Map"link="https://cutt.ly/qbvNHUp"/>
               <PlacesBlock heading="Patan Durbar" src ="../../../Images/pds.jpeg"title= " View Offline Map" link="https://cutt.ly/3bvNLP0"/>
               <PlacesBlock heading="Kathmandu Durbar" src ="../../../Images/kds.jpg" title= " View Offline Map"link="https://cutt.ly/hbvNBmn"/>
            

                </div>
            


        </section>  );
    }
}
 
export default Places;



