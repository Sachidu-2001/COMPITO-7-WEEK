//variabili Home //

const card = document.getElementById('card');
const cardImage = document.getElementById('cardImage');
const cardbody = document.getElementById('card-text');
const btnModify = document.getElementById('btnModify');
const btnScopri = document.getElementById('btnScopri');




fetch("https://striveschool-api.herokuapp.com/api/put-your-endpoint-here/", {
    headers: {
    "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NzViZmYxNGQyMjA3MTAwMTVkZTJmNTIiLCJpYXQiOjE3MzQwODUyNzksImV4cCI6MTczNTI5NDg3OX0.1IZ_XdKbGUmPRhh4VCSO6X1XtnkojGH6v-NKIP6gKuI"
    }
} )