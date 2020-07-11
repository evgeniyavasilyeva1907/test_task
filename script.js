document.querySelector('.btn').addEventListener('click', function () {
    document.querySelector('.container').classList.add('animate');
})

let value = document.getElementById('startValue');
let percent = document.getElementById('percent');

percent.addEventListener("input", getTable);
value.addEventListener("input", getTable);

function getTable() {
    let str = '';
    if (value.value.length !== 0 && percent.value.length !== 0) {
        let firstMonth = ((value.value * (100 + (+percent.value))) / 100).toFixed(2);
        let secondMonth = (firstMonth * (100 + (+percent.value)) / 100).toFixed(2);
        let thirdMonth = (secondMonth * (100 + (+percent.value)) / 100).toFixed(2);
        str = '<tr> <td class=\'td_left\'> Первый месяц </td><td>' + firstMonth + '</td> </tr>' +
            '<tr> <td class=\'td_left\'> Второй месяц </td><td>' + secondMonth + '</td> </tr>' +
            '<tr> <td class=\'td_left\'> Третий месяц </td><td>' + thirdMonth + '</td> </tr>'

        }
    document.querySelector('.resultTable').innerHTML = str;

}







