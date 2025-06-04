app.get('/habits/streaks', (req, res) => {
    const sql = `SELECT name, streak FROM habits ORDER BY streak DESC`;

    db.query(sql, (err, results) => {
        if (err) throw err;
        res.json(results);
    });
});