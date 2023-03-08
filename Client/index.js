document.addEventListener('DOMContentLoaded', function(){
    const button1 = document.querySelector('.btn.btn1');
    const button2 = document.querySelector('.btn.btn2');

    button1.addEventListener('click', async function(event) {
        try {
            let response = await fetch('http://127.0.0.1:8000/add');
            let body = await response.text();
            document.querySelector('.par2').innerHTML = <form id = workoutSubmit>
            <p>Date</p></form>
        } catch(e){
            alert(e)
        }
    });
    button2.addEventListener('click', async function(event) {
        try{
            let response = await fetch('http://127.0.0.1:8000/manage');
            let body = await response.text();

            document.querySelector('.par2').innerHTML = body
        } catch (e){
            alert(e)
            alert(e)
        }
    });

});