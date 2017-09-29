/**
 * Created by deepcoder on 29/09/17.
 */
import {connect} from 'react-redux';
import planetListComponent from './planetList';
import {fetchPlanetData} from './actions/planets';

function mapStateToProps(state) {
    return {
        planetData: state.planetReducer.planets,
        isLoading: state.planetReducer.isLoading,
        error:state.planetReducer.error
    }
}

function mapDispatchToProps(dispatch) {
  return {
        getPlanetList : (inputValue) => dispatch(fetchPlanetData(inputValue))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(
    planetListComponent,
);

