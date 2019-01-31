$(function() {
    let url = location.search.substr(1).split('&').find(item => item.startsWith('url='))
    url = decodeURIComponent(url.split('=')[1])
    $('.container video').attr('src', url)
})
