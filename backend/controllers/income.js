const incomeModel = require("../models/incomeModel");

exports.addIncome = async (req, res) => {
    const { title, amount, category, description, date } = req.body;

    const income = new incomeModel({
        title,
        amount,
        category,
        description,
        date
    });

    try {
        //validations
        if (!title || !category || !description || !date) {
            return res.status(404).json({message: "All fields are required!"})
        }
        if (amount <= 0 || !amount === 'number') {
            return res.status(404).json({message: "Amount must be positive"})
        }
        await income.save();
        res.status(200).json({message: "Income Added"})
    } catch (error) {
        res.status(500).json({message: "Server Error"})
    }

    console.log(income);
}
