
export function getAndRenderData (naam) {
    const getURL = 'https://tribe.api.fdnd.nl/v1/list'
    fetch(getURL).then(response => response.json())
    .then(response => {
        const data = response.data;
        const self = data.filter((obj) => {
          return obj.memberName === naam
        })
        console.log(self)
        // response.data.forEach(member => {
        //     document.body.insertAdjacentHTML('beforebegin',`<p>${member.memberName}</p>`)
        // })
    }).catch(error => document.body.insertAdjacentHTML('beforebegin', error))
}

export function postAndRenderData () {
    const postURL = 'https://tribe.api.fdnd.nl/v1/member'
    const options = {
        method: 'post',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            squadId:1,
            type:'student',
            nickname:'Qkel',
            name: 'Remco',
            prefix:'',
            surname:'Kuckelkorn',
            avatar:'',
            githubHandle:'Kuckelkorn',
            bio:'',
            url:'https://github.com/Kuckelkorn'
        })
    }
    console.log(options)
    fetch(postURL,options).then(response => response.json())
    .then(data => {
        console.log(data)
    }).catch(err => {
        console.log(err)
    })
}