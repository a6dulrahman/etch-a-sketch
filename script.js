// بسم الله الرحمن الرحيم

const container = document.querySelector('div#etch-a-sketch');
const dialog = document.querySelector('dialog');
const configBtn = document.querySelector('button#config');
const input = document.querySelector('input[type="number"]')
const submitBtn = document.querySelector('button[type="submit"]');

submitBtn.addEventListener('click', (e) =>
{
    if (input.value > 100)
    {
        e.preventDefault();
        document.querySelectorAll('#etch-a-sketch div').forEach(div =>
        {
            div.remove();
        });
        window.alert('maximum input should be less than 100')
        input.value = '';

    } else
    {
        e.preventDefault();

        document.querySelectorAll('#etch-a-sketch div').forEach(div =>
        {
            div.remove();
        });

        const width = parseInt(400 / input.value);
        const height = parseInt(400 / input.value);

        const squares = input.value * input.value;

        for (let i = 0; i < squares; i++)
        {
            const div = document.createElement('div');
            div.style.width = `${width}px`;
            div.style.height = `${height}px`;
            div.style.background = '#010101';

            container.append(div);

            div.addEventListener('mouseover', () =>
            {
                div.style.backgroundColor = '#FFFFFF'
            })
        }

        dialog.close();
    }
});

configBtn.addEventListener('click', () =>
{
    dialog.showModal();
});