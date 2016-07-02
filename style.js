//函数用来实现获取鼠标的位置
    function getMousePos(event) {             
     var e = event || window.event;   
     //输出鼠标的位置
     // document.getElementById("word").innerHTML = 'X'+e.screenX+'Y'+e.screenY;
     //获取图片的左侧长度
     var left=parseInt(document.getElementById("show").style.marginLeft);
     //获取图片的上部长度
     var top =parseInt(document.getElementById("show").style.marginTop);
     if(e.screenX-left>0&&e.screenY-top>0){      
     // 鼠标位于右下               
          document.getElementById("show").style.marginLeft = 400-(e.screenX-left)/28+'px';
          document.getElementById("show").style.marginTop = 200-(e.screenY-top)/28+'px'; 
          document.getElementById("beijing").style.left = (450-e.screenX)/95+'px';
          document.getElementById("beijing").style.top = (250-e.screenY)/88+'px';
     }else if(e.screenX-left>0&&top-e.screenY>0){
     // 鼠标位于右上
          document.getElementById("show").style.marginLeft = 400-(e.screenX-left)/28+'px';
          document.getElementById("show").style.marginTop = 200+(top-e.screenY)/28+'px';
          document.getElementById("beijing").style.left = (450-e.screenX)/95+'px';
          document.getElementById("beijing").style.top = (250-e.screenY)/88+'px';
     }else if(left-e.screenX>0&&top-e.screenY>0){
     // 鼠标位于左上
          document.getElementById("show").style.marginLeft = 400+(left-e.screenX)/28+'px';
          document.getElementById("show").style.marginTop = 200+(top-e.screenY)/28+'px';
          document.getElementById("beijing").style.left = (450-e.screenX)/95+'px';
          document.getElementById("beijing").style.top = (250-e.screenY)/88+'px';
     }else if(left-e.screenX>0&&e.screenY-top>0){
     // 鼠标位于左下
          document.getElementById("show").style.marginLeft = 400+(left-e.screenX)/28+'px';
          document.getElementById("show").style.marginTop = 200-(e.screenY-top)/28+'px'; 
          document.getElementById("beijing").style.left = (450-e.screenX)/95+'px';
          document.getElementById("beijing").style.top = (250-e.screenY)/88+'px';
     }
    }


    

     $(document).ready(function(){
    $("#show").mouseover(function(){
      var back = $('#back');
      back.css('background-color', 'rgba(0, 2, 2, 0.6)');
      // back.animate({'backgroundColor':"rgba(0,2,2,0.2)"},"slow");     //不能用来实现颜色的变化
    });
    $('#show').mouseout(function(){
      $('#back').css('background-color', 'rgba(0, 2, 2, 0)');
    });   
   });