<script>
      var link = document.querySelector(".btn-search");

      var popup = document.querySelector(".model-content");

      var close = popup.querySelector(".btn-search");

      var form = popup.querySelector("form");
      var text = popup.querySelector("[name=btn-search]");

      link.addEventListener("click", function(event){
        event.preventDefault();
        popup.classList.add("model-content-show");
        btn-search.focus();
      });

      close.addEventListener("click", function(event) {
        event.preventDefault();
        popup.classList.remove("model-content-show");
        popup.classList.remove("model-error");
      });

      form.addEventListener("submit",function(event){
         if (!text.value) {
          event.preventDefault();
          popup.classList.remove("model-error");
          popup.offsetWidth = popup.offsetWidth;
          popup.classList.add("model-error");
          console.log("Нужно ввести данные"); 
        } 
      })
       window.addEventListener("keydown", function(event) {
        if (event.keyCode === 27) {
          if (popup.classList.contains("model-content-show")) {
            popup.classList.remove("model-content-show");
            popup.classList.remove("model-error");
          }
        }
      });
</script>