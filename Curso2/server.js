    import http from "http";

    const PORT = 3000;

    const rotas = { 
        "/": "Dautin te amo DMS.js",
        "/dautin": "Dautin é o cara",
        "/dalton": 'Dalton e foda',
    };

    const server = http.createServer((req, res) => {
        res.writeHead(200, { "Content-Type": "text/plain" });
        res.end(rotas[req.url] || "Olha o Disco Voador");
        }
    );

    server.listen(PORT, () => {
        console.log("Servidor Nas Alturas");
    }); 


