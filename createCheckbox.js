
for(var i = 1; i < 61; i++){

    document.write(`
        <div class='form-group col-sm-2'> 
            <input class='form-check-input' type='checkbox' value='`+i+`' id='`+i+`'> 
            <label data-toggle="tooltip" data-placement="top" title="Probabilidade de escolha: ` + 20 + `" class='btn btn-primary' id=` + i + ` for='`+i+`'>  ` + i + ` 
            </label>   
        </div>`
    );
    
}

