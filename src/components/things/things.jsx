import React, { Component } from 'react';
import './things.css';
import PlaceBlock from '../places-block/places-block';
class Things extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (<section id="things">
                <h1>Things to do in Kathmandu</h1>
            <div className="things-list">
                <PlaceBlock src="../../../images/cyclingjpg.jpg" heading="cycling" title="" />
                <PlaceBlock src="../../../images/thamel.jpg" heading="shopping" title=""/>
                <PlaceBlock src="../../../images/meditation.jpg" heading="meditation" title="" />
                <PlaceBlock src="../../../images/zoo.jpg" heading="zoo" title=""/>
                <PlaceBlock src="../../../images/camping.jpg" heading="camping" title="" />
                <PlaceBlock src="../../../images/food.jpg" heading="street food" title=""/>


                </div>

        </section> );
    }
}
 
export default Things;