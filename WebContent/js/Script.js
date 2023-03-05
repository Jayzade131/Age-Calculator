const calculateAge=()=>
{
    let date=document.getElementById("date-field").value;
    let month=document.getElementById("month-field").value;
    let year=document.getElementById("year-field").value ;
    if(date>31)
    {
        alert("Invalid Date");
        return;
    }
    let dob=new Date(`${date} ${month} ${year}`);
    let now=new Date();
    console.log(dob);

    let diff=now-dob;
    let indays=Math.floor(diff/(1000*60*60*24));
    let inyears=Math.floor(diff/(1000*60*60*24*30*12));
    alert(`Your Age in Days : ${indays} days
        Your Age in Year : ${inyears} years`);

};