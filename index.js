const Button = document.getElementById("btn");
const BirthDay = document.getElementById("birth-date");
const CurrentAge = document.getElementById("age");

function CalculateAge () {
    const BirthdAy = BirthDay.value;
    if(BirthdAy === "") {
        alert("Please Enter Your Birth Date");
    } else {
        const NewAge = getAge(BirthdAy);
        CurrentAge.innerText = `Your age is ${NewAge} ${NewAge > 1 ? "years" : "year"} old`;
    }
}

function getAge(BirthdAy) {
    const currentDate = new Date();
    const birthDate = new Date(BirthdAy);
    let NewAge = currentDate.getFullYear() - birthDate.getFullYear();
    const month = currentDate.getMonth() - birthDate.getMonth();

    if (month <0 || (month === 0 && currentDate.getDate() < birthDate.getDate())) {
        NewAge--;
    }
    return NewAge;
}
Button.addEventListener("click", CalculateAge);
