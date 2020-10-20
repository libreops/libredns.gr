const byID = id => document.getElementById(id);
const TEST_URL = 'https://test.libredns.gr';
const request = new XMLHttpRequest();

request.open('GET', TEST_URL, true);

request.onload = function() {
    byID('test-success').classList.add('d-block');
};

request.onerror = function() {
    byID('test-danger').classList.add('d-block');
};

request.send();
