

//  $.ajax({
//   url: "resources/Expanded/",
//   success: function(data){
//     meuVetor = new Array (); 
//     var i=0;
//     var caminho;
//     //var texto;
//     $(data).find("a:contains(.txt)").each(function(){
//           var texto = $(this).attr("href").replace(/.\w+$/,"");
//           meuVetor[i] = texto;
//  			    i++;  
//     });
//     meuVetor = meuVetor.reverse();
//     for(j= 0; j < meuVetor.length;  j++ ){     
//       caminho = "resources/Expanded/"+meuVetor[j]+'.txt';
//       // document.getElementById("carregarExpanded").innerHTML += '';
//       document.getElementById("carregarExpanded").innerHTML += '<div class="publicationsClass" id=carregar'
//       +j+'><h1 class="h1 estiloh1" >' + meuVetor[j] + '</h1><p class="publication-barrinha"></p></div>';
//       var id = "carregar"+j;
//       //alert(id);
//       readTextFile(caminho,id);
//   	}
//   }
// });

// function readTextFile(file, id)
// {
//     var rawFile = new XMLHttpRequest();
//     rawFile.open("GET", file, false);
//     rawFile.onreadystatechange = function ()
//     {
//         if(rawFile.readyState === 4)
//         {
//             if(rawFile.status === 200 || rawFile.status == 0)
//             {
//                 var allText = rawFile.responseText;
//                 var linhas = allText.split('|');
//                 for (i = 2; i < linhas.length-1; i++) {
//                    document.getElementById(id).innerHTML += '<li>'+ linhas[i] + '</li>';
//                 }
//             }
//         }
//     }
//     rawFile.send(null);
// }

//   // $.ajax({
//   // url: "resources/Expanded/",
//   // success: function(data){
//   //            meuVetor = new Array (); 
//   //            var i=0;
//   //            var caminho;
//   //    $(data).find("a:contains(.txt)").each(function(){
//   //         var texto = $(this).attr("href").replace(/.\w+$/,"");
//   //         var caminho = 'resources/Expanded/' + $(this).attr("href");
      
     
//   //     caminho = "resources/Expanded/2014.txt";
//   //         $.get(caminho, function CarregarExpanded (conteudoDoArquivo) {
//   //       var linhas = conteudoDoArquivo.split('|');

//   //       document.getElementById("carregarExpanded").innerHTML += '<h1>' + texto + '</h1>'
//   //       for (i = 2; i < linhas.length-1; i++) {
//   //         document.getElementById("carregarExpanded").innerHTML += '<ul class="publications"><li>'+ linhas[i] + '</li><ul/>';
//   //       }
//   //   });
      
//   //    });

//   // }
// //});