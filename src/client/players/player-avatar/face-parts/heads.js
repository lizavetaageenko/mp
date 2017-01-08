const lineColor = '#797687';
const lineWidth = '3';

export default [
    (canvas, context) => {
        const { width, height } = canvas;

        context.beginPath();
        context.strokeStyle = lineColor;
        context.lineWidth = lineWidth;
        context.strokeRect(width * 0.1, height * 0.1, width - (width * 0.2), height - (height * 0.2));
    },
    (canvas, context) => {
        const { width, height } = canvas;

        context.beginPath();
        context.strokeStyle = lineColor;
        context.lineWidth = lineWidth;
        context.arc(width / 2, height / 2, height * 0.45, 0, 2 * Math.PI);
        context.stroke();
    },
    (canvas, context) => {
        const { width, height } = canvas;

        context.beginPath();
        context.strokeStyle = lineColor;
        context.lineWidth = lineWidth;

        context.moveTo(width * 0.1, height * 0.1);
        context.lineTo(width * 0.9, height * 0.1);
        context.lineTo(width * 0.7, height * 0.9);
        context.lineTo(width * 0.3, height * 0.9);
        context.closePath();
        context.stroke();
    }
];
