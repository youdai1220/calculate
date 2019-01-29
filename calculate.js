(function(){
    'use strict';
    const Level1Button=document.getElementById('level1');
    const Level2Button=document.getElementById('level2');
    const Level3Button=document.getElementById('level3');
    const Level4Button=document.getElementById('level4');
    const Level5Button=document.getElementById('level5');
    const Level6Button=document.getElementById('level6');
    const Level7Button=document.getElementById('level7');
    const Level8Button=document.getElementById('level8');
    const Level9Button=document.getElementById('level9');
    const questionDivided=document.getElementById('question-area');
    const Answer1Input=document.getElementById('Answer1');
    const Answer2Input=document.getElementById('Answer2')
    const Answer3Input=document.getElementById('Answer3')
    const Answer4Input=document.getElementById('Answer4')
    const Answer5Input=document.getElementById('Answer5')
    const Answer6Input=document.getElementById('Answer6')
    const Answer7Input=document.getElementById('Answer7')
    const Answer8Input=document.getElementById('Answer8')
    const Answer9Input=document.getElementById('Answer9')
    const Answer10Input=document.getElementById('Answer10')    
    const checkButton=document.getElementById('check');
    const answerDivided=document.getElementById('answer-area');    
    const AnswerDivided=document.getElementById('Answer-area');

checkButton.onclick=()=>{
        alert('挑戦するレベルを選択してください。');
        return;
};//onclick 注意

Level1Button.onclick=()=>{
    /**
    * 指定した要素の子どもを全て除去する
    * @param {HTMLElement} element HTMLの要素
    */
   function removeAllChildren(element){
    while (element.firstChild){ // 子どもの要素があるかぎり除去
        element.removeChild(element.firstChild);
    };//While
};//function

    removeAllChildren(questionDivided);
    　　const header=document.createElement('h3');
    　　header.innerText='問題';
    　　questionDivided.appendChild(header);
        var min=0;
        var max=5;
    for(var i=0;i<5;i++){
        var Question='a!b';
        var a=Math.floor(Math.random()*(max+1-min))+min;
        var b=Math.floor(Math.random()*(max+1-min))+min;
        var items = ['＋', 'ー'];
        var random = Math.floor( Math.random() * items.length );
        Question=Question.replace(/a/g,a);
        Question=Question.replace(/b/g,b);
        Question=Question.replace(/!/g,items[random]);
    
        var paragraph=document.createElement('span');
    
        if(random===0){
            var answer=a+b;
        }else if(random===1){
            var answer=a-b;
            if(answer<0){
                var i=i-1
                continue;
            }
        }
        
        if(i===0){
            var answer1=answer;
        }else if(i===1){
            var answer2=answer;
        }else if(i===2){
            var answer3=answer;
        }else if(i===3){
            var answer4=answer;
        }else if(i===4){
            var answer5=answer;
        }
        
        console.log(answer);
        paragraph.innerText='('+(i+1)+')'+' '+Question+'　';
        questionDivided.appendChild(paragraph);
    };//for
    
       

  //答え合わせエリア
  checkButton.onclick = () => {
const Answer1=Answer1Input.value;
const Answer2=Answer2Input.value;
const Answer3=Answer3Input.value;
const Answer4=Answer4Input.value;
const Answer5=Answer5Input.value;

if(Answer1.length===0||Answer2.length===0||Answer3.length===0||Answer4.length===0||Answer5.length===0) {
 alert('答えを入力してください。')  
 return;
};

var test1=isNaN(Answer1);
var test2=isNaN(Answer2);
var test3=isNaN(Answer3);
var test4=isNaN(Answer4);
var test5=isNaN(Answer5);
if(test1===true||test2===true||test3===true||test4===true||test5===true){
    alert('入力された文字列は無効です。有効なのは半角で入力された数字だけです。')
    return;
};
var result=0;
if(parseInt(Answer1)===answer1){
    var result=result+1;
 };
 if(parseInt(Answer2)===answer2){
    var result=result+1;
 };
 if(parseInt(Answer3)===answer3){
    var result=result+1;
 };
 if(parseInt(Answer4)===answer4){
    var result=result+1;
 };
 if(parseInt(Answer5)===answer5){
    var result=result+1;
 };

 console.log(result);

 if(result<3){
     var Result='ans問正解です。もっと計算力をつけましょう。';
 }else if(result>2&&result<5){
     var Result='ans問正解です。簡単なミスをなくせるようにしましょう。';
 }else if(result=5){
     var Result='全問正解です。この調子で頑張りましょう。'
 };

 Result=Result.replace(/ans/g,result);

 removeAllChildren(answerDivided);
 const header2=document.createElement('h3');
 header2.innerText='結果';
 answerDivided.appendChild(header2);

 const paragraph2=document.createElement('p');
 answerDivided.appendChild(paragraph2);
 paragraph2.innerText=Result;

 removeAllChildren(AnswerDivided);
 const header3=document.createElement('h4');
 header3.innerText='正解一覧';
 AnswerDivided.appendChild(header3);

 const paragraph3=document.createElement('p');
 AnswerDivided.appendChild(paragraph3);
 paragraph3.innerText=' (1) '+answer1+' (2) '+answer2+' (3) '+answer3+' (4) '+answer4+' (5) '+answer5;
};//checkButton  
};//Level1

Level2Button.onclick=()=>{
    /**
    * 指定した要素の子どもを全て除去する
    * @param {HTMLElement} element HTMLの要素
    */
   function removeAllChildren(element){
    while (element.firstChild){ // 子どもの要素があるかぎり除去
        element.removeChild(element.firstChild);
    };//While
};//function

    removeAllChildren(questionDivided);
    　　const header=document.createElement('h3');
    　　header.innerText='問題';
    　　questionDivided.appendChild(header);
        var min=0;
        var max=9;
    for(var i=0;i<10;i++){
        var Question='a!b';
        var a=Math.floor(Math.random()*(max+1-min))+min;
        var b=Math.floor(Math.random()*(max+1-min))+min;
        var items = ['＋', 'ー', 'ｘ'];
        var random = Math.floor( Math.random() * items.length );
        Question=Question.replace(/a/g,a);
        Question=Question.replace(/b/g,b);
        Question=Question.replace(/!/g,items[random]);

        var paragraph=document.createElement('span');
    
        if(random===0){
            var answer=a+b;
        }else if(random===1){
            var answer=a-b;
            if(answer<0){
                var i=i-1
                continue;
            }
        }else if(random===2){
            var answer=a*b;
        };
    
        
        if(i===0){
            var answer1=answer;
        }else if(i===1){
            var answer2=answer;
        }else if(i===2){
            var answer3=answer;
        }else if(i===3){
            var answer4=answer;
        }else if(i===4){
            var answer5=answer;
        }else if(i===5){
    　　　　 var answer6=answer;
        }else if(i===6){
            var answer7=answer;
        }else if(i===7){
            var answer8=answer;
        }else if(i===8){
            var answer9=answer;
        }else if(i===9){
            var answer10=answer;
        };
    
        
        console.log(answer);
        paragraph.innerText='('+(i+1)+')'+' '+Question+'　';
        questionDivided.appendChild(paragraph);
    };//for
    
       

  //答え合わせエリア
  checkButton.onclick = () => {
const Answer1=Answer1Input.value;
const Answer2=Answer2Input.value;
const Answer3=Answer3Input.value;
const Answer4=Answer4Input.value;
const Answer5=Answer5Input.value;
const Answer6=Answer6Input.value;
const Answer7=Answer7Input.value;
const Answer8=Answer8Input.value;
const Answer9=Answer9Input.value;
const Answer10=Answer10Input.value;
if(Answer1.length===0||Answer2.length===0||Answer3.length===0||Answer4.length===0||Answer5.length===0||Answer6.length===0||Answer7.length===0||Answer8.length===0||Answer9.length===0||Answer10.length===0) {
 alert('答えを入力してください。')  
 return;
};

var test1=isNaN(Answer1);
var test2=isNaN(Answer2);
var test3=isNaN(Answer3);
var test4=isNaN(Answer4);
var test5=isNaN(Answer5);
var test6=isNaN(Answer6);
var test7=isNaN(Answer7);
var test8=isNaN(Answer8);
var test9=isNaN(Answer9);    
var test10=isNaN(Answer10); 
if(test1===true||test2===true||test3===true||test4===true||test5===true||test6===true||test7===true||test8===true||test9===true||test10===true){
    alert('入力された文字列は無効です。有効なのは半角で入力された数字だけです。')
    return;
};
var result=0;
if(parseInt(Answer1)===answer1){
    var result=result+1;
 };
 if(parseInt(Answer2)===answer2){
    var result=result+1;
 };
 if(parseInt(Answer3)===answer3){
    var result=result+1;
 };
 if(parseInt(Answer4)===answer4){
    var result=result+1;
 };
 if(parseInt(Answer5)===answer5){
    var result=result+1;
 };
 if(parseInt(Answer6)===answer6){
    var result=result+1;
 };
 if(parseInt(Answer7)===answer7){
    var result=result+1;
 };
 if(parseInt(Answer8)===answer8){
    var result=result+1;
 };
 if(parseInt(Answer9)===answer9){
    var result=result+1;
 };
 if(parseInt(Answer10)===answer10){
    var result=result+1;
 };
 console.log(result);

 if(result<7){
     var Result='ans問正解です。もっと計算力をつけましょう。';
 }else if(result>6&&result<10){
     var Result='ans問正解です。簡単なミスをなくせるようにしましょう。';
 }else if(result=10){
     var Result='全問正解です。この調子で頑張りましょう。'
 };

 Result=Result.replace(/ans/g,result);

 removeAllChildren(answerDivided);
 const header2=document.createElement('h3');
 header2.innerText='結果';
 answerDivided.appendChild(header2);

 const paragraph2=document.createElement('p');
 answerDivided.appendChild(paragraph2);
 paragraph2.innerText=Result;

 removeAllChildren(AnswerDivided);
 const header3=document.createElement('h4');
 header3.innerText='正解一覧';
 AnswerDivided.appendChild(header3);

 const paragraph3=document.createElement('p');
 AnswerDivided.appendChild(paragraph3);
 paragraph3.innerText=' (1) '+answer1+' (2) '+answer2+' (3) '+answer3+' (4) '+answer4+' (5) '+answer5+' (6) '+answer6+' (7) '+answer7+' (8) '+answer8+' (9) '+answer9+' (10) '+answer10;
};//checkButton  
};//Level2

Level3Button.onclick=()=>{
    /**
    * 指定した要素の子どもを全て除去する
    * @param {HTMLElement} element HTMLの要素
    */
   function removeAllChildren(element){
    while (element.firstChild){ // 子どもの要素があるかぎり除去
        element.removeChild(element.firstChild);
    };//While
};//function

    removeAllChildren(questionDivided);
    　　const header=document.createElement('h3');
    　　header.innerText='問題';
    　　questionDivided.appendChild(header);
        var min=0;
        var max=99;
        var max2=9;
    for(var i=0;i<10;i++){
        var Question='a!b';
        var a=Math.floor(Math.random()*(max+1-min))+min;
        var b=Math.floor(Math.random()*(max2+1-min))+min;
        var items = ['＋', 'ー', 'ｘ'];
        var random = Math.floor( Math.random() * items.length );
        Question=Question.replace(/a/g,a);
        Question=Question.replace(/b/g,b);
        Question=Question.replace(/!/g,items[random]);
    
        var paragraph=document.createElement('span');
    
        if(random===0){
            var answer=a+b;
        }else if(random===1){
            var answer=a-b;
            if(answer<0){
                var i=i-1
                continue;
            }
        }else if(random===2){
            var answer=a*b;
        };
    
        
        if(i===0){
            var answer1=answer;
        }else if(i===1){
            var answer2=answer;
        }else if(i===2){
            var answer3=answer;
        }else if(i===3){
            var answer4=answer;
        }else if(i===4){
            var answer5=answer;
        }else if(i===5){
    　　　　 var answer6=answer;
        }else if(i===6){
            var answer7=answer;
        }else if(i===7){
            var answer8=answer;
        }else if(i===8){
            var answer9=answer;
        }else if(i===9){
            var answer10=answer;
        };
    
        
        console.log(answer);
        paragraph.innerText='('+(i+1)+')'+' '+Question+'　';
        questionDivided.appendChild(paragraph);
    };//for
    
       

  //答え合わせエリア
  checkButton.onclick = () => {
const Answer1=Answer1Input.value;
const Answer2=Answer2Input.value;
const Answer3=Answer3Input.value;
const Answer4=Answer4Input.value;
const Answer5=Answer5Input.value;
const Answer6=Answer6Input.value;
const Answer7=Answer7Input.value;
const Answer8=Answer8Input.value;
const Answer9=Answer9Input.value;
const Answer10=Answer10Input.value;
if(Answer1.length===0||Answer2.length===0||Answer3.length===0||Answer4.length===0||Answer5.length===0||Answer6.length===0||Answer7.length===0||Answer8.length===0||Answer9.length===0||Answer10.length===0) {
 alert('答えを入力してください。')  
 return;
};

var test1=isNaN(Answer1);
var test2=isNaN(Answer2);
var test3=isNaN(Answer3);
var test4=isNaN(Answer4);
var test5=isNaN(Answer5);
var test6=isNaN(Answer6);
var test7=isNaN(Answer7);
var test8=isNaN(Answer8);
var test9=isNaN(Answer9);    
var test10=isNaN(Answer10); 
if(test1===true||test2===true||test3===true||test4===true||test5===true||test6===true||test7===true||test8===true||test9===true||test10===true){
    alert('入力された文字列は無効です。有効なのは半角で入力された数字だけです。')
    return;
};
var result=0;
if(parseInt(Answer1)===answer1){
    var result=result+1;
 };
 if(parseInt(Answer2)===answer2){
    var result=result+1;
 };
 if(parseInt(Answer3)===answer3){
    var result=result+1;
 };
 if(parseInt(Answer4)===answer4){
    var result=result+1;
 };
 if(parseInt(Answer5)===answer5){
    var result=result+1;
 };
 if(parseInt(Answer6)===answer6){
    var result=result+1;
 };
 if(parseInt(Answer7)===answer7){
    var result=result+1;
 };
 if(parseInt(Answer8)===answer8){
    var result=result+1;
 };
 if(parseInt(Answer9)===answer9){
    var result=result+1;
 };
 if(parseInt(Answer10)===answer10){
    var result=result+1;
 };
 console.log(result);

 if(result<7){
     var Result='ans問正解です。もっと計算力をつけましょう。';
 }else if(result>6&&result<10){
     var Result='ans問正解です。簡単なミスをなくせるようにしましょう。';
 }else if(result=10){
     var Result='全問正解です。この調子で頑張りましょう。'
 };

 Result=Result.replace(/ans/g,result);

 removeAllChildren(answerDivided);
 const header2=document.createElement('h3');
 header2.innerText='結果';
 answerDivided.appendChild(header2);

 const paragraph2=document.createElement('p');
 answerDivided.appendChild(paragraph2);
 paragraph2.innerText=Result;

 removeAllChildren(AnswerDivided);
 const header3=document.createElement('h4');
 header3.innerText='正解一覧';
 AnswerDivided.appendChild(header3);

 const paragraph3=document.createElement('p');
 AnswerDivided.appendChild(paragraph3);
 paragraph3.innerText=' (1) '+answer1+' (2) '+answer2+' (3) '+answer3+' (4) '+answer4+' (5) '+answer5+' (6) '+answer6+' (7) '+answer7+' (8) '+answer8+' (9) '+answer9+' (10) '+answer10;
};//checkButton  
};//Level3

Level4Button.onclick=()=>{
    /**
    * 指定した要素の子どもを全て除去する
    * @param {HTMLElement} element HTMLの要素
    */
   function removeAllChildren(element){
    while (element.firstChild){ // 子どもの要素があるかぎり除去
        element.removeChild(element.firstChild);
    };//While
};//function

    removeAllChildren(questionDivided);
    　　const header=document.createElement('h3');
    　　header.innerText='問題';
    　　questionDivided.appendChild(header);
        var min=0;
        var max=99;
    for(var i=0;i<10;i++){
        var Question='a!b';
        var a=Math.floor(Math.random()*(max+1-min))+min;
        var b=Math.floor(Math.random()*(max+1-min))+min;
        var items = ['＋', 'ー', 'ｘ'];
        var random = Math.floor( Math.random() * items.length );
        Question=Question.replace(/a/g,a);
        Question=Question.replace(/b/g,b);
        Question=Question.replace(/!/g,items[random]);
    
        var paragraph=document.createElement('span');
    
        if(random===0){
            var answer=a+b;
        }else if(random===1){
            var answer=a-b;
            if(answer<0){
                var i=i-1
                continue;
            }
        }else if(random===2){
            var answer=a*b;
        };
    
        
        if(i===0){
            var answer1=answer;
        }else if(i===1){
            var answer2=answer;
        }else if(i===2){
            var answer3=answer;
        }else if(i===3){
            var answer4=answer;
        }else if(i===4){
            var answer5=answer;
        }else if(i===5){
    　　　　 var answer6=answer;
        }else if(i===6){
            var answer7=answer;
        }else if(i===7){
            var answer8=answer;
        }else if(i===8){
            var answer9=answer;
        }else if(i===9){
            var answer10=answer;
        };
    
        
        console.log(answer);
        paragraph.innerText='('+(i+1)+')'+' '+Question+'　';
        questionDivided.appendChild(paragraph);
    };//for
    
       

  //答え合わせエリア
  checkButton.onclick = () => {
const Answer1=Answer1Input.value;
const Answer2=Answer2Input.value;
const Answer3=Answer3Input.value;
const Answer4=Answer4Input.value;
const Answer5=Answer5Input.value;
const Answer6=Answer6Input.value;
const Answer7=Answer7Input.value;
const Answer8=Answer8Input.value;
const Answer9=Answer9Input.value;
const Answer10=Answer10Input.value;
if(Answer1.length===0||Answer2.length===0||Answer3.length===0||Answer4.length===0||Answer5.length===0||Answer6.length===0||Answer7.length===0||Answer8.length===0||Answer9.length===0||Answer10.length===0) {
 alert('答えを入力してください。')  
 return;
};

var test1=isNaN(Answer1);
var test2=isNaN(Answer2);
var test3=isNaN(Answer3);
var test4=isNaN(Answer4);
var test5=isNaN(Answer5);
var test6=isNaN(Answer6);
var test7=isNaN(Answer7);
var test8=isNaN(Answer8);
var test9=isNaN(Answer9);    
var test10=isNaN(Answer10); 
if(test1===true||test2===true||test3===true||test4===true||test5===true||test6===true||test7===true||test8===true||test9===true||test10===true){
    alert('入力された文字列は無効です。有効なのは半角で入力された数字だけです。')
    return;
};
var result=0;
if(parseInt(Answer1)===answer1){
    var result=result+1;
 };
 if(parseInt(Answer2)===answer2){
    var result=result+1;
 };
 if(parseInt(Answer3)===answer3){
    var result=result+1;
 };
 if(parseInt(Answer4)===answer4){
    var result=result+1;
 };
 if(parseInt(Answer5)===answer5){
    var result=result+1;
 };
 if(parseInt(Answer6)===answer6){
    var result=result+1;
 };
 if(parseInt(Answer7)===answer7){
    var result=result+1;
 };
 if(parseInt(Answer8)===answer8){
    var result=result+1;
 };
 if(parseInt(Answer9)===answer9){
    var result=result+1;
 };
 if(parseInt(Answer10)===answer10){
    var result=result+1;
 };
 console.log(result);

 if(result<7){
     var Result='ans問正解です。もっと計算力をつけましょう。';
 }else if(result>6&&result<10){
     var Result='ans問正解です。簡単なミスをなくせるようにしましょう。';
 }else if(result=10){
     var Result='全問正解です。この調子で頑張りましょう。'
 };

 Result=Result.replace(/ans/g,result);

 removeAllChildren(answerDivided);
 const header2=document.createElement('h3');
 header2.innerText='結果';
 answerDivided.appendChild(header2);

 const paragraph2=document.createElement('p');
 answerDivided.appendChild(paragraph2);
 paragraph2.innerText=Result;

 removeAllChildren(AnswerDivided);
 const header3=document.createElement('h4');
 header3.innerText='正解一覧';
 AnswerDivided.appendChild(header3);

 const paragraph3=document.createElement('p');
 AnswerDivided.appendChild(paragraph3);
 paragraph3.innerText=' (1) '+answer1+' (2) '+answer2+' (3) '+answer3+' (4) '+answer4+' (5) '+answer5+' (6) '+answer6+' (7) '+answer7+' (8) '+answer8+' (9) '+answer9+' (10) '+answer10;
};//checkButton  
};//Level4

Level5Button.onclick=()=>{
    /**
    * 指定した要素の子どもを全て除去する
    * @param {HTMLElement} element HTMLの要素
    */
   function removeAllChildren(element){
    while (element.firstChild){ // 子どもの要素があるかぎり除去
        element.removeChild(element.firstChild);
    };//While
};//function

    removeAllChildren(questionDivided);
    　　const header=document.createElement('h3');
    　　header.innerText='問題';
    　　questionDivided.appendChild(header);

    for(var i=0;i<10;i++){
        var min=2;
        var max=500;
        var max2=50;
        var Question='a÷b';
        var a=Math.floor(Math.random()*(max+1-min))+min;
        var b=Math.floor(Math.random()*(max2+1-min))+min;
        Question=Question.replace(/a/g,a);
        Question=Question.replace(/b/g,b);
    
        var paragraph=document.createElement('span');
        console.log(a%b);
    
        if((a%b)>0){
            var i=i-1;
            continue;
        }else{
            var answer=a/b;
        };
    
        
        if(i===0){
            var answer1=answer;
        }else if(i===1){
            var answer2=answer;
        }else if(i===2){
            var answer3=answer;
        }else if(i===3){
            var answer4=answer;
        }else if(i===4){
            var answer5=answer;
        }else if(i===5){
    　　　　 var answer6=answer;
        }else if(i===6){
            var answer7=answer;
        }else if(i===7){
            var answer8=answer;
        }else if(i===8){
            var answer9=answer;
        }else if(i===9){
            var answer10=answer;
        };
    
        
        console.log(answer);
        paragraph.innerText='('+(i+1)+')'+' '+Question+'　';
        questionDivided.appendChild(paragraph);
    };//for
    
       

  //答え合わせエリア
  checkButton.onclick = () => {
const Answer1=Answer1Input.value;
const Answer2=Answer2Input.value;
const Answer3=Answer3Input.value;
const Answer4=Answer4Input.value;
const Answer5=Answer5Input.value;
const Answer6=Answer6Input.value;
const Answer7=Answer7Input.value;
const Answer8=Answer8Input.value;
const Answer9=Answer9Input.value;
const Answer10=Answer10Input.value;
if(Answer1.length===0||Answer2.length===0||Answer3.length===0||Answer4.length===0||Answer5.length===0||Answer6.length===0||Answer7.length===0||Answer8.length===0||Answer9.length===0||Answer10.length===0) {
 alert('答えを入力してください。')  
 return;
};

var test1=isNaN(Answer1);
var test2=isNaN(Answer2);
var test3=isNaN(Answer3);
var test4=isNaN(Answer4);
var test5=isNaN(Answer5);
var test6=isNaN(Answer6);
var test7=isNaN(Answer7);
var test8=isNaN(Answer8);
var test9=isNaN(Answer9);    
var test10=isNaN(Answer10); 
if(test1===true||test2===true||test3===true||test4===true||test5===true||test6===true||test7===true||test8===true||test9===true||test10===true){
    alert('入力された文字列は無効です。有効なのは半角で入力された数字だけです。')
    return;
};
var result=0;
if(parseInt(Answer1)===answer1){
    var result=result+1;
 };
 if(parseInt(Answer2)===answer2){
    var result=result+1;
 };
 if(parseInt(Answer3)===answer3){
    var result=result+1;
 };
 if(parseInt(Answer4)===answer4){
    var result=result+1;
 };
 if(parseInt(Answer5)===answer5){
    var result=result+1;
 };
 if(parseInt(Answer6)===answer6){
    var result=result+1;
 };
 if(parseInt(Answer7)===answer7){
    var result=result+1;
 };
 if(parseInt(Answer8)===answer8){
    var result=result+1;
 };
 if(parseInt(Answer9)===answer9){
    var result=result+1;
 };
 if(parseInt(Answer10)===answer10){
    var result=result+1;
 };
 console.log(result);

 if(result<7){
     var Result='ans問正解です。もっと計算力をつけましょう。';
 }else if(result>6&&result<10){
     var Result='ans問正解です。簡単なミスをなくせるようにしましょう。';
 }else if(result=10){
     var Result='全問正解です。この調子で頑張りましょう。'
 };

 Result=Result.replace(/ans/g,result);

 removeAllChildren(answerDivided);
 const header2=document.createElement('h3');
 header2.innerText='結果';
 answerDivided.appendChild(header2);

 const paragraph2=document.createElement('p');
 answerDivided.appendChild(paragraph2);
 paragraph2.innerText=Result;

 removeAllChildren(AnswerDivided);
 const header3=document.createElement('h4');
 header3.innerText='正解一覧';
 AnswerDivided.appendChild(header3);

 const paragraph3=document.createElement('p');
 AnswerDivided.appendChild(paragraph3);
 paragraph3.innerText=' (1) '+answer1+' (2) '+answer2+' (3) '+answer3+' (4) '+answer4+' (5) '+answer5+' (6) '+answer6+' (7) '+answer7+' (8) '+answer8+' (9) '+answer9+' (10) '+answer10;
};//checkButton  
};//Level5

Level6Button.onclick=()=>{
    /**
    * 指定した要素の子どもを全て除去する
    * @param {HTMLElement} element HTMLの要素
    */
   function removeAllChildren(element){
    while (element.firstChild){ // 子どもの要素があるかぎり除去
        element.removeChild(element.firstChild);
    };//While
};//function

    removeAllChildren(questionDivided);
    　　const header=document.createElement('h3');
    　　header.innerText='問題';
    　　questionDivided.appendChild(header);

    for(var i=0;i<6;i++){
        var min=1;
        var max=20;
        var Question='a#b@c%d';
        var a=Math.floor(Math.random()*(max+1-min))+min;
        var b=Math.floor(Math.random()*(max+1-min))+min;
        var c=Math.floor(Math.random()*(max+1-min))+min;
        var d=Math.floor(Math.random()*(max+1-min))+min;

        var items=['+', '-','*','/'];
        var e=Math.floor(Math.random()*items.length);
        var f=Math.floor(Math.random()*items.length);
        var g=Math.floor(Math.random()*items.length);

        Question=Question.replace(/a/g,a);
        Question=Question.replace(/b/g,b);
        Question=Question.replace(/c/g,c);
        Question=Question.replace(/d/g,d);
        Question=Question.replace(/#/g,items[e]);
        Question=Question.replace(/@/g,items[f]);
        Question=Question.replace(/%/g,items[g]);
    
        var paragraph=document.createElement('span');

        var answer = safeEval(Question);

            function safeEval(val){
                return Function('"use strict";return ('+val+')')();
        };

        if(Number.isInteger(answer)===false||answer<0){
            var i=i-1;
            continue;
        };
        console.log(answer);

        Question=Question.replace(/[+]/g,'＋');
        Question=Question.replace(/-/g,'－');
        Question=Question.replace(/[*]/g,'ｘ');
        Question=Question.replace(/[/]/g,'÷');

        paragraph.innerText='('+(i+1)+')'+' '+Question+'　';
        questionDivided.appendChild(paragraph);
            
        if(i===0){
            var answer1=answer;
        }else if(i===1){
            var answer2=answer;
        }else if(i===2){
            var answer3=answer;
        }else if(i===3){
            var answer4=answer;
        }else if(i===4){
            var answer5=answer;
        }else if(i===5){
    　　　　 var answer6=answer; 
        };
    };//for
    
  //答え合わせエリア
  checkButton.onclick = () => {
const Answer1=Answer1Input.value;
const Answer2=Answer2Input.value;
const Answer3=Answer3Input.value;
const Answer4=Answer4Input.value;
const Answer5=Answer5Input.value;
const Answer6=Answer6Input.value;
if(Answer1.length===0||Answer2.length===0||Answer3.length===0||Answer4.length===0||Answer5.length===0||Answer6.length===0) {
 alert('答えを入力してください。')  
 return;
};

var test1=isNaN(Answer1);
var test2=isNaN(Answer2);
var test3=isNaN(Answer3);
var test4=isNaN(Answer4);
var test5=isNaN(Answer5);
var test6=isNaN(Answer6);
if(test1===true||test2===true||test3===true||test4===true||test5===true||test6===true){
    alert('入力された文字列は無効です。有効なのは半角で入力された数字だけです。')
    return;
};
var result=0;
if(parseInt(Answer1)===answer1){
    var result=result+1;
 };
 if(parseInt(Answer2)===answer2){
    var result=result+1;
 };
 if(parseInt(Answer3)===answer3){
    var result=result+1;
 };
 if(parseInt(Answer4)===answer4){
    var result=result+1;
 };
 if(parseInt(Answer5)===answer5){
    var result=result+1;
 };
 if(parseInt(Answer6)===answer6){
    var result=result+1;
 };

 console.log(result);

 if(result<4){
     var Result='ans問正解です。もっと計算力をつけましょう。';
 }else if(result>3&&result<6){
     var Result='ans問正解です。簡単なミスをなくせるようにしましょう。';
 }else if(result=6){
     var Result='全問正解です。この調子で頑張りましょう。'
 };

 Result=Result.replace(/ans/g,result);

 removeAllChildren(answerDivided);
 const header2=document.createElement('h3');
 header2.innerText='結果';
 answerDivided.appendChild(header2);

 const paragraph2=document.createElement('p');
 answerDivided.appendChild(paragraph2);
 paragraph2.innerText=Result;

 removeAllChildren(AnswerDivided);
 const header3=document.createElement('h4');
 header3.innerText='正解一覧';
 AnswerDivided.appendChild(header3);

 const paragraph3=document.createElement('p');
 AnswerDivided.appendChild(paragraph3);
 paragraph3.innerText=' (1) '+answer1+' (2) '+answer2+' (3) '+answer3+' (4) '+answer4+' (5) '+answer5+' (6) '+answer6;
};//checkButton  
};//Level6

Level7Button.onclick=()=>{
    /**
    * 指定した要素の子どもを全て除去する
    * @param {HTMLElement} element HTMLの要素
    */
   function removeAllChildren(element){
    while (element.firstChild){ // 子どもの要素があるかぎり除去
        element.removeChild(element.firstChild);
    };//While
};//function

    removeAllChildren(questionDivided);
    　　const header=document.createElement('h3');
    　　header.innerText='問題';
    　　questionDivided.appendChild(header);
        var min=-9;
        var max=9;

        labelA:
    for(var i=0;i<10;i++){
        var a=Math.floor(Math.random()*(max+1-min))+min;
        var b=Math.floor(Math.random()*(max+1-min))+min;
        var items = ['＋', 'ー', 'ｘ','÷','÷'];
        var random = Math.floor( Math.random() * items.length );

    if(b<0){
            var Question='a!'
            Question=Question.replace(/a/g,a);
            Question=Question.replace(/!/g,items[random]);
            Question=Question.replace(/-/g,'ー');
            var Question=Question+'('+b+')';
            Question=Question.replace(/-/g,'ー');
    }else{
        var Question='a!b'
        Question=Question.replace(/a/g,a);
        Question=Question.replace(/!/g,items[random]);
        Question=Question.replace(/b/g,b);
        Question=Question.replace(/-/g,'ー');
    };

        var paragraph=document.createElement('span');

        if(random===0){
            var answer=a+b;
        }else if(random===1){
            var answer=a-b;
        }else if(random===2){
            var answer=a*b;
        }else if(random===3||random===4){
            var answer=a/b;
            if((a%b)>0||((a%b)*-1)>0||b===0){
                var i=i-1;
                continue labelA;
            };
        };
    
       //console.log(answer);
        
        if(i===0){
            var answer1=answer;
        }else if(i===1){
            var answer2=answer;
        }else if(i===2){
            var answer3=answer;
        }else if(i===3){
            var answer4=answer;
        }else if(i===4){
            var answer5=answer;
        }else if(i===5){
    　　　　 var answer6=answer;
        }else if(i===6){
            var answer7=answer;
        }else if(i===7){
            var answer8=answer;
        }else if(i===8){
            var answer9=answer;
        }else if(i===9){
            var answer10=answer;
        };

        paragraph.innerText='('+(i+1)+')'+' '+Question+'　';
        questionDivided.appendChild(paragraph);
    };//for
    
       

  //答え合わせエリア
  checkButton.onclick = () => {
const Answer1=Answer1Input.value;
const Answer2=Answer2Input.value;
const Answer3=Answer3Input.value;
const Answer4=Answer4Input.value;
const Answer5=Answer5Input.value;
const Answer6=Answer6Input.value;
const Answer7=Answer7Input.value;
const Answer8=Answer8Input.value;
const Answer9=Answer9Input.value;
const Answer10=Answer10Input.value;
if(Answer1.length===0||Answer2.length===0||Answer3.length===0||Answer4.length===0||Answer5.length===0||Answer6.length===0||Answer7.length===0||Answer8.length===0||Answer9.length===0||Answer10.length===0) {
 alert('答えを入力してください。')  
 return;
};

var test1=isNaN(Answer1);
var test2=isNaN(Answer2);
var test3=isNaN(Answer3);
var test4=isNaN(Answer4);
var test5=isNaN(Answer5);
var test6=isNaN(Answer6);
var test7=isNaN(Answer7);
var test8=isNaN(Answer8);
var test9=isNaN(Answer9);    
var test10=isNaN(Answer10); 
if(test1===true||test2===true||test3===true||test4===true||test5===true||test6===true||test7===true||test8===true||test9===true||test10===true){
    alert('入力された文字列は無効です。有効なのは半角で入力された数字だけです。')
    return;
};
var result=0;
if(parseInt(Answer1)===answer1){
    var result=result+1;
 };
 if(parseInt(Answer2)===answer2){
    var result=result+1;
 };
 if(parseInt(Answer3)===answer3){
    var result=result+1;
 };
 if(parseInt(Answer4)===answer4){
    var result=result+1;
 };
 if(parseInt(Answer5)===answer5){
    var result=result+1;
 };
 if(parseInt(Answer6)===answer6){
    var result=result+1;
 };
 if(parseInt(Answer7)===answer7){
    var result=result+1;
 };
 if(parseInt(Answer8)===answer8){
    var result=result+1;
 };
 if(parseInt(Answer9)===answer9){
    var result=result+1;
 };
 if(parseInt(Answer10)===answer10){
    var result=result+1;
 };
 console.log(result);

 if(result<7){
     var Result='ans問正解です。もっと計算力をつけましょう。';
 }else if(result>6&&result<10){
     var Result='ans問正解です。簡単なミスをなくせるようにしましょう。';
 }else if(result=10){
     var Result='全問正解です。この調子で頑張りましょう。'
 };

 Result=Result.replace(/ans/g,result);

 removeAllChildren(answerDivided);
 const header2=document.createElement('h3');
 header2.innerText='結果';
 answerDivided.appendChild(header2);

 const paragraph2=document.createElement('p');
 answerDivided.appendChild(paragraph2);
 paragraph2.innerText=Result;

 removeAllChildren(AnswerDivided);
 const header3=document.createElement('h4');
 header3.innerText='正解一覧';
 AnswerDivided.appendChild(header3);

 const paragraph3=document.createElement('p');
 AnswerDivided.appendChild(paragraph3);
 paragraph3.innerText=' (1) '+answer1+' (2) '+answer2+' (3) '+answer3+' (4) '+answer4+' (5) '+answer5+' (6) '+answer6+' (7) '+answer7+' (8) '+answer8+' (9) '+answer9+' (10) '+answer10;
};//checkButton  
};//Level7

Level8Button.onclick=()=>{
    /**
    * 指定した要素の子どもを全て除去する
    * @param {HTMLElement} element HTMLの要素
    */
   function removeAllChildren(element){
    while (element.firstChild){ // 子どもの要素があるかぎり除去
        element.removeChild(element.firstChild);
    };//While
};//function

    removeAllChildren(questionDivided);
    　　const header=document.createElement('h3');
    　　header.innerText='問題';
    　　questionDivided.appendChild(header);
        var min=-9;
        var max=9;

        labelA:
    for(var i=0;i<6;i++){
        var a=Math.floor(Math.random()*(max+1-min))+min;
        var b=Math.floor(Math.random()*(max+1-min))+min;
        var c=Math.floor(Math.random()*(max+1-min))+min;
        var d=Math.floor(Math.random()*(max+1-min))+min;
        var items=['+', '-','*','/','/'];
        var e=Math.floor(Math.random()*items.length);
        var f=Math.floor(Math.random()*items.length);
        var g=Math.floor(Math.random()*items.length);

        var Question='a!'
        Question=Question.replace(/a/g,a);
        Question=Question.replace(/!/g,items[e]);

        if(b<0){
            var Question=Question+'('+b+')';
        }else{
            var Question=Question+b;
        };
        var Question=Question+items[f];
        if(c<0){
            var Question=Question+'('+c+')';
        }else{
            var Question=Question+c;
        };
        var Question=Question+items[g];
        if(d<0){
            var Question=Question+'('+d+')';
        }else{
            var Question=Question+d;
        };

        var paragraph=document.createElement('span'); 

        var answer = safeEval(Question);

        function safeEval(val){
            return Function('"use strict";return ('+val+')')();
        };

        if(Number.isInteger(answer)===false){
        var i=i-1;
        continue;
        };
        console.log(answer);

        if(i===0){
            var answer1=answer;
        }else if(i===1){
            var answer2=answer;
        }else if(i===2){
            var answer3=answer;
        }else if(i===3){
            var answer4=answer;
        }else if(i===4){
            var answer5=answer;
        }else if(i===5){
    　　　　 var answer6=answer;
        }

        Question=Question.replace(/[+]/g,'＋');
        Question=Question.replace(/-/g,'－');
        Question=Question.replace(/[*]/g,'ｘ');
        Question=Question.replace(/[/]/g,'÷');

        paragraph.innerText='('+(i+1)+')'+' '+Question+'　';
        questionDivided.appendChild(paragraph);
    };//for
    
       

  //答え合わせエリア
  checkButton.onclick = () => {
const Answer1=Answer1Input.value;
const Answer2=Answer2Input.value;
const Answer3=Answer3Input.value;
const Answer4=Answer4Input.value;
const Answer5=Answer5Input.value;
const Answer6=Answer6Input.value;
if(Answer1.length===0||Answer2.length===0||Answer3.length===0||Answer4.length===0||Answer5.length===0||Answer6.length===0) {
 alert('答えを入力してください。')  
 return;
};

var test1=isNaN(Answer1);
var test2=isNaN(Answer2);
var test3=isNaN(Answer3);
var test4=isNaN(Answer4);
var test5=isNaN(Answer5);
var test6=isNaN(Answer6);
if(test1===true||test2===true||test3===true||test4===true||test5===true||test6===true){
    alert('入力された文字列は無効です。有効なのは半角で入力された数字だけです。')
    return;
};
var result=0;
if(parseInt(Answer1)===answer1){
    var result=result+1;
 };
 if(parseInt(Answer2)===answer2){
    var result=result+1;
 };
 if(parseInt(Answer3)===answer3){
    var result=result+1;
 };
 if(parseInt(Answer4)===answer4){
    var result=result+1;
 };
 if(parseInt(Answer5)===answer5){
    var result=result+1;
 };
 if(parseInt(Answer6)===answer6){
    var result=result+1;
 };

 if(result<4){
     var Result='ans問正解です。もっと計算力をつけましょう。';
 }else if(result>3&&result<6){
     var Result='ans問正解です。簡単なミスをなくせるようにしましょう。';
 }else if(result=6){
     var Result='全問正解です。この調子で頑張りましょう。'
 };

 Result=Result.replace(/ans/g,result);

 removeAllChildren(answerDivided);
 const header2=document.createElement('h3');
 header2.innerText='結果';
 answerDivided.appendChild(header2);

 const paragraph2=document.createElement('p');
 answerDivided.appendChild(paragraph2);
 paragraph2.innerText=Result;

 removeAllChildren(AnswerDivided);
 const header3=document.createElement('h4');
 header3.innerText='正解一覧';
 AnswerDivided.appendChild(header3);

 const paragraph3=document.createElement('p');
 AnswerDivided.appendChild(paragraph3);
 paragraph3.innerText=' (1) '+answer1+' (2) '+answer2+' (3) '+answer3+' (4) '+answer4+' (5) '+answer5+' (6) '+answer6;
};//checkButton  
};//Level8

Level9Button.onclick=()=>{
    /**
    * 指定した要素の子どもを全て除去する
    * @param {HTMLElement} element HTMLの要素
    */
   function removeAllChildren(element){
    while (element.firstChild){ // 子どもの要素があるかぎり除去
        element.removeChild(element.firstChild);
    };//While
};//function

    removeAllChildren(questionDivided);
    　　const header=document.createElement('h3');
    　　header.innerText='問題';
    　　questionDivided.appendChild(header);
        var min=-9;
        var max=9;

        labelA:
    for(var i=0;i<8;i++){
        var a=Math.floor(((Math.random()*(max+1-min))+min));
        var b=Math.floor(((Math.random()*(max+1-min))+min));
        var items = ['＋', 'ー', 'ｘ','÷','÷','÷'];
        var random = Math.floor( Math.random() * items.length );

    if(b<0){
            var Question='a!'
            Question=Question.replace(/a/g,a/10);
            Question=Question.replace(/!/g,items[random]);
            Question=Question.replace(/-/g,'ー');
            var Question=Question+'('+(b/10)+')';
            Question=Question.replace(/-/g,'ー');
    }else{
        var Question='a!b'
        Question=Question.replace(/a/g,a/10);
        Question=Question.replace(/!/g,items[random]);
        Question=Question.replace(/b/g,b/10);
        Question=Question.replace(/-/g,'ー');
    };

        var paragraph=document.createElement('span');

        if(random===0){
            var answer=(a+b)/10;
        }else if(random===1){
            var answer=(a-b)/10;
        }else if(random===2){
            var answer=(a*b)/100;
        }else if(random===3||random===4||random===5){
            var answer=(a/b);
            if(a%b>0||((a%b)*-1)>0||b===0){
                var i=i-1;
                continue labelA;
            };
        };
       console.log(answer);
        
        if(i===0){
            var answer1=answer;
        }else if(i===1){
            var answer2=answer;
        }else if(i===2){
            var answer3=answer;
        }else if(i===3){
            var answer4=answer;
        }else if(i===4){
            var answer5=answer;
        }else if(i===5){
    　　　　 var answer6=answer;
        }else if(i===6){
            var answer7=answer;
        }else if(i===7){
            var answer8=answer;
        };

        paragraph.innerText='('+(i+1)+')'+' '+Question+'　';
        questionDivided.appendChild(paragraph);
    };//for
    
       

  //答え合わせエリア
  checkButton.onclick = () => {
const Answer1=Answer1Input.value;
const Answer2=Answer2Input.value;
const Answer3=Answer3Input.value;
const Answer4=Answer4Input.value;
const Answer5=Answer5Input.value;
const Answer6=Answer6Input.value;
const Answer7=Answer7Input.value;
const Answer8=Answer8Input.value;
if(Answer1.length===0||Answer2.length===0||Answer3.length===0||Answer4.length===0||Answer5.length===0||Answer6.length===0||Answer7.length===0||Answer8.length===0) {
 alert('答えを入力してください。')  
 return;
};

var test1=isNaN(Answer1);
var test2=isNaN(Answer2);
var test3=isNaN(Answer3);
var test4=isNaN(Answer4);
var test5=isNaN(Answer5);
var test6=isNaN(Answer6);
var test7=isNaN(Answer7);
var test8=isNaN(Answer8); 
if(test1===true||test2===true||test3===true||test4===true||test5===true||test6===true||test7===true||test8===true){
    alert('入力された文字列は無効です。有効なのは半角で入力された数字だけです。')
    return;
};
var result=0;
if(parseInt(Answer1)===answer1){
    var result=result+1;
 };
 if(parseInt(Answer2)===answer2){
    var result=result+1;
 };
 if(parseInt(Answer3)===answer3){
    var result=result+1;
 };
 if(parseInt(Answer4)===answer4){
    var result=result+1;
 };
 if(parseInt(Answer5)===answer5){
    var result=result+1;
 };
 if(parseInt(Answer6)===answer6){
    var result=result+1;
 };
 if(parseInt(Answer7)===answer7){
    var result=result+1;
 };
 if(parseInt(Answer8)===answer8){
    var result=result+1;
 };
 
 console.log(result);

 if(result<6){
     var Result='ans問正解です。もっと計算力をつけましょう。';
 }else if(result>5&&result<8){
     var Result='ans問正解です。簡単なミスをなくせるようにしましょう。';
 }else if(result=8){
     var Result='全問正解です。この調子で頑張りましょう。'
 };

 Result=Result.replace(/ans/g,result);

 removeAllChildren(answerDivided);
 const header2=document.createElement('h3');
 header2.innerText='結果';
 answerDivided.appendChild(header2);

 const paragraph2=document.createElement('p');
 answerDivided.appendChild(paragraph2);
 paragraph2.innerText=Result;

 removeAllChildren(AnswerDivided);
 const header3=document.createElement('h4');
 header3.innerText='正解一覧';
 AnswerDivided.appendChild(header3);

 const paragraph3=document.createElement('p');
 AnswerDivided.appendChild(paragraph3);
 paragraph3.innerText=' (1) '+answer1+' (2) '+answer2+' (3) '+answer3+' (4) '+answer4+' (5) '+answer5+' (6) '+answer6+' (7) '+answer7+' (8) '+answer8;
};//checkButton  
};//Level9

})();//end
