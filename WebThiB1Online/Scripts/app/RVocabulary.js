class RVocabulary {
    constructor() {
        this.state = {
            list: [
                {
                    ID: 1, questions: [
                        {
                            ID: 1,
                            title: "Tom doesn't like dancing, but Mike..........",
                            answerA: "does",
                            answerB: "doesn't",
                            answerC: "do",
                            answerD: "did",
                            answer: "does",
                        },
                        {
                            ID: 2,
                            title: "Listen! Somebody..........for help.",
                            answerA: "are screaming",
                            answerB: "scream",
                            answerC: "is screaming",
                            answerD: "has screamed",
                            answer: "is screaming",
                        },
                        {
                            ID: 3,
                            title: "Waiter! There..........forks on this table",
                            answerA: "are",
                            answerB: "isn't any",
                            answerC: "are not any",
                            answerD: "are some",
                            answer: "are not any",
                        },
                        {
                            ID: 4,
                            title: "I have a test tomorrow, so I ......... sit up late tonight to study.",
                            answerA: "will have to",
                            answerB: "can have to",
                            answerC: "have",
                            answerD: "have to",
                            answer: "have to",
                        },
                        {
                            ID: 5,
                            title: "An island on which .......... is called a deserted island.",
                            answerA: "no people",
                            answerB: "no peoples live",
                            answerC: "no people live",
                            answerD: "people are living",
                            answer: "no people live",
                        },
                        {
                            ID: 6,
                            title: "Linda..........tie her shoes when she was only 3 years old.",
                            answerA: "knew to",
                            answerB: "knew how to",
                            answerC: "could to",
                            answerD: "may",
                            answer: "knew how to",
                        },
                        {
                            ID: 7,
                            title: "We wondered who..........to pay for the broken window.",
                            answerA: "is going",
                            answerB: "was going",
                            answerC: "have",
                            answerD: "would",
                            answer: "was going",
                        },
                        {
                            ID: 8,
                            title: "John said that no other car could go ......... his car.",
                            answerA: "so fast like",
                            answerB: "as fast as",
                            answerC: "fast than",
                            answerD: "as fastly as",
                            answer: "as fast as",
                        },
                        {
                            ID: 9,
                            title: "A number of accidents  in the last 2 years..........caused by drunk driving.",
                            answerA: "were",
                            answerB: "have been",
                            answerC: "have",
                            answerD: "are",
                            answer: "have been",
                        },
                        {
                            ID: 10,
                            title: "Perharps people don't like ......... tourists in their country.",
                            answerA: "so much",
                            answerB: "too much",
                            answerC: "so many",
                            answerD: "a lot",
                            answer: "so many",
                        },
                    ]
                },
                {
                    ID: 2, questions: [
                        {
                            ID: 11,
                            title: "I..........of leaning how to fly a plane now.",
                            answerA: "am thinking",
                            answerB: "think",
                            answerC: "thought",
                            answerD: "have thought",
                            answer: "am thinking",
                        },
                        {
                            ID: 12,
                            title: "My car's old but it never...........",
                            answerA: "breaks down",
                            answerB: "break down",
                            answerC: "get down",
                            answerD: "gets down",
                            answer: "breaks down",
                        },
                        {
                            ID: 13,
                            title: "Lots of tulips..........grown in Holland",
                            answerA: "is",
                            answerB: "are",
                            answerC: "have",
                            answerD: "has",
                            answer: "are",
                        },
                        {
                            ID: 14,
                            title: "this room is used ......... meetings.",
                            answerA: "for",
                            answerB: "by",
                            answerC: "to",
                            answerD: "as",
                            answer: "for",
                        },
                        {
                            ID: 15,
                            title: "My mother is a little .......... now.",
                            answerA: "spots",
                            answerB: "wrinkled",
                            answerC: "wrinkle",
                            answerD: "wrinkles",
                            answer: "wrinkled",
                        },
                        {
                            ID: 16,
                            title: "Sister Wendy not only  loves God and art but also..........good food and wine.",
                            answerA: "hates",
                            answerB: "dislikes",
                            answerC: "enjoys",
                            answerD: "perfers",
                            answer: "enjoys",
                        },
                        {
                            ID: 17,
                            title: "I..........what you mean.",
                            answerA: "am not understanding",
                            answerB: "don't understand",
                            answerC: "didn't understand",
                            answerD: "haven't understood",
                            answer: "don't understand",
                        },
                        {
                            ID: 18,
                            title: "About one thousand people are made ......... in that factory.",
                            answerA: "employed",
                            answerB: "worked",
                            answerC: "lost their job",
                            answerD: "redundant",
                            answer: "redundant",
                        },
                        {
                            ID: 19,
                            title: "Look..........that strange man over there! What's he doing?.",
                            answerA: "after",
                            answerB: "for",
                            answerC: "at",
                            answerD: "up",
                            answer: "at",
                        },
                        {
                            ID: 20,
                            title: "......... people don't think of other people.",
                            answerA: "mean",
                            answerB: "selfish",
                            answerC: "tolerant",
                            answerD: "generous",
                            answer: "selfish",
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
        this.state.list.forEach((item, i) => html += `<li class='active'><a href='#' data-id=${i}>R${i + 1} - Test ${i + 1}</a></li>`);
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
            } else {
                let {list, index, lastResult} = this.state;
                const result = $('#app-content').find('input[type="radio"]:checked');
                if (result.length === list[index].questions.length) {
                    let val;                    

                    list[index].questions.map((item, i) => {
                        val = $(result[i]).val();
                        if (item.answer === val) {
                            lastResult += 1;
                            $(result[i]).parent().css('color', 'green').append('<i style="margin-left: 12px" class="ion ion-checkmark-round"></i>');
                        } else {
                            $(result[i]).parent().css('color', 'red').append('<i style="margin-left: 12px" class="ion ion-close-round"></i>');
                        }
                    })

                    swal(
                        `Correct: ${lastResult} / ${list[0].questions.length}`,
                        `Total scores: ${Math.ceil(lastResult / list[0].questions.length * 100)}`,
                        "success");

                    this.state.lastResult = lastResult;
                } else {
                    swal('Message', 'You should answer all questions before view result!', 'error');
                }
            }
        })
        // retry
        $('#btn-retry').on('click', (e) => {
            e.preventDefault();
            this.retry();
        })
        // change page
        const that = this;
        $('#dt-list').find('a').on('click', function (e) {
            e.preventDefault();
            that.state.index = $(this).data('id');
            that.render();
            return;
        })
    }
    retry() {
        this.state.lastResult = 0;
        this.render();
    }
    render() {
        const {list, index} = this.state;

        $('#title').html(`R${index + 1} - Test ${index + 1}`);
        //
        let html = '';
        list[index].questions.map((item, i) => (
            html += `<div>
                        <div class="question-title">
                            <h4>Question ${i + 1}</h4>
                        </div>
                        <div style="margin-top: 15px;">
                            <h5>${i + 1}. ${item.title}</h5>
                            <ul>
                                <li><label><input type="radio" name=${i} value="${item.answerA}" /> A.${item.answerA}</label></li>
                                <li><label><input type="radio" name=${i} value="${item.answerB}" /> B.${item.answerB}</label></li>
                                <li><label><input type="radio" name=${i} value="${item.answerC}" /> C.${item.answerC}</label></li>
                                <li><label><input type="radio" name=${i} value="${item.answerD}" /> D.${item.answerD}</label></li>
                            </ul>
                        </div>
                    </div>`
        ));
        $('#app-content').html(html);
    }
}
new RVocabulary().deploy();