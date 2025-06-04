app.delete('/habits/:id', (req, res) => {
    const habitId = req.params.id;
    const sql = `DELETE FROM habits WHERE id = ?`;

    db.query(sql, [habitId], (err, result) => {
        if (err) throw err;
        res.json({ message: 'Habit deleted!' });
    });
});