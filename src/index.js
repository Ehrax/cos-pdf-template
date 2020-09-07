const pdfServiceUrl = 'http://localhost:3000/api/create-pdf';

const getLayout = () => document.querySelector('page').getAttribute('size');
const getHTML = () => fetch('./index.html').then(res => res.text());
const getCSS = () => {
  const fileName = document.querySelector('link[type="text/css"').getAttribute('href');
  return fetch(fileName).then(res => res.text());
};

const postPDF = () => {
};

document.addEventListener("DOMContentLoaded", () => {
  // generating pdf
  document.querySelector('button').addEventListener('click', () => {
    postPDF();
  });
});