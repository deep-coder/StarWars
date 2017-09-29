/**
 * Created by deepcoder on 29/09/17.
 */
import React, {Component, PropTypes} from 'react';
import axios from 'axios';
import './styles.css';
class PlanetListComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            planetList: []
        }
    }

    componentWillReceiveProps(nextProps) {

    }

    onSearch = () => {
        const inputValue = this.searchPlanet.value;
        console.log('Inout Value--->', inputValue);
        if (inputValue === '') {
            this.setState({
                planetList: []
            })
            return;
        }
        this.props.getPlanetList(inputValue);
    }

    renderPlanetList = () => {
        const {planetData, isLoading, error} = this.props;
        if(error){
            return (
                <div>
                   There seems to be connectivity issue
                </div>
            )
        }
        
        if (isLoading) {
            return (
                <div>
                    Data is Loading....
                </div>
            )
        }
        const sortedPlanetList = planetData.sort(function (a, b) {
            return parseInt(a.population, 10) - parseInt(b.population, 10);
        });
        return (
            <div>
                {sortedPlanetList.map((data) => (
                    <p key={data.name}>{data.name} {data.population}</p>
                ))}
            </div>
        );
    }

    render() {
        return (
            <div className='planet__container'>
                <div className='planet__search'>
                    <div>Star Wars Planets</div>
                    <input ref={(input) => {
            this.searchPlanet = input;
          }} className='planet__search-input' type="text" placeholder="Search Planets"
                           onChange={this.onSearch}/>
                </div>
                {this.renderPlanetList()}
            </div>
        )
    }
}

export default PlanetListComponent;