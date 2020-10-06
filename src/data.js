function DaysL(){
    var b = new Date();
    var month =b.getMonth()-1
    var year = b.getFullYear()
    var date = new Date(year, month, 1);
    var days = [];
    while (date.getMonth() === month) {
       days.push(`${date.getDate()}`);
       date.setDate(date.getDate() + 1);
    }
    return days;
  };
  const DaysLastMonth = DaysL()
export default  DaysLastMonth