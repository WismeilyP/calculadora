var app = new Vue({
    el: "#calculator",
    data: {
      value: '',
   
    },
    watch: {
      value: function () {
        if(this.value){
        this.value=this.value.toString()
        this.value = this.value.replace(/[^0-9.+*/-]/g, '')
      }
      },
   },

 
  methods: {
      addSigno(e) {
        if ( Number.isInteger(this.value) )
          this.value = '';
          this.value += e;  
      },

      addSigno_(i)
      {
        let regex = /[+*/-]/g

        if(!regex.test(this.value))
        {
          this.value = this.value + i;
          console.log('dentro del if')
        }

        this.value = this.value.replace(/[+*-/]/g, i);
        console.log('esto esta fuera del if')
      },
      getResult() {
        this.value = eval(this.value);
      },
      clear() {
        this.value = 0;
      },
      del() {
        this.value = this.value.slice(0, -1);
      },    
    },
   
   
  

  });
  

//Resize --------------------------------------->
$(window).resize(function () {
    windows_();
    font_();
});

function font_() {
    var width_ = $(window).width();

    i = 17;

    if (width_ > 450)
        i = 13

    if (width_ > 500)
        i = 12

    if (width_ > 600)
        i = 10

    if (width_ > 700)
        i = 9

    if (width_ > 992 && type == "landscape")
        var i = 5.5;

    var font_ = width_ * i / 400;
    $("body").css("font-size", font_ + "px");

}

var type = "";

function windows_() {
    var windows_w = $(window).width();
    var windows_h = $(window).height();

    var n_windows_w = (windows_w * 0.1) + windows_w;
    if (n_windows_w < windows_h) {
        $("body").removeClass('landscape');
        $("body").addClass('portrait');
        type = 'portrait';
    } else {
        $("body").removeClass('portrait');
        $("body").addClass('landscape');
        type = 'landscape';
    }

}

setTimeout(function () {
    windows_();
}, 50);
setTimeout(function () {
    font_();
}, 100);