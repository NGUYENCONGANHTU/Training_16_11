var input = document.getElementById('demo');
var showtask = document.getElementById('showtask');
function addTask(){
    var task = input.value;
    if (task) {
        // Tạo một phần tử li và thêm nội dung của công việc vào
        var li = document.createElement("li");
        li.textContent = task;
        li.style.listStyleType = "none";
    
        // Thêm phần tử li vào danh sách công việc
        showtask.appendChild(li);
    
        // Xóa nội dung của input
        input.value = "";
      }
}