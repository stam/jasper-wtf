import React from 'react';
import RadarChart from 'component/RadarChart';

export default React.createClass({
    getInitialState() {
        return {
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
                        pointHighlightStroke: 'rgba(179,181,198,1)',
                        data: [50, 85, 10, 10, 50, 60, 65, 10, 30, 50, 75, 50, 40],
                    },
                    {
                        label: 'Na periode',
                        fillColor: 'rgba(255,99,132,0.2)',
                        strokeColor: 'rgba(255,99,132,1)',
                        pointColor: 'rgba(255,99,132,1)',
                        pointStrokeColor: '#fff',
                        pointHighlightFill: '#fff',
                        pointHighlightStroke: 'rgba(255,99,132,1)',
                        data: [70, 100, 70, 70, 75, 65, 75, 60, 70, 70, 85, 70, 60],
                    },
                ],
            },
        };
    },
    render() {
        return (
            <RadarChart rubrics={this.state.rubrics} />
        );
    },
});