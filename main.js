
const sliderEl = document.querySelector(".max_width .main .Character")
const sliderValue = document.querySelector(".max_width .main .Character_Length h2")
let radios = document.querySelectorAll(".max_width .main .inputs .inputs_data input")
let strenthSpans = document.querySelectorAll(".max_width .main .strength .spans_container span")
let passwordCheckByName = document.querySelector(".max_width .main .strength .spans_container h3 ") 
let generatePasswordButton = document.querySelector(".max_width .main .generat_button")
let finalPasswordToShow = document.querySelector(".max_width .data_box input")
let passwordFinal = document.querySelector(".max_width .data_box .done")
let passwordFinalTwo = document.querySelector(".max_width .data_box input")
let copyPassButton = document.querySelector(".max_width .data_box button")
let copyAlarm = document.querySelector(".max_width .data_box .message")
let copedButton = document.querySelector(".max_width .data_box .message div button")
let overLayForAlarm = document.querySelector(".max_width .data_box .coped")

let checkedRadioNumber = 1;
let glopalRangeValue = 5
let checkedInputs = ['UQWERTYUIOPASDFGHJKLZXCVBNM']



sliderEl.addEventListener("input", (event) => {
  const tempSliderValue = event.target.value ; 
  sliderValue.textContent = tempSliderValue;
  glopalRangeValue = tempSliderValue


  
//   const progress = (tempSliderValue / sliderEl.max) * 80;
const progress = ((tempSliderValue -5 )  * 10) ;
 
  sliderEl.style.background = `linear-gradient(to right,  var(--primary-color) ${progress}%, #ccc ${progress}%)`;

})


genaratPassword(glopalRangeValue)


//  change number of checked Radio
radios.forEach((ele) => {
    radios[0].checked = true

            ele.addEventListener('click', (e) => {
        
                if (e.target.checked === true){

                    checkedInputs.push(e.target.dataset.name)

                    // console.log(checkedInputs)

                    checkedRadioNumber ++
                } else if (e.target.checked === false){

                    checkedInputs = checkedInputs.filter(item => item !== e.target.dataset.name);

                    // console.log(checkedInputs)

                    checkedRadioNumber --
                }
                checkStrength(checkedRadioNumber)
            });
});




//   chick for password hardness 
function checkStrength(e) {

    strenthSpans.forEach((ele) => {

        if (e === 1){
            generatePasswordButton.classList.remove('disabled');
            generatePasswordButton.classList.add('generat_button');
            ele.className = ""
            passwordCheckByName.innerHTML = "Bad"
            for(let i = 0; i < e; i++){
                strenthSpans[i].className = "Bad"
            }
        } else if (e === 2){
            ele.className = ""
            passwordCheckByName.innerHTML = "Weak"
            for(let i = 0; i < e; i++){
                strenthSpans[i].className = "Weak"
            }
        } else if (e === 3){
            ele.className = ""
            passwordCheckByName.innerHTML = "Good"
            for(let i = 0; i < e; i++){
                strenthSpans[i].className = "Good"
            }
        } else if (e === 4){
            ele.className = ""
            passwordCheckByName.innerHTML = "Perfict"
            for(let i = 0; i < e; i++){
                strenthSpans[i].className = "Perfict"
            }
        }
    });

    if(checkedRadioNumber === 0 ){
        
        generatePasswordButton.classList.add("disabled"); 
        generatePasswordButton.classList.remove('generat_button');

        generatePasswordButton.addEventListener('mouseenter', (event) => {
            event.preventDefault();
          });
          generatePasswordButton.addEventListener('mouseleave', (event) => {
            event.preventDefault();
          });
    }
}





function genaratPassword(k) {

    generatePasswordButton.onclick =   () => {

        finalPasswordToShow.classList.add("done")

        // generatePasswordButton.classList.add('disabled')

        // generatePasswordButton.classList.add("disabled"); 
        // generatePasswordButton.classList.remove('generat_button');

        // generatePasswordButton.addEventListener('mouseenter', (event) => {
        //     event.preventDefault();
        //   });
        //   generatePasswordButton.addEventListener('mouseleave', (event) => {
        //     event.preventDefault();
        //   });

        let passwordAll = ""
        let UpperCase = "QWERTYUIOPASDFGHJKLZXCVBNM"
        let LowerCase = "qwertyuiopasdfghjklzxcvbnm"
        let numbers = "1234567890"
        let Sympol = "!@#$%^&*()-"
        let finalPass = ""

        for(let i = 0; i < checkedInputs.length; i++ ){

            passwordAll += checkedInputs[i]

        }

        for(let i = 0; i < glopalRangeValue; i++ ){

            finalPass += passwordAll[Math.floor(Math.random() * passwordAll.length)]

            finalPasswordToShow.value = `${finalPass}`

        }
    }
}



copyPassButton.onclick = function copyPassword() {

    if (passwordFinalTwo.className === "done"){
        
    // document.designMode = "on";
    passwordFinalTwo.select();
    passwordFinalTwo.setSelectionRange(0, 99999); // For mobile devices
  
     // Copy the text inside the text field
    // navigator.clipboard.writeText(passwordFinalTwo.value);
    document.execCommand('copy')

    copyAlarm.classList.add("coped")

    }
  }


  copedButton.onclick = function del() {

    copyAlarm.classList.remove("coped")

  }

    // overLayForAlarm.onclick = () => {

        
    // copyAlarm.classList.remove("coped")

    // }




















