const password = document.getElementById('password');
const progress = document.getElementById('progress-bar');

const validatePass = () => {
    password.addEventListener('input', () => {
        let valid = 0;

        if (password.value.length >= 3) {
            valid++;
        }
        if (/\d/.test(password.value)) {
            valid++;
        }
        if (/[@$%&!]/.test(password.value)) {
            valid++;
        }

        const updateProgress = (valid) => {   
            progress.classList.remove('bg-danger', 'bg-warning', 'bg-success');
            switch (valid) {
                case 1:
                    progress.classList.add('bg-danger');
                    progress.setAttribute('style', 'width:33%');
                    progress.textContent = 'Mala';
                    break;
                case 2:
                    progress.classList.add('bg-warning');
                    progress.setAttribute('style', 'width:66%');
                    progress.textContent = 'Media';
                    break;
                case 3:
                    progress.classList.add('bg-success');
                    progress.setAttribute('style', 'width:100%');
                    progress.textContent = 'Buena';
                    break;
                default:
                    progress.setAttribute('style', 'width:0%');
                    progress.textContent = '';
                    break;
            }
        };
        updateProgress(valid);
    });
};
validatePass();