import {
    expect
} from 'chai';
import {
    List,
    Map
} from 'immutable';

describe('immutability', () => {

    describe('a number', () => {

        function increment(currentState) {
            return currentState + 1;
        }

        it('is immutable', () => {
            let state = 42;
            let nextState = increment(state);

            expect(nextState).to.equal(43);
            expect(state).to.equal(42);
        });

    });

    describe('A List', () => {

        function addMovie(currentState, movie) {
            return currentState.push(movie);
        }

        it('is immutable', () => {
            const state = List.of('Trainspotting', '28 Days Later');
            const nextState = addMovie(state, 'Sunshine');
            const nextNextState = addMovie(nextState, '28 Weeks Later');

            expect(nextNextState).to.equal(List.of(
                'Trainspotting',
                '28 Days Later',
                'Sunshine',
                '28 Weeks Later'
            ));
            expect(nextState).to.equal(List.of(
                'Trainspotting',
                '28 Days Later',
                'Sunshine'
            ));
            expect(state).to.equal(List.of(
                'Trainspotting',
                '28 Days Later'
            ));


        });

    });

    describe('a tree', () => {

        function addMovie(currentState, movie) {
            return currentState.update('movies', movies => movies.push(movie)); // .update('movies', function(movies) { movies.push(movie)})
        }

        it('is immutable', () => {
            let state = Map({
                movies: List.of('Trainspotting', '28 Days Later')
            });
            let nextState = addMovie(state, 'Sunshine');

            expect(nextState).to.equal(Map({
                movies: List.of(
                    'Trainspotting',
                    '28 Days Later',
                    'Sunshine'
                )
            }));
            expect(state).to.equal(Map({
                movies: List.of(
                    'Trainspotting',
                    '28 Days Later'
                )
            }));
        });

    });
});
