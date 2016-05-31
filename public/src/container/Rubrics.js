// import React from 'react';
// // import RadarChart from 'component/RadarChart';
// import RubricList from 'component/RubricList';

// export default React.createClass({
//     getInitialState() {
//         return {
//             rubrics: {
//                 labels: [
//                     'Artwork',
//                     'Technische haalbaarheid',
//                     'Werking product',
//                     'Product',
//                     'Iteratief werken en reflectie',
//                     'Onderzoek',
//                     'Documentatie',
//                     'Trends',
//                     'Concept',
//                     'Presentatie',
//                     'Interface',
//                     'UX',
//                     'User testing',
//                 ], datasets: [
//                     {
//                         label: 'Start',
//                         backgroundColor: 'rgba(179,181,198,0.2)',
//                         borderColor: 'rgba(179,181,198,1)',
//                         pointBackgroundColor: 'rgba(179,181,198,1)',
//                         pointBorderColor: '#fff',
//                         pointHoverBackgroundColor: '#fff',
//                         pointHoverBorderColor: 'rgba(179,181,198,1)',
//                         data: [50, 85, 10, 10, 50, 60, 65, 10, 30, 50, 75, 50, 40],
//                     },
//                     {
//                         label: 'Na periode',
//                         backgroundColor: 'rgba(255,99,132,0.2)',
//                         borderColor: 'rgba(255,99,132,1)',
//                         pointBackgroundColor: 'rgba(255,99,132,1)',
//                         pointBorderColor: '#fff',
//                         pointHoverBackgroundColor: '#fff',
//                         pointHoverBorderColor: 'rgba(255,99,132,1)',
//                         data: [70, 100, 70, 70, 75, 65, 75, 60, 70, 70, 85, 70, 60],
//                     },
//                 ],
//             },
//         };
//     },
//     render() {
//         return (
//             <RubricList rubrics={this.state.rubrics} />
//         );
//     },
// });
//
//
// #9466DD


import { connect } from 'react-redux';
import { showRubric } from 'actions/index';
import RadarChart from 'component/RadarChart';

const mapStateToProps = () => ({
    rubrics: {
        labels: [
            'Artwork',
            'Technische haalbaarheid',
            'Werking product',
            'Product',
            'Iteratief werken en reflectie',
            'Onderzoek',
            'Documentatie',
            'Trends',
            'Concept',
            'Presentatie',
            'Interface',
            'UX',
            'User testing',
        ], datasets: [
            {
                label: 'Start',
                fillColor: 'rgba(179,181,198,0.2)',
                strokeColor: 'rgba(179,181,198,1)',
                pointColor: 'rgba(179,181,198,1)',
                pointStrokeColor: '#fff',
                pointHighlightFill: '#fff',
                pointHighlightStroke: '#000',
                data: [50, 85, 10, 10, 50, 60, 65, 10, 30, 50, 75, 50, 40],
            },
            {
                label: 'Na periode',
                fillColor: 'rgba(255,99,132,0.2)',
                strokeColor: 'rgba(255,99,132,1)',
                pointColor: 'rgba(255,99,132,1)',
                pointStrokeColor: '#fff',
                pointHighlightFill: '#fff',
                pointHighlightStroke: '#000',
                data: [70, 100, 70, 70, 75, 65, 75, 60, 70, 70, 85, 70, 60],
            },
        ],
    },
});

const mapDispatchToProps = (dispatch) => ({
    onRubricClick: (name) => {
        dispatch(showRubric(name));
    },
});

const Rubrics = connect(
  mapStateToProps,
  mapDispatchToProps
)(RadarChart);

export default Rubrics;
