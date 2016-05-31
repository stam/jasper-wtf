import React, { PropTypes } from 'react';
import styles from './RadarChart.css';
import { Radar } from 'react-chartjs';
import { helpers } from 'chart.js';

export default React.createClass({
    propTypes: {
        rubrics: PropTypes.object.isRequired,
        onRubricClick: PropTypes.func.isRequired,
    },
    componentDidMount() {
        // Needed for loading the fonts...
        setTimeout(() => {
            this.forceUpdate();
            this.bindRubricClicks();
        });
    },
    shouldComponentUpdate() {
        return false;
    },
    bindRubricClicks() {
        const chart = this.refs.chart.getChart();

        helpers.bindEvents(chart,
            ['click'],
            (e) => {
                const points = chart.getPointsAtEvent(e);

                helpers.each(points, (activePoint) => {
                    this.props.onRubricClick(activePoint.label);
                });
            }
        );
    },
    chartOptions: {
        animation: false,
        reverse: false,
        // scaleShowLine: true,
        scaleOverride: true,
        // Number - The number of steps in a hard coded scale
        scaleSteps: 2,
        // Number - The value jump in the hard coded scale
        scaleStepWidth: 50,
        // Number - The scale starting value
        scaleStartValue: 0,
        // angleShowLineOut: false,
        pointDotRadius: 5,
        pointDotStrokeWidth: 3,
        pointLabelFontSize: 15,
        datasetStrokeWidth: 4,
        pointLabelFontFamily: "'Karla'",
        scaleFontFamily: "'Karla'",
        angleLineColor: 'rgba(255,255,255,.2)',
        scaleLineColor: 'rgba(255,255,255,.2)',
        pointLabelFontColor: '#fff',
    },
    render() {
        return (
            <div className={styles['radar-container']}>
                <Radar
                    className={styles['radar-chart']}
                    ref="chart"
                    redraw
                    data={this.props.rubrics}
                    options={this.chartOptions}
                />
            </div>
        );
    },
});
