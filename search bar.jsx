<script>
document.getElementById('herbSearch').addEventListener('input', function() {
    const query = this.value.toLowerCase();
    document.querySelectorAll('.Herb-card').forEach(card => {
        const herbName = card.querySelector('h3').textContent.toLowerCase();
        card.style.display = herbName.includes(query) ? '' : 'none';
    });
});
</script>