// Film listing component
import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import { fetchStarWars } from '../actions/swars';

class PeopleList extends React.Component {
    componentDidMount() {
      this.props.fetchPerson(this.props.characters);
    } 

    render() {
        if (this.props.hasErrored) {
            return <p>Sorry! There was an error loading the films</p>;
        }

        if (this.props.isLoading) {
            return <p>Loading…</p>;
        }
        
        return (
            <ul>
                {this.props.people.map((person) => (
                    <li key={person.url.match(/\d+/)[0]}>
                        {person.name}
                    </li>
                ))}
            </ul>
        );
    }
}

PeopleList.propTypes = {
    people: PropTypes.array.isRequired,
    hasErrored: PropTypes.bool.isRequired,
    isLoading: PropTypes.bool.isRequired,
    fetchPerson: PropTypes.func.isRequired,
    characters: PropTypes.array.isRequired
};

const mapStateToProps = (state) => {
    return {
        people: state.data,
        hasErrored: state.dataHasErrored,
        isLoading: state.dataIsLoading
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchPerson: (url) => dispatch(fetchStarWars(url))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(PeopleList);
