import '../css/style.scss';
const fancy = function () {
    document.querySelector('.btn-c').addEventListener('click', function () {
        document.querySelector('.btn').style.color = 'red';
    });
}
//fancy();
export default fancy;