export class asyncCalls{
    ajaxCall(_urls, _method){
    return new Promise((resolve, reject)=> {
        const xhr = new XLMHttpRequets();
        xhr.open(_method,_url)
        xhr.onload = ()=> resolve(xhr.response))
    })
}
}