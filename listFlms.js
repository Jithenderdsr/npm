// Film listing component
import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import { fetchStarWars } from '../actions/swars';
import PeopleList from '../components/listPeople';

class FilmList extends React.Component {
    componentDidMount() {
      this.props.fetchFilms('http://swapi.co/api/films/');
    } 

    render() {
        if (this.props.hasErrored) {
            return <p>Sorry! There was an error loading the films</p>;
        }

        if (this.props.isLoading) {
            return <p>Loading…</p>;
        }

 // TODO: <PeopleList characters={film.characters} /> goes into <div person>
        return (
            <ul>
                {this.props.films.map((film) => (
                    <li key={film.url.match(/\d+/)[0]}>
                        <div className="film">{film.title}</div>
                        <div className="person">

                        </div>
                    </li>
                ))}
            </ul>
        );
    }
}

FilmList.propTypes = {
    films: PropTypes.array.isRequired,
    hasErrored: PropTypes.bool.isRequired,
    isLoading: PropTypes.bool.isRequired,
    fetchFilms: PropTypes.func.isRequired
};

const mapStateToProps = (state) => {
    return {
        films: state.data,
        hasErrored: state.dataHasErrored,
        isLoading: state.dataIsLoading
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchFilms: (url) => dispatch(fetchStarWars(url))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(FilmList);
