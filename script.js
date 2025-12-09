let mbase=[0.001,0.01,1,1000,0.0254,0.3048,0.9144,20.1168,201.17,1609.344];

function iniFocus(){
    document.frmOne.txtData.focus();
    document.frmOne.txtData.select();
}

function ex(f,obj){
    if(f.txtData.value == ""){
        alert("数値を入力してください。");
        f.txtData.focus();
        f.txtData.select();
        return;
    }

    for(let i=0;i<obj.options.length;i++){
        window.document.frmTwo.elements[i].value =
            eval(f.txtData.value)* mbase[obj.selectedIndex] / mbase[i];   
    }
}