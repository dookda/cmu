const express = require("express");
const app = express.Router();
const con = require("./db");
const db = con.db;

app.get("/", (req, res) => {
    // db.query()
    res.status(200).json({
        status: "hello"
    });
});

app.post("/api/insert", async (req, res, next) => {
    const { data } = req.body;
    const pid = 'pid' + Date.now();
    const sql = `INSERT INTO user_tb(pid)VALUES('${pid}')`;
    db.query(sql);
    for (let dat in data) {
        let obs = data[dat]
        for (let ob in obs) {
            const sql2 = `UPDATE user_tb SET ${ob}='${obs[ob]}' WHERE pid='${pid}'`;
            console.log(sql2);
            await db.query(sql2);
        }
    }
});


app.get("/api/insert/:a", (req, res) => {
    // const { data } = req.body;
    const a = req.params.a
    console.log(a);
    // const pkid = 'pid' + Date.now();
    // const sql = `INSERT INTO user_tb (username,email,stdcode,dt)VALUES('${username}','${email}',${stdcode},now())`;
    // console.log(sql);
    // db.query(sql).then(() => {
    res.status(200).json({
        status: a
    });
    // })
});

module.exports = app;