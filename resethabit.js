app.put('/habits/:id/reset', (req, res) => {
    const habitId = req.params.id;
    const sql = `UPDATE habits SET streak = 0 WHERE id = ?`;

    db.query(sql, [habitId], (err, result) => {
        if (err) throw err;
        res.json({ message: 'Habit streak reset!' });
    });
});