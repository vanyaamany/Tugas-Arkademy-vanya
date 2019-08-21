let todo = [
    {
        title:"Rendang",
        description:"Rendang atau randang adalah masakan daging dengan bumbu rempah-rempah yang berasal dari Minangkabau. Masakan ini dihasilkan dari proses memasak yang dipanaskan berulang-ulang menggunakan santan sampai kuahnya kering sama sekali."
    },
    {
        title:"Pizza Hut",
        description:"Pizza Hut adalah restoran berantai dan waralaba makanan internasional yang mengkhususkan dalam piza. Saat ini, Pizza Hut merupakan restoran piza berantai terbesar di dunia dengan hampir 12.000 restoran dan kios pengantaran-ambil ke luar di lebih dari 86 negara."
    },
    {
        title:"Burger King",
        description:"Burger King Corporation adalah rangkaian rumah makan siap saji internasional yang menjual burger, kentang goreng dan minuman ringan."
    },
    {
        title:"Yogyakarta",
        description:"Kota Yogyakarta adalah ibu kota dan pusat pemerintahan Daerah Istimewa Yogyakarta, Indonesia. Kota Yogyakarta adalah kediaman bagi Sultan Hamengkubuwana dan Adipati Paku Alam."
    },
    {
        title:"Kapucino",
        description:"Kapucino adalah minuman khas Italia yang dibuat dari espresso dan susu, tetapi referensi lain juga ada yang menyebutkan bahwa kapucino berawal dari biji biji kopi tentara Turki yang tertinggal setelah peperangan yang di pimpin oleh Kara Mustapha Pasha di Wina."
    }
]

class TodoList{
    item = document.getElementById('todo-list')
    content = document.getElementById('todo-description')
    listItem = ()=>{
      for(let x in todo){
          this.item.innerHTML+='<div class="list-item">'+todo[x].title+'</div>'
      }
    }
}

const todoList = new TodoList()