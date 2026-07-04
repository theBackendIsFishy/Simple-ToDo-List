document.querySelector('#add-task').onclick = function(){
    if(document.querySelector('#task').value.length==0){
        alert('Please enter a task');
    }
    else{
        document.querySelector('#main-div2').innerHTML += `
        <div>
        <p class='text-left' style='display:inline-block ;min-width:78%' onclick="check(this)">${document.querySelector('#task').value}</p><span class='btn btn-outline-danger btn-sm align-top float-end' style='display:inline-block;' onclick="this.parentElement.remove()">Delete</span>
        <br>
        </div>
        `
        document.querySelector('#task').value = '';
    }
}

function check(element){
    if(element.style.textDecoration == 'line-through'){
        element.style.textDecoration = 'none';
        element.style.fontWeight = 'normal';
        element.style.fontStyle = 'normal';
    }
    else{
        element.style.textDecoration = 'line-through';
        element.style.fontStyle = 'italic';
        element.style.fontWeight = 'bold';
    }
}