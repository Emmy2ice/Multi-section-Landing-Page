const articleOne = document.getElementById('article-1');
const articleTwo = document.getElementById('article-2');
const articleThree = document.getElementById('article-3');
const firstNav = document.getElementById('s-t-1');
const secondNav = document.getElementById('s-t-2');
const thirdNav = document.getElementById('s-t-3');

firstNav.textContent = 'ARTICLE ONE';
secondNav.textContent = 'ARTICLE TWO';
thirdNav.textContent = 'ARTICLE THREE';

firstNav.addEventListener('click', function(){
    articleOne.scrollIntoView({behavior:'smooth'});
});

secondNav.addEventListener('click', function(){
    articleTwo.scrollIntoView({behavior:'smooth'});
});

thirdNav.addEventListener('click', function(){
    articleThree.scrollIntoView({behavior:'smooth'});
});

articleOne.textContent = 'This is an assignment to check my understanding of how to manipulate\
            the DOM. I have been just too occupied to do this and this assignment is long\
            over due. However, today, I am promising myself that I will finish this\
            assignment in good time so I can move on to the next project next week.\
            I really want to be a good front end engineer. I really want to.\
            This is an assignment to check my understanding of how to manipulate\
            the DOM. I have been just too occupied to do this and this assignment is long\
            over due. However, today, I am promising myself that I will finish this\
            assignment in good time so I can move on to the next project next week.\
            I really want to be a good front end engineer. I really want to.\
            This is an assignment to check my understanding of how to manipulate\
            the DOM. I have been just too occupied to do this and this assignment is long\
            over due. However, today, I am promising myself that I will finish this\
            assignment in good time so I can move on to the next project next week.\
            I really want to be a good front end engineer. I really want to.';

articleTwo.textContent = 'This is an assignment to check my understanding of how to manipulate\
            the DOM. I have been just too occupied to do this and this assignment is long\
            over due. However, today, I am promising myself that I will finish this\
            assignment in good time so I can move on to the next project next week.\
            I really want to be a good front end engineer. I really want to.\
            This is an assignment to check my understanding of how to manipulate\
            the DOM. I have been just too occupied to do this and this assignment is long\
            over due. However, today, I am promising myself that I will finish this\
            assignment in good time so I can move on to the next project next week.\
            I really want to be a good front end engineer. I really want to.\
            This is an assignment to check my understanding of how to manipulate\
            the DOM. I have been just too occupied to do this and this assignment is long\
            over due. However, today, I am promising myself that I will finish this\
            assignment in good time so I can move on to the next project next week.\
            I really want to be a good front end engineer. I really want to.';
             
articleThree.textContent = 'This is an assignment to check my understanding of how to manipulate\
            the DOM. I have been just too occupied to do this and this assignment is long\
            over due. However, today, I am promising myself that I will finish this\
            assignment in good time so I can move on to the next project next week.\
            I really want to be a good front end engineer. I really want to.\
            This is an assignment to check my understanding of how to manipulate\
            the DOM. I have been just too occupied to do this and this assignment is long\
            over due. However, today, I am promising myself that I will finish this\
            assignment in good time so I can move on to the next project next week.\
            I really want to be a good front end engineer. I really want to.\
            This is an assignment to check my understanding of how to manipulate\
            the DOM. I have been just too occupied to do this and this assignment is long\
            over due. However, today, I am promising myself that I will finish this\
            assignment in good time so I can move on to the next project next week.\
            I really want to be a good front end engineer. I really want to.'  