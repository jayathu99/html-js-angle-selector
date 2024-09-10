document.addEventListener('DOMContentLoaded', function () {
    const angleInput = document.getElementById('angleInput');
    const angleSlider = document.getElementById('angleSlider');
    const angleRadios = document.querySelectorAll('input[name="angleRadio"]');


    function normalizeAngle(value) {
        let angle = value % 360;
        if (angle < 0) angle += 360;
        return angle;
    }


    function updateAngle(value) {
        let angle = parseInt(value, 10);
        if (isNaN(angle)) angle = 0;
        angle = normalizeAngle(angle);

        angleInput.value = angle;
        angleSlider.value = angle;

        angleRadios.forEach(radio => {
            radio.checked = (parseInt(radio.value, 10) === angle);
        });
    }


    angleInput.addEventListener('input', function () {
        updateAngle(angleInput.value);
    });


    angleSlider.addEventListener('input', function () {
        updateAngle(angleSlider.value);
    });


    angleRadios.forEach(radio => {
        radio.addEventListener('change', function () {
            if (radio.checked) {
                updateAngle(radio.value);
            }
        });
    });


    updateAngle(0);
});
