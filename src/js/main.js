document.addEventListener('DOMContentLoaded', () => {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');
    
    const updateTheme = (e) => {
        document.documentElement.classList.toggle('dark', e.matches);
    };
    
    prefersDark.addListener(updateTheme);
    updateTheme(prefersDark);
    
    // wikipedia
    const skills = document.querySelectorAll('.skill');
    skills.forEach(skill => {
        skill.addEventListener('click', async (e) => {
            const techName = e.currentTarget.dataset.tech;
            if (!techName) return;
            
            try {
                const url = `https://en.wikipedia.org/wiki/${encodeURIComponent(techName)}`;
                window.open(url, '_blank');
            } catch (error) {
                console.error('Error opening Wikipedia page:', error);
            }
        });
    });
});
