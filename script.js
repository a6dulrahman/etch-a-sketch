// بسم الله الرحمن الرحيم

const container = document.querySelector('div#etch-a-sketch')
const dialog = document.querySelector('dialog')
const configBtn = document.querySelector('button#config')
const input = document.querySelector('input[type="number"]')
const submitBtn = document.querySelector('button[type="submit"]')

submitBtn.addEventListener('click', (e) =>
{
    if (input.value > 100)
    {
        e.preventDefault()
        document.querySelectorAll('#etch-a-sketch div').forEach(div =>
        {
            div.remove()
        })
        window.alert('maximum input should be less than 100')
        input.value = ''

    } else
    {
        e.preventDefault()

        document.querySelectorAll('#etch-a-sketch div').forEach(div =>
        {
            div.remove()
        })

        for (let i = 0; i < input.value; i++)
        {
            const row = document.createElement('div')
            row.classList.add('row')
            for (let i = 0; i < input.value; i++)
            {
                const rowItem = document.createElement('div')
                rowItem.classList.add('pixel')
                row.append(rowItem)
            }

            container.append(row)

        }

        container.addEventListener('mouseover', (event) =>
        {
            if (event.target.classList == 'pixel')
            {
                event.target.style.backgroundColor = '#ffffff'
            }
        })

        dialog.close()
    }
})

configBtn.addEventListener('click', () =>
{
    dialog.showModal()
}) 