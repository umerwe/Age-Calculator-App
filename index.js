const date = document.getElementById('date');
date.max = new Date().toISOString().split('T')[0];

function calculateAge() {
    if (date.value === '') {
        alert('Please add your Age')
    }
    else {
        let birthDay = new Date(date.value);
        let d1 = birthDay.getDate();
        let m1 = birthDay.getMonth() + 1;
        let y1 = birthDay.getFullYear();

        let today = new Date();
        let d2 = today.getDate();
        let m2 = today.getMonth() + 1;
        let y2 = today.getFullYear();

        let d3, m3, y3;
        y3 = y2 - y1;

        if (m2 >= m1) {
            m3 = m2 - m1;
        }
        else {
            y3--;
            m3 = 12 + m2 - m1;
        }
        if (d2 >= d1) {
            d3 = d2 - d1;
        }
        else {
            m3--;
            d3 = new Date(y1, m1, 0).getDate() + d2 - d1;
        }
        if(m3 < 0){
            m3 = 11;
            y3--;
        }
        if(birthDay > today){
           alert('Date of birth needs to be earlier than the age at date.');
        }
        else{
            result.classList.remove('error');
            result.innerHTML = `You are <span>${y3}</span> Years, <span>${m3}</span> Months and <span>${d3}</span> Days old.`;
        }
        saveData();
    }
}

function saveData(){
    localStorage.setItem('birthDay', date.value);
    localStorage.setItem('results',result.innerHTML);
}
function showData(){
    date.value = localStorage.getItem('birthDay');
    result.innerHTML = localStorage.getItem('results');
}
showData();