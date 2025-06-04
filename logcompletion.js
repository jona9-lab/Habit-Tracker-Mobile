app.put('/habits/:id/log', (req, res) => {
    const habitId = req.params.id;
    const sql = `UPDATE habits SET streak = streak + 1, last_completed = CURDATE() WHERE id = ?`;

    db.query(sql, [habitId], (err, result) => {
        if (err) throw err;
        res.json({ message: 'Completion logged!' });
    });
});