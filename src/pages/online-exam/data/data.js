export const data = [
    {
        category: "verbal",
        total_questions: 10,
        duration: 1,
        questions: [
            {
                question_text: ["What is the Capital of India?","hi"],
                question_image: ["https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"],
                isVisited: false,
                marks: 1,
                negative_marks: 0,
                isAnswered: false,
                options: [
                    {
                        option: "New Delhi",
                        correct: true,
                        isSelecetd: false,
                        option_image: ""
                    },
                    {
                        option: "Mumbai",
                        correct: false,
                        isSelecetd: false,
                        option_image: ""
                    },
                    {
                        option: "Chennai",
                        correct: false,
                        isSelecetd: false,
                        option_image: ""
                    },

                ]
            },
            {
                question_text: ["What is the Capital of West Bengal?"],
                question_image: [],
                isVisited: false,
                marks: 2,
                negative_marks: 0,
                isAnswered: false,
                options: [
                    {
                        option: "Kolkata",
                        correct: true,
                        isSelecetd: false,
                        option_image: ""
                    },
                    {
                        option: "Mumbai",
                        correct: false,
                        isSelecetd: false,
                        option_image: ""
                    },
                    {
                        option: "Bangalore",
                        correct: false,
                        isSelecetd: false,
                        option_image: ""
                    },
                ]
            },
                       {
                question_text: ["What is the Capital of India?"],
                question_image: [],
                isVisited: false,
                marks: 1,
                negative_marks: 0,
                isAnswered: false,
                options: [
                    {
                        option: "New Delhi",
                        correct: true,
                        isSelecetd: false,
                        option_image: ""
                    },
                    {
                        option: "Mumbai",
                        correct: false,
                        isSelecetd: false,
                        option_image: ""
                    },
                    {
                        option: "Chennai",
                        correct: false,
                        isSelecetd: false,
                        option_image: ""
                    },

                ]
            },
            {
                question_text: ["What is the Capital of West Bengal?"],
                question_image: [],
                isVisited: false,
                marks: 2,
                negative_marks: 0,
                isAnswered: false,
                options: [
                    {
                        option: "Kolkata",
                        correct: true,
                        isSelecetd: false,
                        option_image: ""
                    },
                    {
                        option: "Mumbai",
                        correct: false,
                        isSelecetd: false,
                        option_image: ""
                    },
                    {
                        option: "Bangalore",
                        correct: false,
                        isSelecetd: false,
                        option_image: ""
                    },
                ]
            },
           
        
        
        ]
    }
    ,
    {
        category: "logical",
        total_questions: 10,
        duration: 0,
        questions: [
            {
                question_text: ["What is output of 5 + 10 ?"],
                question_image: [],
                isVisited: false,
                marks: 3,
                negative_marks: 0,
                isAnswered: false,
                options: [
                    {
                        option: "15",
                        correct: true,
                        isSelecetd: false,
                        option_image: ""
                    },
                    {
                        option: "20",
                        correct: false,
                        isSelecetd: false,
                        option_image: ""
                    },
                    {
                        option: "25",
                        correct: false,
                        isSelecetd: false,
                        option_image: ""
                    },
                ]
            },
            {
                question_text: ["What is output of 58 + 110 ?"],
                question_image: [],
                isVisited: false,
                 marks: 1,
                negative_marks: 0,
                isAnswered: false,
                options: [
                    {
                        option: "158",
                        correct: true,
                        isSelecetd: false,
                        option_image: ""
                    },
                    {
                        option: "168",
                        correct: false,
                        isSelecetd: false,
                        option_image: ""
                    },
                    {
                        option: "178",
                        correct: false,
                        isSelecetd: false,
                        option_image: ""
                    },
                ]
            },
        ]
    },
    {
        category: "programming",
        total_questions: 10,
        duration: 0,
        questions: [
            {
                question_text: ["What is output of 5 + 10 ?"],
                question_image: [],
                isVisited: false,
                marks: 3,
                negative_marks: 0,
                isAnswered: false,
                options: [
                    {
                        option: "15",
                        correct: true,
                        isSelecetd: false,
                        option_image: ""
                    },
                    {
                        option: "20",
                        correct: false,
                        isSelecetd: false,
                        option_image: ""
                    },
                    {
                        option: "25",
                        correct: false,
                        isSelecetd: false,
                        option_image: ""
                    },
                ]
            },
           
        ]
                
    }
    ,
    {
        category: "coding",
        total_questions: 4,
        duration: 0,
        questions: [
            {
                question_text: "You have been given an array A of size N consisting of positive integers. "
                                +"You need to find and print the product of all the number in this array Modulo 10^9 + 7. "
                ,
                inputFormat: " The first line contains a single integer N denoting the size of the array. "
                                +"The next line contains N space separated integers denoting the elements of the array",
                outputFormat: "Print a single integer denoting the product of all the elements of the array Modulo 10^9 +7 . ",
                constraintText: "1 < N < 10^3 \n \n 1 < A[i] < 10^3",
                constraintImage:"",
                question_image: [""],
                sampleInputOutput: [
                    {
                        input: "5 \n 1 2 3 4 5",
                        output: "120"
                    },
                    {
                        input: "4 \n 1 2 3 4",
                        output: "24"
                    },
   
                ],
                
                explanations: "The product of all the elements of the array is 1*2*3*4*5 = 120",
            },
            {

            }
        ]
    }

]