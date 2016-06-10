//  $.get('resources/Articles.txt', function CarregarArticles (conteudoDoArquivo) {
//     var linhas = conteudoDoArquivo.split('|');
//   	for (i = 2; i < linhas.length-1; i++) {
//     	document.getElementById("carregarArticles").innerHTML += '<ul class="publications"><li>'+ linhas[i] + '</li><ul/>';
//     }
// });

 $.ajax({
  url: "resources/Articles/",
  success: function(data){
    meuVetor = new Array (); 
    var i=0;
    var caminho;
    //var texto;
    $(data).find("a:contains(.txt)").each(function(){
          var texto = $(this).attr("href").replace(/.\w+$/,"");
          meuVetor[i] = texto;
 		  i++;  
    });
    meuVetor = meuVetor.reverse();
    for(j= 0; j < meuVetor.length;  j++ ){     
      caminho = "resources/Articles/"+meuVetor[j]+'.txt';
      // document.getElementById("carregarExpanded").innerHTML += '';
      //document.getElementById("carregarArticles").innerHTML += '<div class="publicationsClass" id=carregarAr'
      //+j+'><h1 class="h1 estiloh1" >' + meuVetor[j] + '</h1><p class="publication-barrinha"></p></div>';
      var collapse = "collapseOne"+j;
      var carregarAr = "carregarAr"+j;

      // document.getElementById("accordion").innerHTML += ' <div class="panel panel-default"> '
      //                     +'<div class="panel-heading" role="tab" id="heading">'
      //                         +'<h4 class="panel-title">'
      //                         +  '<a data-toggle="collapse" data-parent="#accordion" class="accordionlink"'
      //                         + ' onclick="readTextFile(\''+ caminho + '\',\''+ carregarAr + '\')" href=#'+collapse+' aria-expanded="true" aria-controls='+collapse+'>'                                                             
      //                            +   meuVetor[j]
      //                         +  '</a>'
      //                     + '</h4>'
      //                     + '</div>'
      //                     +  '<div id='+collapse+' class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingOne">'
      //                     + '<div class="panel-body"><ul class="publications" id='+carregarAr+'></ul>'
      //                     + '</div>'
      //                   +'</div>'
      //                + '</div>';     
                        
           document.getElementById("accordion").innerHTML +=  '<div><input class="inputAccordion" type="checkbox" id='+collapse+' onclick="readTextFile(\''+ caminho + '\',\''+ carregarAr + '\')" />'
                + '<label for='+collapse+'>'+meuVetor[j]+'</label>'
                + '<article>'
                +    '<div class="panel-body"><ul class="publications" id='+carregarAr+'></ul>'
                + '</article>'
            +'</div>';



      //alert(id);
    //  readTextFile(caminho,id);
  	}
  }
});

function readTextFile(file, id)
{
    var rawFile = new XMLHttpRequest();
    rawFile.open("GET", file, false);
    rawFile.onreadystatechange = function ()
    {

        if(rawFile.readyState === 4)
        {
            if(rawFile.status === 200 || rawFile.status == 0)
            {
                var allText = rawFile.responseText;
                var linhas = allText.split('|');
                document.getElementById(id).innerHTML=""; 
                for (i = 2; i < linhas.length-1; i++) {
                   document.getElementById(id).innerHTML += '<li>'+ linhas[i] + '</li>';
                }
            }
        }
    }
    rawFile.send(null);
}

