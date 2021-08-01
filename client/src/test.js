const axios = require('axios');

const str = {
    "data": {
        "id": 2,
        "email": "janet.weaver@reqres.in",
        "first_name": "nguyen",
        "last_name": "dylan",
        "avatar": "https://reqres.in/img/faces/2-image.jpg"
    },
    "support": {
        "url": "https://reqres.in/#support-heading",
        "text": "To keep ReqRes free, contributions towards server costs are appreciated!"
    }
};
const test = async () => {
    await axios.post('http://localhost:3000/api/products', str)
        .then(res => console.log(res.data))
        .catch((err) => {
            console.log(err);
        })
    console.log('Success');
}

test();