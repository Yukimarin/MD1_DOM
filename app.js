// DOM là gi? Document Object Model - Mô hình tài liệu đối tượng
// 1 Truy xuất các phần tử HTML (lấy thẻ html sang bên js)
// Có 5 cách để truy xuất
// Cách 1: Truy xuất theo ID => Chỉ ra 1 phần tử - Recommend
// let demo1 = document.getElementById("demo-2");
// console.log("Truy xuất theo ID", demo1);
// Cách 2: Truy xuất theo class => HTML Collection
// let demoClass = document.getElementsByClassName("demo");
// console.log("Truy xuất theo class", demoClass);
// // Cách 3: Truy xuất thông qua tagname => HTML Collection
// let demoTagName = document.getElementsByTagName("div");
// console.log("Truy xuất theo tagName", demoTagName);
// // Cách 4: Truy xuất thông querySelector => Lấy ra phần tử đầu trong HTML
// // Nếu lấy theo class thì thêm dấu ., nếu theo id thì thêm dấu #
// let demoQuery = document.querySelector("#demo-3");
// console.log("Truy xuất theo query với class", demoQuery);
// // Cách 5: Truy xuất thông qua querySelectorAll => Nodelist
// let demoQueryAll = document.querySelectorAll(".demo");
// console.log("Truy xuất theo queryAll với class", demoQueryAll);

// 2. Thao tác thay đổi các thuộc tính trong HTML element
// 2.1 Lấy content trong HTML Element (innerText, textContent,innerHTML)
// let container = document.getElementById("container");
// let demo1 = document.getElementById("demo-1");

// console.log("innerText =>", container.innerText);
// demo1.innerText = "Nguyễn Xuân Bách";
// console.log("Sau khi gán lại giá trị =>", demo1.innerText);

// console.log("textContent =>", container.textContent);

// let a = 10;
// let b = 20;
// let c = 30;
// container.innerHTML = `<li id="demo-1" class="demo">${a}</li>
// <li id="demo-2" class="demo">${b}</li>
// <li id="demo-3" class="demo">${c}</li>`;
// console.log("Sau khi gán lại innerHTML =>", container.innerHTML);
// innerText, textContent và innerHTML đều lấy nội dung bên trong thẻ, tuy nhiên:
// 1. innerText: lấy nôi dung nhưng không lấy khoảng trắng giữa các nội dung
// 2. textContent: lấy nôi dung và cả khoảng trắng
// 3. innerHTML: nó lấy nội và cả thẻ của phần tử con bên trong (nếu có) -recommend

// 2.2 Set và lấy các Attribute (thuộc tính) của các HTML Element
// let demo1 = document.getElementById("demo-1");
// console.log(demo1);
// demo1.setAttribute("style", "color:red"); //=> thêm thuộc tính style vào trong thẻ demo-1, với giá trị tương ứng là color:red
// console.log(demo1.getAttribute("id")); //=> sẽ trả về giá trị tương ứng với attribute (thuộc tính)

// 2.3 Các thuộc tính CSS (các thuộc tính sẽ viết theo quy tắc Camel case)
// let demo1 = document.getElementById("demo-1");
// Ví dụ: Trong css, font-size: 100px (viết theo kebab-case)
// demo1.style.fontSize = "100px";
// demo1.style.color = "yellow";
// demo1.style.display = "none";

// 3 Event (Sự kiện)
// let demo1 = document.getElementById("demo-1");
// let btnChange = document.getElementById("btn-change");
// console.log(btnChange, demo1);

// // Bài toán: Khi click button Chane thì:
// // 1. Đổi text Demo1 => Xin chào các bạn
// // 2. Đổi màu text => màu đỏ
// // 3. Tăng kích thước chữ lên 50px

// btnChange.onclick = function () {
//   //   console.log("haha");
//   demo1.innerText = "Xin chào các bạn";
//   demo1.style.color = "red";
//   demo1.style.fontSize = "50px";
// };

// function handleClick() {
//   demo1.innerText = "Xin chào các bạn";
//   demo1.style.color = "red";
//   demo1.style.fontSize = "50px";
// }
