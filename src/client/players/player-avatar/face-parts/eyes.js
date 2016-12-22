const lineColor = '#797687';
const lineWidth = '1';

export default [
    (canvas, context) => {
        const { width, height } = canvas;

        const firstEyeX = width * 0.35;
        const firstEyeY = height * 0.35;

        const secondEyeX = width * 0.65;
        const secondEyeY = height * 0.35;

        const radius = height * 0.05;

        context.beginPath();
        context.strokeStyle = lineColor;
        context.lineWidth = lineWidth;
        context.fillStyle = lineColor;

        context.arc(firstEyeX, firstEyeY, radius, 0, 2 * Math.PI);
        context.stroke();

        context.beginPath();
        context.arc(firstEyeX, firstEyeY, radius / 5, 0, 2 * Math.PI);
        context.fill();


        context.moveTo(secondEyeX + radius, secondEyeY);
        context.arc(secondEyeX, secondEyeY, radius, 0, 2 * Math.PI);
        context.stroke();

        context.beginPath();
        context.arc(secondEyeX, secondEyeY, radius / 5, 0, 2 * Math.PI);
        context.fill();
        context.stroke();

        drawBrow(firstEyeX, firstEyeY);
        drawBrow(secondEyeX, secondEyeY);

        function drawBrow(firstBrowX, firstBrowY) {
            context.moveTo(firstBrowX - (2 * radius), firstBrowY - (2 * radius));
            context.lineTo(firstBrowX, firstBrowY - (3 * radius));
            context.lineTo(firstBrowX + (2 * radius), firstBrowY - (2 * radius));

            context.stroke();
        }

        let yCoordinates = [];

        for (let i = firstEyeY; i >= firstEyeY - radius; i -= 0.004 * height) {
            yCoordinates.push(i);
        }

        const reversed = yCoordinates.slice();

        reversed.reverse();

        yCoordinates = yCoordinates.concat(reversed);

        let animationId = window.requestAnimationFrame(animate);

        function animate() {
            if (yCoordinates.length) {
                const y = yCoordinates.shift();

                context.clearRect(
                    firstEyeX - (2.1 * radius),
                    firstEyeY - (4.1 * radius),
                    ((secondEyeX - firstEyeX) + (4.3 * radius)),
                    3 * radius);

                context.beginPath();

                drawBrow(firstEyeX, y);
                drawBrow(secondEyeX, y);

                animationId = window.requestAnimationFrame(animate);
            } else {
                window.cancelAnimationFrame(animationId);
            }
        }
    },
    (canvas, context) => {
        const { width, height } = canvas;

        const firstEyeX = width * 0.35;
        const firstEyeY = height * 0.4;

        const secondEyeX = width * 0.65;
        const secondEyeY = height * 0.4;

        const radius = height * 0.05;

        context.beginPath();
        context.strokeStyle = lineColor;
        context.lineWidth = lineWidth;
        context.fillStyle = lineColor;

        context.moveTo(firstEyeX, firstEyeY);
        context.lineTo(firstEyeX - radius, firstEyeY - (2 * radius));
        context.lineTo(firstEyeX + radius, firstEyeY - (2 * radius));
        context.closePath();
        context.fill();
        context.stroke();

        context.moveTo(firstEyeX - (2 * radius), firstEyeY - (3 * radius));
        context.lineTo(firstEyeX + (2 * radius), firstEyeY - (4 * radius));

        context.stroke();

        context.moveTo(secondEyeX, secondEyeY);
        context.lineTo(secondEyeX - radius, secondEyeY - (2 * radius));
        context.lineTo(secondEyeX + radius, secondEyeY - (2 * radius));
        context.closePath();
        context.fill();
        context.stroke();

        context.moveTo(secondEyeX - (2 * radius), secondEyeY - (4 * radius));
        context.lineTo(secondEyeX + (2 * radius), secondEyeY - (3 * radius));

        context.stroke();
    },
    (canvas, context) => {
        const { width, height } = canvas;

        const firstEyeX = width * 0.3;
        const firstEyeY = height * 0.35;

        const secondEyeX = width * 0.6;
        const secondEyeY = height * 0.35;

        const radius = height * 0.1;

        context.beginPath();
        context.strokeStyle = lineColor;
        context.lineWidth = lineWidth;
        context.fillStyle = lineColor;

        context.strokeRect(firstEyeX, firstEyeY, radius, radius);

        context.beginPath();
        context.arc(firstEyeX + (0.5 * radius), firstEyeY + (0.5 * radius), radius / 5, 0, 2 * Math.PI);
        context.fill();

        context.moveTo(firstEyeX - (0.5 * radius), firstEyeY - (0.5 * radius));
        context.lineTo(firstEyeX + (0.5 * radius), firstEyeY - radius);
        context.lineTo(firstEyeX + (1.5 * radius), firstEyeY - (0.5 * radius));
        context.stroke();

        context.strokeRect(secondEyeX, secondEyeY, radius, radius);

        context.beginPath();
        context.arc(secondEyeX + (0.5 * radius), secondEyeY + (0.5 * radius), radius / 5, 0, 2 * Math.PI);
        context.fill();

        context.moveTo(secondEyeX - (0.5 * radius), secondEyeY - (0.5 * radius));
        context.lineTo(secondEyeX + (0.5 * radius), secondEyeY - radius);
        context.lineTo(secondEyeX + (1.5 * radius), secondEyeY - (0.5 * radius));
        context.stroke();
    }
];
