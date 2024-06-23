document.addEventListener('DOMContentLoaded', function() {
    var loginBtn = document.getElementById('loginBtn');
    var loginModal = document.getElementById('loginModal');
    var closeLoginModal = document.getElementById('closeLoginModal');
    var registerLink = document.getElementById('registerLink');
    var registerModal = document.getElementById('registerModal');
    var closeRegisterModal = document.getElementById('closeRegisterModal');

    loginBtn.onclick = function() {
        loginModal.style.display = "block";
    }

    closeLoginModal.onclick = function() {
        loginModal.style.display = "none";
    }

    registerLink.onclick = function(event) {
        event.preventDefault();
        loginModal.style.display = "none";
        registerModal.style.display = "block";
    }

    closeRegisterModal.onclick = function() {
        registerModal.style.display = "none";
    }

    window.onclick = function(event) {
        if (event.target == loginModal) {
            loginModal.style.display = "none";
        }
        if (event.target == registerModal) {
            registerModal.style.display = "none";
        }
    }
});

var modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
function showRegisterModal() {
    document.getElementById('loginModal').style.display='none';
    document.getElementById('registerModal').style.display='block';
}

window.onclick = function(event) {
    if (event.target == document.getElementById('loginModal')) {
        document.getElementById('loginModal').style.display = 'none';
    }
    if (event.target == document.getElementById('registerModal')) {
        document.getElementById('registerModal').style.display = 'none';
    }
}