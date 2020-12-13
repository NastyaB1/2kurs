

let day_1 = new Date(2019, 08, 20),
    day_2 = new Date(2019, 10, 07);

function diffDates(day_one, day_two) 
{
    return (day_one - day_two) / (60 * 60 * 24 * 1000);
};

diffDates(day_2, day_1);
