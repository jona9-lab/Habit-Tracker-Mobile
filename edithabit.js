app.put('/habits/:id', (req, res) => {
    const habitId = req.params.id;
    const { name, frequency, goal_days } = req.body;
    const sql = `UPDATE habits SET name = ?, frequency = ?, goal_days = ? WHERE id = ?`;

    db.query(sql, [name, frequency, goal_days, habitId], (err, result) => {
        if (err) throw err;
        res.json({ message: 'Habit updated!' });
    });
});