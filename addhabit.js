app.post('/habits', (req, res) => {
    const { name, frequency, goal_days } = req.body;
    const sql = `INSERT INTO habits (name, frequency, goal_days) VALUES (?, ?, ?)`;

    db.query(sql, [name, frequency, goal_days], (err, result) => {
        if (err) throw err;
        res.json({ message: 'Habit added!', id: result.insertId });
    });
});