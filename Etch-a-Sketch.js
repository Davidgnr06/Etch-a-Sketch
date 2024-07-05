

function createDivAndAppendCild( howMany){
    const container = document.querySelector('#container');
    
        for(let i = 0; i < howMany; i ++){

           const newDiv = document.createElement('div');
           newDiv.textContent = `Div ${i + 1}`;

           container.appendChild(newDiv);
        }
        
                  
      };
console.log(createDivAndAppendCild(16)); 

/*const div1 = document.createElement('div');
const div2 = document.createElement('div');
const div3 = document.createElement('div');
const div4 = document.createElement('div');
const div5 = document.createElement('div');
const div6 = document.createElement('div');
const div7 = document.createElement('div');
const div8 = document.createElement('div');
const div9 = document.createElement('div');
const div10 = document.createElement('div');
const div11 = document.createElement('div');
const div12 = document.createElement('div');
const div13 = document.createElement('div');
const div14 = document.createElement('div');
const div15 = document.createElement('div');
const div16 = document.createElement('div');
*/
