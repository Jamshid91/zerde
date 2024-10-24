const faqs = document.querySelectorAll('.faq-title')

faqs.forEach(faq => {
    faq.addEventListener('click', () => {
        faq.parentElement.classList.toggle('showFaq')
    })
})