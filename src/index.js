$(function() {
    let files = []
    function getA(file) {
        let url = encodeURIComponent(`/${file}`)
        return `<div class="fa-hover col-md-3 col-sm-4"><a href="/video.html?url=${url}" target="_blank" title="${file}"><span class="sr-only"></span>${file}</a></div>`
    }
    $.ajax({
        url: '/softwares',
        contentType: 'json',
        dataType: 'json',
        success(result) {
            let html = []
            files = result
            for (let file of files) {
                html.push(getA(file))
            }
            $('#all-result').html(html.join(''))
        },
    })
    $('#search-clear').on('click', function() {
        $('#search-input').val('')
        searchChange()
    })
    $('#search-input').on('input', _.debounce(searchChange, 300))
    $('#exit').on('click', function() {
        $.get('/exit').always(() => {
            alert('敲一下 ctrl + w')
        })
    })
    function searchChange() {
        let val = $('#search-input').val()
        if (val) {
            $('#search-result-container').removeClass('hide')
            $('#search-clear').removeClass('hide')
            let html = []
            for (let file of files) {
                if (file.toLowerCase().includes(val.toLowerCase())) {
                    html.push(getA(file))
                }
            }
            $('#search-result').html(html.join(''))
        } else {
            $('#search-clear').addClass('hide')
            $('#search-result').html('')
            $('#search-result-container').addClass('hide')
        }
    }
})
