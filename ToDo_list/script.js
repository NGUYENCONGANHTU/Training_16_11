var input = document.getElementById('demo');
var showtask = document.getElementById('showtask');
function addTask(){
    var task = input.value;
    if (task) {
        // Tạo một phần tử li và thêm nội dung của công việc vào
        var li = document.createElement("li");
        li.innerHTML = "" + task + "<button class='delete'>x</button>";
        li.style.listStyleType = "none";
        li.style.display="flex";
        li.style.justifyContent="space-between"
        li.style.marginTop="10px"
        li.style.backgroundColor ="#8E79DD";
        li.style.borderRadius="10px";
    
        // Thêm phần tử li vào danh sách công việc
        showtask.appendChild(li);
    
        // Xóa nội dung của input
        input.value = "";
      }
}
showtask.addEventListener('click', (event) =>{
     event.preventDefault();
     if(event.target.classList.contains('delete'))
     {
      event.target.parentElement.remove();
     }
})