class RBillBoard {
    constructor() {
        this.state = {
            list: [
                {
                    ID: 3, questions: [
                        {
                            ID: 21,
                            title: "1.png",
                            answerA: "Children less than five years old cannot go on this ride alone.",
                            answerB: "Children in groups of five or more must have an adult with them.",
                            answerC: "Adults are not allowed on this ride",
                            answer: "Children less than five years old cannot go on this ride alone.",
                        },
                        {
                            ID: 22,
                            title: "2.png",
                            answerA: "There will only one entrance to the park after today.",
                            answerB: "This entrance cannot be used before 11 am today.",
                            answerC: "The park opens at 11 am today.",
                            answer: "This entrance cannot be used before 11 am today.",
                        },
                        {
                            ID: 23,
                            title: "3.png",
                            answerA: "The ride starts when all the seats are full.",
                            answerB: "Do not stand up when the ride is moving.",
                            answerC: "If the ride stops, wait until it begins again.",
                            answer: "Do not stand up when the ride is moving.",
                        },
                        {
                            ID: 24,
                            title: "4.png",
                            answerA: "The park shuts earlier than 6 pm on some days.",
                            answerB: "The park stays open late for one month of year.",
                            answerC: "The park is open all year except in December.",
                            answer: "The park shuts earlier than 6 pm on some days.",
                        },
                        {
                            ID: 25,
                            title: "5.png",
                            answerA: "You can buy a hot meal in two different places.",
                            answerB: "The restaurant near the lake servers hot food in middle of the day.",
                            answerC: "Sandwiches and drinks are only available at lunch time.",
                            answer: "The restaurant near the lake servers hot food in middle of the day.",
                        },
                    ]
                },
                {
                    ID: 4, questions: [
                        {
                            ID: 26,
                            title: "6.png",
                            answerA: "Natalie wants to borrow Ken's textbook",
                            answerB: "Natalie wants to borrow Maria's textbook",
                            answerC: "Natalie wants to borrow Francesco's textbook",
                            answer: "Natalie wants to borrow Francesco's textbook",
                        },
                        {
                            ID: 27,
                            title: "7.png",
                            answerA: "Users nust lock the car park after leaving.",
                            answerB: "People can park here while they are at work.",
                            answerC: "This car park is for employees only.",
                            answer: "This car park is for employees only.",
                        },
                        {
                            ID: 28,
                            title: "8.png",
                            answerA: "The basketball team only wants to see experienced players.",
                            answerB: "There aren't enough team members available on Friday.",
                            answerC: "The Barton College team will visit the gym later today.",
                            answer: "There aren't enough team members available on Friday.",
                        },
                        {
                            ID: 29,
                            title: "9.png",
                            answerA: "All Sunday evening tickets are already sold.",
                            answerB: "You must book tickets for Sunday in advance.",
                            answerC: "A ticket is not necessary for Sunday evening.",
                            answer: "All Sunday evening tickets are already sold.",
                        },
                        {
                            ID: 30,
                            title: "10.png",
                            answerA: "Giacomo will be able to see Charlotte early tomorrow morning.",
                            answerB: "Charlotte needs to arrive in time for Giacomo's meeting tomorrow.",
                            answerC: "Giacomo can collect Charlotte from the airport tomorrow afternoon.",
                            answer: "Giacomo can collect Charlotte from the airport tomorrow afternoon.",
                        },
                    ]
                }
            ],
            index: 0,
            lastResult: 0
        }
    }
    deploy() {
        let html = '';
        this.state.list.forEach((item, i) => html += `<li class="active"><a href="#" data-id=${i}>R${i + 1} - Test ${i + 1}</a></li>`);
        $('#dt-list').html(html);

        // render
        this.render();
        // events
        this.eventHandler();
    }
    eventHandler() {
        // view result
        $('#form-content').on('submit', (e) => {
            e.preventDefault();
            if(this.state.lastResult !== 0) {
                swal({
                    title: 'Try again?',
                    icon: 'warning',
                    button: "Let's me try another!"
                }).then(value => {
                    if(value) {
                        this.retry();
                    }
                })
            }
            else {
                const result = $('#app-content').find('input[type="radio"]:checked');
                let {list, index, lastResult} = this.state;

                if(result.length === list[index].questions.length) {
                    let val;
                    list[index].questions.map((item, i) => {
                        val = $(result[i]).val();
                        if(item.answer === val) {
                            $(result[i]).parent().append('<i style="margin-left: 12px" class="ion ion-checkmark-round"></i>').css('color', 'green');
                            lastResult += 1;
                        } else {
                            $(result[i]).parent().append('<i style="margin-left: 12px" class="ion ion-close-round"></i>').css('color', 'red');
                        }
                    })

                    swal(
                        `Correct: ${lastResult} / ${list[0].questions.length}`,
                        `Total scores: ${Math.ceil(lastResult / list[0].questions.length * 100)}`,
                        "success")
                } else {
                    swal('Message', 'You should answer all questions before view result!', 'error');
                }
                this.state.lastResult = lastResult;
            }
        })
        // retry
        $('#btn-retry').on('click', (e) => {
            e.preventDefault();
            this.retry();
        })
            
        // change page
        const that = this;
        $('#dt-list').find('a').on('click', function(e) {
            e.preventDefault();
            that.state.index = $(this).data('id');
            that.render();
        })
    }
    retry() {
        this.state.lastResult = 0;
        this.render();
    }
    render() { 
        const {list, index} = this.state;
        //
        $('#title').html(`R${index + 1} - Test ${index + 1}`);
        // render
        let html = '';
        list[index].questions.map((item, i) => 
            html += `<div>
                        <div class="question-title">
                            <h4>Question ${i + 1}</h4>
                        </div>
                        <div style="margin-top: 15px;">
                            <h5>${i + 1}.</h5>
                            <img src='../../public/images/content/app/${item.title}' /><br /><br />
                            <ul>
                                <li><label><input type="radio" name=${i} value="${item.answerA}" /> A. ${item.answerA}</label></li>
                                <li><label><input type="radio" name=${i} value="${item.answerB}" /> B. ${item.answerB}</label></li>
                                <li><label><input type="radio" name=${i} value="${item.answerC}" /> C. ${item.answerC}</label></li>
                            </ul>
                        </div>
                    </div>`
        )
        $('#app-content').html(html);
    }
}
new RBillBoard().deploy();