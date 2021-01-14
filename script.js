// 오늘날짜 기본으로 표기
let basic = () => {
    let now = new Date();
    let today = {
        year: now.getFullYear(),
        month: now.getMonth() + 1,
        date: now.getDate()
    }
    document.querySelector(".show-date").innerHTML = `오늘은 ${today.year}년 ${today.month}월 ${today.date}일`;

    //placeholder
    document.querySelector("#first-year").setAttribute("value", today.year);
    document.querySelector("#first-month").setAttribute("value", today.month);
    document.querySelector("#first-day").setAttribute("value", today.date);

    return now.getTime();            
}

// 처음만난날
let firstmeet = () => {
    let first = {
        year: parseInt(document.querySelector("#first-year").value),
        month: parseInt(document.querySelector("#first-month").value)-1,
        date: parseInt(document.querySelector("#first-day").value)
    }
    let firstdate = new Date();
    firstdate.setFullYear(first.year);
    firstdate.setMonth(first.month);
    firstdate.setDate(first.date);

    return firstdate.getTime();
}

//오늘 몇일째?
let clickToday = () => {
    let todaySeconds =  basic() - firstmeet();
    todayDate = Math.round(todaySeconds/(1000*60*60*24));
    document.querySelector(".show-date").innerHTML = `오늘은 만난지 ${todayDate}일`;
}


//날짜별 기념일
let calcDate = (event) => {
    let days;
    let c;
    switch(event.currentTarget.id) {
        case 'days500':
            days = 500;
            c = '500일';
            break;
        case 'days100':
            days = 100;
            c = '100일';
            break;
        case 'year1':
            days = 365;
            c = '1년';
            break;
    }
    
    let annivSeconds = firstmeet() + days*(1000*60*60*24);
    let annivDate = new Date(annivSeconds);
    let anniv = {
        year: annivDate.getFullYear(),
        month: annivDate.getMonth() + 1,
        date: annivDate.getDate()
    }
    document.querySelector(".show-date").innerHTML = `${c}은 ${anniv.year}년 ${anniv.month}월 ${anniv.date}일`;
}

//초기값 및 palceholder 셋팅
basic();

//입력버튼 누를때 처음만난날 입력
let submit = document.querySelector("#submit");
submit.addEventListener("click", firstmeet);

//오늘은 몇일째?
let today = document.querySelector("#today");
today.addEventListener("click", clickToday);

//날짜별 함수
let unique = document.querySelectorAll(".unique");
unique.forEach(element => {
    element.addEventListener("click", calcDate);
});

