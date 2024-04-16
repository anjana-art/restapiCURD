var http = require("http");

const PERSON = [{firstName: "ana", id: "1"}, {firstName: "asdf" , id: "2"}]

const server = http.createServer((req, res)=>{
    if("GET" === req.method){
        res.writeHead(200, {
            "Content-Type":"application/json"
        });
        res.write(JSON.stringify(PERSON));
        res.end();
       
    } else if ("POST" === req.method) {
        let body = " ";
        req.on("data", (chunk) => {
            body = body + chunk.toString();
        });

        req.on("end")
    }else if ("PUT"=== req.method){

    }else if("DELETE" === req.method){

    }

    else{
        req.writeHead(404)
        req.write("page not found")
    }
    res.end();
       
}).listen(3000);