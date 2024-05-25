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

exports.getIncomes = async (req, res) => {
    try {
        const incomes = await incomeModel.find().sort({createdAt: -1})
        res.status(200).json(incomes)
    } catch (error) {
        res.status(500).json({message: "Server Error!"})
    }
}

exports.deleteIncome = async (req, res) => {
    const {id} = req.params;
    console.log(req);
    incomeModel.findById(id)
        .then((income) => {
            res.status(200).json({message: "Income Deleted"})
        })
        .catch((err) => {
            res.status(500).json({message: "Server Error"})
        })
}
