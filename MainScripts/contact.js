<script>
document.addEventListener("DOMContentLoaded", function() {
    var submitButton = document.getElementById('submit-but');

    submitButton.addEventListener('click', function(event) {
        alert("Make sure your information is correct before submitting!");
        event.preventDefault(); // Prevent form submission for demonstration
    });
});
</script> 