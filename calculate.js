(function(){
    'use strict';
    const questionDivided=document.getElementById('question-area');
    const answerDivided=document.getElementById('answer-area'); 
    var Answer=[];
    var start;

    function removeAllChildren(element){
        while (element.firstChild){
            element.removeChild(element.firstChild);
        };//While
    };//removeAllChildren

    const resetButton=document.getElementById('reset');
    resetButton.onclick=()=>{
        if (confirm('このページの内容をリセットしてもいいですか？')){
            removeAllChildren(questionDivided);
            removeAllChildren(answerDivided); 
            textresetButton.onclick();
        };
    };//resetButton.onclick

    const textresetButton=document.getElementById('textreset');
    textresetButton.onclick=()=>{
        var inputs = document.getElementsByTagName("input");
        for (var i = 0; i < inputs.length; i++) {
            if (inputs[i].type == "text") {
                inputs[i].value = "";
            };
        };
        document.getElementById('Answer1').style.backgroundColor='white';
        document.getElementById('Answer2').style.backgroundColor='white';
        document.getElementById('Answer3').style.backgroundColor='white';
        document.getElementById('Answer4').style.backgroundColor='white';
        document.getElementById('Answer5').style.backgroundColor='white';
        document.getElementById('Answer6').style.backgroundColor='white';
        document.getElementById('Answer7').style.backgroundColor='white';
        document.getElementById('Answer8').style.backgroundColor='white';
        document.getElementById('Answer9').style.backgroundColor='white';
        document.getElementById('Answer10').style.backgroundColor='white';    
    };//textresetButton
  
    const Level1Button=document.getElementById('level1');
    Level1Button.onclick=()=>{

        removeAllChildren(questionDivided);
        removeAllChildren(answerDivided)
        textresetButton.onclick();
        const header=document.createElement('h3');
        header.innerText='問題';
        questionDivided.appendChild(header);

        var min=0;
        var max=5;
        var tmp=[];
        var Question=[];

        for(var i=1;i<11;i++){
            var a=Math.floor(Math.random()*(max+1-min))+min;
            var b=Math.floor(Math.random()*(max+1-min))+min;
            var items = ['＋', 'ー'];
            var random = Math.floor( Math.random() * items.length );

            var question=a+items[random]+b;
        
            if(random===0){
                var answer=a+b;
            }else if(random===1){
                var answer=a-b;
                if(answer<0){
                    i=i-1
                    continue;
                }
            }

            if(!tmp.includes(question)){
                tmp.push(question);
                Question[i]=question;
                Answer[i]=answer;
            }else{
                i=i-1
                continue;
            }
                
            var paragraph=document.createElement('span');
            paragraph.innerText='('+i+')'+' '+Question[i]+'　';
            questionDivided.appendChild(paragraph);

        };//for
        start=new Date().getTime();
    };//Level1.onclick

    const Level2Button=document.getElementById('level2');
    Level2Button.onclick=()=>{

        removeAllChildren(questionDivided);
        removeAllChildren(answerDivided);
        textresetButton.onclick();
        const header=document.createElement('h3');
        header.innerText='問題';
        questionDivided.appendChild(header);

        var min=0;
        var max=9;
        var tmp=[];
        var Question=[];

        for(var i=1;i<11;i++){
            var a=Math.floor(Math.random()*(max+1-min))+min;
            var b=Math.floor(Math.random()*(max+1-min))+min;
            var items = ['＋', 'ー', 'ｘ'];
            var random = Math.floor( Math.random() * items.length );

            var question=a+items[random]+b;
    
            if(random===0){
                var answer=a+b;
            }else if(random===1){
                var answer=a-b;
                if(answer<0){
                    var i=i-1
                    continue;
                };
            }else if(random===2){
                var answer=a*b;
            };

            if(!tmp.includes(question)){
                tmp.push(question);
                Question[i]=question;
                Answer[i]=answer;
            }else{
                i=i-1
                continue;
            }
        
            var paragraph=document.createElement('span');
            paragraph.innerText='('+i+')'+' '+Question[i]+'　';
            questionDivided.appendChild(paragraph);
        };//for
        start=new Date().getTime();
    };//Level2.onclick
    
    const Level3Button=document.getElementById('level3');
    Level3Button.onclick=()=>{

        removeAllChildren(questionDivided);
        removeAllChildren(answerDivided);
        textresetButton.onclick();
        const header=document.createElement('h3');
        header.innerText='問題';
        questionDivided.appendChild(header);

        var min=10;
        var max=99;
        var max2=9;
        var tmp=[];
        var Question=[];

        for(var i=1;i<11;i++){
            var a=Math.floor(Math.random()*(max+1-min))+min;
            var b=Math.floor(Math.random()*(max2+1-min))+min;
            var items = ['＋', 'ー', 'ｘ'];
            var random = Math.floor( Math.random() * items.length );

            var question=a+items[random]+b;
        
            if(random===0){
                var answer=a+b;
            }else if(random===1){
                var answer=a-b;
                if(answer<0){
                    i=i-1
                    continue;
                }
            }else if(random===2){
                var answer=a*b;
            };
    
            if(!tmp.includes(question)){
                tmp.push(question);
                Question[i]=question;
                Answer[i]=answer;
            }else{
                i=i-1
                continue;
            }

            var paragraph=document.createElement('span');
            paragraph.innerText='('+i+')'+' '+Question[i]+'　';
            questionDivided.appendChild(paragraph);
        };//for
    start=new Date().getTime();
    };//Level3
    
    const Level4Button=document.getElementById('level4');
    Level4Button.onclick=()=>{

        removeAllChildren(answerDivided);
        removeAllChildren(questionDivided);
        textresetButton.onclick();
        const header=document.createElement('h3');
        header.innerText='問題';
        questionDivided.appendChild(header);    

        var min=10;
        var max=99;
        var tmp=[];
        var Question=[];

        for(var i=1;i<11;i++){
            var a=Math.floor(Math.random()*(max+1-min))+min;
            var b=Math.floor(Math.random()*(max+1-min))+min;
            var items = ['＋', 'ー', 'ｘ'];
            var random = Math.floor( Math.random() * items.length );
             
            var question=a+items[random]+b;
             
            if(random===0){
                var answer=a+b;
            }else if(random===1){
                var answer=a-b;
                if(answer<0){
                    i=i-1
                    continue;
                }
            }else if(random===2){
                var answer=a*b;
            };
    
            if(!tmp.includes(question)){
                tmp.push(question);
                Question[i]=question;
                Answer[i]=answer;
            }else{
                i=i-1
                continue;
            }
        
            var paragraph=document.createElement('span');  
            paragraph.innerText='('+i+')'+' '+Question[i]+'　';
            questionDivided.appendChild(paragraph);
        };//for
    start=new Date().getTime();
    };//Level4
    
    const Level5Button=document.getElementById('level5');
    Level5Button.onclick=()=>{

        removeAllChildren(answerDivided);
        removeAllChildren(questionDivided);
        textresetButton.onclick();
        const header=document.createElement('h3');
        header.innerText='問題';
        questionDivided.appendChild(header);

        var min=50;
        var max=500;
        var min2=3;
        var max2=50;
        var tmp=[];
        var Question=[];

        for(var i=1;i<11;i++){
            var a=Math.floor(Math.random()*(max+1-min))+min;
            var b=Math.floor(Math.random()*(max2+1-min2))+min2;

            if(b===5||b===10){
                i=i-1;
                continue;
            };
            var question=a+'÷'+b
            
            if((a%b)>0){
                i=i-1;
                continue;
            }else{
                if(a/b===1||a/b===10){
                    i=i-1
                    continue;
                }else{
                    var answer=a/b;
                };
            };
    
            if(!tmp.includes(question)){
                tmp.push(question);
                Question[i]=question;
                Answer[i]=answer;
            }else{
                i=i-1
                continue;
            }
        
            var paragraph=document.createElement('span');
            paragraph.innerText='('+i+')'+' '+Question[i]+'　';
            questionDivided.appendChild(paragraph);
        };//for
    start=new Date().getTime();
    };//Level5
    
    const Level6Button=document.getElementById('level6');
    Level6Button.onclick=()=>{

        removeAllChildren(answerDivided);
        removeAllChildren(questionDivided);
        textresetButton.onclick();
        const header=document.createElement('h3');
        header.innerText='問題';
        questionDivided.appendChild(header);

        for(var i=1;i<11;i++){

            var min=2;
            var max=20;
            var tmp=[];
            var Question=[];

            var a=Math.floor(Math.random()*(max+1-min))+min;
            var b=Math.floor(Math.random()*(max+1-min))+min;
            var c=Math.floor(Math.random()*(max+1-min))+min;
            var d=Math.floor(Math.random()*(max+1-min))+min;
    
            var items=['+', '-','*','/'];
            var e=Math.floor(Math.random()*items.length);
            var f=Math.floor(Math.random()*items.length);
            var g=Math.floor(Math.random()*items.length);

            if((e===f&&f===g)||(e<2&&f<2&&g<2)){
                i=i-1
                continue;
            };
    
            var question=a+items[e]+b+items[f]+c+items[g]+d;
;    
            var answer = safeEval(question);
    
            function safeEval(val){
                return Function('"use strict";return ('+val+')')();
            };

            if(Number.isInteger(answer)===false||answer<0||answer>300){
                i=i-1;
                continue;
            };
    
            question=question.replace(/[+]/g,'＋');
            question=question.replace(/-/g,'－');
            question=question.replace(/[*]/g,'ｘ');
            question=question.replace(/[/]/g,'÷');
    
            if(!tmp.includes(question)){
                tmp.push(question);
                Question[i]=question;
                Answer[i]=answer;
            }else{
                i=i-1
                continue;
            };

            var paragraph=document.createElement('span');

            if(i===5){
                paragraph.innerText='('+i+')'+' '+Question[i]+'\n';
            }else{
                paragraph.innerText='('+i+')'+' '+Question[i]+'　';
            };
            questionDivided.appendChild(paragraph);
            
        };//for
    start=new Date().getTime();
    };//Level6
    
    const Level7Button=document.getElementById('level7');
    Level7Button.onclick=()=>{

        removeAllChildren(answerDivided);
        removeAllChildren(questionDivided);
        textresetButton.onclick();
        const header=document.createElement('h3');
        header.innerText='問題';
        questionDivided.appendChild(header);

        var min=-9;
        var max=9;
        var tmp=[];
        var Question=[];

        labelA:
        for(var i=1;i<11;i++){
            var a=Math.floor(Math.random()*(max+1-min))+min;
            var b=Math.floor(Math.random()*(max+1-min))+min;
            var items = ['＋', 'ー', 'ｘ','÷','÷'];
            var random = Math.floor( Math.random() * items.length );

            if((a>-1&&b>-1)||(a===0||b===0)){
                i=i-1;
                continue;
            };
    
            if(b<0){
                var question=a+items[random];
                question=question+'('+b+')';
                question=question.replace(/-/g,'ー');
            }else{
                var question=a+items[random]+b
                question=question.replace(/-/g,'ー');
            };
        

        
            if(random===0){
                var answer=a+b;
            }else if(random===1){
                var answer=a-b;
            }else if(random===2){
                var answer=a*b;
            }else if(random===3||random===4){
                var answer=a/b;
                if((a%b)!==0||b===0){
                    i=i-1;
                    continue labelA;
                };
            };
            
            if(!tmp.includes(question)){
                tmp.push(question);
                Question[i]=question;
                Answer[i]=answer;
            }else{
                i=i-1
                continue;
            };

            var paragraph=document.createElement('span');
            paragraph.innerText='('+i+')'+' '+Question[i]+'　';
            questionDivided.appendChild(paragraph);
        };//for
    start=new Date().getTime();  
    };//Level7
    
    const Level8Button=document.getElementById('level8');
    Level8Button.onclick=()=>{

        removeAllChildren(answerDivided);
        removeAllChildren(questionDivided);
        textresetButton.onclick();
        const header=document.createElement('h3');
        header.innerText='問題';
        questionDivided.appendChild(header);
        
        var min=-9;
        var max=9;
        var tmp=[];
        var Question=[];

        for(var i=1;i<11;i++){
            var a=Math.floor(Math.random()*(max+1-min))+min;
            var b=Math.floor(Math.random()*(max+1-min))+min;
            var c=Math.floor(Math.random()*(max+1-min))+min;
            var d=Math.floor(Math.random()*(max+1-min))+min;

            var items=['+', '-','*','/','/'];
            var e=Math.floor(Math.random()*items.length);
            var f=Math.floor(Math.random()*items.length);
            var g=Math.floor(Math.random()*items.length);

            if((a>-1&&b>-1&&c>-1&&d>-1)||(e<2&&f<2&&g<2)||(a===0||b===0||c===0||d===0)){
                i=i-1;
                continue;
            };

            var question=a+items[e];
    
            if(b<0){
                question=question+'('+b+')';
            }else{
                question=question+b;
            };

            question=question+items[f];

            if(c<0){
                question=question+'('+c+')';
            }else{
                question=question+c;
            };

            question=question+items[g];

            if(d<0){
                question=question+'('+d+')';
            }else{
                question=question+d;
            };
    
            var answer = safeEval(question);
    
            function safeEval(val){
                return Function('"use strict";return ('+val+')')();
            };
    
            if(Number.isInteger(answer)===false){
            var i=i-1;
            continue;
            };

            question=question.replace(/[+]/g,'＋');
            question=question.replace(/-/g,'－');
            question=question.replace(/[*]/g,'ｘ');
            question=question.replace(/[/]/g,'÷');
    
            if(!tmp.includes(question)){
                tmp.push(question);
                Question[i]=question;
                Answer[i]=answer;
            }else{
                i=i-1
                continue;
            };

            var paragraph=document.createElement('span');

            if(i===5){
                paragraph.innerText='('+i+')'+' '+Question[i]+'\n'
            }else{
                paragraph.innerText='('+i+')'+' '+Question[i]+'　';
            };
            questionDivided.appendChild(paragraph);
        };//for
    start=new Date().getTime();  

    };//Level8
    
    const Level9Button=document.getElementById('level9');
    Level9Button.onclick=()=>{


        removeAllChildren(answerDivided);
        removeAllChildren(questionDivided);
        textresetButton.onclick();
        const header=document.createElement('h3');
        header.innerText='問題';
        questionDivided.appendChild(header);

        var min=-19;
        var max=19;
        var tmp=[];
        var Question=[];
    
        labelA:
        for(var i=1;i<11;i++){
            var a=(Math.floor(((Math.random()*(max+1-min))+min)))/10;
            var b=(Math.floor(((Math.random()*(max+1-min))+min)))/10;
            var items = ['＋', 'ー', 'ｘ','÷','÷','÷'];
            var random = Math.floor( Math.random() * items.length );

            if(a===0||b===0||a===1||b===1||a===10||b===10){
                i=i-1;
                continue;
            }
    
            if(b<0){
                var question=a+items[random];
                question=question+'('+b+')';
                question=question.replace(/-/g,'ー');
            }else{
                var question=a+items[random]+b;
                question=question.replace(/-/g,'ー');
            };

            if(random===0){
                var answer=Math.round((a+b)*10)/10;
            }else if(random===1){
                var answer=Math.round((a-b)*10)/10;
            }else if(random===2){
                var answer=Math.round((a*b)*100)/100;
            }else if(random===3||random===4||random===5){
                var answer=a/b;
                if(a%b!==0||b===0){
                    var i=i-1;
                    continue labelA;
                };
            };

            if(!tmp.includes(question)){
                tmp.push(question);
                Question[i]=question;
                Answer[i]=parseFloat(answer);
            }else{
                i=i-1
                continue;
            };
    
            var paragraph=document.createElement('span');

            if(i===5){
                paragraph.innerText='('+i+')'+' '+Question[i]+'\n'
            }else{
                paragraph.innerText='('+i+')'+' '+Question[i]+'　';
            };
            questionDivided.appendChild(paragraph);
        };//for
    start=new Date().getTime();
    };//Level9

    const checkButton=document.getElementById('check');
    checkButton.onclick=()=> {
        if(typeof Answer[1] === "undefined" ){
            alert('挑戦する問題のレベルを選択し、問題を解いてください。')
            return;
        }else{                
            var stop=new Date().getTime();
            var time=(stop-start)/1000;
        
            var result=0;
            var error=0;

            const Answer1Input=document.getElementById('Answer1');
            const Answer1=Answer1Input.value;
            if(parseFloat(Answer1)===Answer[1]){
                result=result+1;
                document.getElementById('Answer1').style.backgroundColor='skyblue';
            }else if(isNaN(parseInt(Answer1))&&Answer1.length!==0){
                error=error+1;
                document.getElementById('Answer1').style.backgroundColor='yellow';
            }else{
                document.getElementById('Answer1').style.backgroundColor='orange';
            };

            const Answer2Input=document.getElementById('Answer2');
            const Answer2=Answer2Input.value;
            if(parseFloat(Answer2)===Answer[2]){
                result=result+1;
                document.getElementById('Answer2').style.backgroundColor='skyblue';
            }else if(isNaN(parseInt(Answer2))&&Answer2.length!==0){
                error=error+1;
                document.getElementById('Answer2').style.backgroundColor='yellow';
            }else{
                document.getElementById('Answer2').style.backgroundColor='orange';
            };

            const Answer3Input=document.getElementById('Answer3');
            const Answer3=Answer3Input.value;
            if(parseFloat(Answer3)===Answer[3]){
                result=result+1;
                document.getElementById('Answer3').style.backgroundColor='skyblue';
            }else if(isNaN(parseInt(Answer3))&&Answer3.length!==0){
                error=error+1;
                document.getElementById('Answer3').style.backgroundColor='yellow';
            }else{
                document.getElementById('Answer3').style.backgroundColor='orange';
            };

            const Answer4Input=document.getElementById('Answer4');
            const Answer4=Answer4Input.value;
            if(parseFloat(Answer4)===Answer[4]){
                result=result+1;
                document.getElementById('Answer4').style.backgroundColor='skyblue';
            }else if(isNaN(parseInt(Answer4))&&Answer4.length!==0){
                error=error+1;
                document.getElementById('Answer4').style.backgroundColor='yellow';
            }else{
                document.getElementById('Answer4').style.backgroundColor='orange';
            };

            const Answer5Input=document.getElementById('Answer5');
            const Answer5=Answer5Input.value;
            if(parseFloat(Answer5)===Answer[5]){
                result=result+1;
                document.getElementById('Answer5').style.backgroundColor='skyblue';
            }else if(isNaN(parseInt(Answer5))&&Answer5.length!==0){
                error=error+1;
                document.getElementById('Answer5').style.backgroundColor='yellow';
            }else{
                document.getElementById('Answer5').style.backgroundColor='orange';
            };

            const Answer6Input=document.getElementById('Answer6');
            const Answer6=Answer6Input.value;
            if(parseFloat(Answer6)===Answer[6]){
                result=result+1;
                document.getElementById('Answer6').style.backgroundColor='skyblue';
            }else if(isNaN(parseInt(Answer6))&&Answer6.length!==0){
                error=error+1;
                document.getElementById('Answer6').style.backgroundColor='yellow';
            }else{
                document.getElementById('Answer6').style.backgroundColor='orange';
            };

            const Answer7Input=document.getElementById('Answer7');
            const Answer7=Answer7Input.value;
            if(parseFloat(Answer7)===Answer[7]){
                result=result+1;
                document.getElementById('Answer7').style.backgroundColor='skyblue';
            }else if(isNaN(parseInt(Answer7))&&Answer7.length!==0){
                error=error+1;
                document.getElementById('Answer7').style.backgroundColor='yellow';
            }else{
                document.getElementById('Answer7').style.backgroundColor='orange';
            };

            const Answer8Input=document.getElementById('Answer8');
            const Answer8=Answer8Input.value;
            if(parseFloat(Answer8)===Answer[8]){
                result=result+1;
                document.getElementById('Answer8').style.backgroundColor='skyblue';
            }else if(isNaN(parseInt(Answer8))&&Answer8.length!==0){
                error=error+1;
                document.getElementById('Answer8').style.backgroundColor='yellow';
            }else{
                document.getElementById('Answer8').style.backgroundColor='orange';
            };

            const Answer9Input=document.getElementById('Answer9');
            const Answer9=Answer9Input.value;
            if(parseFloat(Answer9)===Answer[9]){
                result=result+1;
                document.getElementById('Answer9').style.backgroundColor='skyblue';
            }else if(isNaN(parseInt(Answer9))&&Answer9.length!==0){
                error=error+1;
                document.getElementById('Answer9').style.backgroundColor='yellow';
            }else{
                document.getElementById('Answer9').style.backgroundColor='orange';
            };

            const Answer10Input=document.getElementById('Answer10');
            const Answer10=Answer10Input.value;
            if(parseFloat(Answer10)===Answer[10]){
                result=result+1;
                document.getElementById('Answer10').style.backgroundColor='skyblue';
            }else if(isNaN(parseInt(Answer10))&&Answer10.length!==0){
                error=error+1;
                document.getElementById('Answer10').style.backgroundColor='yellow';
            }else{
                document.getElementById('Answer10').style.backgroundColor='orange';
            };
        
            if(result<4){
                var Result = result + '問正解です。もっと計算力をつけましょう。';
            }else if(3<result&&result<8){
                var Result = result + '問正解です。半分程度はできています。がんばれ。'
            }else if(7<result&&result<10){
                var Result= result + '問正解です。簡単なミスをなくせるようにしましょう。';
            }else if(result=10){
                var Result= '全問正解です。この調子で頑張りましょう。　記録：' + time + '秒'
            };

            removeAllChildren(answerDivided);
            const header2=document.createElement('h3');
            header2.innerText='結果と答え';
            answerDivided.appendChild(header2);
        
            const paragraph2=document.createElement('p');
            paragraph2.innerText='　(1) '+Answer[1]+'　(2) '+Answer[2]+'　(3) '+Answer[3]+'　(4) '+Answer[4]+'　(5) '+Answer[5]+'　(6) '+Answer[6]+'　(7) '+Answer[7]+'　(8) '+Answer[8]+'　(9) '+Answer[9]+'　(10) '+Answer[10];
            paragraph2.innerText=paragraph2.innerText.replace(/-/g,'ー');
            paragraph2.innerText=Result+'\n \n'+paragraph2.innerText;
            answerDivided.appendChild(paragraph2);

            if(error>0){
                alert(error+'か所、解答が無効な文字列になっています。解答は半角の数字で入力してください。');
            };

        };
    };//checkButton.onclick 

})();//end
