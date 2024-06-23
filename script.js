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

document.addEventListener('DOMContentLoaded', function() {
    const filterSelect = document.getElementById('courseFilter');
    const coursesContainer = document.getElementById('coursesContainer');
    const courses = coursesContainer.getElementsByClassName('course-block');

    filterSelect.addEventListener('change', function() {
        const selectedCategory = filterSelect.value;

        for (let course of courses) {
            if (selectedCategory === 'all' || course.dataset.category === selectedCategory) {
                course.style.display = 'block';
            } else {
                course.style.display = 'none';
            }
        }
    });
});