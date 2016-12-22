const lineColor = '#797687';
const lineWidth = '1';

export default [
    (canvas, context) => {
        const { width, height } = canvas;

        context.beginPath();
        context.strokeStyle = lineColor;
        context.lineWidth = lineWidth;

        context.moveTo(width * 0.4, height * 0.6);
        context.lineTo(width * 0.6, height * 0.65);

        context.stroke();
    },
    (canvas, context) => {
        const { width, height } = canvas;

        context.beginPath();
        context.strokeStyle = lineColor;
        context.lineWidth = lineWidth;

        context.arc(width * 0.5, height * 0.5, height * 0.18, 0.15 * Math.PI, 0.85 * Math.PI, false);

        context.stroke();
    },
    (canvas, context) => {
        const { width, height } = canvas;

        context.beginPath();
        context.strokeStyle = lineColor;
        context.lineWidth = lineWidth;

        context.arc(width * 0.5, height * 0.5, height * 0.18, 0.15 * Math.PI, 0.85 * Math.PI, false);
        context.closePath();

        context.stroke();
    }
];
