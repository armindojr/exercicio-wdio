describe('Busca de informações', () => {
    it('Realizar uma busca e verificar se a pagina carregou', async () => {
        await browser.url('https://duckduckgo.com/')
        await $('input#search_form_input_homepage').setValue('webdriverio');
        await $('input#search_button_homepage').click();
        await $$('a.result__a')[0].click();
        await $('p.hero__subtitle').waitForDisplayed({ timeout:5000 });
        await expect(await browser.getTitle()).toContain('Next-gen');
    })
})