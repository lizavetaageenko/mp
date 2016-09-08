import './starks.scss';

const starks = ['Eddard', 'Arya', 'Sansa', 'Brandon', 'Jon Snow?!!!'];

export function uppercasefyStarks() {
    return starks.map(stark => stark.toUpperCase());
}

export default starks;
