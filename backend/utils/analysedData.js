const Budget = require("../models/budgetModel");
const Expense = require("../models/expenseModel");

exports.getAnalysedData=async (req)=>{

      // Get the current date
const currentDate = new Date();

// Extract the year and month from the current date
const currentYear = currentDate.getFullYear();
const currentMonth = currentDate.getMonth() + 1;
    const pipeline = [
        {
                $match: {
                  $expr: {
                    $and: [
                      { $eq: [{ $year: '$createdAt' }, currentYear] },
                      { $eq: [{ $month: '$createdAt' }, currentMonth] }
                    ]
                  }
                }
        },
        {
            $group: {
            _id: "$tag" ,
            expenses: {
                $sum: "$amount",
                
            },
                count:{
                    $sum :1
                }
        }}
      ];

      const aggregatedData= await Expense.aggregate(pipeline)
      console.log(req.user)

          if(!aggregatedData ||!(aggregatedData.length)){
        res.status(404)
        throw new Error('No expenses found')
    }
    const { tags, budget }= await Budget.findOne({ uid: req.user})
    console.log(tags)
      const tagData=tags.map((ele, i)=>{
          return {...aggregatedData[i],
            name: ele.name.toLowerCase(),
            targetExpense: ele.percentage/100 * budget
        }
    })
    return { tagData , budget};
}